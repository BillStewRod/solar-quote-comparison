// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Initialize fade-in animations
    initFadeInAnimations();
    
    // Setup smooth scrolling for navigation
    setupSmoothScrolling();
    
    // Setup navbar scroll effect
    setupNavbarScrollEffect();
    
    // Setup table hover effects
    setupTableEffects();
    
    // Setup card hover effects
    setupCardEffects();
    
    // Setup quote download functionality
    setupQuoteDownloads();
});

// Quote download functionality
function setupQuoteDownloads() {
    const quoteRows = document.querySelectorAll('.quotes-table tbody tr');
    
    // Define the PDF file mapping
    const quoteFiles = {
        'lumina-solar': 'Quotes/Quote from Lumina Solar _ EnergySage.pdf',
        'palmetto-solar': 'Quotes/Quote from Palmetto Solar _ EnergySage.pdf',
        'integratesun': 'Quotes/Quote from IntegrateSun, LLC _ EnergySage.pdf',
        'nova-solar': 'Quotes/Quote from Nova Solar _ EnergySage.pdf',
        'cosmo-solaris': 'Quotes/Quote from Cosmo Solaris _ EnergySage.pdf'
    };
    
    quoteRows.forEach((row, index) => {
        const installerNames = [
            'lumina-solar',
            'palmetto-solar', 
            'integratesun',
            'nova-solar',
            'cosmo-solaris'
        ];
        
        const installerKey = installerNames[index];
        const pdfFile = quoteFiles[installerKey];
        
        if (pdfFile) {
            // Add cursor pointer and hover effect
            row.style.cursor = 'pointer';
            row.title = 'Click to download quote PDF';
            
            // Add click event listener
            row.addEventListener('click', function(e) {
                e.stopPropagation();
                showDownloadPopup(installerKey, pdfFile);
            });
            
            // Enhanced hover effect for clickable rows
            row.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.01)';
                this.style.boxShadow = '0 4px 12px rgba(124, 179, 66, 0.25)';
                this.style.backgroundColor = 'rgba(124, 179, 66, 0.05)';
            });
            
            row.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1)';
                this.style.boxShadow = 'none';
                this.style.backgroundColor = '';
            });
        }
    });
}

// Show download confirmation popup
function showDownloadPopup(installerKey, pdfFile) {
    const installerNames = {
        'lumina-solar': 'Lumina Solar',
        'palmetto-solar': 'Palmetto Solar',
        'integratesun': 'IntegrateSun, LLC',
        'nova-solar': 'Nova Solar',
        'cosmo-solaris': 'Cosmo Solaris'
    };
    
    const installerName = installerNames[installerKey];
    
    // Create popup overlay
    const overlay = document.createElement('div');
    overlay.className = 'popup-overlay';
    
    // Create popup content
    const popup = document.createElement('div');
    popup.className = 'popup-content';
    
    popup.innerHTML = `
        <div class="popup-header">
            <h3>Download Quote</h3>
            <button class="popup-close" aria-label="Close">&times;</button>
        </div>
        <div class="popup-body">
            <div class="popup-icon">📄</div>
            <p>Would you like to download the quote from <strong>${installerName}</strong>?</p>
            <p class="popup-filename">${pdfFile.split('/').pop()}</p>
        </div>
        <div class="popup-actions">
            <button class="popup-btn popup-cancel">Cancel</button>
            <button class="popup-btn popup-download">Download Quote</button>
        </div>
    `;
    
    overlay.appendChild(popup);
    document.body.appendChild(overlay);
    
    // Add popup animations
    setTimeout(() => {
        overlay.classList.add('popup-visible');
        popup.classList.add('popup-animate');
    }, 10);
    
    // Handle popup actions
    const closeBtn = popup.querySelector('.popup-close');
    const cancelBtn = popup.querySelector('.popup-cancel');
    const downloadBtn = popup.querySelector('.popup-download');
    
    // Close popup function
    function closePopup() {
        overlay.classList.remove('popup-visible');
        popup.classList.remove('popup-animate');
        setTimeout(() => {
            document.body.removeChild(overlay);
        }, 300);
    }
    
    // Event listeners
    closeBtn.addEventListener('click', closePopup);
    cancelBtn.addEventListener('click', closePopup);
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay) closePopup();
    });
    
    // Download functionality
    downloadBtn.addEventListener('click', function() {
        downloadQuote(pdfFile, installerName);
        closePopup();
    });
    
    // Keyboard support
    document.addEventListener('keydown', function escapeHandler(e) {
        if (e.key === 'Escape') {
            closePopup();
            document.removeEventListener('keydown', escapeHandler);
        }
    });
}

// Download quote file
function downloadQuote(pdfFile, installerName) {
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = pdfFile;
    link.download = pdfFile.split('/').pop(); // Use the original filename
    link.style.display = 'none';
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Show download notification
    showNotification(`Downloading quote from ${installerName}...`, 'success');
}

