<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<%@include file="/jsp/common/head.jsp" %>

<div class="right">
    <div class="location">
        <strong>你現在所在的位置是:</strong>
        <span>訂單管理頁面 >> 訂單新增頁面</span>
    </div>
    <div class="providerAdd">
        <form id="billForm" name="billForm" method="post" action="${pageContext.request.contextPath }/jsp/bill.do">
            <!--div的class 為error是驗證錯誤，ok是驗證成功-->
            <input type="hidden" name="method" value="add">
            <div class="">
                <label for="billCode">訂單編碼 ：</label>
                <input type="text" name="billCode" class="text" id="billCode" value="">
                <!-- 放置提示訊息 -->
                <font color="red"></font>
            </div>
            <div>
                <label for="productName">商品名稱：</label>
                <input type="text" name="productName" id="productName" value="">
                <font color="red"></font>
            </div>
            <div>
                <label for="productUnit">商品單位：</label>
                <input type="text" name="productUnit" id="productUnit" value="">
                <font color="red"></font>
            </div>
            <div>
                <label for="productCount">商品數量：</label>
                <input type="text" name="productCount" id="productCount" value="">
                <font color="red"></font>
            </div>
            <div>
                <label for="totalPrice">總金額：</label>
                <input type="text" name="totalPrice" id="totalPrice" value="">
                <font color="red"></font>
            </div>
            <div>
                <label>供應商：</label>
                <select name="providerId" id="providerId">
                </select>
                <font color="red"></font>
            </div>
            <div>
                <label>是否付款：</label>
                <input type="radio" name="isPayment" value="1" checked="checked">未付款
                <input type="radio" name="isPayment" value="2">已付款
            </div>
            <div class="providerAddBtn">
                <input type="button" name="add" id="add" value="保存">
                <input type="button" id="back" name="back" value="返回">
            </div>
        </form>
    </div>
</div>
</section>
<%@include file="/jsp/common/foot.jsp" %>
<script type="text/javascript" src="${pageContext.request.contextPath }/js/billadd.js"></script>