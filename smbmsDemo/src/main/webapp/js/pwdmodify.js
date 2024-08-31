var oldpassword = null;
var newpassword = null;
var rnewpassword = null;
var saveBtn = null;

$(function () {
    oldpassword = $("#oldpassword");
    newpassword = $("#newpassword");
    rnewpassword = $("#rnewpassword");
    saveBtn = $("#save");

    oldpassword.next().html("*");
    newpassword.next().html("*");
    rnewpassword.next().html("*");

    oldpassword.on("blur", function () {
        $.ajax({
            type: "GET",
            url: path + "/jsp/user.do",
            data: {method: "pwdmodify", oldpassword: oldpassword.val()},
            dataType: "json",
            success: function (data) {
                if (data.result == "true") {//舊密碼正確
                    validateTip(oldpassword.next(), {"color": "green"}, imgYes, true);
                } else if (data.result == "false") {//舊密碼輸入不正確
                    validateTip(oldpassword.next(), {"color": "red"}, imgNo + " 原密碼輸入不正確", false);
                } else if (data.result == "sessionerror") {//目前使用者session過期，請重新登入
                    validateTip(oldpassword.next(), {"color": "red"}, imgNo + " 目前使用者session過期，請重新登入", false);
                } else if (data.result == "error") {//舊密碼輸入為空
                    validateTip(oldpassword.next(), {"color": "red"}, imgNo + " 請輸入舊密碼", false);
                }
            },
            error: function (data) {
                //請求出錯
                validateTip(oldpassword.next(), {"color": "red"}, imgNo + " 請求錯誤", false);
            }
        });


    }).on("focus", function () {
        validateTip(oldpassword.next(), {"color": "#666666"}, "* 請輸入原密碼", false);
    });

    newpassword.on("focus", function () {
        validateTip(newpassword.next(), {"color": "#666666"}, "* 密碼長度必須是大於6小於20", false);
    }).on("blur", function () {
        if (newpassword.val() != null && newpassword.val().length > 6
            && newpassword.val().length < 20) {
            validateTip(newpassword.next(), {"color": "green"}, imgYes, true);
        } else {
            validateTip(newpassword.next(), {"color": "red"}, imgNo + " 密碼輸入不符合規範，請重新輸入", false);
        }
    });


    rnewpassword.on("focus", function () {
        validateTip(rnewpassword.next(), {"color": "#666666"}, "* 請輸入與上面一致的密碼", false);
    }).on("blur", function () {
        if (rnewpassword.val() != null && rnewpassword.val().length > 6
            && rnewpassword.val().length < 20 && newpassword.val() == rnewpassword.val()) {
            validateTip(rnewpassword.next(), {"color": "green"}, imgYes, true);
        } else {
            validateTip(rnewpassword.next(), {"color": "red"}, imgNo + " 兩次密碼輸入不一致，請重新輸入", false);
        }
    });


    saveBtn.on("click", function () {
        oldpassword.blur();
        newpassword.blur();
        rnewpassword.blur();
        if (oldpassword.attr("validateStatus") == "true"
            && newpassword.attr("validateStatus") == "true"
            && rnewpassword.attr("validateStatus") == "true") {
            if (confirm("確定要修改密碼？")) {
                $("#userForm").submit();
            }
        }

    });
});