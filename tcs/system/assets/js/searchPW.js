$(document).on('click','#findPw-btn', function(){
    this.disabled=true;
    var str = '';
    var name = $('#name').val();
    var id = $('#id').val();
    var email = $('#email').val();

    let yourQuery = `select * from tcs_homepage_db.user where name = '${name}' and id = '${id}' and email = '${email}'`
    console.log(yourQuery)
    new TCSPHP().phpData(`../assets/php/twQuery.php?do=get&query=${yourQuery};`, (getData) => {
        const queryData = [];
        phpParse(queryData, getData);
        console.log(queryData)

    if(queryData.length != 1){
        alert('존재하지 않는 아이디입니다. 다시 입력해주세요.')
        return false;
    } else if(queryData.length == 1) {        
        var newPassword;
        var randomValue = "abcdefghijklmnopqrstuvwxyz0123456789";
    
        for(i=1; i<=8; i++){
         randomPoint = Math.round(Math.random()*34+1);
         Pwdchar = randomValue.charAt(randomPoint);
         if(i == 1){
          newPassword = Pwdchar;
         }else{
          newPassword += Pwdchar;
         }
        }
    
        let yourQuery = `update user set password = '${newPassword}' where id='${id}'`
        new TCSPHP().phpData(`../assets/php/twQuery.php?do=get&query=${yourQuery};`, (getData) => {
            const queryData = [];
            phpParse(queryData, getData);
        })
    
        str +=  `<form method="post" action="../assets/php/sendmail.php" name="frm">
                    <input type="hidden" name="name" value = ${name}>
                    <input type="hidden" name="new_pw" value = ${newPassword}>
                    <input type="hidden" name="email" value = ${email}>
                 </form>
                 <script>document.frm.submit()</script>`
        
        $('.findPw-box').append(str) 
    }
    })
})

