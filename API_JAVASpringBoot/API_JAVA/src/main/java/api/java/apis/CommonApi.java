package api.java.apis;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import api.java.entities.Province;
import api.java.repositories.ProvinceRepository;

@RestController
@RequestMapping("/api/common")
public class CommonApi {
    // Repository Used
    @Autowired
    private ProvinceRepository provinceRepository;

    // Get all province
    @GetMapping("/province-all")
    public List<Province> getAllProvince() {
        try {
            List<Province> provinces = provinceRepository.findAll();
            if (provinces.isEmpty()) {
                return List.of();
            }
            return provinces;
        } catch (Exception e) {
            System.out.println("GET ALL PROVINCE ERROR");
            e.printStackTrace();
        }

        return List.of();
    }
}