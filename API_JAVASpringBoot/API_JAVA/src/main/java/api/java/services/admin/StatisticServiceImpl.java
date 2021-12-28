package api.java.services.admin;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Query;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import api.java.constants.AppConstants;
import api.java.dto.GreenRegionRatioDto;
import api.java.utils.QueryUtil;

@Service("statisticService")
@Transactional
public class StatisticServiceImpl implements StatisticService {
    @Autowired
    private EntityManagerFactory emf;

    @Override
    public int getRegionStatistic(int userType, int provinceId, int regionLevel) {
        try {
            String userTableName = "";
            if (userType == AppConstants.USER_TYPES.CUSTOMER.get()) {
                userTableName = "Customer";
            } else if (userType == AppConstants.USER_TYPES.SHIPPER.get()) {
                userTableName = "Shipper";
            } else {
                userTableName = "Store";
            }

            String sqlString = QueryUtil.countCusBelongToRegionByLevel(userTableName, regionLevel, provinceId);
            EntityManager entityManager = emf.createEntityManager();
            Query query = entityManager.createQuery(sqlString);

            return ((Long) query.getSingleResult()).intValue();

        } catch (Exception e) {
            System.out.println("GET REGION STATISTIC SERVICE ERROR: " + e.toString());
            return 0;
        }
    }

    @Override
    public List<GreenRegionRatioDto> getGreenRegionRatio(int provinceId) {
        try {
            String sqlString = QueryUtil.statisticRatioInDistrict(AppConstants.REGION_LEVELS.GREEN.get(), provinceId);
            EntityManager entityManager = emf.createEntityManager();
            Query query = entityManager.createQuery(sqlString);

            @SuppressWarnings("unchecked")
            List<Object[]> resultList = query.getResultList();

            List<GreenRegionRatioDto> list = new ArrayList<>();
            for (Object[] objRes : resultList) {
                GreenRegionRatioDto resItem = new GreenRegionRatioDto();
                resItem.mapValueFromObject(objRes);
                list.add(resItem);
            }

            return list;
        } catch (Exception e) {
            System.out.println("GET GREEN REGION RATIO ERROR: " + e.toString());
            return List.of();
        }
    }

}
