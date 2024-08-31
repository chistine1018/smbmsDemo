package com.anson.smbms.dao.bill;


import com.anson.smbms.pojo.Bill;

import java.sql.Connection;
import java.util.List;

public interface BillDao {
    /**
     * 增加訂單
     *
     * @param connection
     * @param bill
     * @return
     * @throws Exception
     */
    public int add(Connection connection, Bill bill) throws Exception;


    /**
     * 透過查詢條件取得供應商清單-模糊查詢-getBillList
     *
     * @param connection
     * @param bill
     * @return
     * @throws Exception
     */
    public List<Bill> getBillList(Connection connection, Bill bill) throws Exception;

    /**
     * 透過delId刪除Bill
     *
     * @param connection
     * @param delId
     * @return
     * @throws Exception
     */
    public int deleteBillById(Connection connection, String delId) throws Exception;


    /**
     * 透過billId獲取Bill
     *
     * @param connection
     * @param id
     * @return
     * @throws Exception
     */
    public Bill getBillById(Connection connection, String id) throws Exception;

    /**
     * 修改訂單資訊
     *
     * @param connection
     * @param bill
     * @return
     * @throws Exception
     */
    public int modify(Connection connection, Bill bill) throws Exception;

    /**
     * 根據供應商ID查詢訂單數量
     *
     * @param connection
     * @param providerId
     * @return
     * @throws Exception
     */
    public int getBillCountByProviderId(Connection connection, String providerId) throws Exception;

}
