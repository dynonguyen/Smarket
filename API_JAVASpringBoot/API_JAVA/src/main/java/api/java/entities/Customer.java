package api.java.entities;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Customer")
public class Customer implements Serializable {
    private static final long serialVersionUID = 1L;

    private int CustomerId;
    private int CustomerLevel;

    public Customer(int CustomerLevel) {
        this.CustomerLevel = CustomerLevel;
    }

    public Customer() {
    }

    @Id
    @Column(name = "CustomerId")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public int getCustomerId() {
        return this.CustomerId;
    }

    public void setCustomerId(int CustomerId) {
        this.CustomerId = CustomerId;
    }

    @Column(name = "CustomerLevel")
    public int getCustomerLevel() {
        return this.CustomerLevel;
    }

    public void setCustomerLevel(int CustomerLevel) {
        this.CustomerLevel = CustomerLevel;
    }
}