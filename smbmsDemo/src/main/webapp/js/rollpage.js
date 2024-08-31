function page_nav(frm, num) {
    frm.pageIndex.value = num;
    frm.submit();
}

function jump_to(frm, num) {
    //alert(num);
    //驗證用戶的輸入
    var regexp = /^[1-9]\d*$/;
    var totalPageCount = document.getElementById("totalPageCount").value;
    //alert(totalPageCount);
    if (!regexp.test(num)) {
        alert("請輸入大於0的正整數！");
        return false;
    } else if ((num - totalPageCount) > 0) {
        alert("請輸入小於總頁數的頁碼");
        return false;
    } else {
        page_nav(frm, num);
    }
}