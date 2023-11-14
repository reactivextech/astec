/* Header */
(function(){
    jQuery(".items").click(function(event){
        jQuery(".menu .menu-item-has-children").removeClass("current");
        jQuery(".right-menu li").removeClass("active_window");
        jQuery(".right-menu").removeClass("active_window");
        jQuery(this).parent().addClass("active_window");
        jQuery(".right-menu").addClass("active_window");
    });
})();

/* Notification for send form */
(function(){
    jQuery(document).ready(function(){

        /* Footer Form */
        var wpcf7Footer = document.querySelector('footer .wpcf7');
        if(wpcf7Footer){
            wpcf7Footer.addEventListener( 'wpcf7mailsent', function(){
                jQuery('footer .wpcf7 label').addClass('wp_hidden');
                jQuery('footer .wpcf7 .wpcf7-submit').addClass('wp_hidden');
                setTimeout(function(){
                    jQuery(".wpcf7-response-output").removeClass("wpcf7-mail-sent-ok");
                    jQuery('footer .wpcf7 label').removeClass('wp_hidden');
                    jQuery('footer .wpcf7 .wpcf7-submit').removeClass('wp_hidden');
                }, 3000);
            }, false );
        }

        /* Service Page */
        var wpcf7Service = document.querySelector('.service_contact_form .wpcf7');

        if(wpcf7Service){
            wpcf7Service.addEventListener( 'wpcf7mailsent', function(){
                jQuery(".button_with .loader").remove();
                setTimeout(function(){
                    jQuery(".wpcf7-response-output").removeClass("wpcf7-mail-sent-ok");
                }, 5000);
            }, false );

            wpcf7Service.addEventListener( 'wpcf7beforesubmit', function(){
                jQuery(wpcf7Service).find(".floating").append('<div class="loader"><span class="loader-inner"></span></div>')
            }, false );

            wpcf7Service.addEventListener( 'wpcf7invalid', function(){
                jQuery(".floating .loader").css("opacity", "0");
                setTimeout( function () {
                    jQuery(".floating .loader").remove();
                },1000 );
            }, false );
        }

        /* Modal Form */
        var wpcf7Elm = document.querySelector('.modal .wpcf7');

        if (wpcf7Elm) {
            wpcf7Elm.addEventListener( 'wpcf7beforesubmit', function(){
                jQuery(wpcf7Elm).find(".floating").append('<div class="loader"><span class="loader-inner"></span></div>')
            }, false );

            wpcf7Elm.addEventListener( 'wpcf7mailsent', function(){
                jQuery(".popup-window").addClass("success");
                jQuery(".button_with .loader").remove();
                setTimeout(function(){
                    jQuery(".modal").removeClass("showing");
                    jQuery(".wpcf7-response-output").removeClass("wpcf7-mail-sent-ok");
                    jQuery(".popup-window").removeClass("success");
                }, 3000);
            }, false );

            wpcf7Elm.addEventListener( 'wpcf7invalid', function(){
                jQuery(".floating .loader").css("opacity", "0");
                setTimeout(function () {
                    jQuery(".floating .loader").remove();
                },1000 );
            }, false);
        }

        /* Contact Us Page */
        var wpcf7Contacts = document.querySelector('.page-template-contacts .wpcf7');

        if(wpcf7Contacts){
            wpcf7Contacts.addEventListener( 'wpcf7invalid', function(){
                jQuery(".button_with .loader").css("opacity", "0");
                setTimeout( function () {
                    jQuery(".button_with .loader").remove();
                },1000 );
            }, false);

            wpcf7Contacts.addEventListener( 'wpcf7beforesubmit', function(){
                jQuery(wpcf7Contacts).find(".floating").append('<div class="loader"><span class="loader-inner"></span></div>')
            }, false );

            wpcf7Contacts.addEventListener( 'wpcf7mailsent', function(){
                jQuery(".floating .loader").remove();
                setTimeout(function(){
                    jQuery(".wpcf7-response-output").removeClass("wpcf7-mail-sent-ok");
                }, 5000);
            }, false );
        }

        /* Vacancy Page or Careers page */
        var wpcf7Vacancy = document.querySelector('.page-template-single-vacancy .wpcf7');
        if (! wpcf7Vacancy){
            wpcf7Vacancy = document.querySelector('.page-template-careers  #wpcf7-f383-o1');
        }
        if(wpcf7Vacancy){
            var id_vac_div = document.querySelector('.form_sidebar');

            if ( id_vac_div ) {
                var number_id_vac = id_vac_div.getAttribute( 'data-settings-id' );
                var id_input_vacancy = document.createElement( 'input' );
                id_input_vacancy.setAttribute( 'type', 'hidden' );
                id_input_vacancy.setAttribute( 'name', 'hurma_vacancy_id' );
                id_input_vacancy.setAttribute( 'value', number_id_vac );
                id_vac_div.querySelector( '.wpcf7-form' ).appendChild( id_input_vacancy );
            }
            wpcf7Vacancy.addEventListener( 'wpcf7invalid', function(){
                jQuery(".floating .loader").css("opacity", "0");
                setTimeout(function () {
                    jQuery(".floating .loader").remove();
                },1000);
            }, false);

            wpcf7Vacancy.addEventListener( 'wpcf7beforesubmit', function(){
                jQuery(wpcf7Vacancy).find(".floating").append('<div class="loader"><span class="loader-inner"></span></div>')
            }, false );

            wpcf7Vacancy.addEventListener( 'wpcf7mailsent', function(){
                jQuery('.page-template-single-vacancy .wpcf7-form').addClass('non_shadow');
                setTimeout(function(){
                    jQuery(".floating .loader").remove();
                    jQuery(".wpcf7-response-output").removeClass("wpcf7-mail-sent-ok");
                    jQuery('.append_name_file span').html();
                    jQuery('.upload_files').removeClass('added');
                    jQuery('.page-template-single-vacancy .wpcf7-form').removeClass('non_shadow');
                }, 5000);
            }, false );
        }

        /* Closing action popup */
        var wpcf7CA_plugin = document.querySelector('#closing_popup_wrapper .wpcf7');

        if (wpcf7CA_plugin) {

            wpcf7CA_plugin.addEventListener( 'wpcf7invalid', function(){
                jQuery(".button_with .loader").css("opacity", "0");
                setTimeout( function () {
                    jQuery(".button_with .loader").remove();
                },1000 );
            }, false);

            wpcf7CA_plugin.addEventListener( 'wpcf7beforesubmit', function(){
                jQuery(wpcf7CA_plugin).find(".floating").append('<div class="loader"><span class="loader-inner"></span></div>')
            }, false );

            wpcf7CA_plugin.addEventListener( 'wpcf7mailsent', function(){
                jQuery(".floating .loader").remove();
                setTimeout(function(){
                    jQuery(".wpcf7-response-output").removeClass("wpcf7-mail-sent-ok");
                    jQuery('#closing_popup_wrapper').removeClass('show');
                }, 5000);
            }, false );
        }


    });
})();

