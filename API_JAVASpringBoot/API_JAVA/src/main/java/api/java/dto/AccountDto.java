package api.java.dto;

import java.time.LocalDateTime;

import api.java.utils.MappingObjectDto;

public class AccountDto implements MappingObjectDto<AccountDto> {
  private int AccountId;
	private int AccountType;
	private String Username;
	private String Password;
	private String Email;
	private LocalDateTime CreateTime;

	public AccountDto(int AccountType, String Username, String Password, String Email, LocalDateTime CreateTime) {
		this.AccountType = AccountType;
		this.Username = Username;
		this.Password = Password;
		this.Email = Email;
		this.CreateTime = CreateTime;
	}

	public AccountDto() {
	}


	public int getAccountId() {
		return this.AccountId;
	}

	public void setAccountId(int AccountId) {
		this.AccountId = AccountId;
	}

	public int getAccountType() {
		return this.AccountType;
	}

	public void setAccountType(int AccountType) {
		this.AccountType = AccountType;
	}

	public String getUsername() {
		return this.Username;
	}

	public void setUsername(String Username) {
		this.Username = Username;
	}

	public String getPassword() {
		return this.Password;
	}

	public void setPassword(String Password) {
		this.Password = Password;
	}


	public String getEmail() {
		return this.Email;
	}

	public void setEmail(String Email) {
		this.Email = Email;
	}


	public LocalDateTime getCreateTime() {
		return this.CreateTime;
	}

	public void setCreateTime(LocalDateTime CreateTime) {
		this.CreateTime = CreateTime;
	}

	@Override
	public AccountDto mapValueFromObject(Object[] obj) {
			if (obj.length < 6) {
					return this;
			}

			this.AccountId = ((int) obj[0]);
			this.AccountType = ((int) obj[1]);
			this.Username = (String) obj[2];
			this.Password = (String) obj[3];
			this.Email = (String) obj[4];
			this.CreateTime = (LocalDateTime) obj[5];
			return this;
	}

}
