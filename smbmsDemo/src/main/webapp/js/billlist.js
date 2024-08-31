var billObj;

// 訂單管理頁面上點選刪除按鈕彈出刪除框(billlist.jsp)
function deleteBill(obj) {
    $.ajax({
        type: "GET",
        url: path + "/jsp/bill.do",
        data: {method: "delbill", billid: obj.attr("billid")},
        dataType: "json",
        success: function (data) {
            if (data.delResult == "true") {//删除成功：移除删除行
                cancleBtn();
                obj.parents("tr").remove();
            } else if (data.delResult == "false") {//删除失败
                //alert("對不起，删除訂單【"+obj.attr("billcc")+"】失敗");
                changeDLGContent("對不起，删除訂單【" + obj.attr("billcc") + "】失敗");
            } else if (data.delResult == "notexist") {
                //alert("對不起，訂單【"+obj.attr("billcc")+"】不存在");
                changeDLGContent("對不起，訂單【" + obj.attr("billcc") + "】不存在");
            }
        },
        error: function (data) {
            alert("對不起，删除失敗");
        }
    });
}

function openYesOrNoDLG() {
    $('.zhezhao').css('display', 'block');
    $('#removeBi').fadeIn();
}

function cancleBtn() {
    $('.zhezhao').css('display', 'none');
    $('#removeBi').fadeOut();
}

function changeDLGContent(contentStr) {
    var p = $(".removeMain").find("p");
    p.html(contentStr);
}

$(function () {
    $(".viewBill").on("click", function () {
        //將被綁定的元素（a）轉換成jquery對象，可以使用jquery方法
        var obj = $(this);
        window.location.href = path + "/jsp/bill.do?method=view&billid=" + obj.attr("billid");
    });

    $(".modifyBill").on("click", function () {
        var obj = $(this);
        window.location.href = path + "/jsp/bill.do?method=modify&billid=" + obj.attr("billid");
    });
    $('#no').click(function () {
        cancleBtn();
    });

    $('#yes').click(function () {
        deleteBill(billObj);
    });

    $(".deleteBill").on("click", function () {
        billObj = $(this);
        changeDLGContent("你確定要删除訂單【" + billObj.attr("billcc") + "】嗎？");
        openYesOrNoDLG();
    });

    /*$(".deleteBill").on("click",function(){
        var obj = $(this);
        if(confirm("你確定要刪除訂單【"+obj.attr("billcc")+"】嗎？")){
            $.ajax({
                type:"GET",
                url:path+"/bill.do",
                data:{method:"delbill",billid:obj.attr("billid")},
                dataType:"json",
                success:function(data){
                    if(data.delResult == "true"){//删除成功：移除删除行
                        alert("删除成功");
                        obj.parents("tr").remove();
                    }else if(data.delResult == "false"){//删除失敗
                        alert("對不起，删除訂單【"+obj.attr("billcc")+"】失敗");
                    }else if(data.delResult == "notexist"){
                        alert("對不起，訂單【"+obj.attr("billcc")+"】不存在");
                    }
                },
                error:function(data){
                    alert("對不起，删除失敗");
                }
            });
        }
    });*/
});