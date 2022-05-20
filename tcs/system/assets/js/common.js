$(function(){

    //리사이징 할 때마다 새로고침
    var lastWidth = $(window).width();
    $(window).resize(function(){
        if($(window).width()!=lastWidth){
            location.reload();
            lastWidth = $(window).width();
            return false;
        }
    });



    //메뉴바 백그라운드 생성
    var $header = $('header'); //헤더를 변수에 넣기
    var $page = $('.page-start'); //색상이 변할 부분
    var $window = $(window);
    var pageOffsetTop = $page.offset().top;//색상 변할 부분의 top값 구하기
    
    $window.resize(function(){ //반응형을 대비하여 리사이즈시 top값을 다시 계산
        pageOffsetTop = $page.offset().top;
    });
    
    $window.on('scroll', function(){ //스크롤시
      var scrolled = $window.scrollTop() >= pageOffsetTop; //스크롤된 상태; true or false
      $header.toggleClass('down', scrolled); //클래스 토글
    });


    //메뉴

    // width => 1024인 모든 데스크탑
    var iw = window.innerWidth;
    if(iw > 1023) {
        $('.gnb > li').hover(function(){
            $(this).children('ul.snb').stop().slideToggle();
        });
    };

    // width <= 1023인 모든 모바일, 테블릿일때
    if(iw < 1024) {
        $('.gnb > li').click(function(){
            $(this).children('ul.snb').stop().slideToggle();
        });
    };

    //모바일메뉴 토글버튼
    $('.m-menu').click(function(){
        $('nav').toggleClass('on');
    });


    //탑버튼
    $(".topArrow").hide(); // 탑 버튼 숨김 - 이걸 빼면 항상 보인다.
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) { // 스크롤 내릴 표시
            $('.topArrow').fadeIn();
        } else {
            $('.topArrow').fadeOut();
        }
    });
    $('.topArrow').click(function () {
        $('body,html').animate({
            scrollTop: 0  //탑 설정 클수록 덜올라간다
        }, 1000);  // 탑 이동 스크롤 속도를 조절할 수 있다.
        return false;
    });

    
    // a href='#' 클릭 무시 스크립트
    $('a[href="#"]').click(function(ignore) {
        ignore.preventDefault();
    });

});