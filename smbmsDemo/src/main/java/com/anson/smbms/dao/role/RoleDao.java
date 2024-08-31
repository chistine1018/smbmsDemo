package com.anson.smbms.dao.role;


import com.anson.smbms.pojo.Role;

import java.sql.Connection;
import java.util.List;

public interface RoleDao {

    public List<Role> getRoleList(Connection connection) throws Exception;

}
