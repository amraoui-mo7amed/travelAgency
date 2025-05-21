// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Object containing all translations for different languages
const translations = {
    "company_name": {
        "ar": "أفق للسفر",
        "en": "Ufuq Travel"
    },
    "home_link": {
        "ar": "الرئيسية",
        "en": "Home"
    },
    "about_link": {
        "ar": "من نحن",
        "en": "About Us"
    },
    "destinations_link": {
        "ar": "الوجهات",
        "en": "Destinations"
    },
    "services_link": {
        "ar": "خدماتنا",
        "en": "Services"
    },
    "why_us_link": {
        "ar": "لماذا نحن",
        "en": "Why Choose Us"
    },
    "testimonials_link": {
        "ar": "آراء العملاء",
        "en": "Testimonials"
    },
    "contact_link": {
        "ar": "اتصل بنا",
        "en": "Contact Us"
    },
    "hero_title": {
        "ar": "اكتشف جمال الجزائر معنا",
        "en": "Discover the Beauty of Algeria with Us"
    },
    "hero_subtitle": {
        "ar": "رحلات فريدة وتجارب لا تُنسى في قلب الطبيعة الجزائرية.",
        "en": "Unique journeys and unforgettable experiences in the heart of Algerian nature."
    },
    "explore_button": {
        "ar": "استكشف وجهاتنا",
        "en": "Explore Our Destinations"
    },
    "about_heading": {
        "ar": "من نحن",
        "en": "About Us"
    },
    "about_text": {
        "ar": "\"أفق للسفر\" هي وكالة سفر متخصصة في تنظيم الرحلات السياحية داخل الجزائر. نهدف إلى تقديم تجارب سفر استثنائية تمكنك من استكشاف التنوع الثقافي والطبيعي لبلدنا الرائع. من الصحاري الساحرة إلى السواحل الخلابة والجبال الشاهقة، نضمن لك رحلات آمنة وممتعة ومجهزة بكل ما تحتاجه لتصنع ذكريات لا تُنسى. نلتزم بالجودة والراحة والاهتمام بأدق التفاصيل لجعل عطلتك مثالية.",
        "en": "Ufuq Travel is a travel agency specializing in organizing tourist trips within Algeria. Our goal is to provide exceptional travel experiences that allow you to explore the cultural and natural diversity of our wonderful country. From enchanting deserts to stunning coasts and majestic mountains, we ensure safe, enjoyable, and fully equipped trips to create unforgettable memories. We are committed to quality, comfort, and attention to detail to make your vacation perfect."
    },
    "destinations_heading": {
        "ar": "وجهاتنا المميزة",
        "en": "Our Featured Destinations"
    },
    "djanet_title": {
        "ar": "جانت",
        "en": "Djanet"
    },
    "djanet_description": {
        "ar": "اكتشف سحر الصحراء الكبرى، المناظر الطبيعية الصخرية الفريدة، والواحات الخضراء في قلب الطاسيلي ناجر.",
        "en": "Discover the magic of the Sahara Desert, unique rock formations, and green oases in the heart of Tassili n'Ajjer."
    },
    "ghardaia_title": {
        "ar": "غرداية",
        "en": "Ghardaïa"
    },
    "ghardaia_description": {
        "ar": "انغمس في تاريخ وجمال منطقة المزاب، المدينة التي حافظت على تقاليدها وعمارتها الفريدة.",
        "en": "Immerse yourself in the history and beauty of the M'zab Valley, a city that has preserved its unique traditions and architecture."
    },
    "tlemcen_title": {
        "ar": "تلمسان",
        "en": "Tlemcen"
    },
    "tlemcen_description": {
        "ar": "مدينة الفن والتاريخ، بآثارها الأندلسية العريقة ومساجدها وقصورها التي تحكي قصص الماضي.",
        "en": "The city of art and history, with its ancient Andalusian ruins, mosques, and palaces that tell stories of the past."
    },
    "constantine_title": {
        "ar": "قسنطينة",
        "en": "Constantine"
    },
    "constantine_description": {
        "ar": "مدينة الجسور المعلقة، تحفة معمارية وطبيعية تجمع بين جمال الوادي العميق وروعة البناء.",
        "en": "The city of suspended bridges, an architectural and natural masterpiece combining the beauty of the deep valley and splendid construction."
    },
    "algiers_title": {
        "ar": "الجزائر العاصمة",
        "en": "Algiers"
    },
    "algiers_description": {
        "ar": "عاصمة الجزائر الساحرة، بمزيجها من العمارة الحديثة والقديمة، وكورنيشها البحري الجميل.",
        "en": "The enchanting capital of Algeria, with its mix of modern and ancient architecture, and its beautiful coastal promenade."
    },
    "setif_title": {
        "ar": "سطيف",
        "en": "Setif"
    },
    "setif_description": {
        "ar": "مدينة الهضاب العليا، غنية بالآثار الرومانية والتاريخ العريق، ومركز اقتصادي حيوي.",
        "en": "The city of the high plains, rich in Roman ruins and ancient history, and a vital economic center."
    },
    "book_now_button": {
        "ar": "احجز الآن",
        "en": "Book Now"
    },
    "services_heading": {
        "ar": "خدماتنا",
        "en": "Our Services"
    },
    "service1_title": {
        "ar": "تنظيم الرحلات",
        "en": "Trip Organization"
    },
    "service1_description": {
        "ar": "نقدم باقات سفر مخصصة لتناسب جميع الأذواق والميزانيات، من المغامرات إلى الاسترخاء.",
        "en": "We offer customized travel packages to suit all tastes and budgets, from adventures to relaxation."
    },
    "service2_title": {
        "ar": "حجوزات الفنادق",
        "en": "Hotel Reservations"
    },
    "service2_description": {
        "ar": "نضمن لك الإقامة في أفضل الفنادق والمنتجعات التي تتناسب مع احتياجاتك في كل وجهة.",
        "en": "We ensure your stay in the best hotels and resorts that suit your needs in every destination."
    },
    "service3_title": {
        "ar": "النقل المريح",
        "en": "Comfortable Transport"
    },
    "service3_description": {
        "ar": "نوفر وسائل نقل آمنة ومريحة داخل المدن وبين الوجهات لضمان رحلة سلسة.",
        "en": "We provide safe and comfortable transportation within cities and between destinations for a smooth journey."
    },
    "service4_title": {
        "ar": "أنشطة ومغامرات",
        "en": "Activities & Adventures"
    },
    "service4_description": {
        "ar": "تنظيم الأنشطة المحلية مثل الجولات الثقافية، رحلات السفاري الصحراوية، والتخييم.",
        "en": "Organizing local activities such as cultural tours, desert safaris, and camping."
    },
    "service5_title": {
        "ar": "تخطيط العطلات",
        "en": "Vacation Planning"
    },
    "service5_description": {
        "ar": "مساعدتك في التخطيط الكامل لعطلتك، من اختيار الوجهة إلى أدق التفاصيل.",
        "en": "Assisting you with complete vacation planning, from destination selection to the finest details."
    },
    "service6_title": {
        "ar": "دعم 24/7",
        "en": "24/7 Support"
    },
    "service6_description": {
        "ar": "فريق دعم العملاء لدينا متاح على مدار الساعة للإجابة على استفساراتك ومساعدتك.",
        "en": "Our customer support team is available around the clock to answer your inquiries and assist you."
    },
    "why_us_heading": {
        "ar": "لماذا تختار أفق للسفر؟",
        "en": "Why Choose Ufuq Travel?"
    },
    "reason1_title": {
        "ar": "جودة لا تضاهى",
        "en": "Unmatched Quality"
    },
    "reason1_description": {
        "ar": "نلتزم بأعلى معايير الجودة في كل خدمة نقدمها، لضمان رضاك التام.",
        "en": "We adhere to the highest quality standards in every service we provide, ensuring your complete satisfaction."
    },
    "reason2_title": {
        "ar": "خبرة محلية",
        "en": "Local Expertise"
    },
    "reason2_description": {
        "ar": "معرفتنا العميقة بالجزائر تمنحك تجارب أصيلة وفريدة من نوعها.",
        "en": "Our deep knowledge of Algeria provides you with authentic and unique experiences."
    },
    "reason3_title": {
        "ar": "دعم موثوق",
        "en": "Reliable Support"
    },
    "reason3_description": {
        "ar": "فريقنا متاح دائمًا لتقديم المساعدة والدعم قبل وأثناء وبعد رحلتك.",
        "en": "Our team is always available to provide assistance and support before, during, and after your trip."
    },
    "reason4_title": {
        "ar": "أسعار تنافسية",
        "en": "Competitive Prices"
    },
    "reason4_description": {
        "ar": "نقدم أفضل قيمة مقابل المال دون المساومة على جودة الخدمة.",
        "en": "We offer the best value for money without compromising on service quality."
    },
    "reason5_title": {
        "ar": "تجارب شخصية",
        "en": "Personalized Experiences"
    },
    "reason5_description": {
        "ar": "نصمم كل رحلة لتناسب اهتماماتك وتفضيلاتك الشخصية.",
        "en": "We design each trip to suit your personal interests and preferences."
    },
    "reason6_title": {
        "ar": "رضا العملاء",
        "en": "Customer Satisfaction"
    },
    "reason6_description": {
        "ar": "سعادة عملائنا هي أولويتنا القصوى، ونعمل بجد لتحقيقها.",
        "en": "Our customers' happiness is our top priority, and we work hard to achieve it."
    },
    "testimonials_heading": {
        "ar": "ماذا يقول عملاؤنا",
        "en": "What Our Clients Say"
    },
    "testimonial1_quote": {
        "ar": "\"رحلة رائعة إلى جنات! كل شيء كان منظمًا بشكل مثالي، والفريق كان متعاونًا للغاية. تجربة لا تُنسى!\"",
        "en": "\"A wonderful trip to Djanet! Everything was perfectly organized, and the team was extremely helpful. An unforgettable experience!\""
    },
    "testimonial1_author": {
        "ar": "سارة أحمد",
        "en": "Sarah Ahmed"
    },
    "testimonial2_quote": {
        "ar": "\"استمتعت كثيرًا بزيارة غرداية مع 'أفق للسفر'. المرشدون رائعون والخدمة ممتازة. أوصي بهم بشدة!\"",
        "en": "\"I thoroughly enjoyed visiting Ghardaïa with 'Ufuq Travel'. The guides are excellent and the service is superb. I highly recommend them!\""
    },
    "testimonial2_author": {
        "ar": "خالد منصور",
        "en": "Khaled Mansour"
    },
    "testimonial3_quote": {
        "ar": "\"تجربة مدهشة في تلمسان! الرحلة كانت منظمة بعناية فائقة، والفنادق كانت مريحة للغاية. شكراً لكم!\"",
        "en": "\"An amazing experience in Tlemcen! The trip was meticulously organized, and the hotels were very comfortable. Thank you!\""
    },
    "testimonial3_author": {
        "ar": "فاطمة الزهراء",
        "en": "Fatima Zahra"
    },
    "contact_heading": {
        "ar": "اتصل بنا",
        "en": "Contact Us"
    },
    "contact_name_label": {
        "ar": "الاسم الكامل",
        "en": "Full Name"
    },
    "contact_name_placeholder": {
        "ar": "اسمك الكامل",
        "en": "Your Full Name"
    },
    "contact_email_label": {
        "ar": "البريد الإلكتروني",
        "en": "Email Address"
    },
    "contact_email_placeholder": {
        "ar": "بريدك الإلكتروني",
        "en": "Your Email"
    },
    "contact_subject_label": {
        "ar": "الموضوع",
        "en": "Subject"
    },
    "contact_subject_placeholder": {
        "ar": "موضوع الرسالة",
        "en": "Subject of Message"
    },
    "contact_message_label": {
        "ar": "رسالتك",
        "en": "Your Message"
    },
    "contact_message_placeholder": {
        "ar": "اكتب رسالتك هنا...",
        "en": "Write your message here..."
    },
    "contact_send_button": {
        "ar": "إرسال الرسالة",
        "en": "Send Message"
    },
    "footer_copyright": {
        "ar": "&copy; <span id=\"year\"></span> أفق للسفر. جميع الحقوق محفوظة.",
        "en": "&copy; <span id=\"year\"></span> Ufuq Travel. All rights reserved."
    }
};

