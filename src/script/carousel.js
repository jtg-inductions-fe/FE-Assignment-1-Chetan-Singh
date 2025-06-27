import Splide from '@splidejs/splide';

const createCarousel = () => {
    const carouselEl = document.getElementById('testimonials-carousel');
    if (!carouselEl) return;

    new Splide('.splide', {
        perPage: 1,
        speed: 300,
        classes: {
            pagination: 'testimonials__pagination',
            page: 'testimonials__pagination-button',
        },
    }).mount();
};

createCarousel();
