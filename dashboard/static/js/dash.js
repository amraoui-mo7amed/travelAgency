// Toggle sidebar on mobile
document.getElementById('menuToggle').addEventListener('click', function() {
    document.querySelector('.sidebar').classList.toggle('active');
});

// Notification and account popup toggles
const notificationBtn = document.getElementById('notificationBtn');
const notificationPopup = document.getElementById('notificationPopup');
const accountBtn = document.getElementById('accountBtn');
const accountPopup = document.getElementById('accountPopup');
const popupOverlay = document.getElementById('popupOverlay');

notificationBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    notificationPopup.classList.toggle('show');
    accountPopup.classList.remove('show');
    popupOverlay.style.display = notificationPopup.classList.contains('show') ? 'block' : 'none';
});

accountBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    accountPopup.classList.toggle('show');
    notificationPopup.classList.remove('show');
    popupOverlay.style.display = accountPopup.classList.contains('show') ? 'block' : 'none';
});

// Close popups when clicking outside
document.addEventListener('click', function(e) {
    if (!notificationPopup.contains(e.target) && !notificationBtn.contains(e.target)) {
        notificationPopup.classList.remove('show');
    }

    if (!accountPopup.contains(e.target) && !accountBtn.contains(e.target)) {
        accountPopup.classList.remove('show');
    }

    if (!notificationPopup.classList.contains('show') && !accountPopup.classList.contains('show')) {
        popupOverlay.style.display = 'none';
    }
});

// Mark all notifications as read
const markAllRead = document.querySelector('.mark-all-read');
const unreadNotifications = document.querySelectorAll('.notification-unread');
const notificationBadge = document.querySelector('.notification-badge');

markAllRead.addEventListener('click', function() {
    unreadNotifications.forEach(notification => {
        notification.classList.remove('notification-unread');
    });
    notificationBadge.textContent = '0';
});
