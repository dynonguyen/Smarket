package api.java.dto;

import api.java.utils.MappingObjectDto;

public class OrderDetailInfoDto implements MappingObjectDto<OrderDetailInfoDto> {
    private String productName;
    private String quantitativeUnit;
    private int unitPrice;
    private String source;
    private int orderDetailUnitPrice;
    private int quantity;
    private String orderDetailDes;
    private String productTypeName;
    private String storeName;
    private String storeAddress;
    private int storeStatus;
    private String imageSource;

    public OrderDetailInfoDto() {
    }

    public OrderDetailInfoDto(String productName, String quantitativeUnit, int unitPrice, String source,
            int orderDetailUnitPrice, int quantity, String orderDetailDes, String productTypeName, String storeName,
            String storeAddress, int storeStatus, String imageSource) {
        this.productName = productName;
        this.quantitativeUnit = quantitativeUnit;
        this.unitPrice = unitPrice;
        this.source = source;
        this.orderDetailUnitPrice = orderDetailUnitPrice;
        this.quantity = quantity;
        this.orderDetailDes = orderDetailDes;
        this.productTypeName = productTypeName;
        this.storeName = storeName;
        this.storeAddress = storeAddress;
        this.storeStatus = storeStatus;
        this.imageSource = imageSource;
    }

    public String getProductName() {
        return this.productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public String getQuantitativeUnit() {
        return this.quantitativeUnit;
    }

    public void setQuantitativeUnit(String quantitativeUnit) {
        this.quantitativeUnit = quantitativeUnit;
    }

    public int getUnitPrice() {
        return this.unitPrice;
    }

    public void setUnitPrice(int unitPrice) {
        this.unitPrice = unitPrice;
    }

    public String getSource() {
        return this.source;
    }

    public void setSource(String source) {
        this.source = source;
    }

    public int getOrderDetailUnitPrice() {
        return this.orderDetailUnitPrice;
    }

    public void setOrderDetailUnitPrice(int orderDetailUnitPrice) {
        this.orderDetailUnitPrice = orderDetailUnitPrice;
    }

    public int getQuantity() {
        return this.quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public String getOrderDetailDes() {
        return this.orderDetailDes;
    }

    public void setOrderDetailDes(String orderDetailDes) {
        this.orderDetailDes = orderDetailDes;
    }

    public String getProductTypeName() {
        return this.productTypeName;
    }

    public void setProductTypeName(String productTypeName) {
        this.productTypeName = productTypeName;
    }

    public String getStoreName() {
        return this.storeName;
    }

    public void setStoreName(String storeName) {
        this.storeName = storeName;
    }

    public String getStoreAddress() {
        return this.storeAddress;
    }

    public void setStoreAddress(String storeAddress) {
        this.storeAddress = storeAddress;
    }

    public int getStoreStatus() {
        return this.storeStatus;
    }

    public void setStoreStatus(int storeStatus) {
        this.storeStatus = storeStatus;
    }

    public String getImageSource() {
        return this.imageSource;
    }

    public void setImageSource(String imageSource) {
        this.imageSource = imageSource;
    }

    @Override
    public OrderDetailInfoDto mapValueFromObject(Object[] obj) {
        if (obj.length < 12) {
            return this;
        }

        this.productName = (String) obj[0];
        this.quantitativeUnit = (String) obj[1];
        this.unitPrice = ((Float) obj[2]).intValue();
        this.source = (String) obj[3];
        this.orderDetailUnitPrice = ((Float) obj[4]).intValue();
        this.quantity = ((Float) obj[5]).intValue();
        this.orderDetailDes = (String) obj[6];
        this.productTypeName = (String) obj[7];
        this.storeName = (String) obj[8];
        this.storeAddress = (String) obj[9];
        this.storeStatus = 10;
        this.imageSource = (String) obj[11];

        return this;
    }
}
