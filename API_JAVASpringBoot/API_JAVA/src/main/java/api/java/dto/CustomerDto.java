package api.java.dto;

import api.java.utils.*;

public class CustomerDto implements MappingObjectDto<CustomerDto>{
    
    private int UserId;
    private int AccountId;
    private String Avatar;
    private String Name;
    private String PeopleId;
    private String Address;
    private String Phone;
    private int CustomerLevel;
    


    public CustomerDto() {
    }

    public CustomerDto(int UserId, int AccountId, String Avatar, String Name, String PeopleId, String Address, String Phone, int CustomerLevel) {
        this.UserId = UserId;
        this.AccountId = AccountId;
        this.Avatar = Avatar;
        this.Name = Name;
        this.PeopleId = PeopleId;
        this.Phone = Phone;
        this.Address = Address;
        this.CustomerLevel = CustomerLevel;
    }


    public String getName() {
        return this.Name;
    }

    public void setName(String name) {
        this.Name = name;
    }

    public int getUserId() {
        return this.UserId;
    }

    public void setUserId(int id) {
        this.UserId = id;
    }

    public int getAccountId() {
        return this.AccountId;
    }

    public void setAccountId(int id) {
        this.AccountId = id;
    }

    public void setShipperName(int  accountId) {
        this.AccountId = accountId;
    }

    public String getPhone() {
        return this.Phone;
    }


    public void setPhone(String Phone) {
        this.Phone = Phone;
    }

    public String getAddress() {
        return this.Address;
    }

    public void setAddress(String address) {
        this.Address = address;
    }

    public String getPeopleId() {
        return this.PeopleId;
    }

    public void setStatus(String peopleId) {
        this.PeopleId = peopleId;
    }

    public int getCusLevel() {
        return this.CustomerLevel;
    }

    public void setCusLevel(int level) {
        this.CustomerLevel = level;
    }

    public String getAvatar() {
        return this.Avatar;
    }

    public void setAvatar(String avatar) {
        this.Avatar = avatar;
    }

    @Override
    public CustomerDto mapValueFromObject(Object[] obj) {
        if (obj.length < 8) {
            return this;
        }

        this.UserId = ((int) obj[0]);
        this.AccountId = ((int) obj[1]);
        this.Avatar = (String) obj[2];
        this.Name = (String) obj[3];
        this.PeopleId = (String) obj[4];
        this.Address = (String) obj[5];
        this.Phone = (String) obj[6];
        this.CustomerLevel = ((int) obj[7]);
        return this;
    }
}
