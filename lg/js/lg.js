var swiper1 = new Swiper('.swiper-container.basicSwiper', {
    direction: 'vertical',
    slidesPerView: 1,
    mousewheel: true,
    // loop: true,/
    pagination: {
        el: '.swiper-pagination.maincontroller',
        clickable: true,
    },
    on: {
        slideChangeTransitionStart: function() {
            $('.title').hide();
        },
        slideChangeTransitionEnd: function() {
            setTimeout(function () {
                $('.title').slideDown(1000);
            }, 1000);
        },
        slideChange: function () {
            if(this.realIndex == 1) {
                counting();
            } else {
                $('.num_animation').text('0')
            }
        }
    }
});

var iw = window.innerWidth;
if(iw < 641) {
    var swiper2 = new Swiper('.swiper-container.subSwiper1', {
        effect: 'flip',
        grabCursor: true,
        loop: true,
        pagination: {
        el: '.swiper-pagination.controller1',
        clickable: true
        },
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        }
    });
}

var swiper3 = new Swiper('.swiper-container.subSwiper2', {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    pagination: {
            el: '.swiper-pagination.controller2',
            dynamicBullets: true,
            clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 3,
            spaceBetween: 30,
            freeMode: true,
            loop: true,
            pagination: {
                el: '.swiper-pagination.controller2',
                dynamicBullets: true,
                clickable: true
            }
        },
        1024: {
            slidesPerView: 2
        },
        1280: {
            slidesPerView: 4
        }
    }
    
});

var swiper4 = new Swiper('.swiper-container.subSwiper3', {
    spaceBetween: 0,
    // centeredSlides: true,
    effect: 'fade',
    autoplay: {
    delay: 4000,
    disableOnInteraction: false,
    },
    loop: true,
    scrollbar: {
        el: '.swiper-scrollbar.controller3',
        hide: true,
        clickable: true
    }

});


function counting() {
    $('.num_animation').each(function() {
        var $this = $(this),
            countTo = $this.attr('data-rate');
        
        $({ countNum: $this.text()}).animate({
            countNum: countTo
            //시작 숫자와 종료숫자를 비교한다
            },
            {
            duration: 3000,
            easing:'linear',
            step: function() {
                $this.text(Math.floor(this.countNum));
            },
            complete: function() {
                $this.text(this.countNum);
            }
    
        });
    });
}


$(document).ready(function(){

    //nav togglebutton
    $(".mallbar").click(function(){
        $(this).toggleClass("on");
        $(".mnav").toggleClass("on");
        $("body > .inner > a").toggleClass("on");
    })

    //mnav 
    $(".m_menu_2").hide();
    $(".m_menu_1 > .depth2 > a").click(function(){
        $(this).next().slideToggle(300);
         //after (this)'s next part toggle
        $(this).toggleClass("on").parent().siblings().children("a").removeClass("on");   
        //changing text color



        $(".m_menu_1 > .depth2 > a").not(this).next().slideUp(300);
        return false;
        //next part toggle's canceling and after slideup --> the other things are not showing
    });
    




    // footer slideup&down
    $(".footarrow").click(function(){
        $("footer").slideDown();
    });
    $(".button").click(function(){
        $("footer").slideUp();
    });


    //news link
    $(".twitter").click(function(){
        window.open("https://twitter.com/lgtalks");
    });
    $(".facebook").click(function(){
        window.open("https://www.facebook.com/pages/LG%EC%83%9D%ED%99%9C%EA%B1%B4%EA%B0%95/124274684253644");
    });
    $(".youtube").click(function(){
        window.open("https://www.youtube.com/channel/UC60e4j7LVEFzLSSgt2DZTZg");
    });


    
});

//website connection
function openSite(select)
{
    if(select.value!='none') {
        window.open(select.value);
        select.value = 'none';
    } else {
        return;
    }
}


