/**
 * Estate Collections & Detail Dossier Modal Module
 */
import { estateData } from '../config.js';
import { switchTab } from './navigation.js';

export function filterEstates(loc) {
    const cards = document.querySelectorAll('.estate-card');
    const btns = document.querySelectorAll('.estate-filter-btn');

    btns.forEach(b => {
        if (b.getAttribute('data-estate-filter') === loc) {
            b.classList.remove('bg-white/80', 'text-espresso-700', 'border-cream-300');
            b.classList.add('bg-espresso-900', 'text-white', 'border-espresso-900', 'font-semibold');
        } else {
            b.classList.remove('bg-espresso-900', 'text-white', 'border-espresso-900', 'font-semibold');
            b.classList.add('bg-white/80', 'text-espresso-700', 'border-cream-300');
        }
    });

    cards.forEach(card => {
        const cardLoc = card.getAttribute('data-location');
        if (loc === 'all' || cardLoc === loc) {
            card.style.display = 'flex';
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'scale(1)';
            }, 10);
        } else {
            card.style.opacity = '0';
            card.style.transform = 'scale(0.96)';
            setTimeout(() => {
                card.style.display = 'none';
            }, 250);
        }
    });
}

export function openEstateModal(estateKey) {
    const data = estateData[estateKey];
    if (!data) return;

    const modalContent = document.getElementById('estate-modal-content');
    if (!modalContent) return;

    let specsHtml = '';
    data.specs.forEach(s => {
        specsHtml += `
            <div class="p-3 rounded-xl bg-cream-50/90 border border-cream-300/80">
                <div class="text-[10px] text-espresso-500 uppercase tracking-wider">${s.label}</div>
                <div class="text-xs font-semibold text-espresso-950 mt-0.5">${s.val}</div>
            </div>
        `;
    });

    modalContent.innerHTML = `
        <div class="space-y-5">
            <div>
                <span class="inline-block px-2.5 py-0.5 rounded-full bg-blush-100 text-blush-700 text-[10px] font-semibold tracking-wider uppercase mb-2">
                    ${data.badge}
                </span>
                <h2 class="text-2xl sm:text-3xl font-semibold text-espresso-950">${data.title}</h2>
                <p class="text-xs text-blush-600 font-medium mt-0.5">${data.subtitle}</p>
            </div>

            <div class="aspect-[16/9] w-full rounded-2xl overflow-hidden border border-cream-300">
                <img src="${data.image}" alt="${data.title}" class="w-full h-full object-cover">
            </div>

            <div class="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                ${specsHtml}
            </div>

            <div class="space-y-2 pt-1">
                <h4 class="text-xs font-semibold text-espresso-900 uppercase tracking-wider">Mimari Detaylar</h4>
                <p class="text-xs text-espresso-700 font-light leading-relaxed">
                    ${data.desc}
                </p>
            </div>

            <div class="pt-4 border-t border-cream-300 flex flex-col sm:flex-row gap-3">
                <button onclick="selectPropertyAndContact('${estateKey}')" class="flex-1 py-3 px-5 rounded-xl bg-espresso-900 text-white hover:bg-espresso-800 transition-colors text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer">
                    <span>Bu Mülk İçin Randevu Al</span>
                    <svg class="w-4 h-4 text-blush-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </button>
                <button onclick="closeEstateModal()" class="py-3 px-5 rounded-xl bg-cream-200 border border-cream-300 text-espresso-800 hover:bg-cream-300 text-xs font-semibold transition-colors cursor-pointer">
                    Kapat
                </button>
            </div>
        </div>
    `;

    document.getElementById('estate-modal')?.classList.remove('hidden');
}

export function closeEstateModal() {
    document.getElementById('estate-modal')?.classList.add('hidden');
}

export function selectPropertyAndContact(estateKey) {
    closeEstateModal();
    switchTab('page-iletisim');
    const sel = document.getElementById('property-select');
    if (sel) {
        sel.value = estateKey;
    }
}
