package api.java.entities;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Shipper")
public class Shipper implements Serializable {
	private static final long serialVersionUID = 1L;

	private int ShipperId;
	private int Status;
	private int Area;
	private String ShipperLicense;
	private float ShipperRating;
	private int UserId;

	public Shipper() {
	}

	public Shipper(int Status, int Area, String ShipperLicense, float ShipperRating, int UserId) {
		this.Status = Status;
		this.Area = Area;
		this.ShipperLicense = ShipperLicense;
		this.ShipperRating = ShipperRating;
		this.UserId = UserId;
	}

	@Id
	@Column(name = "ShipperId")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public int getShipperId() {
		return this.ShipperId;
	}

	public void setShipperId(int ShipperId) {
		this.ShipperId = ShipperId;
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

	@Column(name = "ShipperLicense", length = 50)
	public String getShipperLicense() {
		return this.ShipperLicense;
	}

	public void setShipperLicense(String ShipperLicense) {
		this.ShipperLicense = ShipperLicense;
	}

	@Column(name = "ShipperRating")
	public float getShipperRating() {
		return this.ShipperRating;
	}

	public void setShipperRating(float ShipperRating) {
		this.ShipperRating = ShipperRating;
	}

	@Column(name = "UserId")
	public int getUserId() {
		return this.UserId;
	}

	public void setUserId(int UserId) {
		this.UserId = UserId;
	}
}