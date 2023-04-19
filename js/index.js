$(document).ready(function ($) {
    // header onscroll shadow
    $(window).on('scroll', function(){
        if ($(this).scrollTop() >= 150) {
            $("header").addClass("shadow");
        }
        else $("header").removeClass("shadow");
    });
    // mobile manu
    $(".nav-icon, .menu__list--item").click(function(){
        if ($(window).width() < 768) { 
            $(".menu").toggle();
            $("body").toggleClass('overflow-hidden');
            $(".nav-icon").toggleClass("nav-icon--open");
        }
    });
    if ($(window).width() < 768) { 
        $(".logo").click(function(){
            $(".menu").hide();
            $("body").removeClass('overflow-hidden');
            $(".nav-icon").removeClass("nav-icon--open");
        });
    }
    $(window).resize(function() {
        if ($(window).width() < 768) {
            $(".menu").hide();
            $(".nav-icon").removeClass("nav-icon--open");
            $(".logo").click(function(){
                $(".menu").hide();
                $("body").removeClass('overflow-hidden');
                $(".nav-icon").removeClass("nav-icon--open");
            });
        } else {
            $(".menu").show();
            $(".logo").click(function(){$(".menu").show();});
        } 
    });
    // news load more / less
    $(function(){
        $(".article-item").slice(0, 6).css("display", "flex").show();
        $("#load").click(function(e){ 
            e.preventDefault();     
            $(".article-item").slice(6, 13).fadeOut(500);          
            $(this).text($(this).text() == 'Show less' ? 'Load More' : 'Show less');
            $(".article-item:hidden").slice(0, 6).fadeIn(1200);
          
        });
    });
});