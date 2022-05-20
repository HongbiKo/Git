
let dup = false;

var idRegex = /^[a-z0-9_-]{5,20}$/;
var emptyMsg = '필수 정보입니다.';
var idRegexMsg = '아이디는 최소 5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.';
var pwRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,20}$/;
var pwRegexMsg = '비밀번호는 8~20자 영문 대 소문자, 숫자, 특수문자를 사용하세요.';

const dupData = function()  {
    var id = $('input[name=id]').val();
    let yourQuery = `select * from tcs_homepage_db.user where id = '${id}'`
    new TCSPHP().phpData(`../assets/php/twQuery.php?do=get&query=${yourQuery};`, (getData) => {
        const queryData = [];
        phpParse(queryData, getData);

        if(queryData.length == 1){
            alert("이미 존재하는 아이디입니다.")
            return dup = false;
        } else if (id == ''){
            alert('아이디를 입력하세요.')
            return dup = false;
        } else {
            var str = check(id, idRegex, emptyMsg, idRegexMsg);
            if(str) {alert(str); return false};
            alert("가입 가능한 아이디입니다.")
            return dup = true;
        }        
    })
}

function createData(){
    var id = $('input[name=id]').val();
    var pw = $('input[name=pw]').val();
    var pw2 = $('input[name=pw2]').val();
    var name = $('input[name=name]').val();
    var email = $('input[name=mail]').val();
    
    if(!dup){
        alert("중복확인을 하세요.")
        return false;
    }
    if(id.trim() == ''){
        alert('아이디를 입력하세요.');
        return false;
    }
    if(pw.trim() == ''){
        alert('비밀번호를 입력하세요.');
        return false;
    }
    if(pw != pw2){
        alert('비밀번호가 일치하지 않습니다.');
        return false;
    }
    if(name.trim() == ''){
        alert('이름을 입력하세요.');
        return false;
    }

    let yourQuery = `select * from tcs_homepage_db.user where id = '${id}'`
    new TCSPHP().phpData(`../assets/php/twQuery.php?do=get&query=${yourQuery};`, (getData) => {
        const queryData = [];
        phpParse(queryData, getData);
        if(queryData.length == 1){
            alert('중복체크를 해주세요.')
            return false;
        }

        var str = check(id, idRegex, emptyMsg, idRegexMsg);
        if(str) {alert(str); return false};
    
        var str2 = check(pw, pwRegex, emptyMsg, pwRegexMsg);
        if(str2) {alert(str2); return false};

        let yourQuery2 = `insert into tcs_homepage_db.user(id, password, name, email) values ('${id}', '${pw}', '${name}', '${email}')`
        new TCSPHP().phpData(`../assets/php/twQuery.php?do=get&query=${yourQuery2};`, (getData) => {
            const insertData = [];
            phpParse(insertData, getData);
        })
        location.href ="/tcs_hompage";
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

