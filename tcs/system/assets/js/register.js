document.getElementById("nonlogin-writer").style.display="none";
document.getElementById("nonlogin-email").style.display="none";

var secret = 'N';

checkSession2((data) => {
    let yourQuery = `select * from tcs_homepage_db.user where id = '${data}'`
    new TCSPHP().phpData(`../assets/php/twQuery.php?do=get&query=${yourQuery};`, (getData) => {
        const queryData = [];
        phpParse(queryData, getData);
        if(queryData.length == 1){
            $('#id').val(data);
        } else{
            $('#login-writer').hide();
            $('#nonlogin-writer').show()
            $('#nonlogin-email').show();
        }
    })
})

const registerData = function(){
    checkSession2((data) => {
        let yourQuery = `select * from tcs_homepage_db.user where id = '${data}'`
        new TCSPHP().phpData(`../assets/php/twQuery.php?do=get&query=${yourQuery};`, (getData) => {
            const queryData = [];
            phpParse(queryData, getData);

            if(queryData.length == 1){
                var writer = data;
            } else{
                writer = $('#nonid').val();
            }
            
            if($('#title').val() == ''){
                alert('제목을 입력해주세요.')
                return false;
            }
            if(queryData.length != 1){
                if($('#nonid').val() == ''){
                    alert('작성자를 입력해주세요.')
                    return false;
                }
            }
            if(queryData.length != 1){
                if($('#emailaddress').val() == ''){
                    alert('이메일을 입력해주세요.')
                    return false;
                }   
            }
            if($('#password').val() == ''){
                alert('비밀번호를 입력해주세요.')
                return false;
            }
            if($('#content').val() == ''){
                alert('내용을 입력해주세요.')
                return false;
            }
            if($('input[type=checkbox]').is(":checked") == true){
                 secretCheck = 'Y';
            } else{
                secretCheck = 'N';
            }

            var title = $('#title').val();
            var id = writer;
            var nonLogMail = $('#emailaddress').val();
            var secret = secretCheck;
            var password = $('#password').val();
            var contents = $('#content').val();
    
            let yourQuery = `insert into tcs_homepage_db.board(title, id, email, secret, password, content) values ('${title}','${id}','${nonLogMail}','${secret}','${password}','${contents}')`
            new TCSPHP().phpData(`../assets/php/twQuery.php?do=get&query=${yourQuery};`, (getData) => {
                const queryData = [];
                phpParse(queryData, getData);
            })
            location.href = '/tcs_hompage/system/page/board.html';
        })
    })    
}           