/* Header language bar action */
(function(){

    jQuery(".wrap-item-lang").click(function(){
        if(! jQuery(this).hasClass("view")){
            jQuery(".wrap-item-lang").removeClass("view");
            jQuery(this).addClass("view");
        }
    });

    jQuery(".close-lang-bar svg").click(function(e){
        e.preventDefault();
        jQuery(".language-item").removeClass("active_window");
    });

})();

/* Header dropdown menu */
(function(){

    jQuery(document).ready(function(){
		jQuery(".sub-menu .menu-item-has-children").hover(function(){
			jQuery(".sub-menu__wrapper .sub-menu").addClass("sub-menu-radius");
		}, function(){
			jQuery(".sub-menu__wrapper .sub-menu").removeClass("sub-menu-radius");
		});

		jQuery(".sub-menu-1 .menu-item-has-children").hover(function(){
			jQuery(".sub-menu__content-1").addClass("sub-menu-radius-none");
		}, function(){
			jQuery(".sub-menu__wrapper .sub-menu").addClass("sub-menu-radius");
			jQuery(".sub-menu__content-1").removeClass("sub-menu-radius-none");
		});
    });

    jQuery(".menu > .menu-item-has-children > a").click(function(event){
        event.preventDefault();
        jQuery(".menu-item-has-children").removeClass("current");

        var target = event.target;
        var curent_item = target.closest('li');

        if (!jQuery(curent_item).hasClass("current")){
            jQuery(".right-menu").removeClass("active_window");
            jQuery(".right-menu li").removeClass("active_window");
            jQuery(curent_item).addClass("current");
        }
    });

    jQuery(document).click(function(event){

        var target = event.target;
        var menu = jQuery(".menu > .menu-item-has-children").hasClass("current");
        var right_menu = jQuery(".right-menu li").hasClass("active_window");

        if (menu || right_menu){
            var dropdown_content = target.closest('.content');

            if(dropdown_content !== null){
                jQuery(".menu > .menu-item-has-children").removeClass("current");
                jQuery(".right-menu li").removeClass("active_window");
            }
        }
    });

    /* Button for dropdown menu */
    jQuery(".close-dropdown-menu").click(function(event){
        event.preventDefault();
        jQuery(".menu > .menu-item-has-children").removeClass("current");
    });

    /* Animation header for scroll */

    (function(){
        if(window.location.hash) {
            var hash = window.location.hash.substring(1);
            jQuery('html, body').animate({
                'scrollTop':   jQuery('#'+hash).offset().top - jQuery('header.top').height()
            }, 1000);
        }
    })();

    (function(){
        var scrollTo = jQuery("ul a[href^='#']");

        scrollTo.click(function() {
            jQuery("html, body").animate({
                scrollTop: jQuery(jQuery.attr(this, "href")).offset().top - jQuery('header.top').height()
            }, 1000 );
        });
    })();

    /* White Background color for header on scroll */
    jQuery(document).on('scroll', onScroll);
    function onScroll(event) {
        var height_page_top = jQuery(document).scrollTop();
        if(height_page_top > 5){
            jQuery('header.top').addClass("scrolling");
        }else{
            jQuery('header.top').removeClass("scrolling");
        }
    }

})();

