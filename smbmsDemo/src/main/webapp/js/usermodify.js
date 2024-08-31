var userName = null;
var birthday = null;
var phone = null;
var userRole = null;
var saveBtn = null;
var backBtn = null;

$(function () {
    userName = $("#userName");
    birthday = $("#birthday");
    phone = $("#phone");
    userRole = $("#userRole");
    saveBtn = $("#save");
    backBtn = $("#back");

    userName.next().html("*");
    birthday.next().html("*");
    phone.next().html("*");
    userRole.next().html("*");


    $.ajax({
        type: "GET",//請求類型
        url: path + "/jsp/user.do",//請求的url
        data: {method: "getrolelist"},//請求參數
        dataType: "json",//ajax接口（请求url）返回的數據類型
        success: function (data) {//data：返回數據（json對象）
            if (data != null) {
                var rid = $("#rid").val();
                userRole.html("");
                var options = "<option value=\"0\">請選擇</option>";
                for (var i = 0; i < data.length; i++) {
                    //alert(data[i].id);
                    //alert(data[i].roleName);
                    if (rid != null && rid != undefined && data[i].id == rid) {
                        options += "<option selected=\"selected\" value=\"" + data[i].id + "\" >" + data[i].roleName + "</option>";
                    } else {
                        options += "<option value=\"" + data[i].id + "\" >" + data[i].roleName + "</option>";
                    }

                }
                userRole.html(options);
            }
        },
        error: function (data) {//當訪問時候，404，500 等非200的錯誤狀態碼
            validateTip(userRole.next(), {"color": "red"}, imgNo + " 獲取用戶角色列表error", false);
        }
    });


    userName.on("focus", function () {
        validateTip(userName.next(), {"color": "#666666"}, "* 用戶名長度必须是大於1小於10的字符", false);
    }).on("blur", function () {
        if (userName.val() != null && userName.val().length > 1
            && userName.val().length < 10) {
            validateTip(userName.next(), {"color": "green"}, imgYes, true);
        } else {
            validateTip(userName.next(), {"color": "red"}, imgNo + " 用戶名輸入的不符合規範，請重新輸入", false);
        }

    });

    birthday.on("focus", function () {
        validateTip(birthday.next(), {"color": "#666666"}, "* 點擊輸入框，選擇日期", false);
    }).on("blur", function () {
        if (birthday.val() != null && birthday.val() != "") {
            validateTip(birthday.next(), {"color": "green"}, imgYes, true);
        } else {
            validateTip(birthday.next(), {"color": "red"}, imgNo + " 選擇的日期不正確,請重新輸入", false);
        }
    });

    phone.on("focus", function () {
        validateTip(phone.next(), {"color": "#666666"}, "* 請輸入手機號", false);
    }).on("blur", function () {
        var patrn = /^(13[0-9]|15[0-9]|18[0-9])\d{8}$/;
        if (phone.val().match(patrn)) {
            validateTip(phone.next(), {"color": "green"}, imgYes, true);
        } else {
            validateTip(phone.next(), {"color": "red"}, imgNo + " 您輸入的手機號格式不正確", false);
        }
    });

    userRole.on("focus", function () {
        validateTip(userRole.next(), {"color": "#666666"}, "* 請選擇用戶角色", false);
    }).on("blur", function () {
        if (userRole.val() != null && userRole.val() > 0) {
            validateTip(userRole.next(), {"color": "green"}, imgYes, true);
        } else {
            validateTip(userRole.next(), {"color": "red"}, imgNo + " 請重新選擇用戶角色", false);
        }

    });

    saveBtn.on("click", function () {
        userName.blur();
        phone.blur();
        birthday.blur();
        userRole.blur();
        if (userName.attr("validateStatus") == "true"
            && phone.attr("validateStatus") == "true"
            && birthday.attr("validateStatus") == "true"
            && userRole.attr("validateStatus") == "true") {
            if (confirm("是否確認要提交數據？")) {
                $("#userForm").submit();
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