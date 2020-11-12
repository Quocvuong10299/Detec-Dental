(function ($) {
    $(document).ready(function ($) {
        scrollActiveClass();
        activeIconMenu();
        toggleSearch();

        function scrollActiveClass() {
            $(window).scroll(function () {
                const scrollHeader = $(window).scrollTop();
                const widthWindow = $(window).width();
                if (scrollHeader > 250 && widthWindow <= 991.5) {
                    $('.header').addClass('fixed-menu');
                } else {
                    $('.header').removeClass('fixed-menu');
                }
            });
        }

        function activeIconMenu() {
            let icMenu = $('.menu-icon');
            let icClose = $('.close-menu');
            icMenu.on('click', function () {
                $('.menu').addClass('active-menu');
                $('body').css('overflow', 'hidden');
            })
            icClose.on('click', function () {
                $('.menu').removeClass('active-menu');
                $('body').css('overflow', 'unset');
            })
        }

        function toggleSearch() {
            let icSearch = $('.ic-search');
            let screenW = $(window).width();
            icSearch.on('click', function () {
                $('.form-search').toggleClass('active-search');
            })
        }

        function divPartMenu() {
            let parts = $('.div-part');
            let screen_width = $(window).width();
            // const headerHeight = $('.header__bar').height();
            parts.each(function () {
                let _self = $(this);
                let w = _self.outerWidth();
                let space = screen_width - w;
                let divPart = _self.find('.div-part__wrapper');
                if (screen_width > 991.5) {
                    divPart.width(w + (space / 2));
                    // _self.height(headerHeight);
                }
            });
        }

        divPartMenu();
        $(window).on('resize', divPartMenu);
    });

})(jQuery);