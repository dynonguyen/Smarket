package api.java.dto;

import java.time.LocalDateTime;

import api.java.utils.MappingObjectDto;

public class OrderHistoryDto implements MappingObjectDto<OrderHistoryDto> {
    private int orderId;
    private String orderCode;
    private int orderTotal;
    private int orderStatus;
    private String cusName;
    private LocalDateTime createDate;
    private String deliveryAddress;

    public OrderHistoryDto() {
    }

    public OrderHistoryDto(int orderId, String orderCode, int orderTotal, int orderStatus, String cusName,
            LocalDateTime createDate, String deliveryAddress) {
        this.orderId = orderId;
        this.orderCode = orderCode;
        this.orderTotal = orderTotal;
        this.orderStatus = orderStatus;
        this.cusName = cusName;
        this.createDate = createDate;
        this.deliveryAddress = deliveryAddress;
    }

    public int getOrderId() {
        return this.orderId;
    }

    public void setOrderId(int orderId) {
        this.orderId = orderId;
    }

    public String getOrderCode() {
        return this.orderCode;
    }

    public void setOrderCode(String orderCode) {
        this.orderCode = orderCode;
    }

    public int getOrderTotal() {
        return this.orderTotal;
    }

    public void setOrderTotal(int orderTotal) {
        this.orderTotal = orderTotal;
    }

    public int getOrderStatus() {
        return this.orderStatus;
    }

    public void setOrderStatus(int orderStatus) {
        this.orderStatus = orderStatus;
    }

    public String getCusName() {
        return this.cusName;
    }

    public void setCusName(String cusName) {
        this.cusName = cusName;
    }

    public LocalDateTime getCreateDate() {
        return this.createDate;
    }

    public void setCreateDate(LocalDateTime createDate) {
        this.createDate = createDate;
    }

    public String getDeliveryAddress() {
        return this.deliveryAddress;
    }

    public void setDeliveryAddress(String deliveryAddress) {
        this.deliveryAddress = deliveryAddress;
    }

    @Override
    public OrderHistoryDto mapValueFromObject(Object[] obj) {
        if (obj.length < 7) {
            return this;
        }

        this.orderId = (int) obj[0];
        this.orderCode = (String) obj[1];
        this.orderTotal = ((Float) obj[2]).intValue();
        this.orderStatus = (int) obj[3];
        this.cusName = (String) obj[4];
        this.createDate = (LocalDateTime) obj[5];
        this.deliveryAddress = (String) obj[6];

        return this;
    }
}