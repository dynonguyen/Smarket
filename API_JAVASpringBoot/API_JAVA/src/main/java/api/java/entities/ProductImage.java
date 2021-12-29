package api.java.entities;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "ProductImage")
public class ProductImage implements Serializable {
    private static final long serialVersionUID = 1L;

    private int ProductImageId;
    private int ProductId;
    private boolean IsThumbnail;
    private String Source;

    public ProductImage() {
    }

    public ProductImage(int ProductImageId, int ProductId, boolean isThumbnail, String Source) {
        this.ProductImageId = ProductImageId;
        this.ProductId = ProductId;
        this.IsThumbnail = isThumbnail;
        this.Source = Source;
    }

    @Id
    @Column(name = "ProductImageId")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public int getProductImageId() {
        return this.ProductImageId;
    }

    public void setProductImageId(int ProductImageId) {
        this.ProductImageId = ProductImageId;
    }

    @Column(name = "ProductId")
    public int getProductId() {
        return this.ProductId;
    }

    public void setProductId(int ProductId) {
        this.ProductId = ProductId;
    }

    @Column(name = "IsThumbnail")
    public boolean getIsThumbnail() {
        return this.IsThumbnail;
    }

    public void setIsThumbnail(boolean isThumbnail) {
        this.IsThumbnail = isThumbnail;
    }

    @Column(name = "Source", length = 255)
    public String getSource() {
        return this.Source;
    }

    public void setSource(String Source) {
        this.Source = Source;
    }

}
