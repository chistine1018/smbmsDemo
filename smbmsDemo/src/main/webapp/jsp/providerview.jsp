<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<%@include file="/jsp/common/head.jsp" %>
<div class="right">
    <div class="location">
        <strong>你現在所在的位置是:</strong>
        <span>供應商管理頁面 >> 信息查看</span>
    </div>
    <div class="providerView">
        <p><strong>供應商編碼：</strong><span>${provider.proCode }</span></p>
        <p><strong>供應商名稱：</strong><span>${provider.proName }</span></p>
        <p><strong>聯繫人：</strong><span>${provider.proContact }</span></p>
        <p><strong>聯繫電話：</strong><span>${provider.proPhone }</span></p>
        <p><strong>傳真：</strong><span>${provider.proFax }</span></p>
        <p><strong>描述：</strong><span>${provider.proDesc}</span></p>
        <div class="providerAddBtn">
            <input type="button" id="back" name="back" value="返回">
        </div>
    </div>
</div>
</section>
<%@include file="/jsp/common/foot.jsp" %>
<script type="text/javascript" src="${pageContext.request.contextPath }/js/providerview.js"></script>
