package com.anson.smbms.service.role;


import com.anson.smbms.dao.BaseDao;
import com.anson.smbms.dao.role.RoleDao;
import com.anson.smbms.dao.role.RoleDaoImpl;
import com.anson.smbms.pojo.Role;

import java.sql.Connection;
import java.util.List;

public class RoleServiceImpl implements RoleService {

    private RoleDao roleDao;

    public RoleServiceImpl() {
        roleDao = new RoleDaoImpl();
    }

    @Override
    public List<Role> getRoleList() {
        Connection connection = null;
        List<Role> roleList = null;
        try {
            connection = BaseDao.getConnection();
            roleList = roleDao.getRoleList(connection);
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            BaseDao.closeResource(connection, null, null);
        }
        return roleList;
    }

}
