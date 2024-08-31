<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<%@include file="/jsp/common/head.jsp" %>
<div class="right">
    <div class="location">
        <strong>你現在所在的位置是:</strong>
        <span>用戶管理頁面 >> 用戶信息查看頁面</span>
    </div>
    <div class="providerView">
        <p><strong>用戶編碼：</strong><span>${user.userCode }</span></p>
        <p><strong>用戶名稱：</strong><span>${user.userName }</span></p>
        <p><strong>用戶性別：</strong>
            <span>
            		<c:if test="${user.gender == 1 }">男</c:if>
					<c:if test="${user.gender == 2 }">女</c:if>
				</span>
        </p>
        <p><strong>出生日期：</strong><span>${user.birthday }</span></p>
        <p><strong>用戶電話：</strong><span>${user.phone }</span></p>
        <p><strong>用戶地址：</strong><span>${user.address }</span></p>
        <p><strong>用戶角色：</strong><span>${user.userRoleName}</span></p>
        <div class="providerAddBtn">
            <input type="button" id="back" name="back" value="返回">
        </div>
    </div>
</div>
</section>
<%@include file="/jsp/common/foot.jsp" %>
<script type="text/javascript" src="${pageContext.request.contextPath }/js/userview.js"></script>