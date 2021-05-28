$(document).ready(function(){
    var lastWidth = $(window).width();
    $(window).resize(function(){
        if($(window).width()!=lastWidth){
            location.reload();
            lastWidth = $(window).width();
            return false;
        }
    });
    //리사이징 할때마다 새로고침

    $('a[href^="#content_start"]').on('click',function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });
    //a버튼 content시작 위치 이동


    $(".scroll span").each(function(){
        var thisOffset = $("."+$(this).data('id')).offset().top;

        $(this).click(function(){
            $("html, body").animate({
                scrollTop : thisOffset
            }, 1000);
            $(this).addClass('on');
        });
    });


    var scrolltop = $(window).scrollTop();
    $("section").each(function(){
        if(scrolltop >= $(this).offset().top){
            $("span[data-id="+$(this).attr('class')+"]").addClass('on').siblings().removeClass('on');
        }
        else if(scrolltop >= $(".facility").offset().top +130){
            $("span[data-id=footer]").addClass('on').siblings().removeClass('on');
        }
    });
});



var swiper = new Swiper(".mySwiper.ticketSwiper", {
    pagination: {
        el: ".swiper-pagination.ticketPagination",
        clickable: true,
    },
    });





// var swiper = new Swiper(".mySwiper", {
//     speed: 600,
//     parallax: true,
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true
//     },
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev"
//     }
// });