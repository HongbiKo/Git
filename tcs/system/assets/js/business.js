$(function(){

    $('.tabcon').hide();
    $('.tabcon:first').show();

    $('ul.tabs li').click(function(){
        $('ul.tabs li').removeClass('current');
        $(this).addClass('current');
        $('.tabcon').hide();
        var activeTab = $(this).attr("rel");
        $("#" + activeTab).fadeIn();
    });

});
