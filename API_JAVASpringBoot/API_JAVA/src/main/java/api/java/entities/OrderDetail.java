package api.java.entities;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "OrderDetail")
public class OrderDetail implements Serializable {
    private static final long serialVersionUID = 1L;

    private int OrderDetailId;
    private int OrderId;
    private int ProductId;
    private float UnitPrice;
    private float Quantity;
    private String OrderDetailDes;

    public OrderDetail() {
    }

    public OrderDetail(int OrderId, int ProductId, float UnitPrice, float Quantity, String OrderDetailDes) {
        this.OrderId = OrderId;
        this.ProductId = ProductId;
        this.UnitPrice = UnitPrice;
        this.Quantity = Quantity;
        this.OrderDetailDes = OrderDetailDes;
    }

    @Id
    @Column(name = "OrderDetailId")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public int getOrderDetailId() {
        return this.OrderDetailId;
    }

    public void setOrderDetailId(int OrderDetailId) {
        this.OrderDetailId = OrderDetailId;
    }

    @Column(name = "OrderId")
    public int getOrderId() {
        return this.OrderId;
    }

    public void setOrderId(int OrderId) {
        this.OrderId = OrderId;
    }

    @Column(name = "ProductId")
    public int getProductId() {
        return this.ProductId;
    }

    public void setProductId(int ProductId) {
        this.ProductId = ProductId;
    }

    @Column(name = "UnitPrice")
    public float getUnitPrice() {
        return this.UnitPrice;
    }

    public void setUnitPrice(float UnitPrice) {
        this.UnitPrice = UnitPrice;
    }

    @Column(name = "Quantity")
    public float getQuantity() {
        return this.Quantity;
    }

    public void setQuantity(float Quantity) {
        this.Quantity = Quantity;
    }

    @Column(name = "OrderDetailDes", length = 50)
    public String getOrderDetailDes() {
        return this.OrderDetailDes;
    }

    public void setOrderDetailDes(String OrderDetailDes) {
        this.OrderDetailDes = OrderDetailDes;
    }

}