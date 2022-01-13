package api.java.services.admin;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import api.java.constants.AppConstants;
import api.java.dto.EmptyDto;
import api.java.dto.GreenRegionRatioDto;
import api.java.dto.RevenueAndIncomeDto;
import api.java.utils.EntityManagerUtil;
import api.java.utils.QueryUtil;

@Service("statisticService")
@Transactional
public class StatisticServiceImpl implements StatisticService {
    @Autowired
    private EntityManagerUtil<GreenRegionRatioDto> gRegionRatioEmu;

    @Autowired
    private EntityManagerUtil<RevenueAndIncomeDto> gRevenueAndIncomeDtoEmu;

    @Autowired
    private EntityManagerUtil<EmptyDto> emptyEmu;

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

            String sqlString = QueryUtil.countCusBelongToRegionByLevel(userTableName,
                    regionLevel, provinceId);

            return ((Long) emptyEmu.getSingleResult(sqlString)).intValue();

        } catch (Exception e) {
            System.out.println("GET REGION STATISTIC SERVICE ERROR: " + e.toString());
            return 0;
        }
    }

    @Override
    public List<GreenRegionRatioDto> getGreenRegionRatio(int provinceId) {
        try {
            String sqlString = QueryUtil.statisticRatioInDistrict(AppConstants.REGION_LEVELS.GREEN.get(), provinceId);
            List<GreenRegionRatioDto> list = gRegionRatioEmu.getResultList(GreenRegionRatioDto.class, sqlString);
            return list;
        } catch (Exception e) {
            System.out.println("GET GREEN REGION RATIO ERROR: " + e.toString());
            return List.of();
        }
    }

    @Override
    public List<RevenueAndIncomeDto> getRevenueAndIncome(int year) {
        try {
            String sqlString = QueryUtil.getRevenueAndIncomeQuery(year);
            List<RevenueAndIncomeDto> list = gRevenueAndIncomeDtoEmu.getResultList(RevenueAndIncomeDto.class,
                    sqlString);
            return list;
        } catch (Exception e) {
            System.out.println("GET REVENUE AND INCOME  ERROR: " + e.toString());
            return List.of();
        }
    }

}
