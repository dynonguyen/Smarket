package api.java.dto;

import java.time.LocalDateTime;

import java.util.List;

public class OrderDetailDto<T> {
    private LocalDateTime createDate;
    private String cusName;
    private String cusPhone;
    private String shipperName;
    private String shipperPhone;
    private int status;
    private String orderCode;
    private List<T> data;


    public OrderDetailDto() {
    }

    public OrderDetailDto(LocalDateTime createDate, String cusName, String cusPhone, String shipperName, String orderCode,String shipperPhone, int status, List<T> data) {
        this.createDate = createDate;
        this.cusName = cusName;
        this.cusPhone = cusPhone;
        this.shipperName = shipperName;
        this.shipperPhone = shipperPhone;
        this.status = status;
        this.orderCode = orderCode;
        this.data = data;
    }

    public LocalDateTime getCreateDate() {
        return this.createDate;
    }

    public void setCreateDate(LocalDateTime createDate) {
        this.createDate = createDate;
    }

    public String getCusName() {
        return this.cusName;
    }

    public void setCusName(String cusName) {
        this.cusName = cusName;
    }

    public String getCusPhone() {
        return this.cusPhone;
    }

    public void setCusPhone(String cusPhone) {
        this.cusPhone = cusPhone;
    }

    public String getShipperName() {
        return this.shipperName;
    }

    public void setShipperName(String shipperName) {
        this.shipperName = shipperName;
    }

    public String getShipperPhone() {
        return this.shipperPhone;
    }


    public void setShipperPhone(String shipperPhone) {
        this.shipperPhone = shipperPhone;
    }

    public String getOrderCode() {
        return this.orderCode;
    }

    public void setOrderCode(String orderCode) {
        this.orderCode = orderCode;
    }



    public int getStatus() {
        return this.status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public List<T> getData() {
        return this.data;
    }

    public void setData(List<T> data) {
        this.data = data;
    }



}