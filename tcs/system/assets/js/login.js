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

    // a href='#' 클릭 무시 스크립트
    $('a[href="#"]').click(function(ignore) {
        ignore.preventDefault();
    });

});

const loginFunction = function() {
    var id = $('input[name=id]').val();
    var pw = $('input[name=pw]').val();

    if (id == '') {
        alert('아이디를 입력하세요');
        return
    }
    
    checkLogin({ "f1": id, "f2": pw })
}


const beforeLogin = function() {
    var cast = {
        "id": id,
        "pw": pw
    }

localStorage.setItem("cast", JSON.stringify(cast));

    let yourQuery = `select * from tcs_homepage_db.user where id = '${id}'`
    new TCSPHP().phpData(`./system/assets/php/twQuery.php?do=get&query=${yourQuery};`, (getData) => {
        const queryData = [];
        phpParse(queryData, getData);
        
        if(queryData.length == 0){
            alert('존재하지 않는 아이디입니다.')
        }
        for(i in queryData){
            let dbData = queryData[i];
            if(pw != dbData.pw){
                alert('비밀번호가 틀렸습니다.');
                var el = document.getElementsByClassName('input-text');
                for(var i = 0; i< el.length; i++){
                    el[i].value = '';
                }
            } else {
                location.href = "/tcs_hompage"
            }
        }
    })
}