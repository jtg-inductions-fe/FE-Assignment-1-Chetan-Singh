import Splide from '@splidejs/splide';

document.addEventListener('DOMContentLoaded', function () {
    new Splide('.splide', {
        perPage: 1,
    })
        .on('pagination:mounted', function (data) {
            data.list.classList.add('testimonials__pagination');

            data.items.forEach((item, index) => {
                // item.classList.add('testimonials__pagination-item');
                item.button.classList.add(
                    'testimonials__pagination--' + (index + 1),
                );
            });
        })
        .mount();
});
