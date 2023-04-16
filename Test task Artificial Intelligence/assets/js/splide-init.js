document.addEventListener('DOMContentLoaded', function () {
    var splide = new Splide('.splide', {
        type: 'loop',
        arrows: false,
        pagination: false,
        autoplay: true,
        speed: 800,
        easing: 'ease',
        pauseOnHover: true,
        wheel: true,
        mediaQuery: 'min',
        perPage: 1,
        breakpoints: {
            460: {
                perPage: 3,
                pagination: true,
            },
            968: {
                perPage: 5,
            },
        },
        classes: {
            // Add classes for pagination.
            pagination: 'splide__pagination slider__indicators', // container
            page: 'splide__pagination__page indicator', // each button
        },

    });
    splide.mount();
});