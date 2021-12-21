package api.java.apis;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import api.java.constants.AppConstants;
import api.java.services.StatisticService;

@RestController
@RequestMapping(path = "/api/statistic")
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
}