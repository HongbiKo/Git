document.getElementById("nonlogin-writer").style.display="none";
document.getElementById("nonlogin-email").style.display="none";

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

let num = getParameterByName('boardNum');

function postContents(){
    checkSession2((data) => {
        let yourQuery = `select * from tcs_homepage_db.user where id = '${data}'`
        new TCSPHP().phpData(`../assets/php/twQuery.php?do=get&query=${yourQuery};`, (getData) => {
            const queryData = [];
            phpParse(queryData, getData);

                let yourQuery = `select * from tcs_homepage_db.board where boardNum = ${num}`
                new TCSPHP().phpData(`../assets/php/twQuery.php?do=get&query=${yourQuery};`, (getData) => {
                    const selectData = [];
                    phpParse(selectData, getData);
                    
                    $('#title').val(selectData[0].title);
                    $('input[name=id]').val(selectData[0].id);
                    $('#content').val(selectData[0].content)
                    $('#password').val(selectData[0].password)
                    if(selectData[0].email != ''){
                        $('#emailaddress').val(selectData[0].email)
                    }
                    if(data != selectData[0].id) {
                        $('#login-writer').hide();
                        $('#nonlogin-writer').show();
                        $('#nonlogin-email').show();
                    }
                    if(selectData[0].secret == 'Y'){
                        $('input[type=checkbox]').attr('checked',true);
                    }
                })
        })
    })
}
postContents();

const modifyData = function() {
    checkSession2((data) => {
        let yourQuery = `select * from tcs_homepage_db.user where id = '${data}'`
        new TCSPHP().phpData(`../assets/php/twQuery.php?do=get&query=${yourQuery};`, (getData) => {
            const queryData = [];
            phpParse(queryData, getData);

            var id = $('input[name=id]').val();
            try{
                if(queryData[0].grade == 'master'){
                    location.href = `/tcs_hompage/system/page/modify.html?boardNum=${num}`
                }
            } finally{
                if(data != id){
                    window.open(`passwordCheck2.html?boardNum=${num}`,"_blanck","width=350,height=300");
                } else{
                    location.href = `/tcs_hompage/system/page/modify.html?boardNum=${num}`
                }
            }    
        })
    })
}