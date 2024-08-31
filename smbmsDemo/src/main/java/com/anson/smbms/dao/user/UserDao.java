package com.anson.smbms.dao.user;


import com.anson.smbms.pojo.User;

import java.sql.Connection;
import java.util.List;

public interface UserDao {
    /**
     * 增加用戶信息
     *
     * @param connection
     * @param user
     * @return
     * @throws Exception
     */
    public int add(Connection connection, User user) throws Exception;

    /**
     * 通過userCode獲取User
     *
     * @param connection
     * @param userCode
     * @return
     * @throws Exception
     */
    public User getLoginUser(Connection connection, String userCode) throws Exception;

    /**
     * 通過條件查詢-userList
     *
     * @param connection
     * @param userName
     * @param userRole
     * @return
     * @throws Exception
     */
    public List<User> getUserList(Connection connection, String userName, int userRole, int currentPageNo, int pageSize) throws Exception;

    /**
     * 通過條件查詢-用戶表紀錄數
     *
     * @param connection
     * @param userName
     * @param userRole
     * @return
     * @throws Exception
     */
    public int getUserCount(Connection connection, String userName, int userRole) throws Exception;

    /**
     * 通過userId刪除user
     *
     * @param delId
     * @return
     * @throws Exception
     */
    public int deleteUserById(Connection connection, Integer delId) throws Exception;


    /**
     * 通過userId獲取user
     *
     * @param connection
     * @param id
     * @return
     * @throws Exception
     */
    public User getUserById(Connection connection, String id) throws Exception;

    /**
     * 修改用戶信息
     *
     * @param connection
     * @param user
     * @return
     * @throws Exception
     */
    public int modify(Connection connection, User user) throws Exception;


    /**
     * 修改當前用戶密碼
     *
     * @param connection
     * @param id
     * @param pwd
     * @return
     * @throws Exception
     */
    public int updatePwd(Connection connection, int id, String pwd) throws Exception;


}