/* Mobile Header */
(function(){

    //Sandwich menu ( Open / Close )
    jQuery(".toogle_wrap").click(function(){
        jQuery(".sandwich").toggleClass("open");
        jQuery(".content-mobile-menu").toggleClass("open");
        jQuery(".content_right_bar .contact-button").toggleClass("wp_hidden");

    });
    /* Added Back button on the dropdown menu */
    jQuery(document).ready(function(){
        jQuery(".menu-mobile .menu-item-has-children").each(function(index){
            var text = jQuery(this).find("> a").text(); //Get Title list
            jQuery(this).find("> a").attr('data-next-down', text);
            jQuery(this).find("> a").append('<span class="next-list-item"></span>');
            jQuery(this).find('> .sub-menu__content > ul').attr('data-drop', text);
            jQuery(this).find("> .sub-menu__content > ul").append('<li class="title_menu">'+text+'</li>');

            jQuery(this).find('.sub-menu-1 li').each(function(){
                var name_line = jQuery(this).parents('ul').attr('data-drop');
                jQuery(this).find('.sub-menu-description').append('<li class="title_menu">'+name_line+'</li>');
            });
        });

        /* Select dropdown item */
        jQuery(".menu-mobile > .menu-item a .next-list-item").click(function(event){
            event.preventDefault();
            var item_target = event.target;
            var item_list = jQuery(item_target).closest('a');
            var item_list_level_1 = jQuery(item_list).closest('li');
            var item_list_level_2 = jQuery(item_list_level_1).closest('ul');
            var link = jQuery(item_list).attr('data-next-down');
            //var get_item = jQuery(item_target).attr('data-next-down');
            var line = jQuery('[data-drop="'+link+'"]');

            if(jQuery(item_list_level_1).hasClass("menu-item-has-children")){
                if (jQuery(line).hasClass('sub-menu-2')){
                    jQuery('.sub-menu-2').removeClass('open');
                    jQuery(".sub-menu-description").removeClass("open");
                    jQuery(line).addClass("active");
                    jQuery(line).closest('.sub-menu-1').addClass('width');
                    jQuery(line).addClass('open');
                }else if(jQuery(line).hasClass("sub-menu-1")){
                    jQuery(".sub-menu-description").removeClass('open');
                    jQuery(".sub-menu-1 ").removeClass("open");
                    jQuery(".menu-item").removeClass("active");
                    jQuery(line).addClass('open');
                    jQuery(this).closest('li').addClass('active');
                }else if(jQuery(line).hasClass('sub-menu')){
                    jQuery(".menu-item").removeClass("active");
                    jQuery(item_list_level_1).addClass('active');
                    jQuery(line).addClass('open');
                }
            }else{
                jQuery(this).closest('.sub-menu-1').addClass('width');
                jQuery(".menu-item li").removeClass("active");
                jQuery(this).parents('li').addClass("active");
            }

        });


    });

    /* Click and select language in Pad Version and mobile */
    jQuery(".nav-mobile .wrapping-lang-content").click(function(){
        jQuery(".bottom_mobile_wrapp").toggleClass("show_lang_window");
        jQuery(".mobile_language .footer-top-menu").toggleClass("none");
    });
    /* Come back in menu */
    jQuery(".mobile_back").click(function(){
        jQuery(".bottom_mobile_wrapp").removeClass("show_lang_window");
        jQuery(".mobile_language .footer-top-menu").toggleClass("none");
    });
    /* Select current language */
    jQuery(".bottom_mobile_wrapp .items-btn button").click(function(){
        jQuery(".wrap-item-lang").removeClass("window");
        jQuery(this).closest(".wrap-item-lang").addClass("window");
    });
    /* Close current language */
    jQuery(".title_country_menu").click(function(){
        jQuery('.wrap-item-lang').removeClass("window");
    });

    jQuery(document).ready(function(){
        jQuery(".title_menu").click(function(event){
            jQuery(this).closest('ul').removeClass('width');
            jQuery(this).closest('.sub-menu-1').removeClass('width');
            jQuery(this).closest('ul').removeClass('open');
        });
    });

})();

/* Printed Correction Recursion on the Main Banner */
(function(){
    jQuery(document).ready(function(){
        var cor = function(){
            setTimeout(function(){
                if (jQuery(".printed_correction").hasClass("none")){
                    jQuery(".printed_correction").toggleClass("none");
                    cor();
                }else{
                    jQuery(".printed_correction").toggleClass("none");
                    cor();
                }
            }, 500);
        };
        cor();
    });
})();

