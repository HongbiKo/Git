checkSession2((data) => {
    var str = '';
    var stb = '';

    let yourQuery = `select * from tcs_homepage_db.user where id = '${data}'`
    new TCSPHP().phpData(`../assets/php/twQuery.php?do=get&query=${yourQuery};`, (getData) => {
        const queryData = [];
        phpParse(queryData, getData);
        if(queryData.length == 1){
            $('.loginbox').html('<span id="logout">로그아웃<span>');
            stb += `<li>
                     <a href="/tcs_hompage/system/page/pwChange.html">비밀번호변경</a>
                    </li>`
        }
        $('.gnb').append(stb);
        try{
            if(queryData[0].grade == 'master'){
                str += `<li>
                         <a href="/tcs_hompage/system/page/management.html">관리자</a>
                        </li>`
            }
        } catch{
            return true;
        }
        $('.gnb').append(str);
   })
})