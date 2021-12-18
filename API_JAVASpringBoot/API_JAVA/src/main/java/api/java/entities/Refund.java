package api.java.entities;

import java.io.Serializable;
import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Refund")
public class Refund implements Serializable {
    private static final long serialVersionUID = 1L;

    private int OrderId;
    private String Reasons;
    private LocalDateTime RefundTime;

    public Refund() {
    }

    public Refund(String Reasons, LocalDateTime RefundTime) {
        this.Reasons = Reasons;
        this.RefundTime = RefundTime;
    }

    @Id
    @Column(name = "OrderId")
    public int getOrderId() {
        return this.OrderId;
    }

    public void setOrderId(int OrderId) {
        this.OrderId = OrderId;
    }

    @Column(name = "Reasons", length = 100)
    public String getReasons() {
        return this.Reasons;
    }

    public void setReasons(String Reasons) {
        this.Reasons = Reasons;
    }

    @Column(name = "RefundTime")
    public LocalDateTime getRefundTime() {
        return this.RefundTime;
    }

    public void setRefundTime(LocalDateTime RefundTime) {
        this.RefundTime = RefundTime;
    }

}