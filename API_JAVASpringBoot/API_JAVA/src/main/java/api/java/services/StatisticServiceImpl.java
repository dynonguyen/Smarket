package api.java.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import api.java.constants.AppConstants;
import api.java.repositories.CustomerRepository;
import api.java.repositories.ShipperRepository;
import api.java.repositories.StoreRepository;

@Service("statisticService")
@Transactional
public class StatisticServiceImpl implements StatisticService {
    @Autowired
    private CustomerRepository customerRepository;

    @Autowired
    private ShipperRepository shipperRepository;

    @Autowired
    private StoreRepository storeRepository;

    @Override
    public int getRegionStatistic(int userType, int provinceId, int regionLevel) {
        try {
            if (userType == AppConstants.USER_TYPES.CUSTOMER.get()) {
                return customerRepository.countCusBelongToRegionLevel(regionLevel, provinceId);
            }
            if (userType == AppConstants.USER_TYPES.SHIPPER.get()) {
                return shipperRepository.countCusBelongToRegionLevel(regionLevel, provinceId);
            }
            return storeRepository.countCusBelongToRegionLevel(regionLevel, provinceId);
        } catch (Exception e) {
            System.out.println("GET REGION STATISTIC SERVICE ERROR: " + e.toString());
            return 0;
        }
    }
}
