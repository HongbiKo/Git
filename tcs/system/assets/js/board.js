function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

var cnt = getParameterByName('icount');
if (cnt == '') {
    ++cnt
}

function selectBoard(){
    var str = '';
    var stb = '';

    let countQuery = `select count(*)as totalcount from tcs_homepage_db.board`
    new TCSPHP().phpData(`../assets/php/twQuery.php?do=get&query=${countQuery};`, (getData) => {
        let queryData = [];
        phpParse(queryData, getData);

        for (i in queryData) {
            var dbData = queryData[i];
            var pageCount = 3; //하단에 보여지는 수
            var countList = 5; //한페이지당 게시글갯수
            var totalCount = dbData.totalcount; //전체게시글수
            var totalPage = Math.floor(totalCount / countList);
            var pageGroup = Math.ceil(cnt / pageCount);

            if (totalCount % countList > 0) {
                ++totalPage;
            }
            if (totalPage < cnt) {
                cnt = totalPage;
            }
            var endPage = pageGroup * pageCount;

            var startPage = endPage - (pageCount - 1);
            if (endPage > totalPage) {
                endPage = totalPage;
            }
        }

    
        let yourQuery = `select * from tcs_homepage_db.board order by boardNum desc limit ${(cnt * countList) - countList},${countList} `
        new TCSPHP().phpData(`../assets/php/twQuery.php?do=get&query=${yourQuery};`, (getData) => {
            const selectData = [];
            phpParse(selectData, getData);

            checkSession2((data) => {
                let yourQuery = `select * from tcs_homepage_db.user where id = '${data}'`
                new TCSPHP().phpData(`../assets/php/twQuery.php?do=get&query=${yourQuery};`, (getData) => {
                    const queryData = [];
                    phpParse(queryData, getData);

                    if(selectData == ''){
                        str += `<tr>`
                        str += `<td colspan="5">게시물이 없습니다.</td>`
                        str += `</tr>`
                    }
 
                    try{
                        if(queryData[0].grade == 'master'){
                            for(i in selectData){
                                let buyNum = (cnt * countList) - countList
                                let boardNumber = parseInt(buyNum) + parseInt(i) + 1

                                str += `<tr>
                                            <td>${boardNumber}</td>
                                            <td>
                                            <a href="/tcs_hompage/system/page/post.html?boardNum=${selectData[i].boardNum}">${selectData[i].title}</a></td>
                                            <td>${selectData[i].id}</td>
                                            <td>${selectData[i].date.substr(0,10)}</td>
                                            <td>${selectData[i].views}</td>
                                        </tr>`
                            }
                        } else if (queryData[0].grade == 'normal'){
                            for(i in selectData){
                                let buyNum = (cnt * countList) - countList
                                let boardNumber = parseInt(buyNum) + parseInt(i) + 1
        
                                str += `<tr >`
                                str += `<td><input type="hidden" value="${selectData[i].boardNum}">${boardNumber}</td>`
        
                                if(selectData[i].secret == 'N'){
                                    str += `<td id="boardList">
                                                <a href="/tcs_hompage/system/page/post.html?boardNum=${selectData[i].boardNum}">${selectData[i].title}</a>
                                            </td>`
                                } else {
                                    str += `<td id="boardList">
                                            <a href="#" id="passwordCheck"><i class="fas fa-key"></i>${selectData[i].title}
                                                <input type="hidden" value="${selectData[i].boardNum}" id="secretBoardNum">
                                                <input type="hidden" id="putPassword">
                                            </a>
                                            </td>`
                                }
                                str += `<td>${selectData[i].id}</td>
                                        <td>${selectData[i].date.substr(0,10)}</td>
                                        <td>${selectData[i].views}</td>`
                                str += '</tr>'
                            }
                        }
                    } catch{
                        for(i in selectData){
                            let buyNum = (cnt * countList) - countList
                            let boardNumber = parseInt(buyNum) + parseInt(i) + 1
    
                            str += `<tr>`
                            str += `<td><input type="hidden" value="${selectData[i].boardNum}">${boardNumber}</td>`
    
                            if(selectData[i].secret == 'N'){
                                str += `<td id="boardList">
                                            <a href="/tcs_hompage/system/page/post.html?boardNum=${selectData[i].boardNum}">${selectData[i].title}</a>
                                        </td>`
                            } else {
                                str += `<td id="boardList">
                                        <a href="#" id="passwordCheck"><i class="fas fa-key"></i>${selectData[i].title}
                                            <input type="hidden" value="${selectData[i].boardNum}" id="secretBoardNum">
                                            <input type="hidden" id="putPassword">
                                        </a>
                                        </td>`
                            }
                            str += `<td>${selectData[i].id}</td>
                                    <td>${selectData[i].date.substr(0,10)}</td>
                                    <td>${selectData[i].views}</td>`
                            str += '</tr>'
                        }
                    }
                    $('#table-body').append(str);
                })
            })
        })
        
        var icntDown = parseInt(cnt);
        //icntDown--
        icntDown --
        
        if (icntDown >= 1 && startPage > 1) {
            stb += `<li class="page-item"><a class="page-link" href="board.html?icount=${startPage-1}">이전</a></li>`;
        }
        let classTwo = `page-link${cnt}` 
        for (var icount = startPage; icount<endPage ; icount++){
            stb += `<li class="page-item page-link" id="page-item"><a class="${classTwo}" id="page-link" href="board.html?icount=${icount}">${icount}</a></li>`                                  
        }
        stb += `<li class="page-item page-link"><a class="page-link${endPage}" href="board.html?icount=${endPage}">${endPage}</a></li>`
        var icntUp = parseInt(cnt);
        icntUp++
    
        if (icntUp <= totalPage && endPage < totalPage) {
            stb += `<li class="page-item"><a class="page-link" id="up_page" href="board.html?icount=${endPage+1}">다음</a></li>`
        }
         $("#pagination").append(stb);
    })
}
selectBoard();

const searchData = function(){
    var searchSelect =  $("#selectBox option:selected").text();
    var searchValue = $('#search').val();
    location.href = `boardSearch.html?icount=1&search=${searchValue}&sort=${searchSelect}`
}

$(document).on("click", "#boardList", function() {
    let tdArr = new Array();
    let tr = $(this)
    let td = tr.siblings().children()
    td.each(function(i) {
        tdArr.push(td.eq(i).val());
    });
    let num = td.eq(0).val()

    let yourQuery = `select * from tcs_homepage_db.board where boardNum = ${num}`
    new TCSPHP().phpData(`../assets/php/twQuery.php?do=get&query=${yourQuery};`, (getData) => {
        const queryData = [];
        phpParse(queryData, getData);

      if(queryData[0].secret == 'N'){
          let updateQuery = `update tcs_homepage_db.board set views = views %2B 1 where boardNum = ${num}`
          new TCSPHP().phpData(`../assets/php/twQuery.php?do=get&query=${updateQuery};`, (getData) => {
              const updateViews = [];
              phpParse(updateViews, getData);
          })
      }
    })
})

$(document).on("click","#passwordCheck", function(){
    let tdArr = new Array();
    let tr = $(this)
    let td = tr.children()
    td.each(function(i) {
        tdArr.push(td.eq(i).text());
    });
    let num = td.eq(1).val();
    window.open(`passwordCheck.html?boardNum=${num}`,"_blanck","width=700,height=400");
})
