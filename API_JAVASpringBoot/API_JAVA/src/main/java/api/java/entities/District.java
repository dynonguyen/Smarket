package api.java.entities;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "District")
public class District implements Serializable {
    private static final long serialVersionUID = 1L;

    private int DistrictId;
    private String DistrictName;
    private int Province;

    public District() {
    }

    public District(String DistrictName, int Province) {
        this.DistrictName = DistrictName;
        this.Province = Province;
    }

    @Id
    @Column(name = "DistrictId")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public int getDistrictId() {
        return this.DistrictId;
    }

    public void setDistrictId(int DistrictId) {
        this.DistrictId = DistrictId;
    }

    @Column(name = "DistrictName", length = 20)
    public String getDistrictName() {
        return this.DistrictName;
    }

    public void setDistrictName(String DistrictName) {
        this.DistrictName = DistrictName;
    }

    @Column(name = "Province")
    public int getProvince() {
        return this.Province;
    }

    public void setProvince(int Province) {
        this.Province = Province;
    }

}