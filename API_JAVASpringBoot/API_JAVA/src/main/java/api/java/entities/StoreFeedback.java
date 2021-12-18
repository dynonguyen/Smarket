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
@Table(name = "StoreFeedback")
public class StoreFeedback implements Serializable {
    private static final long serialVersionUID = 1L;

    private int FeedbackId;
    private int StoreId;
    private String Content;
    private LocalDateTime FeedbackTime;

    public StoreFeedback() {
    }

    public StoreFeedback(int FeedbackId, int StoreId, String Content, LocalDateTime FeedbackTime) {
        this.FeedbackId = FeedbackId;
        this.StoreId = StoreId;
        this.Content = Content;
        this.FeedbackTime = FeedbackTime;
    }

    @Id
    @Column(name = "FeedbackId")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public int getFeedbackId() {
        return this.FeedbackId;
    }

    public void setFeedbackId(int FeedbackId) {
        this.FeedbackId = FeedbackId;
    }

    @Column(name = "StoreId")
    public int getStoreId() {
        return this.StoreId;
    }

    public void setStoreId(int StoreId) {
        this.StoreId = StoreId;
    }

    @Column(name = "Content", length = 50)
    public String getContent() {
        return this.Content;
    }

    public void setContent(String Content) {
        this.Content = Content;
    }

    @Column(name = "FeedbackTime")
    public LocalDateTime getFeedbackTime() {
        return this.FeedbackTime;
    }

    public void setFeedbackTime(LocalDateTime FeedbackTime) {
        this.FeedbackTime = FeedbackTime;
    }

}