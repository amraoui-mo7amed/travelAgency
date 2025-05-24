from django.shortcuts import render, redirect, get_object_or_404
from django.http import JsonResponse
from django.contrib.auth import login, authenticate, get_user_model, logout
from django.views.decorators.csrf import csrf_exempt
from django.core.exceptions import ValidationError
from django.core.validators import validate_email
from django.core.mail import send_mail
from django.conf import settings
import uuid
from datetime import timedelta
from django.utils import timezone
from django.template.loader import render_to_string
from django.utils.html import strip_tags
from django.urls import reverse, reverse_lazy
from django.utils.translation import gettext_lazy as _

userModel = get_user_model()

@csrf_exempt
def signin(request):
    if request.method == 'POST':
        errors = []
        email = request.POST.get('email', '').strip()
        password = request.POST.get('password', '').strip()
        
        # Validate email format
        try:
            validate_email(email)
        except ValidationError:
            errors.append(_('Please enter a valid email address'))
            
        # Validate required fields
        if not email or not password:
            errors.append(_('All fields are required'))
        
        # Validate password length
        if len(password) < 4:
            errors.append(_('Password must be at least 4 characters'))
            
        if not errors:
            try:
                user = authenticate(request, email=email, password=password)
                if user is not None:
                    if user.is_active:
                        login(request, user)
                        return JsonResponse({
                            'success': True,
                            'redirect_url': reverse_lazy('dash:home')
                        })
                    else:
                        errors.append(_('Your account is not active. Please check your email for activation link'))
                else:
                    errors.append(_('Invalid email address or password'))
            except Exception as e:
                errors.append(str(e))
        return JsonResponse({
            'success': False,
            'errors': errors
        }, status=400)
    
    if request.user.is_authenticated:
        return redirect(reverse_lazy('dash:home'))
    return render(request, 'user_auth/login.html')

@csrf_exempt
def signup_view(request):
    if request.method == 'POST':
        errors = []
        first_name = request.POST.get('first_name', '').strip()
        last_name = request.POST.get('last_name', '').strip()
        email = request.POST.get('email', '').strip()
        password1 = request.POST.get('password1', '').strip()
        password2 = request.POST.get('password2', '').strip()

        # Validate required fields
        if not all([first_name, last_name, email, password1, password2]):
            errors.append(_('All fields are required'))

        try:
            validate_email(email)
        except ValidationError:
            errors.append(_('Please enter a valid email address'))

        if password1 != password2:
            errors.append(_('Passwords do not match'))

        if len(password1) < 4:
            errors.append(_('Password must be at least 4 characters'))

        User = get_user_model()
        if User.objects.filter(email=email).exists():
            errors.append(_('An account with this email already exists'))

        if not errors:
            try:
                user = User.objects.create_user(
                    email=email,
                    password=password1,
                    first_name=first_name,
                    last_name=last_name
                )

                confirmation_token = str(uuid.uuid4())
                UserAuth.objects.create(
                    user=user,
                    email_confirmation_token=confirmation_token,
                    email_confirmation_sent=timezone.now()
                )

                confirmation_link = f"{settings.SITE_URL}/confirm-email/{confirmation_token}/"
                html_message = render_to_string('email/email_confirmation.html', {
                    'confirmation_link': confirmation_link
                })
                
                send_mail(
                    _('Confirm your email address'),
                    strip_tags(html_message),
                    settings.DEFAULT_FROM_EMAIL,
                    [email],
                    fail_silently=False,
                    html_message=html_message,
                )

                return JsonResponse({
                    'success': True,
                    'message': _('Account created successfully! Please check your email to confirm your account.')
                })
            except Exception as e:
                errors.append(str(e))

        return JsonResponse({
            'success': False,
            'errors': errors
        }, status=400)
    
    return render(request, 'user_auth/signup.html')

def confirm_email_view(request, token):
    try:
        user_auth = get_object_or_404(userModel, email_confirmation_token=token)
        
        if timezone.now() > user_auth.email_confirmation_sent + timedelta(hours=24):
            return render(request, 'user_auth/email_confirmation.html', {
                'success': False,
                'message': _('The confirmation link has expired. Please request a new one.')
            })
        
        user_auth.email_confirmed = True
        user_auth.email_confirmation_token = None
        user_auth.save()
        
        return render(request, 'user_auth/email_confirmation.html', {
            'success': True,
            'message': _('Your email has been successfully confirmed! You can now log in.')
        })
        
    except Exception as e:
        return render(request, 'user_auth/email_confirmation.html', {
            'success': False,
            'message': _('Invalid confirmation link. Please try again.')
        })

def forgot_password(request):
    return render(request, 'user_auth/forgot_password.html')

def signout(request):
    logout(request)
    return redirect('user_auth:login')
