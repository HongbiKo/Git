var emptyMsg = '필수 정보입니다.';
var pwRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,20}$/;
var pwRegexMsg = '비밀번호는 8~20자 영문 대 소문자, 숫자, 특수문자를 사용하세요.';

const idValue = function(){
    checkSession2((data) => {
        $('#id').val(data);
    })
}
idValue();

const pwChangeData = function(){
    id = $('#id').val();
    pw = $('#pw').val();
    newPw = $('#newPw').val();
    newPw2 = $('#newPw2').val();

    let yourQuery = `select * from tcs_homepage_db.user where id = '${id}' and password = '${pw}'`
    console.log(yourQuery)
    new TCSPHP().phpData(`../assets/php/twQuery.php?do=get&query=${yourQuery};`, (getData) => {
        const queryData = [];
        phpParse(queryData, getData);
        console.log(queryData)
    
        if(queryData.length == 0){
            alert('아이디 또는 비밀번호가 잘못 입력 되었습니다.')
            return false;
        }
        if(pw.trim() == ''){
            alert('비밀번호를 입력하세요.');
            return false;
        }
        if(newPw.trim() == ''){
            alert('새 비밀번호를 입력하세요.');
            return false;
        }
        if(newPw2.trim() == ''){
            alert('새 비밀번호 확인을 입력하세요.');
            return false;
        }
        if(newPw != newPw2){
            alert('비밀번호가 일치하지 않습니다.')
            return false;
        }
        var str = check(newPw, pwRegex, emptyMsg, pwRegexMsg);
        if(str) {alert(str); return false};

        if(queryData.length == 1){
            let updateQuery = `update tcs_homepage_db.user set password = '${newPw}' where id = '${id}'`
            console.log(updateQuery)
            new TCSPHP().phpData(`../assets/php/twQuery.php?do=get&query=${updateQuery};`, (getData) => {
                const updateData = [];
                phpParse(updateData, getData);
            })
        }
        logout3();
    })
}

function check(str, regex, emptyMsg, regexMsg){
    if(str == ''){
        return emptyMsg;
    }else if(!regex.test(str)){
        return regexMsg;
    }else{
        return '';
    }
}