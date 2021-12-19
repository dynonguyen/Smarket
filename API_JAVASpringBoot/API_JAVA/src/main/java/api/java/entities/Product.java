package api.java.entities;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Product")
public class Product implements Serializable {
	private static final long serialVersionUID = 1L;

	private int ProductId;
	private int StoreId;
	private String ProductName;
	private int ProductTypeId;
	private String ProductDes;
	private float ProductRating;
	private float UnitPrice;
	private float Unit;
	private String QuantitativeUnit;
	private String Source;
	private String Certificate;

	public Product() {
	}

	public Product(int StoreId, String ProductName, int ProductTypeId, String ProductDes, float ProductRating,
			float UnitPrice, float Unit, String QuantitativeUnit, String Source, String Certificate) {
		this.StoreId = StoreId;
		this.ProductName = ProductName;
		this.ProductTypeId = ProductTypeId;
		this.ProductDes = ProductDes;
		this.ProductRating = ProductRating;
		this.UnitPrice = UnitPrice;
		this.Unit = Unit;
		this.QuantitativeUnit = QuantitativeUnit;
		this.Source = Source;
		this.Certificate = Certificate;
	}

	@Id
	@Column(name = "ProductId")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public int getProductId() {
		return this.ProductId;
	}

	public void setProductId(int ProductId) {
		this.ProductId = ProductId;
	}

	@Column(name = "StoreId")
	public int getStoreId() {
		return this.StoreId;
	}

	public void setStoreId(int StoreId) {
		this.StoreId = StoreId;
	}

	@Column(name = "ProductName", length = 30)
	public String getProductName() {
		return this.ProductName;
	}

	public void setProductName(String ProductName) {
		this.ProductName = ProductName;
	}

	@Column(name = "ProductTypeId")
	public int getProductTypeId() {
		return this.ProductTypeId;
	}

	public void setProductTypeId(int ProductTypeId) {
		this.ProductTypeId = ProductTypeId;
	}

	@Column(name = "ProductDes", length = 50)
	public String getProductDes() {
		return this.ProductDes;
	}

	public void setProductDes(String ProductDes) {
		this.ProductDes = ProductDes;
	}

	@Column(name = "ProductRating")
	public float getProductRating() {
		return this.ProductRating;
	}

	public void setProductRating(float ProductRatting) {
		this.ProductRating = ProductRatting;
	}

	@Column(name = "UnitPrice")
	public float getUnitPrice() {
		return this.UnitPrice;
	}

	public void setUnitPrice(float UnitPrice) {
		this.UnitPrice = UnitPrice;
	}

	@Column(name = "Unit")
	public float getUnit() {
		return this.Unit;
	}

	public void setUnit(float Unit) {
		this.Unit = Unit;
	}

	@Column(name = "QuantitativeUnit", length = 10)
	public String getQuantitativeUnit() {
		return this.QuantitativeUnit;
	}

	public void setQuantitativeUnit(String QuantitativeUnit) {
		this.QuantitativeUnit = QuantitativeUnit;
	}

	@Column(name = "Source", length = 50)
	public String getSource() {
		return this.Source;
	}

	public void setSource(String Source) {
		this.Source = Source;
	}

	@Column(name = "Certificate", length = 255)
	public String getCertificate() {
		return this.Certificate;
	}

	public void setCertificate(String Certificate) {
		this.Certificate = Certificate;
	}

}