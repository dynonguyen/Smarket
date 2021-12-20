package api.java.apis;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import api.java.constants.AppConstants;
import api.java.repositories.AppUserRepository;
import api.java.repositories.CustomerRepository;
import api.java.repositories.ShipperRepository;
import api.java.repositories.StoreRepository;

@RestController
@RequestMapping(path = "/api/statistic")
public class StatisticApi {
    @Autowired
    private AppUserRepository aUserRepository;

    @Autowired
    private CustomerRepository customerRepository;

    @Autowired
    private ShipperRepository shipperRepository;

    @Autowired
    private StoreRepository storeRepository;

    @GetMapping(path = "/region")
    public List<Integer> getRegionStatByUserType(@RequestParam int userType, @RequestParam int provinceId) {
        if (userType == AppConstants.USER_TYPES.CUSTOMER.get()) {
            int green = customerRepository.countCusBelongToRegionLevel(AppConstants.REGION_LEVELS.GREEN.get(),
                    provinceId);
            int yellow = customerRepository.countCusBelongToRegionLevel(AppConstants.REGION_LEVELS.YELLOW.get(),
                    provinceId);
            int orange = customerRepository.countCusBelongToRegionLevel(AppConstants.REGION_LEVELS.ORANGE.get(),
                    provinceId);
            int red = customerRepository.countCusBelongToRegionLevel(AppConstants.REGION_LEVELS.RED.get(), provinceId);

            return List.of(green, yellow, orange, red);
        } else if (userType == AppConstants.USER_TYPES.SHIPPER.get()) {
            int green = shipperRepository.countCusBelongToRegionLevel(AppConstants.REGION_LEVELS.GREEN.get(),
                    provinceId);
            int yellow = shipperRepository.countCusBelongToRegionLevel(AppConstants.REGION_LEVELS.YELLOW.get(),
                    provinceId);
            int orange = shipperRepository.countCusBelongToRegionLevel(AppConstants.REGION_LEVELS.ORANGE.get(),
                    provinceId);
            int red = shipperRepository.countCusBelongToRegionLevel(AppConstants.REGION_LEVELS.RED.get(), provinceId);

            return List.of(green, yellow, orange, red);
        } else {
            int green = storeRepository.countCusBelongToRegionLevel(AppConstants.REGION_LEVELS.GREEN.get(), provinceId);
            int yellow = storeRepository.countCusBelongToRegionLevel(AppConstants.REGION_LEVELS.YELLOW.get(),
                    provinceId);
            int orange = storeRepository.countCusBelongToRegionLevel(AppConstants.REGION_LEVELS.ORANGE.get(),
                    provinceId);
            int red = storeRepository.countCusBelongToRegionLevel(AppConstants.REGION_LEVELS.RED.get(), provinceId);

            return List.of(green, yellow, orange, red);
        }
    }
}