package com.anson.smbms.service.provider;

import com.anson.smbms.dao.BaseDao;
import com.anson.smbms.dao.bill.BillDao;
import com.anson.smbms.dao.bill.BillDaoImpl;
import com.anson.smbms.dao.provider.ProviderDao;
import com.anson.smbms.dao.provider.ProviderDaoImpl;
import com.anson.smbms.pojo.Provider;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.List;

public class ProviderServiceImpl implements ProviderService {

    private ProviderDao providerDao;
    private BillDao billDao;

    public ProviderServiceImpl() {
        providerDao = new ProviderDaoImpl();
        billDao = new BillDaoImpl();
    }

    @Override
    public boolean add(Provider provider) {
        // TODO Auto-generated method stub
        boolean flag = false;
        Connection connection = null;
        try {
            connection = BaseDao.getConnection();
            connection.setAutoCommit(false);//開啟JDBC事務管理
            if (providerDao.add(connection, provider) > 0)
                flag = true;
            connection.commit();
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
            //在service層進行connection連接的關閉
            BaseDao.closeResource(connection, null, null);
        }
        return flag;
    }

    @Override
    public List<Provider> getProviderList(String proName, String proCode) {
        // TODO Auto-generated method stub
        Connection connection = null;
        List<Provider> providerList = null;
        System.out.println("query proName ---- > " + proName);
        System.out.println("query proCode ---- > " + proCode);
        try {
            connection = BaseDao.getConnection();
            providerList = providerDao.getProviderList(connection, proName, proCode);
        } catch (Exception e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        } finally {
            BaseDao.closeResource(connection, null, null);
        }
        return providerList;
    }

    /**
     * 業務：根據ID刪除供應商表的資料之前，需要先去訂單表裡查詢操作
     * 若訂單表中無該供應商的訂單數據，則可刪除
     * 若有該供應商的訂單數據，則不可以刪除
     * 傳回值billCount
     * 1> billCount == 0 刪除---1 成功 （0） 2 不成功 （-1）
     * 2> billCount > 0 不能刪除 查詢成功（0）查詢不成功（-1）
     * <p>
     * ---判斷
     * 如果billCount = -1 失敗
     * 若billCount >= 0 成功
     */
    @Override
    public int deleteProviderById(String delId) {
        // TODO Auto-generated method stub
        Connection connection = null;
        int billCount = -1;
        try {
            connection = BaseDao.getConnection();
            connection.setAutoCommit(false);
            billCount = billDao.getBillCountByProviderId(connection, delId);
            if (billCount == 0) {
                providerDao.deleteProviderById(connection, delId);
            }
            connection.commit();
        } catch (Exception e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
            billCount = -1;
            try {
                connection.rollback();
            } catch (SQLException e1) {
                // TODO Auto-generated catch block
                e1.printStackTrace();
            }
        } finally {
            BaseDao.closeResource(connection, null, null);
        }
        return billCount;
    }

    @Override
    public Provider getProviderById(String id) {
        // TODO Auto-generated method stub
        Provider provider = null;
        Connection connection = null;
        try {
            connection = BaseDao.getConnection();
            provider = providerDao.getProviderById(connection, id);
        } catch (Exception e) {
            // TODO: handle exception
            e.printStackTrace();
            provider = null;
        } finally {
            BaseDao.closeResource(connection, null, null);
        }
        return provider;
    }

    @Override
    public boolean modify(Provider provider) {
        // TODO Auto-generated method stub
        Connection connection = null;
        boolean flag = false;
        try {
            connection = BaseDao.getConnection();
            if (providerDao.modify(connection, provider) > 0)
                flag = true;
        } catch (Exception e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        } finally {
            BaseDao.closeResource(connection, null, null);
        }
        return flag;
    }

}
