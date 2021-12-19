package api.java.entities;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "AdminAccount")
public class AdminAccount implements Serializable {
	private static final long serialVersionUID = 1L;

	private int AccountId;
	private String Username;
	private String Password;
	private String Name;
	private String Address;
	private int PermissionLevel;
	private String Phone;
	private String Email;

	public AdminAccount() {
	}

	public AdminAccount(String Username, String Password, String Name, String Address, int PermissionLevel,
			String Phone, String Email) {
		this.Username = Username;
		this.Password = Password;
		this.Name = Name;
		this.Address = Address;
		this.PermissionLevel = PermissionLevel;
		this.Phone = Phone;
		this.Email = Email;
	}

	@Id
	@Column(name = "AccountId")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public int getAccountId() {
		return this.AccountId;
	}

	public void setAccountId(int AccountId) {
		this.AccountId = AccountId;
	}

	@Column(name = "Username", length = 30)
	public String getUsername() {
		return this.Username;
	}

	public void setUsername(String Username) {
		this.Username = Username;
	}

	@Column(name = "Password", length = 100)
	public String getPassword() {
		return this.Password;
	}

	public void setPassword(String Password) {
		this.Password = Password;
	}

	@Column(name = "Name", length = 30)
	public String getName() {
		return this.Name;
	}

	public void setName(String Name) {
		this.Name = Name;
	}

	@Column(name = "Address", length = 100)
	public String getAddress() {
		return this.Address;
	}

	public void setAddress(String Address) {
		this.Address = Address;
	}

	@Column(name = "PermissionLevel")
	public int getPermissionLevel() {
		return this.PermissionLevel;
	}

	public void setPermissionLevel(int PermissionLevel) {
		this.PermissionLevel = PermissionLevel;
	}

	@Column(name = "Phone", length = 11)
	public String getPhone() {
		return this.Phone;
	}

	public void setPhone(String Phone) {
		this.Phone = Phone;
	}

	@Column(name = "Email", length = 100)
	public String getEmail() {
		return this.Email;
	}

	public void setEmail(String Email) {
		this.Email = Email;
	}
}