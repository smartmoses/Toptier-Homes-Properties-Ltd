// Mobile Menu Toggle with enhanced functionality
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const header = document.getElementById('header');
let isMenuOpen = false;

menuBtn.addEventListener('click', () => {
    isMenuOpen = !isMenuOpen;
    mobileMenu.classList.toggle('hidden');
    
    // Add slide animation
    if (isMenuOpen) {
        mobileMenu.style.maxHeight = mobileMenu.scrollHeight + 'px';
        mobileMenu.style.opacity = '1';
    } else {
        mobileMenu.style.maxHeight = '0';
        mobileMenu.style.opacity = '0';
    }

    // Change menu icon
    const icon = menuBtn.querySelector('svg');
    if (isMenuOpen) {
        icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />';
    } else {
        icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />';
    }
});

// Close mobile menu on window resize
window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) { // md breakpoint
        mobileMenu.classList.add('hidden');
        mobileMenu.style.maxHeight = '0';
        mobileMenu.style.opacity = '0';
        isMenuOpen = false;
        const icon = menuBtn.querySelector('svg');
        icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />';
    }
});

// Enhanced header scroll behavior
let lastScroll = 0;
const scrollThreshold = 80;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        header.classList.remove('shadow-lg');
        header.style.transform = 'translateY(0)';
        return;
    }
    
    if (currentScroll > lastScroll && currentScroll > scrollThreshold) {
        // Scrolling down - hide header
        header.style.transform = 'translateY(-100%)';
    } else {
        // Scrolling up - show header
        header.style.transform = 'translateY(0)';
        header.classList.add('shadow-lg');
    }
    lastScroll = currentScroll;
});

// Add active state for current page
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('nav a').forEach(link => {
    if (link.getAttribute('href') === currentPage) {
        link.classList.add('text-primary', 'border-b-2', 'border-secondary', 'pb-1');
        // Also handle mobile menu
        const mobileLink = document.querySelector(`#mobile-menu a[href="${currentPage}"]`);
        if (mobileLink) {
            mobileLink.classList.add('border-l-4', 'border-secondary', 'text-primary', 'font-medium');
        }
    }
});
