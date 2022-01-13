package api.java.dto;

import api.java.utils.*;

public class ProductAmountDto implements MappingObjectDto<ProductAmountDto>{
    
    private int GroupType;
    private int AmountProduct;



    public ProductAmountDto() {
    }

    public ProductAmountDto(int GroupType, int AmountProduct) {
        this.GroupType = GroupType;
        this.AmountProduct = AmountProduct;
    }


    public int getType() {
        return this.GroupType;
    }

    public void setType(int id) {
        this.GroupType = id;
    }

    public int getAmount() {
        return this.AmountProduct;
    }

    public void setAmount(int  amount) {
        this.AmountProduct = amount;
    }

    @Override
    public ProductAmountDto mapValueFromObject(Object[] obj) {
        if (obj.length < 2) {
            return this;
        }

        this.GroupType = ((int) obj[0]);
        this.AmountProduct = ((Long) obj[1]).intValue();
        return this;
    }
}
