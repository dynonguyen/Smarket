package api.java.entities;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Province")
public class Province implements Serializable {
	private static final long serialVersionUID = 1L;

	private int ProvinceId;
	private String ProvinceName;

	public Province() {
	}

	public Province(String ProvinceName) {
		this.ProvinceName = ProvinceName;
	}

	@Id
	@Column(name = "ProvinceId")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public int getProvinceId() {
		return this.ProvinceId;
	}

	public void setProvinceId(int ProvinceId) {
		this.ProvinceId = ProvinceId;
	}

	@Column(name = "ProvinceName", length = 20)
	public String getProvinceName() {
		return this.ProvinceName;
	}

	public void setProvinceName(String ProvinceName) {
		this.ProvinceName = ProvinceName;
	}
}