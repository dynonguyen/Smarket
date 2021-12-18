package api.java.entities;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Store")
public class Store implements Serializable {
    private static final long serialVersionUID = 1L;

    private int StoreId;
    private int StoreType;
    private int Status;
    private int Area;
    private String Categories;
    private String Certificate;

    public Store() {
    }

    public Store(int StoreType, int Status, int Area, String Categories, String Certificate) {
        this.StoreType = StoreType;
        this.Status = Status;
        this.Area = Area;
        this.Categories = Categories;
        this.Certificate = Certificate;
    }

    @Id
    @Column(name = "StoreId")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public int getStoreId() {
        return this.StoreId;
    }

    public void setStoreId(int StoreId) {
        this.StoreId = StoreId;
    }

    @Column(name = "StoreType")
    public int getStoreType() {
        return this.StoreType;
    }

    public void setStoreType(int StoreType) {
        this.StoreType = StoreType;
    }

    @Column(name = "Status")
    public int getStatus() {
        return this.Status;
    }

    public void setStatus(int Status) {
        this.Status = Status;
    }

    @Column(name = "Area")
    public int getArea() {
        return this.Area;
    }

    public void setArea(int Area) {
        this.Area = Area;
    }

    @Column(name = "Categories", length = 20)
    public String getCategories() {
        return this.Categories;
    }

    public void setCategories(String Categories) {
        this.Categories = Categories;
    }

    @Column(name = "Certificate", length = 50)
    public String getCertificate() {
        return this.Certificate;
    }

    public void setCertificate(String Certificate) {
        this.Certificate = Certificate;
    }
}