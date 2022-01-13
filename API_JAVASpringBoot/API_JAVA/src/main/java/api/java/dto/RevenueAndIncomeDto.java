package api.java.dto;

import java.time.LocalDateTime;

import api.java.utils.MappingObjectDto;

public class RevenueAndIncomeDto implements MappingObjectDto<RevenueAndIncomeDto> {
    private int orderId;
    private String orderCode;
    private int orderTotal;
    private int shippingMoney;
    private int totalMoney;
    private LocalDateTime paymentTime;

    public RevenueAndIncomeDto() {
    }

    public RevenueAndIncomeDto(int orderId, String orderCode, int orderTotal, int shippingMoney, int totalMoney,
            LocalDateTime paymentTime) {
        this.orderId = orderId;
        this.orderCode = orderCode;
        this.orderTotal = orderTotal;
        this.shippingMoney = shippingMoney;
        this.totalMoney = totalMoney;
        this.paymentTime = paymentTime;
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

    public int getShippingMoney() {
        return this.shippingMoney;
    }

    public void setShippingMoney(int shippingMoney) {
        this.shippingMoney = shippingMoney;
    }

    public int getTotalMoney() {
        return this.totalMoney;
    }

    public void setTotalMoney(int totalMoney) {
        this.totalMoney = totalMoney;
    }

    public LocalDateTime getPaymentTime() {
        return this.paymentTime;
    }

    public void setPaymentTime(LocalDateTime paymentTime) {
        this.paymentTime = paymentTime;
    }

    @Override
    public RevenueAndIncomeDto mapValueFromObject(Object[] obj) {
        if (obj.length < 6) {
            return this;
        }

        this.orderId = (int) obj[0];
        this.orderCode = (String) obj[1];
        this.orderTotal = ((Float) obj[2]).intValue();
        this.shippingMoney = (int) obj[3];
        this.totalMoney = (int) obj[4];
        this.paymentTime = (LocalDateTime) obj[5];
        return this;
    }
}
