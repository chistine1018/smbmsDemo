<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<%@include file="/jsp/common/head.jsp" %>
<div class="right">
    <div class="location">
        <strong>你現在所在的位置是:</strong>
        <span>用戶管理頁面</span>
    </div>
    <div class="search">
        <form method="get" action="${pageContext.request.contextPath }/jsp/user.do">
            <input name="method" value="query" class="input-text" type="hidden">
            <span>用戶名：</span>
            <input name="queryname" class="input-text" type="text" value="${queryUserName }">

            <span>用戶角色：</span>
            <select name="queryUserRole">
                <c:if test="${roleList != null }">
                    <option value="0">--請選擇--</option>
                    <c:forEach var="role" items="${roleList}">
                        <option
                                <c:if test="${role.id == queryUserRole }">selected="selected"</c:if>
                                value="${role.id}">${role.roleName}</option>
                    </c:forEach>
                </c:if>
            </select>

            <input type="hidden" name="pageIndex" value="1"/>
            <input value="查 詢" type="submit" id="searchbutton">
            <a href="${pageContext.request.contextPath}/jsp/useradd.jsp">添加用戶</a>
        </form>
    </div>
    <!--用戶-->
    <table class="providerTable" cellpadding="0" cellspacing="0">
        <tr class="firstTr">
            <th width="10%">用戶編碼</th>
            <th width="20%">用戶名稱</th>
            <th width="10%">性别</th>
            <th width="10%">年龄</th>
            <th width="10%">電話</th>
            <th width="10%">用戶角色</th>
            <th width="30%">操作</th>
        </tr>
        <c:forEach var="user" items="${userList }" varStatus="status">
            <tr>
                <td>
                    <span>${user.userCode }</span>
                </td>
                <td>
                    <span>${user.userName }</span>
                </td>
                <td>
							<span>
								<c:if test="${user.gender==1}">男</c:if>
								<c:if test="${user.gender==2}">女</c:if>
							</span>
                </td>
                <td>
                    <span>${user.age}</span>
                </td>
                <td>
                    <span>${user.phone}</span>
                </td>
                <td>
                    <span>${user.userRoleName}</span>
                </td>
                <td>
                    <span><a class="viewUser" href="javascript:;" userid=${user.id } username=${user.userName }><img
                            src="${pageContext.request.contextPath }/images/read.png" alt="查看"
                            title="查看"/></a></span>
                    <span><a class="modifyUser" href="javascript:;" userid=${user.id } username=${user.userName }><img
                            src="${pageContext.request.contextPath }/images/xiugai.png" alt="修改"
                            title="修改"/></a></span>
                    <span><a class="deleteUser" href="javascript:;" userid=${user.id } username=${user.userName }><img
                            src="${pageContext.request.contextPath }/images/schu.png" alt="删除"
                            title="删除"/></a></span>
                </td>
            </tr>
        </c:forEach>
    </table>
    <input type="hidden" id="totalPageCount" value="${totalPageCount}"/>
    <c:import url="rollpage.jsp">
        <c:param name="totalCount" value="${totalCount}"/>
        <c:param name="currentPageNo" value="${currentPageNo}"/>
        <c:param name="totalPageCount" value="${totalPageCount}"/>
    </c:import>
</div>
</section>

<!--點擊刪除按鈕後彈出的頁面-->
<div class="zhezhao"></div>
<div class="remove" id="removeUse">
    <div class="removerChid">
        <h2>提示</h2>
        <div class="removeMain">
            <p>你確定要删除該用戶嗎？</p>
            <a href="#" id="yes">確定</a>
            <a href="#" id="no">取消</a>
        </div>
    </div>
</div>

<%@include file="/jsp/common/foot.jsp" %>
<script type="text/javascript" src="${pageContext.request.contextPath }/js/userlist.js"></script>
