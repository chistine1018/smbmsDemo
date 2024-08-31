package com.anson.smbms.servlet.user;


import com.anson.smbms.pojo.User;
import com.anson.smbms.service.user.UserService;
import com.anson.smbms.service.user.UserServiceImpl;
import com.anson.smbms.tools.Constants;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class LoginServlet extends HttpServlet {


    public void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

    }

    public void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        System.out.println("login ============ ");
        //獲取用戶名和密碼
        String userCode = request.getParameter("userCode");
        String userPassword = request.getParameter("userPassword");
        //調用service方法，進行用戶匹配
        UserService userService = new UserServiceImpl();
        User user = userService.login(userCode, userPassword);
        if (null != user) {//登陸成功
            //放入session
            request.getSession().setAttribute(Constants.USER_SESSION, user);
            //頁面跳轉（frame.jsp）
            response.sendRedirect("jsp/frame.jsp");
        } else {
            //頁面跳轉（login.jsp）帶出提示信息--轉發
            request.setAttribute("error", "用戶名稱或密碼不正確");
            request.getRequestDispatcher("login.jsp").forward(request, response);
        }

    }


}
