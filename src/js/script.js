//=================================
// slick-slider check-comforts
//=================================
$(".slider-for").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: ".slider-nav",
    waitForAnimate: false,
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
    waitForAnimate: false,
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
    $(".slider-for").slick("slickGoTo", 0);
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
//  Button Scroll top
// =====================================
const upTop = $(".uptop");
upTop.on("click", handleScrollTop);
function handleScrollTop(e) {
    const interval = setInterval(() => {
        const st = window.pageYOffset;
        if (st <= 0) {
            clearInterval(interval);
        }

        window.scrollBy(0, -15);
        upTop.addClass("none");
    }, 3);
}
$(document).on("mousewheel", handleOnScrollTop);
function handleOnScrollTop() {
    if (window.pageYOffset >= 400) {
        upTop.removeClass("none");
        return;
    }
    upTop.addClass("none");
}

// =====================================
//  Burger menu
// =====================================
const menuBtn = $("#menu-btn");
const mobileMenu = $("#mobile-menu");
const isSubMenu = $(".is-submenu");
const hasSubMenu = $(".has-submenu");

menuBtn.on("click", handleBurgerMenu);
isSubMenu.on("click", handeClickIsSubMenu);

function resetHasSubMenu() {
    hasSubMenu.siblings("li").children(".is-submenu").removeClass("opened").siblings("ul").hide();
}

function handleBurgerMenu() {
    const $this = $(this);
    $this.toggleClass("active");
    mobileMenu.slideToggle(300);
    resetHasSubMenu();
}
function resetMobileMenu() {
    menuBtn.removeClass("active");
    mobileMenu.hide();
    resetHasSubMenu();
}

function handeClickIsSubMenu() {
    const $this = $(this);
    $this.toggleClass("opened");
    $this.next("ul").slideToggle(200);
    $(this).parent(hasSubMenu).siblings("li").children(".is-submenu").removeClass("opened").siblings("ul").hide();
}

// =====================================
// smooth scroll
// =====================================
const scroll = new SmoothScroll("a[href*='#']", {});

// ---------------------------------------
//  SSM ↓↓↓↓↓↓↓↓↓↓
// ---------------------------------------
function initMobile() {
    if (window.pageYOffset >= 400) upTop.removeClass("none");
    console.log("is-mobile");
}

function initDesktop() {
    upTop.addClass("none");
    resetMobileMenu();
    console.log("is-desktop");
}

ssm.addState({
    id: "tablet",
    query: "(max-width: 992px)",
    onEnter: function () {
        initMobile();
    },
});

ssm.addState({
    id: "desktop",
    query: "(min-width: 992px)",
    onEnter: function () {
        initDesktop();
    },
});
