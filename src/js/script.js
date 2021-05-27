// slick-slider check-comforts
$(".slider-for").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    //     fade: true,
    asNavFor: ".slider-nav",
});
$(".slider-nav").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: ".slider-for",
    dots: false,
    centerMode: false,
    focusOnSelect: true,
//     variableWidth: true,
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
