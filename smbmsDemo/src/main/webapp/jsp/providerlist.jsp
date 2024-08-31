<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<%@include file="/jsp/common/head.jsp" %>

<div class="right">
    <div class="location">
        <strong>你現在所在的位置是:</strong>
        <span>供應商管理頁面</span>
    </div>
    <div class="search">
        <form method="get" action="${pageContext.request.contextPath }/jsp/provider.do">
            <input name="method" value="query" type="hidden">
            <span>供應商編碼：</span>
            <input name="queryProCode" type="text" value="${queryProCode }">

            <span>供應商名稱：</span>
            <input name="queryProName" type="text" value="${queryProName }">

            <input value="查 詢" type="submit" id="searchbutton">
            <a href="${pageContext.request.contextPath }/jsp/provideradd.jsp">添加供應商</a>
        </form>
    </div>
    <!--供應商操作表格-->
    <table class="providerTable" cellpadding="0" cellspacing="0">
        <tr class="firstTr">
            <th width="10%">供應商編碼</th>
            <th width="20%">供應商名稱</th>
            <th width="10%">聯繫人</th>
            <th width="10%">聯繫電話</th>
            <th width="10%">傳真</th>
            <th width="10%">創建時間</th>
            <th width="30%">操作</th>
        </tr>
        <c:forEach var="provider" items="${providerList }" varStatus="status">
            <tr>
                <td>
                    <span>${provider.proCode }</span>
                </td>
                <td>
                    <span>${provider.proName }</span>
                </td>
                <td>
                    <span>${provider.proContact}</span>
                </td>
                <td>
                    <span>${provider.proPhone}</span>
                </td>
                <td>
                    <span>${provider.proFax}</span>
                </td>
                <td>
					<span>
					<fmt:formatDate value="${provider.creationDate}" pattern="yyyy-MM-dd"/>
					</span>
                </td>
                <td>
                    <span><a class="viewProvider" href="javascript:;"
                             proid=${provider.id } proname=${provider.proName }><img
                            src="${pageContext.request.contextPath }/images/read.png" alt="查看"
                            title="查看"/></a></span>
                    <span><a class="modifyProvider" href="javascript:;"
                             proid=${provider.id } proname=${provider.proName }><img
                            src="${pageContext.request.contextPath }/images/xiugai.png" alt="修改"
                            title="修改"/></a></span>
                    <span><a class="deleteProvider" href="javascript:;"
                             proid=${provider.id } proname=${provider.proName }><img
                            src="${pageContext.request.contextPath }/images/schu.png" alt="删除"
                            title="删除"/></a></span>
                </td>
            </tr>
        </c:forEach>
    </table>

</div>
</section>

<!--點擊刪除按鈕後彈出的頁面-->
<div class="zhezhao"></div>
<div class="remove" id="removeProv">
    <div class="removerChid">
        <h2>提示</h2>
        <div class="removeMain">
            <p>你確定要刪除該供應商嗎？</p>
            <a href="#" id="yes">確定</a>
            <a href="#" id="no">取消</a>
        </div>
    </div>
</div>

<%@include file="/jsp/common/foot.jsp" %>
<script type="text/javascript" src="${pageContext.request.contextPath }/js/providerlist.js"></script>
