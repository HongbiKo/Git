function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

let num = getParameterByName('boardNum');

const checkPassword = function(){
    var password = $('#pwCheck').val();
    let yourQuery = `select * from tcs_homepage_db.board where boardNum = ${num}`
    new TCSPHP().phpData(`../assets/php/twQuery.php?do=get&query=${yourQuery};`, (getData) => {
        const selectData = [];
        phpParse(selectData, getData);

       var dbPassword = selectData[0].password;

       if(password != dbPassword){
           alert('비밀번호가 일치하지 않습니다.');
           return false;
       } else{
            let updateQuery = `update tcs_homepage_db.board set views = views %2B 1 where boardNum = ${num}`
            new TCSPHP().phpData(`../assets/php/twQuery.php?do=get&query=${updateQuery};`, (getData) => {
                const updateViews = [];
                phpParse(updateViews, getData);
            })
           window.opener.location.href=`/tcs_hompage/system/page/post.html?boardNum=${num}`;
           self.close();
       }
    })
}

const checkPassword2 = function(){
    var password = $('#pwCheck2').val();
    let yourQuery = `select * from tcs_homepage_db.board where boardNum = ${num}`
    new TCSPHP().phpData(`../assets/php/twQuery.php?do=get&query=${yourQuery};`, (getData) => {
        const selectData = [];
        phpParse(selectData, getData);

       var dbPassword = selectData[0].password;

       if(password != dbPassword){
           alert('비밀번호가 일치하지 않습니다.');
           return false;
       } else{
            let updateQuery = `update tcs_homepage_db.board set views = views %2B 1 where boardNum = ${num}`
            new TCSPHP().phpData(`../assets/php/twQuery.php?do=get&query=${updateQuery};`, (getData) => {
                const updateViews = [];
                phpParse(updateViews, getData);
            })
           window.opener.location.href=`/tcs_hompage/system/page/modify.html?boardNum=${num}`;
           self.close();
       }
    })
}