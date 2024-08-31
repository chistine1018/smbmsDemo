<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>超市訂單管理系統</title>
    <link type="text/css" rel="stylesheet" href="${pageContext.request.contextPath }/css/style.css"/>
    <link type="text/css" rel="stylesheet" href="${pageContext.request.contextPath }/css/public.css"/>
</head>
<body>
<!--头部-->
<header class="publicHeader">
    <h1>超市訂單管理系統</h1>
    <div class="publicHeaderR">
        <p><span>下午好！</span><span style="color: #fff21b"> ${userSession.userName }</span> , 歡迎你 ！</p>
        <a href="${pageContext.request.contextPath }/jsp/logout.do">退出</a>
    </div>
</header>
<!--时间-->
<section class="publicTime">
    <span id="time">2015年1月1日 11:11  星期一</span>
    <a href="#">溫馨提示：為了能正常瀏覽，請使用高版瀏覽器！ （IE10+）</a>
</section>
<!--主体内容-->
<section class="publicMian ">
    <div class="left">
        <h2 class="leftH2"><span class="span1"></span>功能列表 <span></span></h2>
        <nav>
            <ul class="list">
                <li><a href="${pageContext.request.contextPath }/jsp/bill.do?method=query">訂單管理</a></li>
                <li><a href="${pageContext.request.contextPath }/jsp/provider.do?method=query">供應商管理</a></li>
                <li><a href="${pageContext.request.contextPath }/jsp/user.do?method=query">用戶管理</a></li>
                <li><a href="${pageContext.request.contextPath }/jsp/pwdmodify.jsp">密碼修改</a></li>
                <li><a href="${pageContext.request.contextPath }/jsp/logout.do">退出系统</a></li>
            </ul>
        </nav>
    </div>
    <input type="hidden" id="path" name="path" value="${pageContext.request.contextPath }"/>
    <input type="hidden" id="referer" name="referer" value="<%=request.getHeader("Referer")%>"/>