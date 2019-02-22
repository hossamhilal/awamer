$(window).on('load', function () {
    $('.loader').fadeOut(500, function () {
        $(this).remove();
    });      
});

// global $ 
$(document).ready(function ($) {
    'use strict';

    // SHOW MOBILE MENUE 
    $('.header-nav .btn').on('click', function () {
        $(this).toggleClass('open');
        $('.navbar-menu').toggleClass('show-menue');
        $('.header-nav .over-lay').toggleClass('show-menue');
        $('body').toggleClass('no-scroll');
    });

    // HIDE MOBILE MENUE 
    $('.header-nav .over-lay').on('click', function () {
        $('.header-nav .btn').removeClass('open');
        $('.navbar-menu').removeClass('show-menue');
        $('.header-nav .over-lay').removeClass('show-menue');
        $('body').css('overflow-y','auto');
    });

    // FIXED NAVBAR 
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.header-nav').addClass("nav-fixed");
            $('.header-nav .nav-box').addClass("container");
        }
        else {
            $('.header-nav').removeClass("nav-fixed");
            $('.header-nav .nav-box').removeClass("container");
        }
    });

    // NAV DROPDOWN
    if ($(window).width() < 1024) {
        $('.nav-item ul').slideUp();
        $('.nav-item').on('click',function(){
            $('.nav-item ul').slideUp();
            if($(this).find('ul').is(':visible')){
                $(this).find('ul').slideUp(100);
                $(this).removeClass('nav-auto');
            }else{
                $(this).find('ul').slideDown();
                $(this).addClass('nav-auto');
            }
        });
    }

    // BTN ANIMATION 
    $('.btn-green')
    .on('mouseenter', function(e) {
			var parentOffset = $(this).offset(),
      		relX = e.pageX - parentOffset.left,
      		relY = e.pageY - parentOffset.top;
			$(this).find('span').css({top:relY, left:relX})
    })
    .on('mouseout', function(e) {
			var parentOffset = $(this).offset(),
      		relX = e.pageX - parentOffset.left,
      		relY = e.pageY - parentOffset.top;
    	$(this).find('span').css({top:relY, left:relX})
    });

    // SHOW BLOCK IMG ON HOME WHILE HOVER 
    $(function(){
        var block   = $('.last-products .product');
        var def_Img = $('#append-img').find('img');
        var def_src = def_Img.attr('src');
        block.hover(function(){
            var img   = $(this).find('img');
            var src   = img.attr('src');
            def_Img.attr('src', src);
        }, function(){
            def_Img.attr('src', def_src);
        });
    });

    
    $('.tabs-list button').click(function (e) {
        $('.tabs-list button').removeClass('active-tap');
        $(this).addClass('active-tap')
    });

    // FORM CONTROL ANIMATION 
    $('.form-control').each(function() { 
        if ($(this).val() != "") {
            $(this).parent('.field').addClass('animation');
            
        }
    });
    $('.form-control').focus(function(){
        $(this).parent('.field').addClass('animation');
    });
    $('.form-control').focusout(function(){
        if($(this).val() === "")
        $(this).parent('.field').removeClass('animation');
    });


    // FAQ QUESTIONS SHOW ANSWER
    var quest   =  $('.question-box');
    var q_btn   =  quest.find('.question');
    var answer  =  quest.find('.answer');
    q_btn.click(function(){
        answer.slideUp();
        q_btn.removeClass('active');
        q_btn.find('.icon').removeClass('rotate');
        if($(this).parent(quest).find(answer).is(':visible')){
            $(this).parent(quest).find(answer).slideUp(100);
            $(this).find('.icon').removeClass('rotate');
            $(this).removeClass('active');
        }else{
            $(this).parent(quest).find(answer).slideToggle();
            $(this).find('.icon').toggleClass('rotate');
            $(this).addClass('active');
        }
    });

    // PRODUCTS TABS SLIDER 
    $('.about-tabs a').click(function (e) {
        e.preventDefault();     
        var itemId  = $(this).attr("href");
        var tablist = $('.tabslist'); 

        $('.single-tabcontent').removeClass('active-content'); 
        $(itemId).addClass('active-content');     

        tablist.find('li').removeClass('active');
        $(this).parent('li').addClass('active');
    });


    // APPS TABS SLIDER 
    $('.app-tablist a').click(function (e) {
        e.preventDefault();     
        var itemId  = $(this).attr("href");
        var tablist = $('.app-tablist'); 

        $('.app-tab-contnet').removeClass('active-content'); 
        $(itemId).addClass('active-content');     

        tablist.find('a').removeClass('active');
        $(this).addClass('active');
    });




    // PHOTO GALLERY BIG SHOW PHOTO
    $('.product-owl').owlCarousel({
        rtl: true,
        margin: 0,
        // autoplay: true,
        loop: true,
        nav: true,
        dots:true,
        autoplaySpeed: 2000,
        navText: ["<i class='icofont-thin-right'></i>", "<i class='icofont-thin-left'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    // PROJECT PHOTOS SLIDER
    $('.project-owl').owlCarousel({
        rtl: true,
        margin: 0,
        autoplay: true,
        loop: true,
        nav: true,
        dots:true,
        autoplaySpeed: 2000,
        navText: ["<i class='icofont-thin-right'></i>", "<i class='icofont-thin-left'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    // PROJECT PHOTOS SLIDER
    var $owl = $('.team-owl');
    $owl.children().each( function( index ) {
        $(this).attr( 'data-position', index );
    });
    
    $owl.owlCarousel({
        rtl: true,
        center: true,
        loop: true,
        margin: 0,
        autoplay: false,   
        nav: false,
        dots:false,
        autoplaySpeed: 2000,
        navText: ["<i class='icofont-thin-right'></i>", "<i class='icofont-thin-left'></i>"],
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 7
            }
        }
    });

    $(document).on('click', '.team-owl .owl-item>div', function() {
        $owl.trigger('to.owl.carousel', $(this).data( 'position' ) );
    });

    // APPS TABS SLIDER 
    $('.team-slider a').click(function (e) {
        e.preventDefault();     
        var itemId  = $(this).attr("href");
        var tablist = $('.team-owl'); 
        $('.team-slider-content .team').removeClass('active-content'); 
        $(itemId).addClass('active-content');     
    });

});

