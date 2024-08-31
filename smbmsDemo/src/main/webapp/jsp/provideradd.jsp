<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<%@include file="/jsp/common/head.jsp" %>

<div class="right">
    <div class="location">
        <strong>你現在所在的位置是:</strong>
        <span>供應商管理頁面 >> 供應商添加頁面</span>
    </div>
    <div class="providerAdd">
        <form id="providerForm" name="providerForm" method="post"
              action="${pageContext.request.contextPath }/jsp/provider.do">
            <input type="hidden" name="method" value="add">
            <!--div的class 為error是驗證錯誤，ok是驗證成功-->
            <div class="">
                <label for="proCode">供應商編碼：</label>
                <input type="text" name="proCode" id="proCode" value="">
                <!-- 放置提示信息 -->
                <font color="red"></font>
            </div>
            <div>
                <label for="proName">供應商名稱：</label>
                <input type="text" name="proName" id="proName" value="">
                <font color="red"></font>
            </div>
            <div>
                <label for="proContact">聯繫人：</label>
                <input type="text" name="proContact" id="proContact" value="">
                <font color="red"></font>

            </div>
            <div>
                <label for="proPhone">聯繫電話：</label>
                <input type="text" name="proPhone" id="proPhone" value="">
                <font color="red"></font>
            </div>
            <div>
                <label for="proAddress">聯繫地址：</label>
                <input type="text" name="proAddress" id="proAddress" value="">
            </div>
            <div>
                <label for="proFax">傳真：</label>
                <input type="text" name="proFax" id="proFax" value="">
            </div>
            <div>
                <label for="proDesc">描述：</label>
                <input type="text" name="proDesc" id="proDesc" value="">
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
<script type="text/javascript" src="${pageContext.request.contextPath }/js/provideradd.js"></script>
