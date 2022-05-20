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

const modifyData = function(){
    var modiTitle = $('#title').val();
    var modiPassword = $('#password').val();
    var modiContent = $('#content').val();
    var modiId =  $('input[name=id]').val();
    var modiEmail = $('#emailaddress').val();
    var modiSecret;

    if($('input[type=checkbox]').is(":checked") == true){
        modiSecret = 'Y';
    } else{
            modiSecret = 'N';
    }

    checkSession2((data) => {
        let yourQuery = `select * from tcs_homepage_db.user where id = '${data}'`
        new TCSPHP().phpData(`../assets/php/twQuery.php?do=get&query=${yourQuery};`, (getData) => {
            const queryData = [];
            phpParse(queryData, getData);

            if(modiTitle == ''){
                alert('제목을 입력해주세요.');
                return false;
            }
            if(modiPassword == ''){
                alert('비밀번호를 입력해주세요.');
                return false;
            }    
            if(modiContent == ''){
                alert('내용을 입력해주세요.');
                return false;
            }
            if(modiId == ''){
                alert('작성자를 입력해주세요.');
                return false;
            }
            if(data != modiId){
                if(modiEmail == ''){
                    alert('이메일을 입력해주세요.')
                    return false;
                } 
            }
            if(data == modiId){
                modiId = data;
            }
        })
    })

    let yourQuery = `update tcs_homepage_db.board set title='${modiTitle}', id='${modiId}', email='${modiEmail}', password='${modiPassword}', content='${modiContent}', secret='${modiSecret}' where boardNum = ${num}`
    new TCSPHP().phpData(`../assets/php/twQuery.php?do=get&query=${yourQuery};`, (getData) => {
        const updateData = [];
        phpParse(updateData, getData);
    })
     alert('수정되었습니다.');
     location.href = '/tcs_hompage/system/page/board.html';
}

const deleteData = function(){
    var con_test = confirm('게시글을 삭제하시겠습니까?');
    if(con_test == true){
        let yourQuery = `delete from tcs_homepage_db.board where boardNum = ${num}`
        new TCSPHP().phpData(`../assets/php/twQuery.php?do=get&query=${yourQuery};`, (getData) => {
            const deleteData = [];
            phpParse(deleteData, getData);
        })  
        location.href = '/tcs_hompage/system/page/board.html';
    }
}