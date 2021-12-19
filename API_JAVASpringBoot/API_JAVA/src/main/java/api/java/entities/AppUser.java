package api.java.entities;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "AppUser")
public class AppUser implements Serializable {
	private static final long serialVersionUID = 1L;

	private int UserId;
	private int AccountId;
	private String Name;
	private String PeopleId;
	private String Phone;
	private String Address;
	private int Ward;

	public AppUser() {
	}

	public AppUser(int AccountId, String Name, String PeopleId, String Phone, String Address, int Ward) {
		this.AccountId = AccountId;
		this.Name = Name;
		this.PeopleId = PeopleId;
		this.Phone = Phone;
		this.Address = Address;
		this.Ward = Ward;
	}

	@Id
	@Column(name = "UserId")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public int getUserId() {
		return this.UserId;
	}

	public void setUserId(int UserId) {
		this.UserId = UserId;
	}

	@Column(name = "AccountId")
	public int getAccountId() {
		return this.AccountId;
	}

	public void setAccountId(int AccountId) {
		this.AccountId = AccountId;
	}

	@Column(name = "Name", length = 30)
	public String getName() {
		return this.Name;
	}

	public void setName(String Name) {
		this.Name = Name;
	}

	@Column(name = "PeopleId", length = 12)
	public String getPeopleId() {
		return this.PeopleId;
	}

	public void setPeopleId(String PeopleId) {
		this.PeopleId = PeopleId;
	}

	@Column(name = "Phone", length = 11)
	public String getPhone() {
		return this.Phone;
	}

	public void setPhone(String Phone) {
		this.Phone = Phone;
	}

	@Column(name = "Address", length = 100)
	public String getAddress() {
		return this.Address;
	}

	public void setAddress(String Address) {
		this.Address = Address;
	}

	@Column(name = "Ward")
	public int getWard() {
		return this.Ward;
	}

	public void setWard(int Ward) {
		this.Ward = Ward;
	}
}