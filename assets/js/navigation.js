// Mobile Menu Toggle with enhanced functionality
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const header = document.getElementById('header');
let isMenuOpen = false;

// Function to handle menu icon animation
function updateMenuIcon(isOpen) {
    const icon = menuBtn.querySelector('svg');
    if (isOpen) {
        icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />';
        icon.classList.add('rotate-180');
    } else {
        icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />';
        icon.classList.remove('rotate-180');
    }
}

// Function to handle menu state
function setMenuState(isOpen) {
    isMenuOpen = isOpen;
    mobileMenu.classList.toggle('hidden', !isOpen);
    
    if (isOpen) {
        mobileMenu.style.maxHeight = mobileMenu.scrollHeight + 'px';
        mobileMenu.style.opacity = '1';
    } else {
        mobileMenu.style.maxHeight = '0';
        mobileMenu.style.opacity = '0';
    }
    
    updateMenuIcon(isOpen);
}

menuBtn.addEventListener('click', () => {
    setMenuState(!isMenuOpen);
});

// Close mobile menu on window resize
window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) { // md breakpoint
        setMenuState(false);
    }
});

// Enhanced header scroll behavior with smooth transitions
let lastScroll = 0;
const scrollThreshold = 80;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        header.classList.remove('shadow-lg', 'bg-white/95');
        header.classList.add('bg-white/80');
        header.style.transform = 'translateY(0)';
        return;
    }
    
    if (currentScroll > lastScroll && currentScroll > scrollThreshold) {
        // Scrolling down - hide header
        header.style.transform = 'translateY(-100%)';
    } else {
        // Scrolling up - show header
        header.style.transform = 'translateY(0)';
        header.classList.add('shadow-lg', 'bg-white/95');
        header.classList.remove('bg-white/80');
    }
    lastScroll = currentScroll;
});

// Set active states for navigation
function setActiveNavigation() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    // Remove any existing active states
    document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
        link.classList.remove('active');
    });
    
    // Set active state for desktop navigation
    document.querySelectorAll('nav .nav-link').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
    
    // Set active state for mobile navigation
    document.querySelectorAll('#mobile-menu .mobile-nav-link').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
}

// Set initial active states
setActiveNavigation();

// Update active states when navigation occurs
window.addEventListener('popstate', setActiveNavigation);
