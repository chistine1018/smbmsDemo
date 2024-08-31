package com.anson.smbms.service.bill;

import com.anson.smbms.pojo.Bill;

import java.util.List;

public interface BillService {
    /**
     * 增加訂單
     *
     * @param bill
     * @return
     */
    public boolean add(Bill bill);


    /**
     * 透過條件取得訂單清單-模糊查詢-billList
     *
     * @param bill
     * @return
     */
    public List<Bill> getBillList(Bill bill);

    /**
     * 通過billId刪除Bill
     *
     * @param delId
     * @return
     */
    public boolean deleteBillById(String delId);


    /**
     * 通過billId獲取Bill
     *
     * @param id
     * @return
     */
    public Bill getBillById(String id);

    /**
     * 修改訂單信息
     *
     * @param bill
     * @return
     */
    public boolean modify(Bill bill);

}
