package api.java.entities;

import java.io.Serializable;
import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Payment")
public class Payment implements Serializable {
    private static final long serialVersionUID = 1L;

    private int OrderId;
    private String BankAccountNumber;
    private int CustomerId;
    private int PaymentMethod;
    private int ShippingMoney;
    private int TotalMoney;
    private LocalDateTime PaymentTime;

    public Payment() {
    }

    public Payment(String BankAccountNumber, int CustomerId, int PaymentMethod, int ShippingMoney, int TotalMoney,
            LocalDateTime PaymentTime) {
        this.BankAccountNumber = BankAccountNumber;
        this.CustomerId = CustomerId;
        this.PaymentMethod = PaymentMethod;
        this.ShippingMoney = ShippingMoney;
        this.TotalMoney = TotalMoney;
        this.PaymentTime = PaymentTime;
    }

    @Id
    @Column(name = "OrderId")
    public int getOrderId() {
        return this.OrderId;
    }

    public void setOrderId(int OrderId) {
        this.OrderId = OrderId;
    }

    @Column(name = "BankAccountNumber", length = 16)
    public String getBankAccountNumber() {
        return this.BankAccountNumber;
    }

    public void setBankAccountNumber(String BankAccountNumber) {
        this.BankAccountNumber = BankAccountNumber;
    }

    @Column(name = "CustomerId")
    public int getCustomerId() {
        return this.CustomerId;
    }

    public void setCustomerId(int CustomerId) {
        this.CustomerId = CustomerId;
    }

    @Column(name = "PaymentMethod")
    public int getPaymentMethod() {
        return this.PaymentMethod;
    }

    public void setPaymentMethod(int PaymentMethod) {
        this.PaymentMethod = PaymentMethod;
    }

    @Column(name = "ShippingMoney")
    public int getShippingMoney() {
        return this.ShippingMoney;
    }

    public void setShippingMoney(int ShippingMoney) {
        this.ShippingMoney = ShippingMoney;
    }

    @Column(name = "TotalMoney")
    public int getTotalMoney() {
        return this.TotalMoney;
    }

    public void setTotalMoney(int TotalMoney) {
        this.TotalMoney = TotalMoney;
    }

    @Column(name = "PaymentTime")
    public LocalDateTime getPaymentTime() {
        return this.PaymentTime;
    }

    public void setPaymentTime(LocalDateTime PaymentTime) {
        this.PaymentTime = PaymentTime;
    }
}