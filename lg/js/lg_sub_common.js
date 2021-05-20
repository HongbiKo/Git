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


AOS.init();

//________________common part__all subpages
