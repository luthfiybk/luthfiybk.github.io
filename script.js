$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        $('html').css("scrollBehavior", "smooth");
    });

    var typed = new Typed(".typing", {
        strings: ["Informatics student at Diponegoro University"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Everyone!"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeout:2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });
});

$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if(scroll > 700) {
            $("nav").css("top", "0px");
            $("nav").css("opacity", "1");
        } else {
            $("nav").css("top", "-35px");
        }
        dh = $(document).height();
        wh = $(window).height();
        var height = (scroll / (dh - wh)) * 60;
        var top = 50 - (scroll / (dh - wh)) * 30;
        $(".scrollBar").css("height", height + "vh");
        $(".scrollBar").css("top", top + "vh");
    })
})