// Initialize language from local storage or default to Arabic
let currentLang = localStorage.getItem('lang') || 'ar';
const langSwitcherBtn = document.getElementById('lang-switcher');
const body = document.body;

/**
 * Sets the language of the page and updates all translatable elements.
 * @param {string} lang - The language to set ('ar' for Arabic, 'en' for English).
 */
function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang); // Save language preference
    body.setAttribute('lang', lang); // Set HTML lang attribute
    body.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr'); // Set text direction
    body.classList.toggle('en', lang === 'en'); // Add/remove 'en' class for LTR specific styles
    langSwitcherBtn.textContent = lang === 'ar' ? 'En' : 'Ar'; // Update button text

    // Adjust navbar link underline direction and logo margin based on language
    const navbarBrandSvg = document.querySelector('.custom-navbar .navbar-brand svg');
    if (navbarBrandSvg) {
        navbarBrandSvg.style.marginInlineEnd = lang === 'ar' ? '10px' : '0';
        navbarBrandSvg.style.marginInlineStart = lang === 'en' ? '10px' : '0';
    }

    // Update all elements with `data-lang-key` attribute
    document.querySelectorAll('[data-lang-key]').forEach(element => {
        const key = element.getAttribute('data-lang-key');
        if (translations[key] && translations[key][lang]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.setAttribute('placeholder', translations[key][lang]);
            } else {
                element.innerHTML = translations[key][lang];
            }
        }
    });
}

// Event listener for language switcher button
langSwitcherBtn.addEventListener('click', () => {
    const newLang = currentLang === 'ar' ? 'en' : 'ar';
    setLanguage(newLang);
});

// Initialize language on page load
setLanguage(currentLang);

// Smooth scrolling for navigation links
document.querySelectorAll('.custom-navbar .nav-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default anchor click behavior
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth' // Smooth scroll to target section
        });
        // Close the navbar on mobile after clicking a link
        const navbarCollapse = document.getElementById('navbarNav');
        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
        if (bsCollapse) {
            bsCollapse.hide();
        }
    });
});

// Intersection Observer for "animate-on-scroll" elements
// This adds the 'active' class when an element enters the viewport, triggering CSS animations.
const animateElements = document.querySelectorAll('.animate-on-scroll');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            // Optionally, unobserve after animation to prevent re-triggering
            // observer.unobserve(entry.target);
        } else {
            // Optional: remove 'active' class when element leaves viewport
            // entry.target.classList.remove('active');
        }
    });
}, {
    threshold: 0.1 // Trigger when 10% of the element is visible
});

// Observe all elements with the 'animate-on-scroll' class
animateElements.forEach(element => {
    observer.observe(element);
});
