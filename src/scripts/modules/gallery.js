/**
 * Visual Gallery Category Filter Controller
 */
export function switchGalleryTab(category) {
    const items = document.querySelectorAll('.gallery-item');
    const btns = document.querySelectorAll('.gallery-tab-btn');

    btns.forEach(b => {
        if (b.getAttribute('data-gallery-filter') === category) {
            b.classList.remove('bg-white/80', 'text-espresso-700', 'border-cream-300');
            b.classList.add('bg-espresso-900', 'text-white', 'border-espresso-900');
        } else {
            b.classList.remove('bg-espresso-900', 'text-white', 'border-espresso-900');
            b.classList.add('bg-white/80', 'text-espresso-700', 'border-cream-300');
        }
    });

    items.forEach(item => {
        const cat = item.getAttribute('data-category');
        if (category === 'all' || cat === category) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}
