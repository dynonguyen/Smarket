package api.java.entities;

import java.io.Serializable;
import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "CusOrder")
public class CusOrder implements Serializable {
    private static final long serialVersionUID = 1L;

    private int OrderId;
    private int CustomerId;
    private int ShipperId;
    private int StoreId;
    private String OrderCode;
    private int OrderStatus;
    private float OrderTotal;
    private String DeliveryAddress;
    private LocalDateTime DeliveryDate;
    private String ReceiverName;
    private String ReceiverPhone;
    private LocalDateTime CreateDate;

    public CusOrder() {
    }

    public CusOrder(int CustomerId, int ShipperId, int StoreId, String OrderCode, int OrderStatus, float OrderTotal,
            String DeliveryAddress, LocalDateTime DeliveryDate, String ReceiverName, String ReceiverPhone,
            LocalDateTime CreateDate) {
        this.CustomerId = CustomerId;
        this.ShipperId = ShipperId;
        this.StoreId = StoreId;
        this.OrderCode = OrderCode;
        this.OrderStatus = OrderStatus;
        this.OrderTotal = OrderTotal;
        this.DeliveryAddress = DeliveryAddress;
        this.DeliveryDate = DeliveryDate;
        this.ReceiverName = ReceiverName;
        this.ReceiverPhone = ReceiverPhone;
        this.CreateDate = CreateDate;
    }

    @Id
    @Column(name = "OrderId")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public int getOrderId() {
        return this.OrderId;
    }

    public void setOrderId(int OrderId) {
        this.OrderId = OrderId;
    }

    @Column(name = "CustomerId")
    public int getCustomerId() {
        return this.CustomerId;
    }

    public void setCustomerId(int CustomerId) {
        this.CustomerId = CustomerId;
    }

    @Column(name = "ShipperId")
    public int getShipperId() {
        return this.ShipperId;
    }

    public void setShipperId(int ShipperId) {
        this.ShipperId = ShipperId;
    }

    @Column(name = "StoreId")
    public int getStoreId() {
        return this.StoreId;
    }

    public void setStoreId(int StoreId) {
        this.StoreId = StoreId;
    }

    @Column(name = "OrderCode", length = 30)
    public String getOrderCode() {
        return this.OrderCode;
    }

    public void setOrderCode(String OrderCode) {
        this.OrderCode = OrderCode;
    }

    @Column(name = "OrderStatus")
    public int getOrderStatus() {
        return this.OrderStatus;
    }

    public void setOrderStatus(int OrderStatus) {
        this.OrderStatus = OrderStatus;
    }

    @Column(name = "OrderTotal")
    public float getOrderTotal() {
        return this.OrderTotal;
    }

    public void setOrderTotal(float OrderTotal) {
        this.OrderTotal = OrderTotal;
    }

    @Column(name = "DeliveryAddress", length = 30)
    public String getDeliveryAddress() {
        return this.DeliveryAddress;
    }

    public void setDeliveryAddress(String DeliveryAddress) {
        this.DeliveryAddress = DeliveryAddress;
    }

    @Column(name = "DeliveryDate")
    public LocalDateTime getDeliveryDate() {
        return this.DeliveryDate;
    }

    public void setDeliveryDate(LocalDateTime DeliveryDate) {
        this.DeliveryDate = DeliveryDate;
    }

    @Column(name = "ReceiverName", length = 30)
    public String getReceiverName() {
        return this.ReceiverName;
    }

    public void setReceiverName(String ReceiverName) {
        this.ReceiverName = ReceiverName;
    }

    @Column(name = "ReceiverPhone", length = 11)
    public String getReceiverPhone() {
        return this.ReceiverPhone;
    }

    public void setReceiverPhone(String ReceiverPhone) {
        this.ReceiverPhone = ReceiverPhone;
    }

    @Column(name = "CreateDate")
    public LocalDateTime getCreateDate() {
        return this.CreateDate;
    }

    public void setCreateDate(LocalDateTime CreateDate) {
        this.CreateDate = CreateDate;
    }
}