package api.java.dto;

import java.sql.Date;

import api.java.utils.MappingObjectDto;


public class ManageOrderDto implements MappingObjectDto<ManageOrderDto> {
    private int orderId;
    private int customerId;
    private int shipperId;
    private int storeId;
    private String orderCode;
    private int orderStatus;
    private int orderTotal;
    
    public ManageOrderDto(){
        
    }
    public ManageOrderDto(int orderId,int customerId,int shipperId,int storeId,String orderCode,int orderStatus,int orderTotal){
        this.orderId = orderId;
        this.customerId = customerId;
        this.shipperId = shipperId;
        this.storeId = storeId;
        this.orderCode = orderCode;
        this.orderStatus = orderStatus;
        this.orderTotal = orderTotal;
    }

    public int getOrderId(){
        return this.orderId;
    }

    public void setOrderId(int orderId){
        this.orderId = orderId;
    }

    public int getCustomerId(){
        return this.customerId;
    }
    
    public void setCustomerId(int customerId){
        this.customerId = customerId;
    }

    public int getShipperId(){
        return this.shipperId;
    }
    
    public void setShipperId(int shipperId){
        this.shipperId = shipperId;
    }

    public int getStoreId(){
        return this.storeId;
    }
    
    public void setStoreId(int storeId){
        this.storeId = storeId;
    }

    public String getOrderCode(){
        return this.orderCode;
    }
    
    public void setOrderCode(String orderCode){
        this.orderCode = orderCode;
    }

    public int getOrderStatus(){
        return this.orderStatus;
    }
    
    public void setorderStatus(int orderStatus){
        this.orderStatus = orderStatus;
    }

    public int getOrderTotal(){
        return this.orderTotal;
    }
    
    public void setOrderTotal(int orderTotal){
        this.orderTotal = orderTotal;
    }

    
    @Override
    public ManageOrderDto mapValueFromObject(Object[] obj) {
        if (obj.length < 4) {
            return this;
        }
        this.orderId = ((int) obj[0]);
        this.customerId = ((int) obj[1]);
        this.shipperId = ((int) obj[2]);
        this.storeId = ((int) obj[3]);
        this.orderCode = (String) obj[4];
        this.orderStatus = ((int) obj[5]);
        this.orderTotal = ((int) obj[6]);
        return this;
    }
}
