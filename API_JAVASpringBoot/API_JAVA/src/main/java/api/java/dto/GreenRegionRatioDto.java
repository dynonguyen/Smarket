package api.java.dto;

import api.java.utils.MappingObjectDto;

public class GreenRegionRatioDto implements MappingObjectDto<GreenRegionRatioDto> {
    private String districtName;
    private int quantity;
    private int total;

    public GreenRegionRatioDto() {
    }

    public GreenRegionRatioDto(String districtName, int quantity, int total) {
        this.districtName = districtName;
        this.total = total;
        this.quantity = quantity;
    }

    public String getDistrictName() {
        return this.districtName;
    }

    public void setDistrictName(String districtName) {
        this.districtName = districtName;
    }

    public int getTotal() {
        return this.total;
    }

    public void setTotal(int total) {
        this.total = total;
    }

    public int getQuantity() {
        return this.quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    @Override
    public GreenRegionRatioDto mapValueFromObject(Object[] obj) {
        if (obj.length < 3) {
            return this;
        }

        this.districtName = (String) obj[0];
        this.quantity = ((Long) obj[1]).intValue();
        this.total = ((Long) obj[2]).intValue();

        return this;
    }
}