package com.anson.smbms.dao.provider;

import com.anson.smbms.pojo.Provider;

import java.sql.Connection;
import java.util.List;

public interface ProviderDao {

    /**
     * 增加供應商
     *
     * @param connection
     * @param provider
     * @return
     * @throws Exception
     */
    public int add(Connection connection, Provider provider) throws Exception;


    /**
     * 透過供應商名稱、編碼取得供應商清單-模糊查詢-providerList
     *
     * @param connection
     * @param proName
     * @return
     * @throws Exception
     */
    public List<Provider> getProviderList(Connection connection, String proName, String proCode) throws Exception;

    /**
     * 通過proId刪除Provider
     *
     * @param delId
     * @return
     * @throws Exception
     */
    public int deleteProviderById(Connection connection, String delId) throws Exception;


    /**
     * 通過proId獲取Provider
     *
     * @param connection
     * @param id
     * @return
     * @throws Exception
     */
    public Provider getProviderById(Connection connection, String id) throws Exception;

    /**
     * 修改用戶資訊
     *
     * @param connection
     * @param user
     * @return
     * @throws Exception
     */
    public int modify(Connection connection, Provider provider) throws Exception;


}
