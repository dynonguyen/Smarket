package api.java.apis.admin;

import java.time.Year;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import api.java.constants.AppConstants;
import api.java.dto.GreenRegionRatioDto;

import api.java.dto.RevenueAndIncomeDto;
import api.java.dto.ProductAmountDto;
import api.java.dto.TypeInGroupDto;
import api.java.services.admin.StatisticService;

@RestController
@RequestMapping(path = "/api/admin/statistic")
public class StatisticApi {
	@Autowired
	private StatisticService statisticService;

	@GetMapping(path = "/region")
	public List<Integer> getRegionStatByUserType(@RequestParam int userType, @RequestParam int provinceId) {
		List<Integer> list = new ArrayList<>();
		list.add(statisticService.getRegionStatistic(userType, provinceId, AppConstants.REGION_LEVELS.GREEN.get()));
		list.add(statisticService.getRegionStatistic(userType, provinceId, AppConstants.REGION_LEVELS.YELLOW.get()));
		list.add(statisticService.getRegionStatistic(userType, provinceId, AppConstants.REGION_LEVELS.ORANGE.get()));
		list.add(statisticService.getRegionStatistic(userType, provinceId, AppConstants.REGION_LEVELS.RED.get()));
		return list;
	}

	@GetMapping(path = "/region/green-ratio/{provinceId}")
	public List<GreenRegionRatioDto> getGreenRegionRatio(@PathVariable int provinceId) {
		return statisticService.getGreenRegionRatio(provinceId);
	}

	@GetMapping(path = "/income")
	public List<RevenueAndIncomeDto> getIncome(@RequestParam(name = "y", defaultValue = "2021") int year) {
		List<RevenueAndIncomeDto> list = statisticService.getRevenueAndIncome(year);
		return list;
	}

	@GetMapping(path = "type/amount-product")
	public List<ProductAmountDto> getAmountProductOfEachType() {
		return statisticService.getAmountProductOfEachType();
	}

	@GetMapping(path = "type/amount-type")
	public List<TypeInGroupDto> getTypeInGroup(@RequestParam(defaultValue = "1") int group) {
		return statisticService.getTypeInGroup(group);
	}

}