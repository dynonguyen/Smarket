package api.java.dto;

import api.java.utils.*;

public class ShipperDto implements MappingObjectDto<ShipperDto>{
    
    private int UserId;
    private int AccountId;
    private String Avatar;
    private String Name;
    private String PeopleId;
    private String Address;
    private String Phone;
    private int Status;
    private int Area;
    private String ShipperLicense;
    private float ShipperRating;
    private int ShipperId;


    public ShipperDto() {
    }

    public ShipperDto(int UserId, int AccountId,String Avatar, String Name, String PeopleId, String Address, String Phone, int Status, int Area, String ShipperLicense, float ShipperRating, int ShipperId) {
        this.UserId = UserId;
        this.AccountId = AccountId;
        this.Avatar = Avatar;
        this.Name = Name;
        this.PeopleId = PeopleId;
        this.Phone = Phone;
        this.Address = Address;
        this.Status = Status;
        this.Area = Area;
        this.ShipperLicense = ShipperLicense;
        this.ShipperRating = ShipperRating;
        this.ShipperId = ShipperId;
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

    public void setPeopleId(String peopleId) {
        this.PeopleId = peopleId;
    }

    public int getStatus() {
        return this.Status;
    }

    public void setStatus(int status) {
        this.Status = status;
    }

    public int getArea() {
        return this.Area;
    }

    public void setArea(int area) {
        this.Area = area;
    }

    public String getLicense() {
        return this.ShipperLicense;
    }

    public void setLicense(String license) {
        this.ShipperLicense = license;
    }

    public float getRating() {
        return this.ShipperRating;
    }

    public void setRating(float rating) {
        this.ShipperRating = rating;
    }

    public int getShipperId() {
        return this.ShipperId;
    }

    public void setShipperId(int shipperId) {
        this.ShipperId = shipperId;
    }

    public String getAvatar() {
        return this.Avatar;
    }

    public void setAvatar(String avatar) {
        this.Avatar = avatar;
    }

    @Override
    public ShipperDto mapValueFromObject(Object[] obj) {
        if (obj.length < 12) {
            return this;
        }

        this.UserId = ((int) obj[0]);
        this.AccountId = ((int) obj[1]);
        this.Avatar = (String) obj[2];
        this.Name = (String) obj[3];
        this.PeopleId = (String) obj[4];
        this.Address = (String) obj[5];
        this.Phone = (String) obj[6];
        this.Status = ((int) obj[7]);
        this.Area = ((int) obj[8]);
        this.ShipperLicense = (String) obj[9];
        this.ShipperRating = ((float) obj[10]);
        this.ShipperId = ((int) obj[11]);
        return this;
    }
}

