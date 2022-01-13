package api.java.apis;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import api.java.entities.District;
import api.java.entities.Province;
import api.java.entities.Ward;
import api.java.entities.Payment;
import api.java.services.CommonService;

@RestController
@RequestMapping(path = "/api/common")
public class CommonApi {
    @Autowired
    private CommonService commonService;

    @GetMapping(path = "/province-all")
    public List<Province> getAllProvince() {
        return commonService.getAllProvinces();
    }

    @GetMapping(path = "/district/{provinceId}")
    public List<District> getDistrict(@PathVariable int provinceId) {
        return commonService.getDistrict(provinceId);
    }

    @GetMapping(path = "/ward/{districtId}")
    public List<Ward> getWard(@PathVariable int districtId) {
        return commonService.getWard(districtId);
    }

    @GetMapping(path = "/province")
    public Province getProvinceById(@RequestParam int provinceId) {
        return commonService.getProvinceById(provinceId);
    }

    @GetMapping(path = "/district")
    public District getDistrictById(@RequestParam int districtId) {
        return commonService.getDistrictById(districtId);
    }

    @GetMapping(path = "/ward")
    public Ward getWardById(@RequestParam int wardId) {
        return commonService.getWardById(wardId);
    }

    @GetMapping(path = "/payment")
    public List<Payment> getAllYearPayment() {
        return commonService.getAllPayments();

    }
}