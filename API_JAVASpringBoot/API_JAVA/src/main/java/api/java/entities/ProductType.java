package api.java.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "ProductType")
public class ProductType {

	private int ProductTypeId;
	private String ProductTypeName;
	private String ProductTypeDes;

	public ProductType(String ProductTypeName, String ProductTypeDes, String note) {
		this.ProductTypeName = ProductTypeName;
		this.ProductTypeDes = ProductTypeDes;
	}

	public ProductType() {
	}

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ProductTypeId", nullable = false)
	public int getProductTypeId() {
		return ProductTypeId;
	}

	public void setProductTypeId(int ProductTypeId) {
		this.ProductTypeId = ProductTypeId;
	}

	@Column(name = "ProductTypeName", nullable = false)
	public String getProductTypeName() {
		return ProductTypeName;
	}

	public void setProductTypeName(String ProductTypeName) {
		this.ProductTypeName = ProductTypeName;
	}

	@Column(name = "ProductTypeDes", nullable = false)
	public String getProductTypeDes() {
		return ProductTypeDes;
	}

	public void setProductTypeDes(String ProductTypeDes) {
		this.ProductTypeDes = ProductTypeDes;
	}

}