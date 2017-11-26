(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();
        
        
        
        //Jquery Sticky Menu
        $(".header-top-area").sticky({topSpacing:0});

        // jQuery scroll spy
        $('body').scrollspy({ 
            target: '.navbar-collapse',
            offset: 95
        }); 
        
        // jQuery Smooth Scroll
        $('.navbar-nav li a, .scroll-to-bottom a').bind('click', function(event) {
            var $anchor = $(this);
            var headerH = '78';
            $('html, body').stop().animate({
                scrollTop : $($anchor.attr('href')).offset().top - headerH + "px"
            }, 1200, 'easeInOutCirc');

            event.preventDefault();
        }); 
        
        //For Parallax Background
		$('.parallax-bg').parallax("50%", 0.1);
		$('.reviews-bg').parallax("50%", 0.3);
        
        WOW().init();
    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	