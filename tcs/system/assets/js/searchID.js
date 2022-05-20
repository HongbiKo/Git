$('.id-box').hide();

$(document).on('click','#findId-btn', function(){
    var str = '';
    var name = $('#name').val();
    var email = $('#email').val();

    let yourQuery = `select * from tcs_homepage_db.user where name = '${name}' and email = '${email}'`
    console.log(yourQuery)
    new TCSPHP().phpData(`../assets/php/twQuery.php?do=get&query=${yourQuery};`, (getData) => {
        const queryData = [];
        phpParse(queryData, getData);

    if(queryData.length == 0){
        alert('아이디가 존재하지 않습니다. 다시 입력해주세요.')
        return false;
    } else if(queryData.length == 1) {
        $('.userId-box').hide();
        $('.userPw-box').hide();
        $('.login-btn.search-btn').hide();
        $('.id-box').show();
        $('#findId').val(queryData[0].id)
    }
    })
})