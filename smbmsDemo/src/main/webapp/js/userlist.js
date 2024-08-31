var userObj;

//用戶管理頁面上點擊刪除按鈕彈出刪除框(userlist.jsp)
function deleteUser(obj) {
    $.ajax({
        type: "GET",
        url: path + "/jsp/user.do",
        data: {method: "deluser", uid: obj.attr("userid")},
        dataType: "json",
        success: function (data) {
            if (data.delResult == "true") {//删除成功：移除删除行
                cancleBtn();
                obj.parents("tr").remove();
            } else if (data.delResult == "false") {//删除失敗
                //alert("對不起，删除用戶【"+obj.attr("username")+"】失敗");
                changeDLGContent("對不起，删除用戶【" + obj.attr("username") + "】失敗");
            } else if (data.delResult == "notexist") {
                //alert("對不起，用戶【"+obj.attr("username")+"】不存在");
                changeDLGContent("對不起，用戶【" + obj.attr("username") + "】不存在");
            }
        },
        error: function (data) {
            //alert("對不起，删除失敗");
            changeDLGContent("對不起，删除失敗");
        }
    });
}

function openYesOrNoDLG() {
    $('.zhezhao').css('display', 'block');
    $('#removeUse').fadeIn();
}

function cancleBtn() {
    $('.zhezhao').css('display', 'none');
    $('#removeUse').fadeOut();
}

function changeDLGContent(contentStr) {
    var p = $(".removeMain").find("p");
    p.html(contentStr);
}

$(function () {
    //通過jquery的class選擇棄（數组）
    //對每個class為viewUser的元素進行動作綁定（click）
    /**
     * bind、live、delegate
     * on
     */
    $(".viewUser").on("click", function () {
        //將被選定的元素（a）轉換成jquery對象，可以使用jquery方法
        var obj = $(this);
        window.location.href = path + "/jsp/user.do?method=view&uid=" + obj.attr("userid");
    });

    $(".modifyUser").on("click", function () {
        var obj = $(this);
        window.location.href = path + "/jsp/user.do?method=modify&uid=" + obj.attr("userid");
    });

    $('#no').click(function () {
        cancleBtn();
    });

    $('#yes').click(function () {
        deleteUser(userObj);
    });

    $(".deleteUser").on("click", function () {
        userObj = $(this);
        changeDLGContent("你確定要刪除用戶【" + userObj.attr("username") + "】嗎？");
        openYesOrNoDLG();
    });

    /*$(".deleteUser").on("click",function(){
        var obj = $(this);
        if(confirm("你確定要刪除用戶【"+obj.attr("username")+"】嗎？")){
            $.ajax({
                type:"GET",
                url:path+"/jsp/user.do",
                data:{method:"deluser",uid:obj.attr("userid")},
                dataType:"json",
                success:function(data){
                    if(data.delResult == "true"){//删除成功：移除删除行
                        alert("删除成功");
                        obj.parents("tr").remove();
                    }else if(data.delResult == "false"){//删除失敗
                        alert("對不起，删除用戶【"+obj.attr("username")+"】失敗");
                    }else if(data.delResult == "notexist"){
                        alert("對不起，用戶【"+obj.attr("username")+"】不存在");
                    }
                },
                error:function(data){
                    alert("對不起，删除失敗");
                }
            });
        }
    });*/
});