/* Slick slider configuration */
(function() {
    jQuery(document).ready(function() {

        /* Our Client Slider */
        jQuery('.our_client .slider-box').slick({
            dots: true,
            infinite: true,
            speed: 700,
            fade: true,
            cssEase: 'linear',
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        dots: true,
                        arrows: false
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerMode: true,
                        focusOnSelect: true
                    }
                }
            ]
        });

        /* Our Cases Slider */
        jQuery(".slider_box_case").slick({
            dots: false,
            arrows: false,
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 2,
            //adaptiveHeight: true,
            autoplaySpeed: 2000,
            responsive: [
                {
                    breakpoint: 2900,
                    settings: {
                        slidesToShow: 7,
                        slidesToScroll: 3
                    }
                },
                {
                    breakpoint: 2300,
                    settings: {
                        slidesToShow: 7
                    }
                },
                {
                    breakpoint: 2000,
                    settings: {
                        slidesToShow: 5
                    }
                },
                {
                    breakpoint: 1550,
                    settings: {
                        slidesToShow: 4
                    }
                },
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        dots: true
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        centerMode: true,
                        focusOnSelect: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 700,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: true
                    }
                }
            ]
        });

        /* Partner Slider */
        jQuery(".partner_box").slick({
            dots: false,
            arrows: false,
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 4,
            adaptiveHeight: true,
            autoplay: true,
            autoplaySpeed: 2000,
            focusOnSelect: true,
            pauseOnFocus: true,
            responsive: [
                {

                    breakpoint: 2800,
                    settings: {
                        slidesToShow: 9
                    }
                },
                {
                    breakpoint: 2000,
                    settings: {
                        slidesToShow: 8,
                        slidesToScroll: 5
                    }
                },
                {
                    breakpoint: 1500,
                    settings: {
                        slidesToShow: 5
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        centerMode: true,
                        focusOnSelect: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerMode: true,
                        focusOnSelect: true
                    }
                }
            ]
        });

        /* Contact Us */
        jQuery(".sub--content_slider").slick({
            dots: false,
            arrows: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            adaptiveHeight: true,
            autoplay: true,
            autoplaySpeed: 2000,
            focusOnSelect: true,
            pauseOnFocus: true,
            responsive: [
                {
                    breakpoint: 1366,
                    settings: {
                        arrows: false
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2,
                        arrows: false
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        arrows: false
                    }
                }
            ]
        });

        /* Careers */
        jQuery(".wrapper_slider_personal").slick({
            dots: false,
            arrows: false,
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 3,
            adaptiveHeight: true,
            autoplay: true,
            autoplaySpeed: 2000,
            responsive: [
                {
                    breakpoint: 2900,
                    settings: {
                        slidesToShow: 6,
                        slidesToScroll: 3
                    }
                },
                {
                    breakpoint: 2300,
                    settings: {
                        slidesToShow: 5
                    }
                },
                {
                    breakpoint: 2000,
                    settings: {
                        slidesToShow: 4
                    }
                },
                {
                    breakpoint: 1500,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        centerMode: true,
                        focusOnSelect: true
                    }
                },
                {
                    breakpoint: 700,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });

        /* Testimonials or Review */
        jQuery(".list_achievement").slick({
            dots: false,
            arrows: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            adaptiveHeight: true,
            autoplay: true,
            autoplaySpeed: 2000,
            focusOnSelect: true,
            pauseOnFocus: true,
            centerPadding: '80px',
            responsive: [
                {
                    breakpoint: 1366,
                    settings: {
                        arrows: false
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        arrows: false
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        adaptiveHeight: false,
                        arrows: false
                    }
                }
            ]
        });

        /* About Us -- Evolution company */
        jQuery(".evolution_wrapper").slick({
            dots: true,
            arrows: false,
            infinite: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            adaptiveHeight: false,
            centerMode: true,
            centerPadding: '0px',
            autoplay: false,
            autoplaySpeed: 2000,
            focusOnSelect: true,
            pauseOnFocus: true,
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        centerPadding: '90px',
                        slidesToShow: 1,
                        centerMode: true
                    }
                },
                {
                    breakpoint: 500,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerPadding: '60px'
                    }
                },
                {
                    breakpoint: 500,
                    settings: {
                        centerPadding: '20px',
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });

        /* About Us -- Our team */
        jQuery(".wrapper_team").slick({
            dots: false,
            arrows: false,
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 2000,
            responsive: [
                {
                    breakpoint: 3000,
                    settings: {
                        slidesToShow: 9,
                        slidesToScroll: 3,
                    }
                },
                {
                    breakpoint: 2000,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 2,
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 500,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });

        jQuery('.reviews_about_us .slider-box').slick({
            dots: true,
            infinite: true,
            speed: 700,
            fade: true,
            cssEase: 'linear',
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        dots: false,
                        arrows: false
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        dots: true,
                        arrows: false
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerMode: true,
                        focusOnSelect: true
                    }
                }
            ]
        });
    });
})();

/* Show and hide information block on */
(function(){
    jQuery('.show_more_button').click(function(e){
        e.preventDefault();
        e.stopPropagation();
        jQuery('.wrapp_show_button').toggleClass('height_off');
        jQuery('.read-more-content').toggleClass('show_more');
    });
    jQuery('.less_more').click(function(e){
        e.preventDefault();
        e.stopPropagation();
        jQuery(".wrapp_show_button").toggleClass('height_off');
        jQuery('.read-more-content').toggleClass('show_more');

    });
})();

/* Popup callback */
(function(){
    jQuery("header .contact-button a").click(function(event){
        event.preventDefault();
        jQuery(".modal-contact-us").toggleClass("showing");
        jQuery(".sandwich").removeClass("open");
        jQuery(".content-mobile-menu").removeClass("open");
        jQuery(".wrapper-mobile-menu .contact-button").removeClass('wp_hidden');
    });

    jQuery('.vacancies_items.offer_vacancy').on('click',function(e){
        e.preventDefault();
        jQuery(".modal-offer-vacancy").toggleClass("showing");
    });

    jQuery(document).click(function(event){
        var target = event.target;
        if(jQuery(target).hasClass("popup-container") || jQuery(target).hasClass("popup-window")){
            jQuery(".sandwich").removeClass("open");
            jQuery(".content-mobile-menu").removeClass("open");
            jQuery(".modal").removeClass("showing");
            jQuery(".modal-search").removeClass("showing");
            jQuery(".right-menu").removeClass("active_window");
            jQuery(".right-menu li").removeClass("active_window");
            jQuery(".modal-language").removeClass("show");
        }
    });

    jQuery(".close_popup").click(function(e){
        e.preventDefault();
        jQuery(".modal").removeClass("showing");
        jQuery(".modal-offer-vacancy").removeClass("showing");

    });

})();

/* Sent service form and open/close popup */
(function(){

    /* Show Popup */
    jQuery('.action_popup').click(function(event){
        event.preventDefault();
        jQuery(".modal-contact-us").toggleClass("showing");
    });

    /* Search Popup */
    jQuery(".search-item").click(function(e){
        jQuery(".modal-search").toggleClass("showing");
        jQuery(".content-mobile-menu").removeClass("open");
        jQuery(".sandwich").removeClass("open");
        jQuery(".wrapper-mobile-menu .contact-button").removeClass('wp_hidden');
    });

})();

