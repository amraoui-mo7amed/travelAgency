// Navbar scroll effect
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Language switcher
document.addEventListener('DOMContentLoaded', function() {
    const languageBtn = document.getElementById('languageBtn');
    const languageOptions = document.getElementById('languageOptions');
    const languageSelectors = document.querySelectorAll('.language-option');

    // Toggle language options
    if (languageBtn) {
        languageBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            languageOptions.classList.toggle('show');
        });
    }

    // Close language options when clicking outside
    document.addEventListener('click', function(e) {
        if (!languageOptions.contains(e.target) && !languageBtn.contains(e.target)) {
            languageOptions.classList.remove('show');
        }
    });

    // Handle language selection
    languageSelectors.forEach(selector => {
        selector.addEventListener('click', function(e) {
            e.preventDefault();
            const selectedLang = this.dataset.lang;
            
            // Create form
            const form = document.createElement('form');
            form.method = 'post';
            form.action = '/i18n/setlang/';

            // Add CSRF token
            const csrfToken = document.querySelector('[name=csrfmiddlewaretoken]').value;
            const csrfInput = document.createElement('input');
            csrfInput.type = 'hidden';
            csrfInput.name = 'csrfmiddlewaretoken';
            csrfInput.value = csrfToken;
            
            // Add language input
            const langInput = document.createElement('input');
            langInput.type = 'hidden';
            langInput.name = 'language';
            langInput.value = selectedLang;

            // Add next input (current URL)
            const nextInput = document.createElement('input');
            nextInput.type = 'hidden';
            nextInput.name = 'next';
            nextInput.value = window.location.pathname;

            // Append inputs and submit
            form.appendChild(csrfInput);
            form.appendChild(langInput);
            form.appendChild(nextInput);
            document.body.appendChild(form);
            form.submit();
        });
    });
});

// Animate on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;

        if (elementPosition < screenPosition) {
            element.classList.add('animated');
        }
    });
}

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Initialize testimonial carousel with RTL support
$(document).ready(function () {
    const isRTL = document.documentElement.lang === 'ar';

    $(".testimonial-carousel").owlCarousel({
        loop: true,
        margin: 20,
        nav: false,
        dots: true,
        autoplay: true,
        rtl: isRTL,  // Enable RTL for Arabic
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 2
            }
        }
    });
});

// HANDLING FORMS
document.addEventListener('DOMContentLoaded', function () {
    // Get all forms with class .form
    const forms = document.querySelectorAll('.form');

    forms.forEach(form => {
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            // Clear previous errors
            const errorList = document.getElementById('errorList');
            if (errorList) {
                errorList.innerHTML = '';
            }

            const formData = new FormData(this);

            fetch(this.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                }
            })
                .then(response => response.json())
                .then(data => {
                    if (data.success) {
                        // Handle success case
                        if (data.redirect_url) {
                            console.log(data.redirect_url);

                            window.location.href = data.redirect_url;
                        }
                        if (data.message && errorList) {
                            // Display success message
                            const li = document.createElement('li');
                            li.textContent = data.message;
                            console.log(data.message);

                            li.classList.add('success-message');
                            errorList.appendChild(li);
                        }
                    } else if (data.errors && errorList) {
                        // Display errors in the error list
                        data.errors.forEach(error => {
                            const li = document.createElement('li');
                            li.textContent = error;
                            li.classList.add('error-message');
                            errorList.appendChild(li);
                        });
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    if (errorList) {
                        const li = document.createElement('li');
                        li.textContent = 'An unexpected error occurred. Please try again.';
                        errorList.appendChild(li);
                    }
                });
        });
    });
});