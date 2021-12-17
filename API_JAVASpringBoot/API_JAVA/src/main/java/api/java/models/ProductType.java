package api.java.models;

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
	private String note;

	public ProductType() {

	}

	public ProductType(String ProductTypeName, String ProductTypeDes, String note) {
		this.ProductTypeName = ProductTypeName;
		this.ProductTypeDes = ProductTypeDes;
		this.note = note;
	}

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "id", nullable = false)
	public int getId() {
		return ProductTypeId;
	}

	public void setId(int ProductTypeId) {
		this.ProductTypeId = ProductTypeId;
	}

	@Column(name = "product_type_name", nullable = false)
	public String getProductTypeName() {
		return ProductTypeName;
	}

	public void setProductTypeName(String ProductTypeName) {
		this.ProductTypeName = ProductTypeName;
	}

	@Column(name = "product_type_des", nullable = false)
	public String getProductTypeDes() {
		return ProductTypeDes;
	}

	public void setProductTypeDes(String ProductTypeDes) {
		this.ProductTypeDes = ProductTypeDes;
	}

	@Column(name = "email_address", nullable = false)
	public String getnote() {
		return note;
	}

	public void setnote(String note) {
		this.note = note;
	}

	@Override
	public String toString() {
		return "ProductType [id=" + ProductTypeId + ", ProductTypeName=" + ProductTypeName + ", ProductTypeDes="
				+ ProductTypeDes + ", note=" + note + "]";
	}

}