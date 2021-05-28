//=================================
// slick-slider check-comforts
//=================================
$(".slider-for").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: ".slider-nav",
    //     autoplay: true,
    //     autoplaySpeed: 2000,
});
$(".slider-nav").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: ".slider-for",
    arrows: false,
    dots: false,
    centerMode: false,
    focusOnSelect: true,
    mobileFirst: true,
    variableWidth: true,
    responsive: [
        {
            breakpoint: 300,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 420,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
            },
        },
    ],
});

// =====================================
// button - select slider and change bacground color
// =====================================
$(document).on("click", ".check-comforts__link", function () {
    const $this = $(this);
    $(".check-comforts__link").removeClass("select");
    $this.addClass("select");
    switch ($this.data("filter")) {
        case "lobby":
            toggleCalssSlider($("#lobby"));
            $(".check-comforts").css("background", "#D6EBEE");
            return;
        case "delux-twin-rooms":
            toggleCalssSlider($("#delux-twin-rooms"));
            $(".check-comforts").css("background", "rgb(228, 228, 228)");
            return;
        case "dormitory-rooms":
            toggleCalssSlider($("#dormitory-rooms"));
            $(".check-comforts").css("background", "rgb(239, 241, 254)");
            return;
        case "for-bed-mixed":
            toggleCalssSlider($("#for-bed-mixed"));
            $(".check-comforts").css("background", "rgb(237, 244, 234)");
            return;
    }
});

function toggleCalssSlider(n) {
    $(".check-comforts__slider-box").removeClass("active");
    n.addClass("active");
    $(".slider-for").slick("setPosition");
}

// =====================================
//  SSM
// =====================================
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
