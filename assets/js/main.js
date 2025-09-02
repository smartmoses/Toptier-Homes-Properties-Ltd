// Mobile Menu Toggle
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    
    // Toggle icon
    const icon = menuBtn.querySelector('i');
    if (mobileMenu.classList.contains('hidden')) {
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
    } else {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-xmark');
    }
});

// Note: For a real project, you would add more advanced JS here for things like:
// - Property filtering logic
// - A carousel/slider for testimonials
// - Form validation for the contact form