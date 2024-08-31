<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<%@include file="/jsp/common/head.jsp" %>

<div class="right">
    <div class="location">
        <strong>你現在所在的位置是:</strong>
        <span>訂單管理頁面</span>
    </div>
    <div class="search">
        <form method="get" action="${pageContext.request.contextPath }/jsp/bill.do">
            <input name="method" value="query" class="input-text" type="hidden">
            <span>商品名稱：</span>
            <input name="queryProductName" type="text" value="${queryProductName }">

            <span>供應商：</span>
            <select name="queryProviderId">
                <c:if test="${providerList != null }">
                    <option value="0">--請選擇--</option>
                    <c:forEach var="provider" items="${providerList}">
                        <option
                                <c:if test="${provider.id == queryProviderId }">selected="selected"</c:if>
                                value="${provider.id}">${provider.proName}</option>
                    </c:forEach>
                </c:if>
            </select>

            <span>是否付款：</span>
            <select name="queryIsPayment">
                <option value="0">--請選擇--</option>
                <option value="1" ${queryIsPayment == 1 ? "selected=\"selected\"":"" }>未付款</option>
                <option value="2" ${queryIsPayment == 2 ? "selected=\"selected\"":"" }>已付款</option>
            </select>

            <input value="查 詢" type="submit" id="searchbutton">
            <a href="${pageContext.request.contextPath }/jsp/billadd.jsp">添加訂單</a>
        </form>
    </div>
    <!--帳單表格 樣式和供應商共用-->
    <table class="providerTable" cellpadding="0" cellspacing="0">
        <tr class="firstTr">
            <th width="10%">訂單編碼</th>
            <th width="20%">商品名稱</th>
            <th width="10%">供應商</th>
            <th width="10%">訂單金額</th>
            <th width="10%">是否付款</th>
            <th width="10%">創建時間</th>
            <th width="30%">操作</th>
        </tr>
        <c:forEach var="bill" items="${billList }" varStatus="status">
            <tr>
                <td>
                    <span>${bill.billCode }</span>
                </td>
                <td>
                    <span>${bill.productName }</span>
                </td>
                <td>
                    <span>${bill.providerName}</span>
                </td>
                <td>
                    <span>${bill.totalPrice}</span>
                </td>
                <td>
					<span>
						<c:if test="${bill.isPayment == 1}">未付款</c:if>
						<c:if test="${bill.isPayment == 2}">已付款</c:if>
					</span>
                </td>
                <td>
					<span>
					<fmt:formatDate value="${bill.creationDate}" pattern="yyyy-MM-dd"/>
					</span>
                </td>
                <td>
                    <span><a class="viewBill" href="javascript:;" billid=${bill.id } billcc=${bill.billCode }><img
                            src="${pageContext.request.contextPath }/images/read.png" alt="查看"
                            title="查看"/></a></span>
                    <span><a class="modifyBill" href="javascript:;" billid=${bill.id } billcc=${bill.billCode }><img
                            src="${pageContext.request.contextPath }/images/xiugai.png" alt="修改"
                            title="修改"/></a></span>
                    <span><a class="deleteBill" href="javascript:;" billid=${bill.id } billcc=${bill.billCode }><img
                            src="${pageContext.request.contextPath }/images/schu.png" alt="刪除"
                            title="删除"/></a></span>
                </td>
            </tr>
        </c:forEach>
    </table>
</div>
</section>

<!-- 點擊刪除按鈕後彈出的頁面-->
<div class="zhezhao"></div>
<div class="remove" id="removeBi">
    <div class="removerChid">
        <h2>提示</h2>
        <div class="removeMain">
            <p>你確定要刪除該訂單嗎？</p>
            <a href="#" id="yes">確定</a>
            <a href="#" id="no">取消</a>
        </div>
    </div>
</div>

<%@include file="/jsp/common/foot.jsp" %>
<script type="text/javascript" src="${pageContext.request.contextPath }/js/billlist.js"></script>