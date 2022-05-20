

 $(function(){   //배너
    $('.bannerbox > .banner').hide();
    $('.bannerbox > .banner').eq(0).show();
    setInterval(function(){
        $('.bannerbox > .banner').eq(0).fadeOut('slow').next().fadeIn('slow').stop().end(1000).appendTo('.bannerbox')
    },3000);

    // learn more 버튼
    $('a[href^="#content_start"]').on('click',function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 1500, 'swing', function () {
            window.location.hash = target;
        });
    });

    // sample hover
    $(".utubebox.slide1").hover(function(){
        $(".slidetxt1").addClass("hover");
        $(".utubebox.slide1").addClass("hover");
        $(".slideBtn1").addClass("hover");
    }, function(){
        $(".slidetxt1").removeClass("hover");
        $(this).removeClass("hover");
        $(".utubebox.slide1").removeClass("hover");
        $(".slideBtn1").removeClass("hover");
    });
    $(".utubebox.slide2").hover(function(){
        $(".slidetxt2").addClass("hover");
        $(".utubebox.slide2").addClass("hover");
        $(".slideBtn2").addClass("hover");
    }, function(){
        $(".slidetxt2").removeClass("hover");
        $(".utubebox.slide2").removeClass("hover");
        $(".slideBtn2").removeClass("hover");
    });
    $(".utubebox.slide3").hover(function(){
        $(".slidetxt3").addClass("hover");
        $(".utubebox.slide3").addClass("hover");
        $(".slideBtn3").addClass("hover");
    }, function(){
        $(".slidetxt3").removeClass("hover");
        $(".utubebox.slide3").removeClass("hover");
        $(".slideBtn3").removeClass("hover");
    });
    $(".utubebox.slide4").hover(function(){
        $(".slidetxt4").addClass("hover");
        $(".utubebox.slide4").addClass("hover");
        $(".slideBtn4").addClass("hover");
    }, function(){
        $(".slidetxt4").removeClass("hover");
        $(".utubebox.slide4").removeClass("hover");
        $(".slideBtn4").removeClass("hover");
    });
    $(".utubebox.slide5").hover(function(){
        $(".slidetxt5").addClass("hover");
        $(".utubebox.slide5").addClass("hover");
        $(".slideBtn5").addClass("hover");
    }, function(){
        $(".slidetxt5").removeClass("hover");
        $(".utubebox.slide5").removeClass("hover");
        $(".slideBtn5").removeClass("hover");
    });
    $(".utubebox.slide6").hover(function(){
        $(".slidetxt6").addClass("hover");
        $(".utubebox.slide6").addClass("hover");
        $(".slideBtn6").addClass("hover");
    }, function(){
        $(".slidetxt6").removeClass("hover");
        $(".utubebox.slide6").removeClass("hover");
        $(".slideBtn6").removeClass("hover");
    });
    $(".utubebox.slide7").hover(function(){
        $(".slidetxt7").addClass("hover");
        $(".utubebox.slide7").addClass("hover");
        $(".slideBtn7").addClass("hover");
    }, function(){
        $(".slidetxt7").removeClass("hover");
        $(".utubebox.slide7").removeClass("hover");
        $(".slideBtn7").removeClass("hover");
    });
    $(".utubebox.slide8").hover(function(){
        $(".slidetxt8").addClass("hover");
        $(".utubebox.slide8").addClass("hover");
        $(".slideBtn8").addClass("hover");
    }, function(){
        $(".slidetxt8").removeClass("hover");
        $(".utubebox.slide8").removeClass("hover");
        $(".slideBtn8").removeClass("hover");
    });
    $(".utubebox.slide9").hover(function(){
        $(".slidetxt9").addClass("hover");
        $(".utubebox.slide9").addClass("hover");
        $(".slideBtn9").addClass("hover");
    }, function(){
        $(".slidetxt9").removeClass("hover");
        $(".utubebox.slide9").removeClass("hover");
        $(".slideBtn9").removeClass("hover");
    });

    // content4 hover
    $(".con4 .conbox > a").hover(function(){
        $(this).addClass("hover");
    }, function(){
        $(this).removeClass("hover");
    });
})



// 스와이퍼
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    autoplay: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        280: {
            spaceBetween: 120
        },
        767: {
            slidesPerView: 2,
            spaceBetween: 210,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 10
        }
    }
});




// 유투브 팝업창
function showPopupyoutube1() { 
    window.open("youtubePopup1.html", "youtubecilp1Popup", "width=700, height=500, left=700, top=250"); 
};
function showPopupyoutube2() { 
    window.open("youtubePopup2.html", "youtubecilp2Popup", "width=700, height=500, left=700, top=250"); 
};
function showPopupyoutube3() { 
    window.open("youtubePopup3.html", "youtubecilp3Popup", "width=700, height=500, left=700, top=250"); 
};
function showPopupyoutube4() { 
    window.open("youtubePopup4.html", "youtubecilp4Popup", "width=700, height=500, left=700, top=250"); 
};
function showPopupyoutube5() { 
    window.open("youtubePopup5.html", "youtubecilp5Popup", "width=700, height=500, left=700, top=250"); 
};
function showPopupyoutube6() { 
    window.open("youtubePopup6.html", "youtubecilp6Popup", "width=700, height=500, left=700, top=250"); 
};
function showPopupyoutube7() { 
    window.open("youtubePopup7.html", "youtubecilp7Popup", "width=700, height=500, left=700, top=250"); 
};
function showPopupyoutube8() { 
    window.open("youtubePopup8.html", "youtubecilp8Popup", "width=700, height=500, left=700, top=250"); 
};
function showPopupyoutube9() { 
    window.open("youtubePopup9.html", "youtubecilp9Popup", "width=700, height=500, left=700, top=250"); 
};



//AOS 선언
AOS.init();