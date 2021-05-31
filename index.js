$(document).ready(function(){
    //리사이징 할때마다 새로고침
    var lastWidth = $(window).width();
    $(window).resize(function(){
        if($(window).width()!=lastWidth){
            location.reload();
            lastWidth = $(window).width();
            return false;
        }
    });

    //스크롤버튼
    $(".scroll a").each(function(){
        var thisOffset = $("."+$(this).data('id')).offset().top;

        $(this).click(function(){
            $("html, body").animate({
                scrollTop : thisOffset
            }, 1000);
            $(this).addClass('on');
        });
    });

    //마우스툴팁
    $(".circle, .tip").mousemove(function(event) {
        var x = event.pageX;
        var y = event.pageY;
        $(".tip").css({left: x + 50 , top: y - 40}).addClass("on");
    }).mouseleave(function() {
        $(".tip").removeClass("on");
    });

    // slide hover
    if($(window).width() > 640){
        $('.sec1').mouseover(function(){
            $(this).addClass('on');
            $(this).children('p').addClass('on');
        })
        $('.sec1').mouseleave(function(){
            $(this).removeClass('on');
            $(this).children('p').removeClass('on');
        })
    }
    
});


// 마우스&헤더
const cursor = document.querySelector('.cursor');
const cursorFollow = document.querySelector('.follow');
const cursorFollowActiveBuffer = 0;
const button = document.querySelectorAll('.button');
let cursorPosX = 0;
let cursorPosY = 0;
let buttonHoverFlag = false;

function mouseMoveCursor(element, event, friction) {
    cursorPosX += (event.clientX - cursorPosX) * friction;
    cursorPosY += (event.clientY - cursorPosY) * friction;
    element.style.transform = `translate(${cursorPosX - element.clientWidth / 2}px,${cursorPosY - element.clientHeight / 2}px)`;
}

window.addEventListener('mousemove', (e) => {
    if (buttonHoverFlag === true) {
        return;
    }

    mouseMoveCursor(cursor, e, 1.0);
    mouseMoveCursor(cursorFollow, e, 1.0);
});

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('mousemove', (e) => {
        buttonHoverFlag = true;
        cursor.style.backgroundColor = 'transparent';
        cursorFollow.style.transform = `translate(${e.target.getBoundingClientRect().left - cursorFollowActiveBuffer}px,${e.target.getBoundingClientRect().top - cursorFollowActiveBuffer}px)`;
        cursorFollow.style.width = e.target.getBoundingClientRect().width + 'px';
        cursorFollow.style.height = e.target.getBoundingClientRect().height + 'px';
        cursorFollow.style.padding = cursorFollowActiveBuffer + 'px';
        cursorFollow.style.borderRadius = 0;
    });
}

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('mouseleave', () => {
        buttonHoverFlag = false;
        cursor.style.backgroundColor = '#F7354F';
        cursorFollow.style.width = 10 + 'px';
        cursorFollow.style.height = 10 + 'px';
        cursorFollow.style.padding = 32 + 'px';
        cursorFollow.style.borderRadius = '100%';
    });
}


//스와이퍼
var swiper = new Swiper(".project", {
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    loop: true
});

// gsap.registerPlugin(ScrollTrigger)



ScrollTrigger.create({
	trigger: '.aboutbox',
	animation: gsap.fromTo('.aboutsubbox', {scale: 1 }, {scale: 1.8}),
	start: '-=100 center',
	end: '+=200 bottom',
	scrub: 1,
	// markers: true,
})

const text = document.querySelectorAll('.aboutsubbox > *')

const tl = gsap.timeline().to('.aboutsubbox', {width: 350, height: 350}).fromTo(text, {x: -450}, {x: 20, stagger: 0.5});

ScrollTrigger.create({
	trigger: '.aboutbox',
	animation: tl,
	pin: true,
	start: '-=100 center',
	end: '+=300 bottom',
	scrub: 1, 
	// markers: true,
})

gsap.to(".text", {
    scrollTrigger:{
        trigger: ".text", 
        start: "top bottom", 
        end: "bottom top", 
        scrub: 1
    },
    scale: 1.5,
    pin: true
});
