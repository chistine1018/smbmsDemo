var billCode = null;
var productName = null;
var productUnit = null;
var productCount = null;
var totalPrice = null;
var providerId = null;
var saveBtn = null;
var backBtn = null;

function priceReg(value) {
    value = value.replace(/[^\d.]/g, ""); //清除「數字」和「.」以外的字符
    value = value.replace(/^\./g, ""); //驗證第一個字元是數字而不是.
    value = value.replace(/\.{2,}/g, "."); //只保留第一個. 清除多餘的.
    value = value.replace(".", "$#$").replace(/\./g, "").replace("$#$", ".");//去掉特殊符號￥
    if (value.indexOf(".") > 0) {
        value = value.substring(0, value.indexOf(".") + 3);
    }
    return value;
}


$(function () {
    billCode = $("#billCode");
    productName = $("#productName");
    productUnit = $("#productUnit");
    productCount = $("#productCount");
    totalPrice = $("#totalPrice");
    providerId = $("#providerId");
    addBtn = $("#save");
    backBtn = $("#back");

    //初始化的時候，要把所有的提示訊息變成：* 以提示必填項，更靈活，不要寫在頁面上
    billCode.next().html("*");
    productName.next().html("*");
    productUnit.next().html("*");
    productCount.next().html("*");
    totalPrice.next().html("*");
    providerId.next().html("*");

    $.ajax({
        type: "GET",//請求類型
        url: path + "/jsp/bill.do",//請求的url
        data: {method: "getproviderlist"},//請求參數
        dataType: "json",//ajax接口（请求url）返回的數據類型
        success: function (data) {//data：返回數據（json對象）
            if (data != null) {
                var pid = $("#pid").val();
                $("select").html("");//透過標籤選擇器，得到select標籤，適用於頁面裡只有一個select
                var options = "<option value=\"0\">请选择</option>";
                for (var i = 0; i < data.length; i++) {
                    //alert(data[i].id);
                    //alert(data[i].proName);
                    if (pid != null && pid != undefined && data[i].id == pid) {
                        options += "<option selected=\"selected\" value=\"" + data[i].id + "\" >" + data[i].proName + "</option>";
                    } else {
                        options += "<option value=\"" + data[i].id + "\" >" + data[i].proName + "</option>";
                    }

                }
                $("select").html(options);
            }
        },
        error: function (data) {//當訪問時後，404，500 等非200的錯誤狀態碼
            validateTip(providerId.next(), {"color": "red"}, imgNo + " 獲取供應商列表error", false);
        }
    });
    /*
     * 驗證
     * 失焦\獲焦
     * jquery的方法傳遞
     */

    productName.on("focus", function () {
        validateTip(productName.next(), {"color": "#666666"}, "* 請輸入商品名稱", false);
    }).on("blur", function () {
        if (productName.val() != null && productName.val() != "") {
            validateTip(productName.next(), {"color": "green"}, imgYes, true);
        } else {
            validateTip(productName.next(), {"color": "red"}, imgNo + " 商品名稱不能為空，請重新輸入", false);
        }

    });

    productUnit.on("focus", function () {
        validateTip(productUnit.next(), {"color": "#666666"}, "* 請輸入商品單位", false);
    }).on("blur", function () {
        if (productUnit.val() != null && productUnit.val() != "") {
            validateTip(productUnit.next(), {"color": "green"}, imgYes, true);
        } else {
            validateTip(productUnit.next(), {"color": "red"}, imgNo + " 單位不能為空，請重新輸入", false);
        }

    });

    providerId.on("focus", function () {
        validateTip(providerId.next(), {"color": "#666666"}, "* 請選擇供應商", false);
    }).on("blur", function () {
        if (providerId.val() != null && providerId.val() != "" && providerId.val() != 0) {
            validateTip(providerId.next(), {"color": "green"}, imgYes, true);
        } else {
            validateTip(providerId.next(), {"color": "red"}, imgNo + " 供應商不能為空，請選擇", false);
        }

    });

    productCount.on("focus", function () {
        validateTip(productCount.next(), {"color": "#666666"}, "* 請輸入大於0的正自然數，小數點後保留2位", false);
    }).on("keyup", function () {
        this.value = priceReg(this.value);
    }).on("blur", function () {
        this.value = priceReg(this.value);
    });

    totalPrice.on("focus", function () {
        validateTip(totalPrice.next(), {"color": "#666666"}, "* 請輸入大於0的正自然數，小數點後保留2位", false);
    }).on("keyup", function () {
        this.value = priceReg(this.value);
    }).on("blur", function () {
        this.value = priceReg(this.value);
    });

    addBtn.on("click", function () {
        productName.blur();
        productUnit.blur();
        providerId.blur();
        if (productName.attr("validateStatus") == "true"
            && productUnit.attr("validateStatus") == "true"
            && providerId.attr("validateStatus") == "true") {
            if (confirm("是否確認提交數據")) {
                $("#billForm").submit();
            }
        }
    });

    backBtn.on("click", function () {
        //alert("modify: "+referer);
        if (referer != undefined
            && null != referer
            && "" != referer
            && "null" != referer
            && referer.length > 4) {
            window.location.href = referer;
        } else {
            history.back(-1);
        }
    });
});