<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<%@include file="/jsp/common/head.jsp" %>

<div class="right">
    <div class="location">
        <strong>你現在所在的位置是:</strong>
        <span>訂單管理頁面 >> 訂單添加頁面</span>
    </div>
    <div class="providerAdd">
        <form id="billForm" name="billForm" method="post" action="${pageContext.request.contextPath }/jsp/bill.do">
            <input type="hidden" name="method" value="modifysave">
            <input type="hidden" name="id" value="${bill.id }">
            <!--div的class 为error是驗證錯誤，ok是驗證成功-->
            <div class="">
                <label for="billCode">訂單編碼：</label>
                <input type="text" name="billCode" id="billCode" value="${bill.billCode }" readonly="readonly">
            </div>
            <div>
                <label for="productName">商品名稱：</label>
                <input type="text" name="productName" id="productName" value="${bill.productName }">
                <font color="red"></font>
            </div>
            <div>
                <label for="productUnit">商品單位：</label>
                <input type="text" name="productUnit" id="productUnit" value="${bill.productUnit }">
                <font color="red"></font>
            </div>
            <div>
                <label for="productCount">商品數量：</label>
                <input type="text" name="productCount" id="productCount" value="${bill.productCount }">
                <font color="red"></font>
            </div>
            <div>
                <label for="totalPrice">總金額：</label>
                <input type="text" name="totalPrice" id="totalPrice" value="${bill.totalPrice }">
                <font color="red"></font>
            </div>
            <div>
                <label for="providerId">供應商：</label>
                <input type="hidden" value="${bill.providerId }" id="pid"/>
                <select name="providerId" id="providerId">
                </select>
                <font color="red"></font>
            </div>
            <div>
                <label>是否付款：</label>
                <c:if test="${bill.isPayment == 1 }">
                    <input type="radio" name="isPayment" value="1" checked="checked">未付款
                    <input type="radio" name="isPayment" value="2">已付款
                </c:if>
                <c:if test="${bill.isPayment == 2 }">
                    <input type="radio" name="isPayment" value="1">未付款
                    <input type="radio" name="isPayment" value="2" checked="checked">已付款
                </c:if>
            </div>
            <div class="providerAddBtn">
                <input type="button" name="save" id="save" value="保存">
                <input type="button" id="back" name="back" value="返回">
            </div>
        </form>
    </div>

</div>
</section>

<%@include file="/jsp/common/foot.jsp" %>
<script type="text/javascript" src="${pageContext.request.contextPath }/js/billmodify.js"></script>