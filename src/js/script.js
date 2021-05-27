// slick-slider check-comforts
$(".slider-for").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    //     fade: true,
    asNavFor: ".slider-nav",
    autoplay: true,
    autoplaySpeed: 5000,
});
$(".slider-nav").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: ".slider-for",
    dots: false,
    centerMode: false,
    focusOnSelect: true,
    mobileFirst: true,
    responsive: [
        {
            breakpoint: 420,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 2,
            },
        },
    ],
});

// ====================================
function initMobile() {
    console.log("is-mobile");
}

function initDesktop() {
    console.log("is-desktop");
}

ssm.addState({
    id: "tablet",
    query: "(max-width: 768px)",
    onEnter: function () {
        initMobile();
    },
});

ssm.addState({
    id: "desktop",
    query: "(min-width: 768px)",
    onEnter: function () {
        initDesktop();
    },
});
