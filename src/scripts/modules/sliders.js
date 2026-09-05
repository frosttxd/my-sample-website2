/**
 * Sliders & Split-Screen Showcase Controller
 */
import { previewEstatesData } from '../config.js';
import { openEstateModal } from './estates.js';

let currentHeroSlideIndex = 0;
const totalHeroSlides = 3;

export function updateHeroSliderUI() {
    const slides = document.querySelectorAll('.hero-slide');
    const indicators = document.querySelectorAll('.slide-indicator');
    const counter = document.getElementById('slide-current');

    slides.forEach((slide, idx) => {
        if (idx === currentHeroSlideIndex) {
            slide.classList.remove('opacity-0', 'pointer-events-none', 'z-0');
            slide.classList.add('opacity-100', 'z-10');
        } else {
            slide.classList.remove('opacity-100', 'z-10');
            slide.classList.add('opacity-0', 'pointer-events-none', 'z-0');
        }
    });

    indicators.forEach((ind, idx) => {
        if (idx === currentHeroSlideIndex) {
            ind.classList.remove('w-3', 'bg-white/40');
            ind.classList.add('w-8', 'bg-white');
        } else {
            ind.classList.remove('w-8', 'bg-white');
            ind.classList.add('w-3', 'bg-white/40');
        }
    });

    if (counter) {
        counter.textContent = '0' + (currentHeroSlideIndex + 1);
    }
}

export function changeHeroSlide(dir) {
    currentHeroSlideIndex = (currentHeroSlideIndex + dir + totalHeroSlides) % totalHeroSlides;
    updateHeroSliderUI();
}

export function goToHeroSlide(idx) {
    currentHeroSlideIndex = idx;
    updateHeroSliderUI();
}

// Interactive Split-Screen Estate Preview Controller
let currentPreviewIndex = 0;

export function selectPreviewEstate(idx) {
    currentPreviewIndex = idx;
    const items = document.querySelectorAll('.estate-preview-item');
    const images = document.querySelectorAll('.preview-estate-img');
    const badge = document.getElementById('preview-badge');
    const title = document.getElementById('preview-title');

    items.forEach((item, i) => {
        const details = item.querySelector('.item-expanded-details');
        if (i === idx) {
            item.classList.add('bg-white/95', 'border-l-blush-500', 'shadow-md');
            item.classList.remove('bg-white/40', 'border-l-transparent');
            if (details) details.classList.remove('hidden');
        } else {
            item.classList.remove('bg-white/95', 'border-l-blush-500', 'shadow-md');
            item.classList.add('bg-white/40', 'border-l-transparent');
            if (details) details.classList.add('hidden');
        }
    });

    images.forEach((img, i) => {
        if (i === idx) {
            img.classList.remove('opacity-0', 'scale-105', 'z-0');
            img.classList.add('opacity-100', 'scale-100', 'z-10');
        } else {
            img.classList.remove('opacity-100', 'scale-100', 'z-10');
            img.classList.add('opacity-0', 'scale-105', 'z-0');
        }
    });

    if (badge && title && previewEstatesData[idx]) {
        badge.textContent = previewEstatesData[idx].badge;
        title.textContent = previewEstatesData[idx].title;
    }
}

export function openCurrentPreviewModal() {
    const current = previewEstatesData[currentPreviewIndex];
    if (current) {
        openEstateModal(current.id);
    }
}