/* Select different language popup */
(function(){

    jQuery(document).ready(function(){
        var cook = getCookie("language");
        if ( cook === undefined ) {
            jQuery(".modal-language").addClass("show");
        }
    });

    jQuery(".option").click(function(){
        jQuery('.option .check').toggleClass("checked");
    });

    jQuery(".different_country").click(function(event){
        event.preventDefault();

        if(jQuery('.check').hasClass("checked")){
            setCookie('language', 'checked', 31);
        }

        var width = jQuery(document).width();
        jQuery(".modal-language").removeClass("show");
        if(width > 991){
            jQuery(".language-item").addClass("active_window");
        }else{
            jQuery(".sandwich").addClass("open");
            jQuery(".content-mobile-menu").addClass("open");
            jQuery(".bottom_mobile_wrapp").addClass("show_lang_window");
            jQuery(".mobile_language").addClass("active_window");
        }
    });

    jQuery(".stay").click(function(){
        if(jQuery('.check').hasClass("checked")){
            setCookie('language', 'checked', 31, false);
        }
        jQuery(".modal-language").removeClass("show");
    });

    jQuery(".go_to").click(function(event){
        if(jQuery('.check').hasClass("checked")){
            setCookie('language', 'checked', 31, false);
        }
    });

})();

/* Set cookies / Get cookies  */
function setCookie(c_name, value, exdays, path) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + exdays);
    if (! path) {
        var c_value = escape(value) + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString() +"; path=/;");
    }else{
        var c_value = escape(value) + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString() +";");
    }
    document.cookie = c_name + "=" + c_value;
}

function getCookie(c_name) {
    var i, x, y, ARRcookies = document.cookie.split(";");
    for (i = 0; i < ARRcookies.length; i++) {
        x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
        y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
        x = x.replace(/^\s+|\s+$/g, "");
        if (x == c_name) {
            return unescape(y);
        }
    }
}

function deleteCookie(c_name) {
    document.cookie = c_name + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT";
}

/* Upload file in Vacancy page */
(function(){

    document.addEventListener("DOMContentLoaded", function () {
        let body = document.body;

        if ( body.classList.contains('page-template-single-vacancy') || body.classList.contains('page-template-careers')  ) {
            var inputs = document.querySelectorAll('.wpcf7-file');
            Array.prototype.forEach.call(inputs, function(input){
                jQuery(input).parents('.upload_files').append('<div class="append_name_file default-flex-block-row center_flex_item"><span></span><img class="delete_file" src="/wp-content/themes/itsvit/img/delete_file.svg" alt=""></div>');
                input.addEventListener('change', function(e){
                    var fileName = '';
                    if( this.files && this.files.length > 1 ) {
                        fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
                        jQuery(".upload_files").addClass("added");
                    } else {
                        fileName = e.target.value.split( '\\' ).pop();
                    }

                    if( fileName ) {
                        jQuery(".upload_files").addClass("added");
                        jQuery('.append_name_file span').html(fileName);
                    }
                });
            });
        }


        jQuery(".delete_file").click(function(event){
            jQuery(".upload_files").removeClass("added");
        });
    });

})();

/* Open tags on sidebar-blog */
(function(){
    jQuery(".btn_opens_tags").click(function(){
        jQuery(".tags_wrapper").toggleClass('opening');
    });
})();

/* Reading line on header */
(function(){

    jQuery(document).on('scroll', onScroll);


    function onScroll(event) {

        if (jQuery('body').hasClass('single-post') || jQuery('body').hasClass('single')) {
            var header = jQuery('header.top');
            var height_page_px = jQuery('body').height() - jQuery(window).height();;
            var height_page_top = jQuery(document).scrollTop();

            var result = (height_page_top / height_page_px) * 100;

            /* Get % on scroll for page  */

            var widthLine = Math.round(result, 2);

            if (widthLine > 2){
                var element = document.getElementById("line_scrolling");
                element.style.width = widthLine+"%";
            }else{
                var element = document.getElementById("line_scrolling");
                element.style.width = "0%";
            }
        }
    }
})();

/* Like post */
(function(){
    jQuery(".likes_btn a").click(function(e){
        e.preventDefault();
        e.stopPropagation();

        var id = jQuery("h1").attr('data-id');
        var status = getCookie( "likes" );

        if ( status != "yes"){
            jQuery(".result_like-link").fadeOut('slow');
            setCookie("likes", "yes", 300, true);
            jQuery.ajax({
                url: '/wp-admin/admin-ajax.php',
                type: 'POST',
                data: {
                    action: 'likePost',
                    post: id
                },
                success: function(data) {
                    if (data != '') {
                        jQuery(".result_like-link").html(data);
                        jQuery(".result_like-link").fadeIn(100, function(){
                            jQuery(".likes_btn").addClass('success');
                            jQuery(".icon--counters_item.like_counter span").html(data);
                        });
                    }
                }
            });
        } else {
            if (jQuery(".likes_btn").hasClass('success')) {
                jQuery(".result_like-link").fadeOut('slow');
                deleteCookie('likes');
                jQuery.ajax({
                    url: '/wp-admin/admin-ajax.php',
                    type: 'POST',
                    data: {
                        action: 'dislikePost',
                        post: id
                    },
                    success: function(data) {
                        if (data != '') {
                            jQuery(".result_like-link").html(data);
                            jQuery(".result_like-link").fadeIn(100, function(){
                                jQuery(".likes_btn").removeClass('success');
                                jQuery(".icon--counters_item.like_counter span").html(data);
                            });
                        }
                    }
                });
            }
        }
    });
})();

