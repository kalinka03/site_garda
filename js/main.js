$(function () {
    scroll_waves();
    open_video();
    // garda_Paralax();
    open_mob_menu();
    open_input();
    seach_mobile();
    map_Paralax();
    show_map();
    show_color();
    lp_highestBox();
    open_before();
    tabs_menu();
    tabs_quest();
    tabs_quest2();
    date_pick();
    styler_input();
    calend();
});


function open_before() {

    $('.menu__links .city').on('click', function () {
        $('.menu-mobile-hover').toggleClass('st_open');
        $('.city').toggleClass('st_bef');
        $('.menu-mobile-services').removeClass('st_open');
        $('.services').removeClass('st_bef');
        $('.menu-mobile-classes').removeClass('st_open');
        $('.classes').removeClass('st_bef');

    });
    $('.menu__links a').on('click', function () {
        $('.menu-mobile-hover').removeClass('st_open');
        $('.city').removeClass('st_bef');
        $('.menu-mobile-services').removeClass('st_open');
        $('.services').removeClass('st_bef');
        $('.menu-mobile-classes').removeClass('st_open');
        $('.classes').removeClass('st_bef');
    });


    $('.menu__links .services').on('click', function () {
        $('.menu-mobile-services').toggleClass('st_open');
        $('.services').toggleClass('st_bef');
        $('.menu-mobile-hover').removeClass('st_open');
        $('.city').removeClass('st_bef');
        $('.menu-mobile-classes').removeClass('st_open');
        $('.classes').removeClass('st_bef');
    });
    $('.menu__links .classes').on('click', function () {
        $('.menu-mobile-classes').toggleClass('st_open');
        $('.classes').toggleClass('st_bef');
        $('.menu-mobile-services').removeClass('st_open');
        $('.services').removeClass('st_bef');
        $('.menu-mobile-hover').removeClass('st_open');
        $('.city').removeClass('st_bef');
    });
}


function show_map() {
    $('.main-info h2').addClass('show');
}

function show_color() {
    $('.blue-block').addClass('show');
    if ($(window).width() < 1024) {
        $('.blue-block').removeClass('show');
    }
}

function scroll_waves() {
    if ($(window).width() > 1024) {
        $(window).scroll(function () {

            var scrolled = $(this).scrollTop();
            if (scrolled > 100 && scrolled < 400) {
                var vr = scrolled - 100;
                vr = (vr / 3);
                $('.section-information').css({"margin-top": "-" + ((vr * 1.75) + 230) + "px"});
                $(window).trigger('resize');
            }
            if (scrolled > 400) {
                $('.section-information').css({"margin-top": "-410px"});
                $(window).trigger('resize');
            }
            if (scrolled < 100) {
                $('.section-information').css({"margin-top": "-230px"});
                $(window).trigger('resize');
            }
        });
    }
    ;
}


function open_mob_menu() {

    $('.menu__icon').on('click', function () {
        $('.menu__icon').toggleClass('menu_state_open');
        $('.menu-submenu').toggleClass('state_open');
        $('.form-group .js-button').toggleClass('state_top');
        $('.default').toggleClass('js_but');


        $('.logo-mobile').toggleClass('state_logo');
        $('.search').toggleClass('state_form');
        $('.seach-mobile').removeClass('search-open');

    });
}


function open_input() {

    $('.default-button').on('click', function () {
        $('.form-group').addClass('open-form-laptop');
        $('.default-button').css('display', 'none');
        $('.js-button').focus();
    })
    // $("button").click(function () {
    // })
    $('.js-button').blur(function (r) {
            if (r.relatedTarget != null && $(r.relatedTarget).hasClass('default')) {
                $('.form-group').submit();
            }
            else {
                $('.form-group').removeClass('open-form-laptop');
                $('.default-button').css('display', 'block');
            }
        }
    )
};

function seach_mobile() {

    $('.default-mobile').on('click', function () {
        $('.seach-mobile').toggleClass('search-open');
    });
}

function lp_highestBox() {
    if ($(window).width() > 991) {

        $('.container').each(function () {
            var highestBox = 0;
            $('.lapt', this).each(function () {
                if ($(this).height() > highestBox) {
                    highestBox = $(this).height();
                }
            });
            $('.lapt', this).height(highestBox);
        });
    }
};
function lp_recreat() {
    if ($(window).width() > 991) {

        $('.container').each(function () {
            var highestBox = 0;
            $('.resp-boots', this).each(function () {
                if ($(this).height() > highestBox) {
                    highestBox = $(this).height();
                }
            });
            $('.resp-boots', this).height(highestBox);
        });
    }
};








function map_Paralax() {
    $('.section-map').parallax_1({imageSrc: '/img/index/block6/backg2.png'});

}


