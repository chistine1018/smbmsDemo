var providerObj;

//供應商管理頁面上點選刪除按鈕彈出刪除框(providerlist.jsp)
function deleteProvider(obj) {
    $.ajax({
        type: "GET",
        url: path + "/jsp/provider.do",
        data: {method: "delprovider", proid: obj.attr("proid")},
        dataType: "json",
        success: function (data) {
            if (data.delResult == "true") {//删除成功：移除删除行
                cancleBtn();
                obj.parents("tr").remove();
            } else if (data.delResult == "false") {//删除失敗
                //alert("對不起，删除供應商【"+obj.attr("proname")+"】失敗");
                changeDLGContent("對不起，删除供應商【" + obj.attr("proname") + "】失敗");
            } else if (data.delResult == "notexist") {
                //alert("對不起，供應商【"+obj.attr("proname")+"】不存在");
                changeDLGContent("對不起，供應商【" + obj.attr("proname") + "】不存在");
            } else {
                //alert("對不起，該供應商【"+obj.attr("proname")+"】下有【"+data.delResult+"】條訂單，不能删除");
                changeDLGContent("對不起，該供應商【" + obj.attr("proname") + "】下有【" + data.delResult + "】條訂單，不能删除");
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
    $('#removeProv').fadeIn();
}

function cancleBtn() {
    $('.zhezhao').css('display', 'none');
    $('#removeProv').fadeOut();
}

function changeDLGContent(contentStr) {
    var p = $(".removeMain").find("p");
    p.html(contentStr);
}

$(function () {
    $(".viewProvider").on("click", function () {
        //將被綁定的元素（a）轉換成jquery對象，可以使用jquery方法
        var obj = $(this);
        window.location.href = path + "/jsp/provider.do?method=view&proid=" + obj.attr("proid");
    });

    $(".modifyProvider").on("click", function () {
        var obj = $(this);
        window.location.href = path + "/jsp/provider.do?method=modify&proid=" + obj.attr("proid");
    });

    $('#no').click(function () {
        cancleBtn();
    });

    $('#yes').click(function () {
        deleteProvider(providerObj);
    });

    $(".deleteProvider").on("click", function () {
        providerObj = $(this);
        changeDLGContent("你確定要刪除供應商【" + providerObj.attr("proname") + "】嗎？");
        openYesOrNoDLG();
    });

    /*	$(".deleteProvider").on("click",function(){
            var obj = $(this);
            if(confirm("你確定要刪除供應商【"+obj.attr("proname")+"】嗎？")){
                $.ajax({
                    type:"GET",
                    url:path+"/jsp/provider.do",
                    data:{method:"delprovider",proid:obj.attr("proid")},
                    dataType:"json",
                    success:function(data){
                        if(data.delResult == "true"){//删除成功：移除删除行
                            alert("删除成功");
                            obj.parents("tr").remove();
                        }else if(data.delResult == "false"){//删除失敗
                            alert("對不起，删除供應商【"+obj.attr("proname")+"】失敗");
                        }else if(data.delResult == "notexist"){
                            alert("對不起，供應商【"+obj.attr("proname")+"】不存在");
                        }else{
                            alert("對不起，該供應商【"+obj.attr("proname")+"】下有【"+data.delResult+"】條訂單，不能删除");
                        }
                    },
                    error:function(data){
                        alert("對不起，删除失敗");
                    }
                });
            }
        });*/
});