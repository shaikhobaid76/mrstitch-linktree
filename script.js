// Set current year in footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// Add touch feedback for mobile
document.querySelectorAll('.link-item').forEach(link => {
    link.addEventListener('touchstart', function() {
        this.style.transform = 'scale(0.98)';
    });
    
    link.addEventListener('touchend', function() {
        this.style.transform = '';
    });
});

// Enhanced ripple effect
document.querySelectorAll('.link-item').forEach(item => {
    item.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size/2;
        const y = e.clientY - rect.top - size/2;
        
        // Get brand color based on link type
        let rippleColor = 'rgba(200, 178, 115, 0.3)';
        if (this.classList.contains('link-instagram')) rippleColor = 'rgba(228, 64, 95, 0.3)';
        else if (this.classList.contains('link-whatsapp')) rippleColor = 'rgba(37, 211, 102, 0.3)';
        else if (this.classList.contains('link-phone')) rippleColor = 'rgba(52, 183, 241, 0.3)';
        else if (this.classList.contains('link-map')) rippleColor = 'rgba(255, 0, 0, 0.3)';
        else if (this.classList.contains('link-email')) rippleColor = 'rgba(234, 67, 53, 0.3)';
        
        ripple.style.cssText = `
            position: absolute;
            border-radius: 50%;
            background: ${rippleColor};
            transform: scale(0);
            animation: ripple 0.6s linear;
            width: ${size}px;
            height: ${size}px;
            top: ${y}px;
            left: ${x}px;
            pointer-events: none;
            z-index: 1;
        `;
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Image loading effect and fallback
const profileImg = document.querySelector('.profile img');
if (profileImg) {
    profileImg.style.opacity = '0';
    setTimeout(() => {
        profileImg.style.transition = 'opacity 0.5s ease';
        profileImg.style.opacity = '1';
    }, 300);
    
    // Fallback in case image doesn't load
    profileImg.onerror = function() {
        console.log('Profile image failed to load, using fallback');
        this.src = 'https://images.unsplash.com/photo-1590439471364-192aa70c0b53?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80';
        this.alt = 'Mr Stitch Tailor';
    };
}

// Add animation for page load
document.addEventListener('DOMContentLoaded', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Add click analytics (optional)
document.querySelectorAll('.link-item').forEach(link => {
    link.addEventListener('click', function() {
        const linkType = this.classList[1]?.replace('link-', '') || 'unknown';
        console.log(`Mr Stitch link clicked: ${linkType}`);
    });
});