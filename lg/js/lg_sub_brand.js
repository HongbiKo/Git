$(document).ready(function(){
    // 탭메뉴 가로형
    $(".tab ul li").click(function(){
        $(this).addClass('on').siblings().removeClass('on');
        $("#"+$(this).data('id')).addClass('on').siblings().removeClass('on');
    });
    // $(".tab ul li:eq(1)").click(function(){
    //     $("#"+$(this).data('id')).find('.swiper-container')[0].swiper.update();
    //     $("#"+$(this).data('id')).find('.swiper-container')[1].swiper.update();
    //     $("#"+$(this).data('id')).find('.swiper-container')[2].swiper.update();
    //     $("#"+$(this).data('id')).find('.swiper-container')[3].swiper.update();
    //     $("#"+$(this).data('id')).find('.swiper-container')[4].swiper.update();
    //     $("#"+$(this).data('id')).find('.swiper-container')[5].swiper.update();
    //     $("#"+$(this).data('id')).find('.swiper-container')[6].swiper.update();
    //     $("#"+$(this).data('id')).find('.swiper-container')[7].swiper.update();
    // });


    //pc box hover
    if($(window).width() > 640){
        $('.box').mouseover(function(){
            $(this).addClass('on');
            $(this).children('p').addClass('on');
        })
        $('.box').mouseleave(function(){
            $(this).removeClass('on');
            $(this).children('p').removeClass('on');
        })
    }

});

var swiper1 = new Swiper(".mySwiper.Subswiper", {
    centeredSlides: true,
    slidesPerView: 2,
            spaceBetween: 0,
            pagination: {
            el: ".swiper-pagination",
            clickable: true,
            },
    observer: true,
    observeParents: true,
    //각 탭에서 swiper업데이트 해주기(위의 배열을 쓰지 않고 쓰와이퍼 변수안에서 이걸 써주면 알아서 업데이트 32.tabcarousel참조)
    breakpoints : {
        640 : {
            centeredSlides: true,
            slidesPerView: 5,
            spaceBetween: 0,
            pagination: {
            el: ".swiper-pagination",
            clickable: true
            }
        }
    }
});