package api.java.services;

import java.util.List;

import api.java.entities.District;
import api.java.entities.Province;
import api.java.entities.Ward;
import api.java.entities.Payment;

public interface CommonService {
    List<Province> getAllProvinces();

    List<District> getDistrict(int provinceId);

    List<Ward> getWard(int districtId);

    Province getProvinceById(int provinceId);

    District getDistrictById(int districtId);

    Ward getWardById(int wardId);

    List<Payment> getAllPayments();
}