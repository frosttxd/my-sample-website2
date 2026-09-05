/**
 * Main Application Orchestrator
 * Bootstraps modules and binds global event dispatchers
 */
import { initEspressoWhiteWaveCanvas } from './modules/waveCanvas.js';
import { initNavigation, switchTab, toggleMobileMenu, scrollToTop } from './modules/navigation.js';
import { filterEstates, openEstateModal, closeEstateModal, selectPropertyAndContact } from './modules/estates.js';
import { switchGalleryTab } from './modules/gallery.js';
import { changeHeroSlide, goToHeroSlide, selectPreviewEstate, openCurrentPreviewModal } from './modules/sliders.js';
import { openPhoneModal, closePhoneModal, openLegalModal, closeLegalModal, toggleFaq, handleContactSubmit, initModals } from './modules/modals.js';

// Global function bindings for inline HTML onclick/onsubmit handlers
window.switchTab = switchTab;
window.toggleMobileMenu = toggleMobileMenu;
window.scrollToTop = scrollToTop;
window.filterEstates = filterEstates;
window.openEstateModal = openEstateModal;
window.closeEstateModal = closeEstateModal;
window.selectPropertyAndContact = selectPropertyAndContact;
window.switchGalleryTab = switchGalleryTab;
window.changeHeroSlide = changeHeroSlide;
window.goToHeroSlide = goToHeroSlide;
window.selectPreviewEstate = selectPreviewEstate;
window.openCurrentPreviewModal = openCurrentPreviewModal;
window.openPhoneModal = openPhoneModal;
window.closePhoneModal = closePhoneModal;
window.openLegalModal = openLegalModal;
window.closeLegalModal = closeLegalModal;
window.toggleFaq = toggleFaq;
window.handleContactSubmit = handleContactSubmit;

function bootstrap() {
    initEspressoWhiteWaveCanvas('wave-canvas');
    initNavigation();
    initModals();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bootstrap);
} else {
    bootstrap();
}
