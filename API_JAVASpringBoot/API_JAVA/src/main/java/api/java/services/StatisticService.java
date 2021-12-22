package api.java.services;

import java.util.List;

import api.java.dto.GreenRegionRatioDto;

public interface StatisticService {
    int getRegionStatistic(int userType, int provinceId, int regionLevel);

    List<GreenRegionRatioDto> getGreenRegionRatio(int provinceId);
}