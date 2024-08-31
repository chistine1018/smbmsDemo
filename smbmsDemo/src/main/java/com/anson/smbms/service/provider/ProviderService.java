package com.anson.smbms.service.provider;

import com.anson.smbms.pojo.Provider;

import java.util.List;

public interface ProviderService {
    /**
     * 增加供應商
     *
     * @param provider
     * @return
     */
    public boolean add(Provider provider);


    /**
     * 透過供應商名稱、編碼取得供應商清單-模糊查詢-providerList
     *
     * @param proName
     * @return
     */
    public List<Provider> getProviderList(String proName, String proCode);

    /**
     * 通過proId刪除Provider
     *
     * @param delId
     * @return
     */
    public int deleteProviderById(String delId);


    /**
     * 通過proId獲取Provider
     *
     * @param id
     * @return
     */
    public Provider getProviderById(String id);

    /**
     * 修改用戶資訊
     *
     * @param user
     * @return
     */
    public boolean modify(Provider provider);

}
