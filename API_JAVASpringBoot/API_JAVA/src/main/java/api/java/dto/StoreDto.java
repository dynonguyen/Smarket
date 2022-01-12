package api.java.dto;

import api.java.utils.*;

public class StoreDto implements MappingObjectDto<StoreDto>{
    
    private int UserId;
    private int AccountId;
    private String Avatar;
    private String Name;
    private String PeopleId;
    private String Address;
    private String Phone;
    private int StoreType;
    private int Status;
    private int Area;
    private String Categories;
    private String Certificate;
    private int StoreId;


    public StoreDto() {
    }

    public StoreDto(int UserId, int AccountId,String Avatar, String Name, String PeopleId, String Address, String Phone, int StoreType, int Status, int Area, String Categories, String Certificate, int StoreId) {
        this.UserId = UserId;
        this.AccountId = AccountId;
        this.Avatar = Avatar;
        this.Name = Name;
        this.PeopleId = PeopleId;
        this.Phone = Phone;
        this.Address = Address;
        this.StoreType = StoreType;
        this.Status = Status;
        this.Area = Area;
        this.Categories = Categories;
        this.Certificate = Certificate;
        this.StoreId = StoreId;
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

    public int getStoreType() {
        return this.StoreType;
    }

    public void setStoreType(int storeType) {
        this.StoreType = storeType;
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

    public String getCategories() {
        return this.Categories;
    }

    public void setCategories(String categories) {
        this.Categories = categories;
    }

    public String getCertificate() {
        return this.Certificate;
    }

    public void setCertificate(String certificate) {
        this.Certificate = certificate;
    }

    public int getStoreId() {
        return this.StoreId;
    }

    public void setStoreId(int storeId) {
        this.StoreId = storeId;
    }

    public String getAvatar() {
        return this.Avatar;
    }

    public void setAvatar(String avatar) {
        this.Avatar = avatar;
    }

    @Override
    public StoreDto mapValueFromObject(Object[] obj) {
        if (obj.length < 13) {
            return this;
        }

        this.UserId = ((int) obj[0]);
        this.AccountId = ((int) obj[1]);
        this.Avatar = (String) obj[2];
        this.Name = (String) obj[3];
        this.PeopleId = (String) obj[4];
        this.Address = (String) obj[5];
        this.Phone = (String) obj[6];
        this.StoreType = ((int) obj[7]);
        this.Status = ((int) obj[8]);
        this.Area = ((int) obj[9]);
        this.Categories = (String) obj[10];
        this.Certificate = (String) obj[11];
        this.StoreId = ((int) obj[12]);
        return this;
    }
}

