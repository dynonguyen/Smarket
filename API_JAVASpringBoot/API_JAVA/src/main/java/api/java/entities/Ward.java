package api.java.entities;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Ward")
public class Ward implements Serializable {
	private static final long serialVersionUID = 1L;

	private int WardId;
	private String WardName;
	private String Prefix;
	private int Level;
	private int District;

	public Ward() {
	}

	public Ward(String WardName, String Prefix, int Level, int District) {
		this.WardName = WardName;
		this.Prefix = Prefix;
		this.Level = Level;
		this.District = District;
	}

	@Id
	@Column(name = "WardId")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public int getWardId() {
		return this.WardId;
	}

	public void setWardId(int WardId) {
		this.WardId = WardId;
	}

	@Column(name = "WardName", length = 20)
	public String getWardName() {
		return this.WardName;
	}

	public void setWardName(String WardName) {
		this.WardName = WardName;
	}

	@Column(name = "Prefix", length = 10)
	public String getPrefix() {
		return this.Prefix;
	}

	public void setPrefix(String Prefix) {
		this.Prefix = Prefix;
	}

	@Column(name = "Level")
	public int getLevel() {
		return this.Level;
	}

	public void setLevel(int Level) {
		this.Level = Level;
	}

	@Column(name = "District")
	public int getDistrict() {
		return this.District;
	}

	public void setDistrict(int District) {
		this.District = District;
	}
}