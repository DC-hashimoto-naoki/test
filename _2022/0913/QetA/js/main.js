
$(function () {
    var jsTargets = $('.js-target');

    function callback() {
        $(jsTargets).each(function () {
            var offset = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();

            // scroll area 01
            var paddingTop_inScrollArea01 = windowHeight * 0.2;
            if(
                $(this).hasClass('scroll-area-01')
                && scroll > offset - windowHeight + paddingTop_inScrollArea01
            ){
                $(this).addClass("show");
            }

            // when scrolling 40% of windows' height
            var paddingTop = windowHeight * 0.4;
            if (scroll > offset - windowHeight + paddingTop) {
                // if ($(this).hasClass("concept-texts")) { fadeInAnimationOnConceptText($(this)); }
                $(this).addClass("show");
                if ($(this).hasClass("cosmetic-image")) { removeTransittion($(this)); }
            }
        })
    }

    function fadeInAnimationOnConceptText(element) {
        var children = element.children();
        children.each((index, child) => {
            setTimeout(() => {
                child.classList.add('show')
            }, index * 300)
        })
    }

    function removeTransittion(element) {
        setTimeout(() => {
            element.addClass('transition-0');
        }, 700)
    }

    $(window).on('scroll', callback);

    // fade in animation
    $('.js-fadeIn').hide();
    $('.js-fadeIn').delay(1000).fadeIn();

    $('.js-slideIn').addClass('show');

    $('.js-fadeIn-scroll').hide();
    $('.js-fadeIn-scroll').delay(1500).fadeIn();
    $(window).on('scroll', () => {
        $('.js-fadeIn-scroll').fadeOut(300);
    })


    // parallax animation in cosmetic section
    var cosmeticImages = $('.cosmetic-image');
    $(window).on('scroll', () => {
        var windowHeight = $(window).height();
        var scroll = $(window).scrollTop();

        $(cosmeticImages).each(function () {
            var offsetTop = $(this).offset().top;
            var objectHeight = $(this).height();

            if (scroll > offsetTop - windowHeight &&
                scroll < offsetTop + objectHeight) {
                var min = (offsetTop - windowHeight);
                var max = (offsetTop + objectHeight);
                var percent = (scroll - min) / (max - min) * 100;
                $(this).css('background-position-y', percent + '%')
            }
        })
    })

    // parallax animation in product section
    // $(window).on('scroll', () => {
    //     var windowHeight = $(window).height();
    //     var scroll = $(window).scrollTop();

    //     var productOffsetTop = $('.product').offset().top;
    //     var cosmeticOffsetTop = $('.cosmetic').offset().top;
    //     var cosmeticHeight = $('.cosmetic').height();
    //     var cosmeticBottom = cosmeticOffsetTop + cosmeticHeight;
    //     var margin = 500;
    //     $('.product').css('top', windowHeight + 'px');

    //     var diff = windowHeight + scroll - cosmeticBottom;
    //     // $('.product').css('top', cosmeticBottom - diff + 'px');

    //     if (scroll > cosmeticBottom - windowHeight) {
    //         console.log("active");
    //         var scrollVolume = scroll - (cosmeticBottom - windowHeight)
    //         $('.product').css('top', windowHeight - scrollVolume * 2 + margin + 'px');
    //     }

    // })
});