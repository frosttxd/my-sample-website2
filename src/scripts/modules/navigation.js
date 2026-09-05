/**
 * Navigation & Responsive Menu Controller
 */
export function switchTab(rawId) {
    const targetId = rawId.startsWith('page-') ? rawId : 'page-' + rawId;
    const pages = ['page-home', 'page-koleksiyon', 'page-mimari', 'page-galeri', 'page-iletisim'];

    pages.forEach(p => {
        const el = document.getElementById(p);
        if (el) {
            if (p === targetId) {
                el.classList.remove('hidden');
                el.classList.add('block');
                el.classList.remove('tab-anim-in');
                void el.offsetWidth; // Force reflow
                el.classList.add('tab-anim-in');
            } else {
                el.classList.add('hidden');
                el.classList.remove('block');
                el.classList.remove('tab-anim-in');
            }
        }
    });

    // Update Desktop Nav Pill States
    const navPills = document.querySelectorAll('[data-tab-target]');
    navPills.forEach(pill => {
        const target = pill.getAttribute('data-tab-target');
        if (target === targetId || target === targetId.replace('page-', '')) {
            pill.classList.add('nav-pill-active');
        } else {
            pill.classList.remove('nav-pill-active');
        }
    });

    // Close Mobile Drawer if open
    const drawer = document.getElementById('mobile-drawer');
    if (drawer && !drawer.classList.contains('hidden')) {
        drawer.classList.add('hidden');
        document.getElementById('menu-icon-open')?.classList.remove('hidden');
        document.getElementById('menu-icon-close')?.classList.add('hidden');
    }

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

export function toggleMobileMenu() {
    const drawer = document.getElementById('mobile-drawer');
    const openIcon = document.getElementById('menu-icon-open');
    const closeIcon = document.getElementById('menu-icon-close');

    if (drawer) {
        const isHidden = drawer.classList.contains('hidden');
        if (isHidden) {
            drawer.classList.remove('hidden');
            openIcon?.classList.add('hidden');
            closeIcon?.classList.remove('hidden');
        } else {
            drawer.classList.add('hidden');
            openIcon?.classList.remove('hidden');
            closeIcon?.classList.add('hidden');
        }
    }
}

export function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

export function initNavigation() {
    window.addEventListener('scroll', () => {
        const btn = document.getElementById('scroll-top-btn');
        if (!btn) return;
        if (window.scrollY > 300) {
            btn.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-2');
            btn.classList.add('opacity-100', 'pointer-events-auto', 'translate-y-0');
        } else {
            btn.classList.add('opacity-0', 'pointer-events-none', 'translate-y-2');
            btn.classList.remove('opacity-100', 'pointer-events-auto', 'translate-y-0');
        }
    });
}
