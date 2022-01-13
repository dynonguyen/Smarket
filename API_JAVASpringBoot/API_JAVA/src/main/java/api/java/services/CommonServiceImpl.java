package api.java.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import api.java.entities.District;
import api.java.entities.Payment;
import api.java.entities.Province;
import api.java.entities.Ward;
import api.java.repositories.DistrictRepository;
import api.java.repositories.ProvinceRepository;
import api.java.repositories.WardRepository;
import api.java.repositories.PaymentRepository;
import api.java.utils.QueryUtil;

@Service("commonService")
public class CommonServiceImpl implements CommonService {
    @Autowired
    private ProvinceRepository provinceRepository;

    @Autowired
    private DistrictRepository districtRepository;

    @Autowired
    private WardRepository wardRepository;

    @Autowired
    private PaymentRepository paymentRepository;

    @Override
    public List<Province> getAllProvinces() {
        try {
            List<Province> provinces = provinceRepository.findAll();
            if (provinces.isEmpty()) {
                return List.of();
            }
            return provinces;
        } catch (Exception e) {
            System.out.println("GET ALL PROVINCE SERVICE ERROR: " + e.toString());
            return List.of();
        }

    }

    @Override
    public List<District> getDistrict(int provinceId) {
        try {
            List<District> districts = districtRepository.findByProvince(provinceId);
            if (districts.isEmpty()) {
                return List.of();
            }
            return districts;
        } catch (Exception e) {
            System.out.println("GET ALL DISTRICT SERVICE ERROR: " + e.toString());
            return List.of();
        }
    }

    @Override
    public List<Ward> getWard(int districtId) {
        try {
            List<Ward> wards = wardRepository.findByDistrict(districtId);
            if (wards.isEmpty()) {
                return List.of();
            }
            return wards;
        } catch (Exception e) {
            System.out.println("GET ALL DISTRICT SERVICE ERROR: " + e.toString());
            return List.of();
        }
    }

    @Override
    public Province getProvinceById(int provinceId) {
        try {
            return provinceRepository.findByProvinceId(provinceId);
        } catch (Exception e) {
            return null;
        }
    }

    @Override
    public District getDistrictById(int districtId) {
        try {
            return districtRepository.findByDistrictId(districtId);
        } catch (Exception e) {
            return null;
        }
    }

    @Override
    public Ward getWardById(int wardId) {
        try {
            return wardRepository.findByWardId(wardId);
        } catch (Exception e) {
            return null;
        }
    }

    @Override
    public List<Payment> getAllPayments() {
        try {
            return paymentRepository.findAll();
        } catch (Exception e) {
            return null;
        }
    }

}