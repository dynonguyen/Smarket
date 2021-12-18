package api.java.entities;

import java.io.Serializable;
import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Table;

@Entity
@Table(name = "Account")
public class Account implements Serializable {
    private static final long serialVersionUID = 1L;

    private int AccountId;
    private int AccountType;
    private String Username;
    private String Password;
    private String Email;
    private LocalDateTime CreateTime;

    public Account(int AccountType, String Username, String Password, String Email,
            LocalDateTime CreateTime) {
        this.AccountType = AccountType;
        this.Username = Username;
        this.Password = Password;
        this.Email = Email;
        this.CreateTime = CreateTime;
    }

    public Account() {
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

    @JoinColumn(name = "AccountType")
    public int getAccountType() {
        return this.AccountType;
    }

    public void setAccountType(int AccountType) {
        this.AccountType = AccountType;
    }

    @Column(name = "Username", length = 20)
    public String getUsername() {
        return this.Username;
    }

    public void setUsername(String Username) {
        this.Username = Username;
    }

    @Column(name = "Password", length = 50)
    public String getPassword() {
        return this.Password;
    }

    public void setPassword(String Password) {
        this.Password = Password;
    }

    @Column(name = "Email", length = 20)
    public String getEmail() {
        return this.Email;
    }

    public void setEmail(String Email) {
        this.Email = Email;
    }

    @Column(name = "CreateTime")
    public LocalDateTime getCreateTime() {
        return this.CreateTime;
    }

    public void setCreateTime(LocalDateTime CreateTime) {
        this.CreateTime = CreateTime;
    }

}