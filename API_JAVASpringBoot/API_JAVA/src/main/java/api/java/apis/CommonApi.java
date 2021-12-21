package api.java.apis;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import api.java.entities.Province;
import api.java.services.CommonService;

@RestController
@RequestMapping("/api/common")
public class CommonApi {
    @Autowired
    private CommonService commonService;

    @GetMapping("/province-all")
    public List<Province> getAllProvince() {
        return commonService.getAllProvinces();
    }
}