function open_video() {
    $(window).scroll(function () {
        var scrolled = $(this).scrollTop();
        $('.play-but').click(
            function () {
                $('.backg-pict').addClass('close-backg');
                $('.back-green').addClass('close-green');
                $('.video-play').addClass('open-video');
                $('.video-play').toggleClass('video-heigth');
            });
        if (scrolled > 1200) {
            $('.backg-pict').removeClass('close-backg');
            $('.back-green').removeClass('close-green');
            $('.video-play').removeClass('open-video');
            $('.video-play').removeClass('video-heigth');
            $('.video-play iframe').each(function () {
                var el_src = $(this).attr("src");
                $(this).attr("src", el_src);
            });
        }
    })
};

function tabs_menu() {
    $('ul.tabs__caption').on('click', 'li:not(.active)', function () {
        $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    });
};


function tabs_quest() {
    $('.tabs_menu_rigth .acc-head').on('click', function (e) {
        e.preventDefault();
        $('.tabs_menu_rigth .tab-quest').not($(this).next()).slideUp(500);
        $(this).next().slideToggle(1000);

    });
};

function tabs_quest2() {
    $('.tabs_menu_rigth .acc-head a').on('click', function (e) {
        e.preventDefault();
        $('.tabs_menu_rigth .answer_rigth').css('color', 'red');
    })
}

function styler_input() {
    var $rezult = $('input[name=stars]').val()-1;
    $('.checkmark-star ').each(function (a) {
        if (a <= $rezult) {
            $(this).addClass('active_star');
        }

    });
    $('.checkmark-star ').on('click', function () {
        var $val_star = $(this).index();
        $('input[name=stars]').val($val_star+1);
        if($val_star==4){
            $('.hint_star').text('Превосходно');
        }
        if($val_star==3){
            $('.hint_star').text('Хорошо');
        }
        if($val_star==2){
            $('.hint_star').text('Нормально');
        }
        if($val_star==1){
            $('.hint_star').text('Удовлетворительно');
        }
        if($val_star==0){
            $('.hint_star').text('Неудовлетворительно');
        }
    })
    $('.checkmark-star ').on('click', function () {
        $('.checkmark-star ').removeClass('active_star');
        var $rezult = $(this).index();

        $('.checkmark-star ').each(function (a) {
            if (a <= $rezult) {
                $(this).addClass('active_star');
            }

        })
    })

};


function date_pick() {
    $("#datepicker").datepicker({
        monthNames: ['Январь', 'Февраль', 'Март', 'Апрель',
            'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь',
            'Октябрь', 'Ноябрь', 'Декабрь'],
        dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
        firstDay: 1,
    });
    $("#datepicker2").datepicker({
        monthNames: ['Январь', 'Февраль', 'Март', 'Апрель',
            'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь',
            'Октябрь', 'Ноябрь', 'Декабрь'],
        dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
        firstDay: 1,
    });
};

// function not_click() {
//      $('.calendar-hostel input[type="text"]').bind('focus', function () {
//         return false;});
// }

// function calend() {
//     // $('#enquiryqb-arrival').on('click', function (event) {
//     //     event.preventDefault();
//
//        // })
//
// $('#enquiryqb-arrival').RangeDatepick({
//     inputFrom: '#enquiryqb-arrival',
//     inputTo: '#enquiryqb-departure',
//     elementToFocusOnClose: '#enquiryqb-enquirysent',
//     maxMonthsToShow: 2,
//     lang: 'it'
//     // lang: lang
//     // });
//
//     // $('#postModel_EnquiryData_Arrival').on('click', function (event) {
//     //     event.preventDefault();})
// })
//     $('#postModel_EnquiryData_Arrival').RangeDatepick({
//             inputFrom: '#postModel_EnquiryData_Arrival',
//             inputTo: '#postModel_EnquiryData_Departure',
//             elementToFocusOnClose: '#postModel_EnquiryData_Nights',
//             maxMonthsToShow: 2,
//             lang: 'it'
//             // lang: lang
//         });
//     // });
//    };
//




function calend() {
    $('input[name="datefilter"]').daterangepicker({
        autoUpdateInput: false,
        locale: {
            cancelLabel: 'Clear'
        }
    });
    $('input[name="datefilter"]').on('apply.daterangepicker', function(ev, picker) {
        $(this).val(picker.startDate.format('DD.MM.YYYY') + ' - ' + picker.endDate.format('DD.MM.YYYY'));
    });

    $('input[name="datefilter"]').on('cancel.daterangepicker', function(ev, picker) {
        $(this).val('');
    });

};


// function open_calendar() {
//     $('.datepicker-calendar').on('click', function () {
//         $('.daterangepickpanel').addClass('active_calendar');
//     });
//     };

