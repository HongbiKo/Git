class Auth {
    Login(f1, f2, afterFunction) {
        new TCSPHP().phpData(`../assets/php/Login.php?f1=${f1}&f2=${f2}`, (returnData) => {
            console.log(returnData)
            afterFunction(returnData)
            
        })
    }

    Check(afterFunction) {
        new TCSPHP().phpData(`./system/assets/php/Check.php`, (returnData) => {
            afterFunction(returnData)
        })
    }

    Check2(afterFunction) {
        new TCSPHP().phpData(`../assets/php/Check.php`, (returnData) => {
            afterFunction(returnData)
        })
    }

    Logout(afterFunction) {
        new TCSPHP().phpData(`./system/assets/php/Logout.php`, (returnData) => {
            afterFunction(returnData)
        })
    }

    Logout2(afterFunction) {
        new TCSPHP().phpData(`../assets/php/Logout.php`, (returnData) => {
            afterFunction(returnData)
        })
    }
}

const checkLogin = function(chekcData) {
    if (chekcData['f1'] != null && chekcData['f2'] != null) {
        new Auth().Login(chekcData['f1'], chekcData['f2'], (data) => {
            if (data === "true") {
                window.location.replace('/tcs_hompage')
            } else {
                alert('아이디 또는 비밀번호가 틀렸습니다.')
                window.location.replace('/tcs_hompage/system/page/login.html')
            }
        })
    }
}

const checkSession = function(afterFunction) {
    new Auth().Check((data) => {
        var getInfo = data.split('/')
       // if (getInfo[0] === "false") window.location.replace('/tcs_hompage/index.html')
        afterFunction(getInfo[1])
    })
}

const checkSession2 = function(afterFunction) {
    new Auth().Check2((data) => {
        var getInfo = data.split('/')
       //if (getInfo[0] === "false") window.location.replace('/tcs_hompage/index.html')
        afterFunction(getInfo[1])
    })
}

const logout = function() {
    new Auth().Logout((data) => {
        location.reload();
    })
}

const logout2 = function() {
    new Auth().Logout2((data) => {
        location.reload();
    })
}

const logout3 = function() {
    new Auth().Logout2((data) => {
        location.href = "/tcs_hompage";
    })
}

$(document).ready(function() {
    $(document).on("click", "#logout", function() {
        logout();
        logout2();
    })
})