/* Share counter */
(function(){

    jQuery('.item-flying-social a').click(function(event){
        event.preventDefault();
        var id = jQuery("h1").attr('data-id');
        var li = jQuery(this).parents();
        var soc_name = jQuery(this).parents().attr('title');
        var share = jQuery('[title="Shares"] span').text();
        var counter_share = parseInt(share);

        if (id != '' && soc_name != '') {
            jQuery('[title='+soc_name+'] span').fadeOut(100);
            jQuery.ajax({
                url: '/wp-admin/admin-ajax.php',
                type: 'POST',
                data : {
                    action: 'share_post',
                    id: id,
                    name: soc_name
                },
                success: function (data){
                  if ( data !== '' ) {
                      jQuery('[title='+soc_name+'] span').html(data);
                      jQuery('[title='+soc_name+'] span').fadeIn(function(){
                          jQuery('.share_counter span').html(counter_share + 1);
                      });
                  }
                }
            });
        }
    });

})();

/* Fixed sidebar for scroll page */
(function () {

    jQuery(document).ready(function(){

        var window_width = jQuery(window).width(); //Get display width
        var window_height = jQuery(window).height(); //Get display height

        if (window_width > 991 && window_height > 600 && jQuery('body').hasClass('single-post')) {
            var subscribeWp = jQuery('.subscribe-wp').offset().top - 300;
            var sticky = jQuery('#sidebar_share_fixed');

            if (!! sticky.offset()) { // make sure ".sticky" element exists
                var generalSidebarHeight = jQuery(".counters---details_post").offset().top;
                var stickyTop = sticky.offset().top;
                var stickOffset = 0;
                var stopPoint = generalSidebarHeight - stickOffset;
                var diff = 80;

                jQuery(window).scroll(function(){ // scroll event
                    var windowTop = jQuery(window).scrollTop(); // returns number

                    if (stopPoint < windowTop) {
                        sticky.css({ position: 'fixed', top: diff });
                        if (subscribeWp < windowTop ) {
                            sticky.css('opacity', '0');
                        } else {
                            sticky.css('opacity', '1');
                        }
                    } else if (stickyTop < windowTop) {
                        sticky.css({position: 'relative', top: 'initial'});
                    } else {
                        sticky.css({position: 'relative', top: 'initial'});
                    }
                });
            }
        }
    });

    jQuery(document).ready(function(){
        if (jQuery('body').hasClass('single-post')) {
            var height_title = jQuery(".title--main_content_post").height();
            jQuery(".social_media_post").css("margin-top", height_title + 100);
        }
    });
})();

/* Function GDPR */
(function(){
    jQuery('.accept_gdpr').click(function(e){
        setCookie('gdpr_itsvit', 'accept', 360, false);
        jQuery('.wrapper_gdpr').addClass('none');
    });
    jQuery('.decline_gdpr').click(function(e){
        jQuery('.wrapper_gdpr').addClass('none');
    });
})();

/* Ready for DOM document functions */
(function(){
    jQuery(document).ready(function() {
        //Animate scroll
        var scrollTo = jQuery("a[href^='#']");

        scrollTo.click(function() {
            jQuery("html, body").animate({
                scrollTop: jQuery(jQuery.attr(this, "href")).offset().top - 40
            }, 200 );
        });
        return false;
    });
})();

/* Get random block */
(function(){
    var page = jQuery('body.home');

    if (page) {
        jQuery(document).ready(function(){
            function delay(interval) {
                let setup = new Promise(function (resolve) {
                    var newSortingMass = randomBlock();

                    if (newSortingMass !== null){
                        var counter_massive = newSortingMass.length - 1;
                        for (let i = 0; i < newSortingMass.length; i++) {
                            (function(index){
                                setTimeout(function () {
                                    jQuery('#banner-head li').removeClass('effect');
                                    jQuery('#banner-head li[data-name="'+newSortingMass[i]+'"]').addClass('effect');

                                    if (counter_massive == i) {
                                        resolve('Success');
                                    }

                                }, i * interval);
                            })(i);
                        }
                    }
                });

                setup.then(
                    (successMessage) => {
                        delay(2000);
                    }
                );
            }

            var startTransition = delay(2000);

            jQuery('#banner-head .banner_item_service').hover(function() {
                jQuery('#banner-head li').addClass('non_effect');
            }, function(){
                jQuery('#banner-head li').removeClass('non_effect');
            });

        });

        function randomBlock()
        {
            var block = [];
            jQuery('#banner-head .list_services .banner_item_service').each(function(index){
                block.push(jQuery(this).attr('data-name'));
            });

            var newSorting = block.sort();

            return newSorting;
        }
    }
})();

/* Google Events */
(function(){

    jQuery(document).ready(function(){
        jQuery('.search-item > a').click(function(){
            ga( 'create', 'UA-86041415-2', 'auto' );

            ga('send', {
	            hitType: 'event',
                eventCategory: 'Search',
                eventAction: 'Watch'
            });

           /* gtag('event', 'serach', {
                'event_category' : 'Search',
                'event_label' : 'Search'
            });*/
            console.log(123);
        });

        jQuery('.phone-item > a').click(function(){
            ga('send',  {
	            hitType: 'event',
                eventCategory: 'Phone',
                eventAction: 'Watch'
            });
        });

        jQuery('.mail-item > a').click(function(){
            ga('send', {
	            hitType: 'event',
                eventCategory: 'Mail',
                eventAction: 'Watch'
            });
        });

        jQuery('.language-item > a').click(function(){
            ga('send', 'event', {
                eventCategory: 'Language',
                eventAction: 'Watch'
            });
        });

        jQuery('.contact-button > a').click(function(){
        	console.log('test')
            ga('send', 'event', {
                eventCategory: 'Сontact-Us',
                eventAction: 'Watch'
            });
        });

        //Service Page

        jQuery('#item_service .action_banner .action_popup').click(function(){
            ga('send', 'event', {
                eventCategory: 'Сontact-Us',
                eventAction: 'Watch',
                eventLabel: 'Services-First'
            });
        });

        jQuery('.service_item_middle .action_popup').click(function(){
            ga('send', 'event', {
                eventCategory: 'Сontact-Us',
                eventAction: 'Watch',
                eventLabel: 'Services-Second'
            });
        });

        //Send FORM

        document.addEventListener( "wpcf7mailsent", function( event ) {
            if ("116" == event.detail.contactFormId) {
                ga('send', 'event', {
                    eventCategory: 'Contact-Us',
                    eventAction: 'Send'
                });
            }

            if ("383" == event.detail.contactFormId) {
                ga('send', 'event', {
                    eventCategory: 'Join-team',
                    eventAction: 'Sent'
                });
            }

            if ("7048" == event.detail.contactFormId) {
                ga('send', 'event', {
                    eventCategory: 'Contact-Us-Banner',
                    eventAction: 'Sent'
                });
            }

        }, false );

    });

})();

