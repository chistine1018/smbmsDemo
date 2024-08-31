var proCode = null;
var proName = null;
var proContact = null;
var proPhone = null;
var addBtn = null;
var backBtn = null;

$(function () {
    proCode = $("#proCode");
    proName = $("#proName");
    proContact = $("#proContact");
    proPhone = $("#proPhone");
    addBtn = $("#add");
    backBtn = $("#back");
    //初始化的時候，要把所有的提示訊息變成：* 以提示必填項，更靈活，不要寫在頁面上
    proCode.next().html("*");
    proName.next().html("*");
    proContact.next().html("*");
    proPhone.next().html("*");

    /*
     * 驗證
     * 失焦\獲焦
     * jquery的方法傳遞
     */
    proCode.on("blur", function () {
        if (proCode.val() != null && proCode.val() != "") {
            validateTip(proCode.next(), {"color": "green"}, imgYes, true);
        } else {
            validateTip(proCode.next(), {"color": "red"}, imgNo + " 編碼不能為空，請重新輸入", false);
        }
    }).on("focus", function () {
        //顯示友情提示
        validateTip(proCode.next(), {"color": "#666666"}, "* 請輸入供應商編碼", false);
    }).focus();

    proName.on("focus", function () {
        validateTip(proName.next(), {"color": "#666666"}, "* 請輸入供應商名稱", false);
    }).on("blur", function () {
        if (proName.val() != null && proName.val() != "") {
            validateTip(proName.next(), {"color": "green"}, imgYes, true);
        } else {
            validateTip(proName.next(), {"color": "red"}, imgNo + " 供應商名稱不能為空，請重新輸入", false);
        }

    });

    proContact.on("focus", function () {
        validateTip(proContact.next(), {"color": "#666666"}, "* 請輸入聯繫人", false);
    }).on("blur", function () {
        if (proContact.val() != null && proContact.val() != "") {
            validateTip(proContact.next(), {"color": "green"}, imgYes, true);
        } else {
            validateTip(proContact.next(), {"color": "red"}, imgNo + " 聯繫人不能為空，請重新輸入", false);
        }

    });

    proPhone.on("focus", function () {
        validateTip(proPhone.next(), {"color": "#666666"}, "* 請輸入手機號", false);
    }).on("blur", function () {
        var patrn = /^(13[0-9]|15[0-9]|18[0-9])\d{8}$/;
        if (proPhone.val().match(patrn)) {
            validateTip(proPhone.next(), {"color": "green"}, imgYes, true);
        } else {
            validateTip(proPhone.next(), {"color": "red"}, imgNo + " 您輸入的手機號格式不正確", false);
        }
    });

    addBtn.bind("click", function () {
        if (proCode.attr("validateStatus") != "true") {
            proCode.blur();
        } else if (proName.attr("validateStatus") != "true") {
            proName.blur();
        } else if (proContact.attr("validateStatus") != "true") {
            proContact.blur();
        } else if (proPhone.attr("validateStatus") != "true") {
            proPhone.blur();
        } else {
            if (confirm("是否確認提交數據")) {
                $("#providerForm").submit();
            }
        }
    });

    backBtn.on("click", function () {
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