from django.db import models
from django.contrib.auth.models import AbstractUser, BaseUserManager, PermissionsMixin
from django.utils import timezone


class CustomUserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError('The Email field must be set')
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('is_active', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')

        user = self.create_user(email, password, **extra_fields)
        # Create UserAuth with email_confirmed=True for superuser
        UserAuth.objects.create(user=user, email_confirmed=True)
        return user

class CustomUser(AbstractUser):
    # Replace username with email as the unique identifier
    email = models.EmailField(unique=True)
    username = None  # Remove the username field

    # Required for custom user model
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []  # Fields required when creating a user via createsuperuser

    objects = CustomUserManager()

    def __str__(self):
        return self.email



class UserAuth(models.Model):
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE,related_name='auth')
    # Email confirmation fields
    email_confirmed = models.BooleanField(default=False)
    email_confirmation_token = models.CharField(max_length=100, blank=True, null=True)
    email_confirmation_sent = models.DateTimeField(null=True, blank=True)
    
    # Password reset fields
    password_reset_token = models.CharField(max_length=100, blank=True, null=True)
    password_reset_sent = models.DateTimeField(null=True, blank=True)
    

    def __str__(self):
        return f"Auth Info for User {self.user.id}"