package com.anson.smbms.service.user;


import com.anson.smbms.dao.BaseDao;
import com.anson.smbms.dao.user.UserDao;
import com.anson.smbms.dao.user.UserDaoImpl;
import com.anson.smbms.pojo.User;
import org.junit.Test;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.List;

/**
 * service層捕獲異常，進行事務處理
 * 事務處理：呼叫不同dao的多個方法，必須使用同一個connection（connection作為參數傳遞）
 * 交易完成之後，需要在service層進行connection的關閉，在dao層關閉（PreparedStatement和ResultSet物件）
 *
 * @author Administrator
 */
public class UserServiceImpl implements UserService {

    private UserDao userDao;

    public UserServiceImpl() {
        userDao = new UserDaoImpl();
    }

    @Override
    public boolean add(User user) {
        // TODO Auto-generated method stub

        boolean flag = false;
        Connection connection = null;
        try {
            connection = BaseDao.getConnection();
            connection.setAutoCommit(false);//开启JDBC事务管理
            int updateRows = userDao.add(connection, user);
            connection.commit();
            if (updateRows > 0) {
                flag = true;
                System.out.println("add success!");
            } else {
                System.out.println("add failed!");
            }

        } catch (Exception e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
            try {
                System.out.println("rollback==================");
                connection.rollback();
            } catch (SQLException e1) {
                // TODO Auto-generated catch block
                e1.printStackTrace();
            }
        } finally {
            //在service层进行connection连接的关闭
            BaseDao.closeResource(connection, null, null);
        }
        return flag;
    }

    @Override
    public User login(String userCode, String userPassword) {
        // TODO Auto-generated method stub
        Connection connection = null;
        User user = null;
        try {
            connection = BaseDao.getConnection();
            user = userDao.getLoginUser(connection, userCode);
        } catch (Exception e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        } finally {
            BaseDao.closeResource(connection, null, null);
        }

        //匹配密码
        if (null != user) {
            if (!user.getUserPassword().equals(userPassword))
                user = null;
        }

        return user;
    }

    @Override
    public List<User> getUserList(String queryUserName, int queryUserRole, int currentPageNo, int pageSize) {
        // TODO Auto-generated method stub
        Connection connection = null;
        List<User> userList = null;
        System.out.println("queryUserName ---- > " + queryUserName);
        System.out.println("queryUserRole ---- > " + queryUserRole);
        System.out.println("currentPageNo ---- > " + currentPageNo);
        System.out.println("pageSize ---- > " + pageSize);
        try {
            connection = BaseDao.getConnection();
            userList = userDao.getUserList(connection, queryUserName, queryUserRole, currentPageNo, pageSize);
        } catch (Exception e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        } finally {
            BaseDao.closeResource(connection, null, null);
        }
        return userList;
    }

    @Override
    public User selectUserCodeExist(String userCode) {
        // TODO Auto-generated method stub
        Connection connection = null;
        User user = null;
        try {
            connection = BaseDao.getConnection();
            user = userDao.getLoginUser(connection, userCode);
        } catch (Exception e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        } finally {
            BaseDao.closeResource(connection, null, null);
        }
        return user;
    }

    @Override
    public boolean deleteUserById(Integer delId) {
        // TODO Auto-generated method stub
        Connection connection = null;
        boolean flag = false;
        try {
            connection = BaseDao.getConnection();
            if (userDao.deleteUserById(connection, delId) > 0)
                flag = true;
        } catch (Exception e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        } finally {
            BaseDao.closeResource(connection, null, null);
        }
        return flag;
    }

    @Override
    public User getUserById(String id) {
        // TODO Auto-generated method stub
        User user = null;
        Connection connection = null;
        try {
            connection = BaseDao.getConnection();
            user = userDao.getUserById(connection, id);
        } catch (Exception e) {
            // TODO: handle exception
            e.printStackTrace();
            user = null;
        } finally {
            BaseDao.closeResource(connection, null, null);
        }
        return user;
    }

    @Override
    public boolean modify(User user) {
        // TODO Auto-generated method stub
        Connection connection = null;
        boolean flag = false;
        try {
            connection = BaseDao.getConnection();
            if (userDao.modify(connection, user) > 0)
                flag = true;
        } catch (Exception e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        } finally {
            BaseDao.closeResource(connection, null, null);
        }
        return flag;
    }

    @Override
    public boolean updatePwd(int id, String pwd) {
        boolean flag = false;
        Connection connection = null;
        try {
            connection = BaseDao.getConnection();
            if (userDao.updatePwd(connection, id, pwd) > 0)
                flag = true;
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            BaseDao.closeResource(connection, null, null);
        }
        return flag;
    }

    @Override
    public int getUserCount(String queryUserName, int queryUserRole) {
        // TODO Auto-generated method stub
        Connection connection = null;
        int count = 0;
        System.out.println("queryUserName ---- > " + queryUserName);
        System.out.println("queryUserRole ---- > " + queryUserRole);
        try {
            connection = BaseDao.getConnection();
            count = userDao.getUserCount(connection, queryUserName, queryUserRole);
        } catch (Exception e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        } finally {
            BaseDao.closeResource(connection, null, null);
        }
        return count;
    }

    @Test
    public void test() {
        UserService userService = new UserServiceImpl();
        User user = userService.login("admin", "1234567");
        System.out.println(user.getBirthday());
    }

}