// Fixed left sidebar for single and archive post
(function(){
    jQuery(document).ready(function(){

        var window_width = jQuery(window).width(); //Get display width
        var window_height = jQuery(window).height(); //Get display height
        var footer = jQuery('footer').offset().top - 300;

        if (window_width > 991 && window_height > 600 && jQuery('.absolute-sidebar').find('.post-type-archive')) {
            var sticky = jQuery('.container_fixed_industries');
            if (!! sticky.offset()) { // make sure ".sticky" element exists

                var generalSidebarHeight = jQuery(".wrapper_other").offset().top;
                var stickyTop = sticky.offset().top;
                var stickOffset = 0;
                var stopPoint = generalSidebarHeight - stickOffset;
                var diff = 80;

                jQuery(window).scroll(function(){ // scroll event
                    var windowTop = jQuery(window).scrollTop(); // returns number

                    if (stopPoint < windowTop) {
                        sticky.css({ position: 'fixed', top: diff });
                        if (footer < windowTop ) {
                            sticky.css('opacity', '0');
                        } else {
                            sticky.css('opacity', '1');
                        }
                    } else if (stickyTop < windowTop) {
                        sticky.css({position: 'relative', top: 'initial'});
                    } else {
                        sticky.css({position: 'relative', top: 'initial'});
                    }
                });

            }
        }

    });
})();

/* Counter for Banner on About Us page */
(function(){
    if (jQuery('body').hasClass('page-template-about_us')){

        //Get banner counters data
        var project = jQuery('.project_counter').attr('data-counter');
        var employees = jQuery('.employees_counter').attr('data-counter');
        var testimonials = jQuery('.testimonials_counter').attr('data-counter');
        var years_of_work = jQuery('.years_of_work_counter').attr('data-counter');
        var award = jQuery('.award_counter').attr('data-counter');


        // Banner counters
        jQuery(document).ready(function(){

            setTimeout(function () {

                jQuery('.project_counter span').spincrement({
                    from: 1,
                    to: Math.round(project),
                    thousandSeparator: '',
                    duration: 5000,
                });

                jQuery('.employees_counter span').spincrement({
                    from: 1,
                    to: employees,
                    thousandSeparator: '',
                    duration: 7000,
                });

                jQuery('.testimonials_counter span').spincrement({
                    from: 1,
                    to: testimonials,
                    thousandSeparator: '',
                    duration: 7000,
                });

                jQuery('.years_of_work_counter span').spincrement({
                    from: 1,
                    to: years_of_work,
                    duration: 7000,
                });

                jQuery('.award_counter span').spincrement({
                    from: 1,
                    to: award,
                    duration: 7000,
                });

            }, 1000);
        });
    }
})();

/* Counter for Map-box on About Us page */
(function(){
    if (jQuery('body').hasClass('page-template-about_us')){

        //Get map counters data
        var project_map_1 = jQuery('.map_counter_1 .map_counter_text').attr('data-counter-map');
        var project_map_2 = jQuery('.map_counter_2 .map_counter_text').attr('data-counter-map');
        var project_map_3 = jQuery('.map_counter_3 .map_counter_text').attr('data-counter-map');
        var project_map_4 = jQuery('.map_counter_4 .map_counter_text').attr('data-counter-map');
        var project_map_5 = jQuery('.map_counter_5 .map_counter_text').attr('data-counter-map');
        var project_map_6 = jQuery('.map_counter_6 .map_counter_text').attr('data-counter-map');

        function start(){
            jQuery('.map_counter_1 .map_counter_text').spincrement({
                from: 1,
                to: project_map_1,
                thousandSeparator: '',
                duration: 5000,
            });
            jQuery('.map_counter_2 .map_counter_text').spincrement({
                from: 1,
                to: project_map_2,
                thousandSeparator: '',
                duration: 9000,
            });
            jQuery('.map_counter_3 .map_counter_text').spincrement({
                from: 1,
                to: project_map_3,
                thousandSeparator: '',
                duration: 9000,
            });
            jQuery('.map_counter_4 .map_counter_text').spincrement({
                from: 1,
                to: project_map_4,
                thousandSeparator: '',
                duration: 9000,
            });
            jQuery('.map_counter_5 .map_counter_text').spincrement({
                from: 1,
                to: project_map_5,
                thousandSeparator: '',
                duration: 9000,
            });
            jQuery('.map_counter_6 .map_counter_text').spincrement({
                from: 1,
                to: project_map_6,
                thousandSeparator: '',
                duration: 9000,
            });
        }

        jQuery(document).ready(function () {

            var countBlockTop = jQuery('.map_counters').offset().top;
            var windowHeight = window.innerHeight;
            var show = true;

            jQuery(window).scroll( function (){
                if(show && (countBlockTop < jQuery(window).scrollTop() + windowHeight - 200)){
                    show = false;
                    jQuery('.item--map_counters').animate({
                        opacity: 1
                    }, 1000);
                    setTimeout(start(), 2000);
                }
            })
        });
    }
})();

