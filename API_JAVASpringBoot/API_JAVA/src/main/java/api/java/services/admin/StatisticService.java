package api.java.services.admin;

import java.util.List;

import api.java.dto.GreenRegionRatioDto;
import api.java.dto.RevenueAndIncomeDto;

public interface StatisticService {
    int getRegionStatistic(int userType, int provinceId, int regionLevel);

    List<GreenRegionRatioDto> getGreenRegionRatio(int provinceId);

    List<RevenueAndIncomeDto> getRevenueAndIncome(int year);
}