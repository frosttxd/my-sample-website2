/**
 * Modal Dialogs, Accordion & Contact Form Controller
 */
import { closeEstateModal } from './estates.js';

export function openPhoneModal() {
    document.getElementById('phone-modal')?.classList.remove('hidden');
}

export function closePhoneModal() {
    document.getElementById('phone-modal')?.classList.add('hidden');
}

export function openLegalModal() {
    document.getElementById('legal-modal')?.classList.remove('hidden');
}

export function closeLegalModal() {
    document.getElementById('legal-modal')?.classList.add('hidden');
}

export function toggleFaq(id) {
    const content = document.getElementById(`faq-content-${id}`);
    const icon = document.getElementById(`faq-icon-${id}`);
    if (!content) return;

    if (content.classList.contains('hidden')) {
        content.classList.remove('hidden');
        if (icon) icon.textContent = '−';
    } else {
        content.classList.add('hidden');
        if (icon) icon.textContent = '+';
    }
}

export function handleContactSubmit(e) {
    e.preventDefault();
    const btn = e.target.querySelector('button[type="submit"]');
    if (!btn) return;
    const orig = btn.innerHTML;
    btn.innerHTML = '<span>İletiliyor...</span>';
    btn.disabled = true;

    setTimeout(() => {
        btn.innerHTML = '<span>Talebiniz Alındı &bull; Teşekkür Ederiz</span>';
        btn.classList.remove('bg-espresso-900');
        btn.classList.add('bg-emerald-800');

        setTimeout(() => {
            alert('Randevu talebiniz iletildi. Portföy yöneticimiz en kısa sürede sizinle iletişime geçecektir.');
            e.target.reset();
            btn.innerHTML = orig;
            btn.disabled = false;
            btn.classList.remove('bg-emerald-800');
            btn.classList.add('bg-espresso-900');
        }, 1000);
    }, 1000);
}

export function initModals() {
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeEstateModal();
            closePhoneModal();
            closeLegalModal();
        }
    });
}
