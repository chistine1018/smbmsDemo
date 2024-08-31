package com.anson.smbms.service.user;


import com.anson.smbms.pojo.User;

import java.util.List;

public interface UserService {
    /**
     * 增加用戶信息
     *
     * @param user
     * @return
     */
    public boolean add(User user);

    /**
     * 用戶登陸
     *
     * @param userCode
     * @param userPassword
     * @return
     */
    public User login(String userCode, String userPassword);

    /**
     * 根據條件查詢用戶列表
     *
     * @param queryUserName
     * @param queryUserRole
     * @return
     */
    public List<User> getUserList(String queryUserName, int queryUserRole, int currentPageNo, int pageSize);

    /**
     * 根據條件查詢用戶表記錄數
     *
     * @param queryUserName
     * @param queryUserRole
     * @return
     */
    public int getUserCount(String queryUserName, int queryUserRole);

    /**
     * 根據userCode查詢出User
     *
     * @param userCode
     * @return
     */
    public User selectUserCodeExist(String userCode);

    /**
     * 根據ID刪除user
     *
     * @param delId
     * @return
     */
    public boolean deleteUserById(Integer delId);

    /**
     * 根據ID查找user
     *
     * @param id
     * @return
     */
    public User getUserById(String id);

    /**
     * 修改用戶信息
     *
     * @param user
     * @return
     */
    public boolean modify(User user);

    /**
     * 根據userId修改密碼
     *
     * @param id
     * @param pwd
     * @return
     */
    public boolean updatePwd(int id, String pwd);
}
