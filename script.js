var swiper = new Swiper(".mySwiper", {
    slidesPerview: "auto",
    centeredSlides: true,

    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
    },
    autoplay: {
        delay: 2000
    }
});

var swiper2 = new Swiper(".mySwiperProduct", {
    slidesPerView: "auto",
    spaceBetween: 40,
    navigation: {
        nextEl: ".bxs-chevron-right-circle",
        prevEl: ".bxs-chevron-left-circle",
    },
    breakpoints: {
        375: {
            slidesPerView: "1",
            spaceBetween: 30,
        },
        768: {
            slidesPerView: "2",
            spaceBetween: 30,
        },
        960: {
            slidesPerView: "3",
            spaceBetween: 40,
        },
        1200: {
            slidesPerView: "4",
            spaceBetween: 40,
        }
    }
});


