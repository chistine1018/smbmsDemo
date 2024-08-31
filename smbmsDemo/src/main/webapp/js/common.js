var path = $("#path").val();
var imgYes = "<img width='15px' src='" + path + "/images/y.png' />";
var imgNo = "<img width='15px' src='" + path + "/images/n.png' />";


/**
 * 提示訊息顯示
 * element:顯示提示訊息的元素（font）
 * css：提示樣式
 * tipString:提示訊息
 * status：true/false --驗證是否通過
 */
function validateTip(element, css, tipString, status) {
    element.css(css);
    element.html(tipString);

    element.prev().attr("validateStatus", status);
}

var referer = $("#referer").val();