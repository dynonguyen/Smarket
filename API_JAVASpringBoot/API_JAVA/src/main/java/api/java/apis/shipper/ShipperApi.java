package api.java.apis.shipper;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import api.java.dto.OrderDetailInfoDto;
import api.java.dto.OrderHistoryDto;
import api.java.dto.PaginationDto;
import api.java.repositories.CusOrderRepository;
import api.java.services.shipper.ShipperService;

@RestController
@RequestMapping(path = "/api/shipper")
public class ShipperApi {
    @Autowired
    private ShipperService shipperService;

    @Autowired
    private CusOrderRepository cOrderRepository;

    @GetMapping(path = "/order-info/{orderId}")
    public List<OrderDetailInfoDto> getOrderInfo(@PathVariable int orderId) {
        return shipperService.getOrderInfo(orderId);
    }

    @GetMapping(path = "/order-history")
    public PaginationDto<OrderHistoryDto> getOrderHistory(@RequestParam(name = "sId", defaultValue = "0") int shipperId,
            @RequestParam(name = "p", defaultValue = "1") int page) {
        if (page <= 0) {
            page = 1;
        }

        PaginationDto<OrderHistoryDto> result = new PaginationDto<>();

        List<OrderHistoryDto> data = shipperService.getOrderHistory(shipperId, page);
        int total = cOrderRepository.countByShipperId(shipperId);

        result.setData(data);
        result.setPage(page);
        result.setTotal(total);

        return result;
    }

    @GetMapping(path = "/order/change-status")
    public String updateOrderStatus(@RequestParam(defaultValue = "1") int status, @RequestParam(defaultValue = "1") int orderId) {
        return shipperService.updateOrderStatus(status, orderId);
    }
}
