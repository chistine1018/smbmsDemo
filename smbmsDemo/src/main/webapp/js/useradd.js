var userCode = null;
var userName = null;
var userPassword = null;
var ruserPassword = null;
var phone = null;
var birthday = null;
var userRole = null;
var addBtn = null;
var backBtn = null;


$(function () {
    userCode = $("#userCode");
    userName = $("#userName");
    userPassword = $("#userPassword");
    ruserPassword = $("#ruserPassword");
    phone = $("#phone");
    birthday = $("#birthday");
    userRole = $("#userRole");
    addBtn = $("#add");
    backBtn = $("#back");
    //初始化的時候，要把所有的提示信息變為：* 以提示必填項，更靈活，不要寫在頁面上
    userCode.next().html("*");
    userName.next().html("*");
    userPassword.next().html("*");
    ruserPassword.next().html("*");
    phone.next().html("*");
    birthday.next().html("*");
    userRole.next().html("*");

    $.ajax({
        type: "GET",//請求類型
        url: path + "/jsp/user.do",//請求的url
        data: {method: "getrolelist"},//請求參數
        dataType: "json",//ajax接口（请求url）返回的數據類型
        success: function (data) {//data：返回數據（json對象）
            if (data != null) {
                userRole.html("");
                var options = "<option value=\"0\">請選擇</option>";
                for (var i = 0; i < data.length; i++) {
                    //alert(data[i].id);
                    //alert(data[i].roleName);
                    options += "<option value=\"" + data[i].id + "\">" + data[i].roleName + "</option>";
                }
                userRole.html(options);
            }
        },
        error: function (data) {//當訪問的時候，404，500 等非200的錯誤狀態碼
            validateTip(userRole.next(), {"color": "red"}, imgNo + " 獲取用戶角色列表error", false);
        }
    });


    /*
     * 驗證
     * 失焦\獲焦
     * jquery的方法傳遞
     */
    userCode.bind("blur", function () {
        //ajax後台驗證--userCode是否已存在
        //user.do?method=ucexist&userCode=**
        $.ajax({
            type: "GET",//請求類型
            url: path + "/jsp/user.do",//請求的url
            data: {method: "ucexist", userCode: userCode.val()},//請求參數
            dataType: "json",//ajax接口（請求url）返回的數據類型
            success: function (data) {//data：返回數據（json對象）
                if (data.userCode == "exist") {//帳號已存在，錯誤提示
                    validateTip(userCode.next(), {"color": "red"}, imgNo + " 該用戶帳號已存在", false);
                } else {//帳號可用，正確提示
                    validateTip(userCode.next(), {"color": "green"}, imgYes + " 該帳號可以使用", true);
                }
            },
            error: function (data) {//當訪問時候，404，500 等非200的錯誤狀態碼
                validateTip(userCode.next(), {"color": "red"}, imgNo + " 您訪問的頁面不存在", false);
            }
        });


    }).bind("focus", function () {
        //顯示友情提示
        validateTip(userCode.next(), {"color": "#666666"}, "* 用戶編碼是您登錄系統的帳號", false);
    }).focus();

    userName.bind("focus", function () {
        validateTip(userName.next(), {"color": "#666666"}, "* 使用者名稱長度必須是大於1小於10的字元", false);
    }).bind("blur", function () {
        if (userName.val() != null && userName.val().length > 1
            && userName.val().length < 10) {
            validateTip(userName.next(), {"color": "green"}, imgYes, true);
        } else {
            validateTip(userName.next(), {"color": "red"}, imgNo + " 使用者名稱輸入的不符合規範，請重新輸入", false);
        }

    });

    userPassword.bind("focus", function () {
        validateTip(userPassword.next(), {"color": "#666666"}, "* 密碼長度必須是大於6小於20", false);
    }).bind("blur", function () {
        if (userPassword.val() != null && userPassword.val().length > 6
            && userPassword.val().length < 20) {
            validateTip(userPassword.next(), {"color": "green"}, imgYes, true);
        } else {
            validateTip(userPassword.next(), {"color": "red"}, imgNo + " 密碼輸入不符合規範，請重新輸入", false);
        }
    });

    ruserPassword.bind("focus", function () {
        validateTip(ruserPassword.next(), {"color": "#666666"}, "* 請輸入與上面一致的密碼", false);
    }).bind("blur", function () {
        if (ruserPassword.val() != null && ruserPassword.val().length > 6
            && ruserPassword.val().length < 20 && userPassword.val() == ruserPassword.val()) {
            validateTip(ruserPassword.next(), {"color": "green"}, imgYes, true);
        } else {
            validateTip(ruserPassword.next(), {"color": "red"}, imgNo + " 兩次密碼輸入不一致，請重新輸入", false);
        }
    });


    birthday.bind("focus", function () {
        validateTip(birthday.next(), {"color": "#666666"}, "* 點選輸入框，選擇日期", false);
    }).bind("blur", function () {
        if (birthday.val() != null && birthday.val() != "") {
            validateTip(birthday.next(), {"color": "green"}, imgYes, true);
        } else {
            validateTip(birthday.next(), {"color": "red"}, imgNo + " 選擇的日期不正確,請重新輸入", false);
        }
    });

    phone.bind("focus", function () {
        validateTip(phone.next(), {"color": "#666666"}, "* 請輸入手機號", false);
    }).bind("blur", function () {
        var patrn = /^(13[0-9]|15[0-9]|18[0-9])\d{8}$/;
        if (phone.val().match(patrn)) {
            validateTip(phone.next(), {"color": "green"}, imgYes, true);
        } else {
            validateTip(phone.next(), {"color": "red"}, imgNo + " 您輸入的手機號格式不正確", false);
        }
    });

    userRole.bind("focus", function () {
        validateTip(userRole.next(), {"color": "#666666"}, "* 請選擇使用者角色", false);
    }).bind("blur", function () {
        if (userRole.val() != null && userRole.val() > 0) {
            validateTip(userRole.next(), {"color": "green"}, imgYes, true);
        } else {
            validateTip(userRole.next(), {"color": "red"}, imgNo + " 請重新選擇使用者角色", false);
        }
    });

    addBtn.bind("click", function () {
        if (userCode.attr("validateStatus") != "true") {
            userCode.blur();
        } else if (userName.attr("validateStatus") != "true") {
            userName.blur();
        } else if (userPassword.attr("validateStatus") != "true") {
            userPassword.blur();
        } else if (ruserPassword.attr("validateStatus") != "true") {
            ruserPassword.blur();
        } else if (birthday.attr("validateStatus") != "true") {
            birthday.blur();
        } else if (phone.attr("validateStatus") != "true") {
            phone.blur();
        } else if (userRole.attr("validateStatus") != "true") {
            userRole.blur();
        } else {
            if (confirm("是否確認提交數據")) {
                $("#userForm").submit();
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