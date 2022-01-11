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
	private int GroupType;
	public ProductType(String ProductTypeName, String ProductTypeDes, int GroupType) {
		this.ProductTypeName = ProductTypeName;
		this.ProductTypeDes = ProductTypeDes;
		this.GroupType = GroupType;
	}

	public ProductType() {
	}

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ProductTypeId")
	public int getProductTypeId() {
		return ProductTypeId;
	}

	public void setProductTypeId(int ProductTypeId) {
		this.ProductTypeId = ProductTypeId;
	}

	@Column(name = "ProductTypeName", length = 30)
	public String getProductTypeName() {
		return ProductTypeName;
	}

	public void setProductTypeName(String ProductTypeName) {
		this.ProductTypeName = ProductTypeName;
	}

	@Column(name = "ProductTypeDes", length = 50)
	public String getProductTypeDes() {
		return ProductTypeDes;
	}

	public void setProductTypeDes(String ProductTypeDes) {
		this.ProductTypeDes = ProductTypeDes;
	}

	@Column(name = "GroupType")
	public int getGroupType() {
		return GroupType;
	}

	public void setGroupType(int GroupType) {
		this.GroupType = GroupType;
	}

}