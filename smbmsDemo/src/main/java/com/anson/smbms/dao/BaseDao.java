package com.anson.smbms.dao;

import java.io.IOException;
import java.io.InputStream;
import java.sql.*;
import java.util.Properties;

/**
 * 操作數據庫的基類--靜態類
 *
 * @author Administrator
 */
public class BaseDao {

    static {//靜態代碼塊,在類加載的時候執行
        init();
    }

    private static String driver;
    private static String url;
    private static String user;
    private static String password;

    //初始化連接參數,配置文件裡獲得
    public static void init() {
        Properties params = new Properties();
        String configFile = "db.properties";
        InputStream is = BaseDao.class.getClassLoader().getResourceAsStream(configFile);
        try {
            params.load(is);
        } catch (IOException e) {
            e.printStackTrace();
        }
        driver = params.getProperty("driver");
        url = params.getProperty("url");
        user = params.getProperty("user");
        password = params.getProperty("password");

    }


    /**
     * 獲取數據庫連接
     *
     * @return
     */
    public static Connection getConnection() {
        Connection connection = null;
        try {
            Class.forName(driver);
            connection = DriverManager.getConnection(url, user, password);
        } catch (Exception e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }

        return connection;
    }

    /**
     * 查詢操作
     *
     * @param connection
     * @param pstm
     * @param rs
     * @param sql
     * @param params
     * @return
     */
    public static ResultSet execute(Connection connection, PreparedStatement pstm, ResultSet rs,
                                    String sql, Object[] params) throws Exception {
        pstm = connection.prepareStatement(sql);
        for (int i = 0; i < params.length; i++) {
            pstm.setObject(i + 1, params[i]);
        }
        rs = pstm.executeQuery();
        return rs;
    }

    /**
     * 更新操作
     *
     * @param connection
     * @param pstm
     * @param sql
     * @param params
     * @return
     * @throws Exception
     */
    public static int execute(Connection connection, PreparedStatement pstm,
                              String sql, Object[] params) throws Exception {
        int updateRows = 0;
        pstm = connection.prepareStatement(sql);
        for (int i = 0; i < params.length; i++) {
            pstm.setObject(i + 1, params[i]);
        }
        updateRows = pstm.executeUpdate();
        return updateRows;
    }

    /**
     * 釋放資源
     *
     * @param connection
     * @param pstm
     * @param rs
     * @return
     */
    public static boolean closeResource(Connection connection, PreparedStatement pstm, ResultSet rs) {
        boolean flag = true;
        if (rs != null) {
            try {
                rs.close();
                rs = null;//GC回收
            } catch (SQLException e) {
                // TODO Auto-generated catch block
                e.printStackTrace();
                flag = false;
            }
        }
        if (pstm != null) {
            try {
                pstm.close();
                pstm = null;//GC回收
            } catch (SQLException e) {
                // TODO Auto-generated catch block
                e.printStackTrace();
                flag = false;
            }
        }
        if (connection != null) {
            try {
                connection.close();
                connection = null;//GC回收
            } catch (SQLException e) {
                // TODO Auto-generated catch block
                e.printStackTrace();
                flag = false;
            }
        }

        return flag;
    }

}

