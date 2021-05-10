$(document).ready(function(){
    // 탭메뉴 가로형
    $(".tab ul li").click(function(){
        $(this).addClass('on').siblings().removeClass('on');
        $("#"+$(this).data('id')).addClass('on').siblings().removeClass('on');

        $("#"+$(this).data('id')).find('.swiper-container')[0].swiper.update();
        $("#"+$(this).data('id')).find('.swiper-container')[1].swiper.update();
        $("#"+$(this).data('id')).find('.swiper-container')[2].swiper.update();
        $("#"+$(this).data('id')).find('.swiper-container')[3].swiper.update();
        $("#"+$(this).data('id')).find('.swiper-container')[4].swiper.update();
        $("#"+$(this).data('id')).find('.swiper-container')[5].swiper.update();
        $("#"+$(this).data('id')).find('.swiper-container')[6].swiper.update();
        $("#"+$(this).data('id')).find('.swiper-container')[7].swiper.update();

        
    });

});

var swiper1 = new Swiper(".mySwiper.Subswiper", {
    centeredSlides: true,
    slidesPerView: 1,
            spaceBetween: 0,
            pagination: {
            el: ".swiper-pagination",
            clickable: true,
            },
    breakpoints : {
        640 : {
            centeredSlides: true,
            slidesPerView: 5,
            spaceBetween: 0,
            pagination: {
            el: ".swiper-pagination",
            clickable: true,
            }
        }
    }
});