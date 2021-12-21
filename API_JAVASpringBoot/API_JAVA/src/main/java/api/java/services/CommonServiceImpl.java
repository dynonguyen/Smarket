package api.java.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import api.java.entities.Province;
import api.java.repositories.ProvinceRepository;

@Service("commonService")
public class CommonServiceImpl implements CommonService {
    @Autowired
    private ProvinceRepository provinceRepository;

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
}