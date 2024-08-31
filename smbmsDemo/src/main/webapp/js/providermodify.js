var proContact = null;
var proPhone = null;
var saveBtn = null;
var backBtn = null;

$(function () {
    proContact = $("#proContact");
    proPhone = $("#proPhone");
    saveBtn = $("#save");
    backBtn = $("#back");

    //初始化的時候，要把所有的提示信息變為：* 以提示必填項，更靈活，不要寫在頁面上
    proContact.next().html("*");
    proPhone.next().html("*");

    /*
     * 驗證
     * 失焦\獲焦
     * jquery的方法傳遞
     */
    proContact.on("focus", function () {
        validateTip(proContact.next(), {"color": "#666666"}, "* 請輸入聯繫人", false);
    }).on("blur", function () {
        if (proContact.val() != null && proContact.val() != "") {
            validateTip(proContact.next(), {"color": "green"}, imgYes, true);
        } else {
            validateTip(proContact.next(), {"color": "red"}, imgNo + " 聯絡人不能為空，請重新輸入", false);
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

    saveBtn.on("click", function () {
        proContact.blur();
        proPhone.blur();
        if (proContact.attr("validateStatus") == "true" &&
            proPhone.attr("validateStatus") == "true") {
            if (confirm("是否確認提交數據")) {
                $("#providerForm").submit();
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