// Show notification
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('notification-visible');
    }, 10);
    
    setTimeout(() => {
        notification.classList.remove('notification-visible');
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Fade-in animation on scroll
function initFadeInAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -100px 0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Add a slight delay for staggered animations
                setTimeout(() => {
                    entry.target.style.transitionDelay = '0s';
                }, 100);
            }
        });
    }, observerOptions);

    // Observe all fade-in elements
    const fadeElements = document.querySelectorAll('.fade-in, .section');
    fadeElements.forEach((el, index) => {
        // Add staggered delay
        el.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(el);
    });
}

// Smooth scrolling for navigation links
function setupSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 100; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // Add active class animation
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = 'scale(1)';
                }, 150);
            }
        });
    });
}

// Navbar scroll effect
function setupNavbarScrollEffect() {
    const navbar = document.querySelector('.navbar');
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
        
        // Update active nav link based on scroll position
        updateActiveNavLink();
        
        lastScrollY = currentScrollY;
    });
}

// Update active navigation link based on scroll position
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// Table hover effects
function setupTableEffects() {
    const tableRows = document.querySelectorAll('tbody tr');
    
    tableRows.forEach(row => {
        row.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.01)';
            this.style.boxShadow = '0 2px 8px rgba(124, 179, 66, 0.2)';
        });
        
        row.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = 'none';
        });
    });
}

// Card hover effects with enhanced animations
function setupCardEffects() {
    const cards = document.querySelectorAll('.card, .stat-card, .point, .glossary-item, .inverter-type, .suitability-item');
    
    cards.forEach(card => {
        // Add subtle entrance animation
        card.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
        
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
            if (this.classList.contains('stat-card')) {
                this.style.boxShadow = '0 10px 30px rgba(124, 179, 66, 0.3)';
            } else {
                this.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.15)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = this.classList.contains('stat-card') ? 
                '0 2px 10px rgba(0, 0, 0, 0.1)' : 
                '0 2px 10px rgba(0, 0, 0, 0.1)';
        });
    });
}

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    if (hero) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Add smooth reveal animation for tables
function animateTableRows() {
    const tableRows = document.querySelectorAll('tbody tr');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateX(0)';
                }, index * 50);
            }
        });
    });
    
    tableRows.forEach(row => {
        row.style.opacity = '0';
        row.style.transform = 'translateX(-20px)';
        row.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
        observer.observe(row);
    });
}

// Initialize table animations when DOM is loaded
document.addEventListener('DOMContentLoaded', animateTableRows);

// Add click effect to buttons and important elements
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('nav-link') || 
        e.target.classList.contains('accent') ||
        e.target.tagName === 'BUTTON') {
        
        // Create ripple effect
        const ripple = document.createElement('span');
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(124, 179, 66, 0.6)';
        ripple.style.transform = 'scale(0)';
        ripple.style.animation = 'ripple 0.6s linear';
        ripple.style.pointerEvents = 'none';
        
        const rect = e.target.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
        ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';
        
        e.target.style.position = 'relative';
        e.target.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    }
});

// Add CSS for ripple animation
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .nav-link.active {
        background-color: var(--accent-color);
        color: white;
    }
    
    /* Enhanced loading animation */
    .loading {
        opacity: 0;
        transform: translateY(20px);
        animation: fadeInUp 0.6s ease forwards;
    }
    
    @keyframes fadeInUp {
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    /* Pulse animation for important elements */
    .pulse {
        animation: pulse 2s infinite;
    }
    
    @keyframes pulse {
        0% {
            box-shadow: 0 0 0 0 rgba(124, 179, 66, 0.7);
        }
        70% {
            box-shadow: 0 0 0 10px rgba(124, 179, 66, 0);
        }
        100% {
            box-shadow: 0 0 0 0 rgba(124, 179, 66, 0);
        }
    }
`;
document.head.appendChild(style);

// Add loading states for dynamic content
function showLoadingState(element) {
    element.innerHTML = '<div class="loading-spinner">Loading...</div>';
    element.classList.add('loading');
}

function hideLoadingState(element, content) {
    element.classList.remove('loading');
    element.innerHTML = content;
}

// Performance optimization: Throttle scroll events
function throttle(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply throttling to scroll events
const throttledScrollHandler = throttle(() => {
    updateActiveNavLink();
}, 100);

window.addEventListener('scroll', throttledScrollHandler);

// Add accessibility improvements
document.addEventListener('keydown', function(e) {
    // Enable keyboard navigation for custom elements
    if (e.key === 'Enter' || e.key === ' ') {
        if (e.target.classList.contains('nav-link')) {
            e.target.click();
        }
    }
});

// Add focus indicators for better accessibility
document.addEventListener('DOMContentLoaded', function() {
    const focusableElements = document.querySelectorAll('.nav-link, button, a');
    
    focusableElements.forEach(element => {
        element.addEventListener('focus', function() {
            this.style.outline = '2px solid var(--accent-color)';
            this.style.outlineOffset = '2px';
        });
        
        element.addEventListener('blur', function() {
            this.style.outline = 'none';
        });
    });
});
