package api.java.entities;

import java.io.Serializable;
import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "DatabaseAudit")
public class DatabaseAudit implements Serializable {
	private static final long serialVersionUID = 1L;

	private int AuditId;
	private int AdminId;
	private LocalDateTime CreateTime;
	private String Action;
	private int DangerousLevel;
	private String Object;
	private String Detail;

	public DatabaseAudit() {
	}

	public DatabaseAudit(int AdminId, LocalDateTime CreateTime, String Action, int DangerousLevel, String Object,
			String Detail) {
		this.AdminId = AdminId;
		this.CreateTime = CreateTime;
		this.Action = Action;
		this.DangerousLevel = DangerousLevel;
		this.Object = Object;
		this.Detail = Detail;
	}

	@Id
	@Column(name = "AuditId")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public int getAuditId() {
		return this.AuditId;
	}

	public void setAuditId(int AuditId) {
		this.AuditId = AuditId;
	}

	@Column(name = "AdminId")
	public int getAdminId() {
		return this.AdminId;
	}

	public void setAdminId(int AdminId) {
		this.AdminId = AdminId;
	}

	@Column(name = "CreateTime")
	public LocalDateTime getCreateTime() {
		return this.CreateTime;
	}

	public void setCreateTime(LocalDateTime CreateTime) {
		this.CreateTime = CreateTime;
	}

	@Column(name = "Action", length = 50)
	public String getAction() {
		return this.Action;
	}

	public void setAction(String Action) {
		this.Action = Action;
	}

	@Column(name = "DangerousLevel")
	public int getDangerousLevel() {
		return this.DangerousLevel;
	}

	public void setDangerousLevel(int DangerousLevel) {
		this.DangerousLevel = DangerousLevel;
	}

	@Column(name = "Object", length = 20)
	public String getObject() {
		return this.Object;
	}

	public void setObject(String Object) {
		this.Object = Object;
	}

	@Column(name = "Detail", length = 30)
	public String getDetail() {
		return this.Detail;
	}

	public void setDetail(String Detail) {
		this.Detail = Detail;
	}

}