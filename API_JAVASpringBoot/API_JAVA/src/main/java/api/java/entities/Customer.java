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
	private int UserId;

	public Customer(int CustomerLevel, int UserId) {
		this.CustomerLevel = CustomerLevel;
		this.UserId = UserId;
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

	@Column(name = "UserId")
	public int getUserId() {
		return this.UserId;
	}

	public void setUserId(int UserId) {
		this.UserId = UserId;
	}
}