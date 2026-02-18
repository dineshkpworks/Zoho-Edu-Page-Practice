/* ============================================================
   ZOHO SHOW — EDUCATION PAGE  |  main.js
   ============================================================ */

'use strict';

(function () {

    /* -------- Navbar Scroll Shadow -------- */
    const navbar = document.getElementById('navbar');
    if (navbar) {
        const onScroll = () => {
            navbar.classList.toggle('scrolled', window.scrollY > 10);
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
    }


    /* -------- Hamburger / Mobile Menu -------- */
    const hamburger   = document.getElementById('hamburger');
    const mobileMenu  = document.getElementById('mobileMenu');
    const navOverlay  = document.getElementById('navOverlay');

    function openMenu() {
        hamburger.classList.add('open');
        hamburger.setAttribute('aria-expanded', 'true');
        mobileMenu.classList.add('open');
        navOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        mobileMenu.classList.remove('open');
        navOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.contains('open') ? closeMenu() : openMenu();
        });

        // Close on overlay click
        navOverlay.addEventListener('click', closeMenu);

        // Close on Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeMenu();
        });

        // Close when a mobile link is clicked
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', closeMenu);
        });
    }


    /* -------- Footer Accordion (mobile) -------- */
    const footerToggles = document.querySelectorAll('.footer-col-toggle');

    footerToggles.forEach(btn => {
        btn.addEventListener('click', () => {
            // Only activate accordion on small screens
            if (window.innerWidth > 600) return;

            const col = btn.closest('.footer-col');
            const isOpen = col.classList.contains('open');

            // Close all cols
            document.querySelectorAll('.footer-col').forEach(c => c.classList.remove('open'));

            // Open this one if it wasn't open
            if (!isOpen) col.classList.add('open');
        });
    });

    // Ensure all cols open on resize above 600px
    window.addEventListener('resize', () => {
        if (window.innerWidth > 600) {
            document.querySelectorAll('.footer-col').forEach(c => c.classList.remove('open'));
        }
    }, { passive: true });


    /* -------- Scroll Reveal -------- */
    const revealEls = document.querySelectorAll('.reveal-left, .reveal-right, .reveal-up');

    if ('IntersectionObserver' in window && revealEls.length) {
        const revealObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        revealObserver.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.15 }
        );

        revealEls.forEach(el => revealObserver.observe(el));
    } else {
        // Fallback: show all elements if IntersectionObserver isn't supported
        revealEls.forEach(el => el.classList.add('visible'));
    }


    /* -------- Smooth Scroll for anchor links -------- */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            const targetId = anchor.getAttribute('href');
            if (targetId === '#') return;

            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });


    /* -------- Footer Search -------- */
    const searchInput = document.querySelector('.footer-search-section input');
    const searchBtn   = document.querySelector('.search-btn');

    if (searchBtn && searchInput) {
        searchBtn.addEventListener('click', () => {
            const q = searchInput.value.trim();
            if (q) {
                // In production, redirect to search results page
                console.log('Searching for:', q);
                searchInput.value = '';
            }
        });

        searchInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') searchBtn.click();
        });
    }


})();
