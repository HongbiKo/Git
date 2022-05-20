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

function userList() {
    var str = '';
    var stb = '';

    let countQuery = `select count(*)as totalcount from tcs_homepage_db.user`
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

        let yourQuery = `select * from tcs_homepage_db.user limit ${(cnt * countList) - countList},${countList}`
        new TCSPHP().phpData(`../assets/php/twQuery.php?do=get&query=${yourQuery};`, (getData) => {
            const selectData = [];
            phpParse(selectData, getData);
            
            for(i in selectData){
                let buyNum = (cnt * countList) - countList
                let boardNumber = parseInt(buyNum) + parseInt(i) + 1

                str += `<tr>
                            <td>${boardNumber}</td>
                            <td>${selectData[i].id}</td>
                            <td>${selectData[i].name}</td>
                            <td>${selectData[i].email}</td>
                        </tr>`
            }
            $('#table-body').append(str);
        })

        var icntDown = parseInt(cnt);
        //icntDown--
        icntDown --
        
        if (icntDown >= 1 && startPage > 1) {
            stb += `<li class="page-item"><a class="page-link" href="management.html?icount=${startPage-1}">이전</a></li>`;
        }
        let classTwo = `page-link${cnt}` 
        for (var icount = startPage; icount<endPage ; icount++){
            stb += `<li class="page-item page-link" id="page-item"><a class="${classTwo}" id="page-link" href="management.html?icount=${icount}">${icount}</a></li>`                                  
        }
        stb += `<li class="page-item page-link"><a class="page-link${endPage}" href="management.html?icount=${endPage}">${endPage}</a></li>`
        var icntUp = parseInt(cnt);
        icntUp++

        if (icntUp <= totalPage && endPage < totalPage) {
            stb += `<li class="page-item"><a class="page-link" id="up_page" href="management.html?icount=${endPage+1}">다음</a></li>`
        }
        $("#pagination").append(stb);
    })
}
userList();

const searchData = function(){
    var searchSelect =  $("#selectBox option:selected").text();
    var searchValue = $('#search').val();
    location.href = `managementSearch.html?icount=1&search=${searchValue}&sort=${searchSelect}`
}