/* Slider line evolutions on About Page */
(function(){
    jQuery(document).ready(function(){

        var listyears = [];

        //Added next year block

        jQuery('.evolution_wrapper .slick-track').append('<div class="evolution_item default-flex-block-column slick-slide" id="slick-slide23" data-slick-index="3" aria-hidden="true" tabindex="-1" role="tabpanel">\n' +
            '                                    <div class="evolution_border">\n' +
            '                                        <div class="title_evolution">\n' +
            '                                            <span>Coming <br>Soon...</span>\n' +
            '                                        </div>\n' +
            '                                        <div class="year_evolution">\n' +
            '                                            <span>2020</span>\n' +
            '                                        </div>\n' +
            '                                        <div class="list_evolutions">\n' +
            '                                            <ul class="container--list_evolution">\n' +
            '                                            </ul>\n' +
            '                                        </div>\n' +
            '                                    </div>\n' +
            '                                </div>');

        jQuery('.wrapper_slider_evolution .evolution_item').each(function( index ){
            var years = jQuery(this).find('.year_evolution span').text();
            if (years !== '') {
                listyears.push(years);
            }
        });

        jQuery('.wrapper_slider_evolution .slick-dots li').each(function (index) {
            jQuery(this).append('<span>'+listyears[index]+'</span>');
        });
        jQuery('.wrapper_slider_evolution .slick-dots').append('<span class="line_evolution"><span class="line_evolution_success"></span></span>');

        var originalAddClassMethod = jQuery.fn.addClass;
        var originalRemoveClassMethod = jQuery.fn.removeClass;
        jQuery.fn.addClass = function(){
            var result = originalAddClassMethod.apply( this, arguments );
            jQuery(this).trigger('classChanged');
            return result;
        }
        jQuery.fn.removeClass = function(){
            var result = originalRemoveClassMethod.apply( this, arguments );
            jQuery(this).trigger('classChanged');
            return result;
        }


        jQuery('.wrapper_slider_evolution .slick-dots li').bind('classChanged', function(){
            if (jQuery(this).hasClass('slick-active')){
                var active_dot = jQuery(this);
                var positionActiveDot = active_dot.position();

                jQuery(this).prevAll().find('button').css('background', '#FF6633');
                jQuery(this).prevAll().find('span').css('color', '#FF6633');
                jQuery(this).find('button').css('background', '#FF6633');
                jQuery(this).find('span').css('color', '#FF6633');
                jQuery(this).nextAll().find('button').css('background', '#7095C5');
                jQuery(this).nextAll().find('span').css('color', '#7095C5');
                jQuery('.wrapper_slider_evolution .line_evolution_success').css('width', positionActiveDot['left'] + 7);
            }
        });
    });

})();

/* Switch marker on the map and line progress (Contact Us Page) */
(function () {
    jQuery(document).ready(function () {
        if (jQuery('body').hasClass('page-template-contacts')){
            sprintLine();

            jQuery('.map_box .info_map').click(function () {
                jQuery('.map_box .info_map').removeClass('active_country');
                jQuery(this).addClass('active_country');
                sprintLine();
            });

            if (jQuery(document).width() < 600){
                jQuery(".info_map .locate_country").click(function (event) {
                    event.preventDefault();


                    let lat = jQuery(this).closest(".info_map").attr("data-lat");
                    let lng = jQuery(this).closest(".info_map").attr("data-lng");

                    if (lat != ' ' && lng != ' ') {
                        window.open("http://maps.apple.com/?q="+lat+","+lng+"&amp;ll=");
                    }
                });
            }
        }
    });

    function sprintLine() {

        let wd = jQuery(document).width();
        let padding = 50;

        if (wd < 769) {
            padding = 25;
        }

        var line = jQuery('.spint-progress'); //Get progress line
        var line_width = jQuery('.active_country').width(); //Get Width progress
        var line_position = jQuery('.active_country').position();
        jQuery(line).css('max-width', line_width + padding);
        jQuery(line).css('left', line_position['left']);
    }

})();

(function () {
    document.addEventListener( 'wpcf7mailsent', function( event ) {
        var inputs = event.detail.inputs;

        if ("383" == event.detail.contactFormId) {
                var data = new FormData();
                var form_data = jQuery('#wpcf7-f383-o1 form')[0];
                console.log(form_data);
                data.set('action', 'request_hurma_api');
                jQuery.each(form_data, function (key, input) {
                    if (input.name == 'your-name') {
                        data.append('name', input.value);
                    } else if (input.name == 'your-tel'){
                        data.append('phone', input.value);
                    } else if (input.name == 'your-email') {
                        data.append('email', input.value);
                    } else if (input.name == 'your-message') {
                        data.append('description', input.value);
                    }
                });

                var file_data = jQuery('.file-952 input')[0].files;
                for (var i = 0; i < file_data.length; i++) {
                    data.append("cv", file_data[i] );
                }

                if ( jQuery('.form_sidebar').data('settings-id') ) {
                    data.append('hurma_vacancy_id', jQuery('.form_sidebar').data('settings-id'));
                }

                jQuery.ajax({
                    url: '/wp-admin/admin-ajax.php',
                    method: "POST",
                    enctype: 'multipart/form-data',
                    processData: false,
                    contentType: false,
                    cache: false,
                    data : data,
                    success: function (data) {
                        //console.log(data);
                    },
                    error: function (e) {
                        //error
                    }
                });
        }
    }, false );


})();
