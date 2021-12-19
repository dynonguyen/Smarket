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
@Table(name = "OrderDetailFeedback")
public class OrderDetailFeedback implements Serializable {
	private static final long serialVersionUID = 1L;

	private int OrderDetailFeedbackId;
	private int DetailId;
	private String Content;
	private float Rating;
	private LocalDateTime FeedbackTime;

	public OrderDetailFeedback() {
	}

	public OrderDetailFeedback(int DetailId, String Content, float Rating, LocalDateTime FeedbackTime) {
		this.DetailId = DetailId;
		this.Content = Content;
		this.Rating = Rating;
		this.FeedbackTime = FeedbackTime;
	}

	@Id
	@Column(name = "OrderDetailFeedbackId")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public int getOrderDetailFeedbackId() {
		return this.OrderDetailFeedbackId;
	}

	public void setOrderDetailFeedbackId(int OrderDetailFeedbackId) {
		this.OrderDetailFeedbackId = OrderDetailFeedbackId;
	}

	@Column(name = "DetailId")
	public int getDetailId() {
		return this.DetailId;
	}

	public void setDetailId(int DetailId) {
		this.DetailId = DetailId;
	}

	@Column(name = "Content", length = 50)
	public String getContent() {
		return this.Content;
	}

	public void setContent(String Content) {
		this.Content = Content;
	}

	@Column(name = "Rating")
	public float getRating() {
		return this.Rating;
	}

	public void setRating(float Rating) {
		this.Rating = Rating;
	}

	@Column(name = "FeedbackTime")
	public LocalDateTime getFeedbackTime() {
		return this.FeedbackTime;
	}

	public void setFeedbackTime(LocalDateTime FeedbackTime) {
		this.FeedbackTime = FeedbackTime;
	}

}