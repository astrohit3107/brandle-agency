// Load Services Dynamically
async function loadServices() {
    try {
        const response = await fetch('/api/services');
        const services = await response.json();
        const container = document.getElementById('services-container');

        services.forEach((service, index) => {
            const card = document.createElement('div');
            card.className = `service-card animate-slide-in-up stagger-${index + 1}`;
            card.innerHTML = `
                <img src="${service.image}" alt="${service.title}" class="service-image">
                <h3 class="service-title">${service.title}</h3>
            `;
            container.appendChild(card);
        });
    } catch (error) {
        console.error('Error loading services:', error);
    }
}

// Load Stats Dynamically
async function loadStats() {
    try {
        const response = await fetch('/api/stats');
        const stats = await response.json();
        const container = document.getElementById('stats-container');

        stats.forEach((stat, index) => {
            const card = document.createElement('div');
            card.className = `stat-card animate-slide-in-up stagger-${index + 1}`;
            card.innerHTML = `
                <div class="stat-number">${stat.number}</div>
                <div class="stat-label">${stat.label}</div>
                <div class="stat-sublabel">${stat.sublabel}</div>
            `;
            container.appendChild(card);
        });
    } catch (error) {
        console.error('Error loading stats:', error);
    }
}

// Load Creators Dynamically
async function loadCreators() {
    try {
        const response = await fetch('/api/creators');
        const creators = await response.json();
        const container = document.getElementById('creators-container');

        creators.forEach((creator, index) => {
            const card = document.createElement('div');
            card.className = `creator-card animate-slide-in-up stagger-${index + 1}`;
            card.innerHTML = `
                <img src="${creator.image}" alt="${creator.name}" class="creator-avatar">
                <h3 class="creator-name">${creator.name}</h3>
                <p class="creator-role">${creator.role}</p>
                <p class="creator-quote">"${creator.quote}"</p>
                <div class="creator-revenue">${creator.revenue}</div>
            `;
            container.appendChild(card);
        });
    } catch (error) {
        console.error('Error loading creators:', error);
    }
}

// Smooth scroll navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Scroll indicator
document.querySelector('.scroll-indicator')?.addEventListener('click', () => {
    document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'slideInUp 0.6s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Initialize - Load all dynamic content when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    loadServices();
    loadStats();
    loadCreators();

    // Observe elements for scroll animations
    document.querySelectorAll('.service-card, .stat-card, .creator-card').forEach(el => {
        observer.observe(el);
    });

    // Add active state to nav links based on scroll position
    window.addEventListener('scroll', () => {
        const sections = ['services', 'stats', 'creators'];
        let current = '';

        sections.forEach(sectionId => {
            const section = document.getElementById(sectionId);
            if (section) {
                const sectionTop = section.offsetTop;
                if (window.pageYOffset >= sectionTop - 200) {
                    current = sectionId;
                }
            }
        });

        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });
});

// Add some interactivity to cards
document.addEventListener('click', (e) => {
    if (e.target.closest('.service-card') || e.target.closest('.stat-card') || e.target.closest('.creator-card')) {
        const card = e.target.closest('.service-card, .stat-card, .creator-card');
        if (card) {
            card.style.animation = 'none';
            setTimeout(() => {
                card.style.animation = 'scaleIn 0.3s ease-out';
            }, 10);
        }
    }
});

// CTA Button click
document.querySelectorAll('.cta-btn, .cta-btn-large').forEach(btn => {
    btn.addEventListener('click', () => {
        alert('Welcome! Ready to transform your creator journey? Let\'s connect!');
    });
});

// Smooth animations for elements coming into view
const styleSheet = document.createElement('style');
styleSheet.textContent = `
    .nav-link.active {
        color: #FFC700;
    }
`;
document.head.appendChild(styleSheet);
