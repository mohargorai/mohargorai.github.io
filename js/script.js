/**
 * ==========================================================================
 * MOHAR GORAI PORTFOLIO - MAIN JAVASCRIPT
 * ==========================================================================
 */

document.addEventListener("DOMContentLoaded", () => {

    // ==========================================
    // 0. SCROLLSPY (ACTIVE NAV LINK UPDATER)
    // ==========================================
    const sections = document.querySelectorAll('.page-section');
    const navLinks = document.querySelectorAll('.nav-link');

    const updateActiveLink = () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.scrollY >= (sectionTop - 200)) { 
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (current && link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', updateActiveLink);
    // Initialize on load to set correct active link
    updateActiveLink();

    // ==========================================
    // 1. DIRECTION-AWARE SCROLL REVEAL 
    // ==========================================
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealOptions = {
        threshold: 0.1, // Triggers when 10% of the element is visible
        rootMargin: "-50px 0px -50px 0px" // Adds a buffer to top and bottom to prevent edge flickering
    };

    const revealOnScroll = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Element enters screen: Animate it in and clear hidden states
                entry.target.classList.add('active');
                entry.target.classList.remove('hidden-up', 'hidden-down');
            } else {
                // Element leaves screen: Remove active class
                entry.target.classList.remove('active');
                
                // Determine direction based on where the element is relative to the viewport
                if (entry.boundingClientRect.top < 0) {
                    // Element went out the top of the screen
                    entry.target.classList.add('hidden-up');
                } else {
                    // Element went out the bottom of the screen
                    entry.target.classList.add('hidden-down');
                }
            }
        });
    }, revealOptions);

    revealElements.forEach(el => revealOnScroll.observe(el));


    // ==========================================
    // 2. 3D TILT EFFECT (HARDWARE ACCELERATED)
    // ==========================================
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    const tiltElements = document.querySelectorAll('.tilt-element');

    if (isFinePointer) {
        tiltElements.forEach(element => {
            element.addEventListener('mousemove', (e) => {
                const rect = element.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                const xRotation = -((y - rect.height / 2) / rect.height) * 10;
                const yRotation = ((x - rect.width / 2) / rect.width) * 10;

                element.style.transition = 'transform 0.1s ease-out';
                element.style.transform = `perspective(1000px) scale(1.02) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
            });

            element.addEventListener('mouseleave', () => {
                element.style.transition = 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
                element.style.transform = 'perspective(1000px) scale(1) rotateX(0deg) rotateY(0deg)';
            });

            element.addEventListener('mouseenter', () => {
                element.style.transition = 'transform 0.1s ease-out';
            });
        });
    }

    // ==========================================
    // 3. DYNAMIC TYPING ANIMATION
    // ==========================================
    const typingTextElement = document.querySelector('.typing-text');
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (typingTextElement && !prefersReducedMotion) {
        const textToType = typingTextElement.getAttribute('data-text') || "";
        typingTextElement.textContent = ""; 
        let index = 0;

        const typewriter = () => {
            if (index < textToType.length) {
                typingTextElement.textContent += textToType.charAt(index);
                index++;
                setTimeout(typewriter, 120);
            }
        };

        setTimeout(typewriter, 800);
    }

    // ==========================================
    // 4. GLASSMORPHIC CURSOR TRAIL ANIMATION
    // ==========================================
    if (isFinePointer) {
        let lastX = 0;
        let lastY = 0;
        const MIN_DISTANCE_PX = 15;
        let isTicking = false;

        const createTrailPart = (x, y) => {
            const part = document.createElement('div');
            part.className = 'cursor-trail-part';
            part.style.left = `${x}px`;
            part.style.top = `${y}px`;

            document.body.appendChild(part);

            window.requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    part.classList.add('fade');
                });
            });

            setTimeout(() => {
                part.remove();
            }, 600);
        };

        window.addEventListener('mousemove', (e) => {
            if (!isTicking) {
                window.requestAnimationFrame(() => {
                    const deltaX = Math.abs(e.clientX - lastX);
                    const deltaY = Math.abs(e.clientY - lastY);
                    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

                    if (distance > MIN_DISTANCE_PX) {
                        createTrailPart(e.clientX, e.clientY);
                        lastX = e.clientX;
                        lastY = e.clientY;
                    }
                    isTicking = false;
                });
                isTicking = true;
            }
        }, { passive: true });
    }
});