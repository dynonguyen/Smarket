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
import api.java.entities.Account;
import api.java.entities.AppUser;
import api.java.entities.CusOrder;
import api.java.entities.Shipper;
import api.java.repositories.AccountRepository;
import api.java.repositories.AppUserRepository;
import api.java.repositories.CusOrderRepository;
import api.java.repositories.ShipperRepository;
import api.java.services.shipper.ShipperService;

@RestController
@RequestMapping(path = "/api/shipper")
public class ShipperApi {
    @Autowired
    private ShipperService shipperService;

    @Autowired
    private CusOrderRepository cOrderRepository;

    @Autowired
    private AccountRepository accountRepository;

    @Autowired
    private AppUserRepository appUserRepository;

    @Autowired
    private ShipperRepository shipperRepository;

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
    public String updateOrderStatus(@RequestParam(defaultValue = "0") int status,
            @RequestParam(defaultValue = "0") int orderId) {
        return shipperService.updateOrderStatus(status, orderId);
    }

    @GetMapping(path = "/account")
    public Account getShipperAccount(@RequestParam String username) {
        return accountRepository.findByUsername(username);
    }

    @GetMapping(path = "/user")
    public AppUser getShipperUser(@RequestParam int accountId) {
        return appUserRepository.findByAccountId(accountId);
    }

    @GetMapping(path = "/shipper")
    public Shipper getShipper(@RequestParam int userId) {
        return shipperRepository.findByUserId(userId);
    }

    @GetMapping(path = "/request/{shipperId}")
    public CusOrder getDeliveryRequest(@PathVariable int shipperId) {
        return cOrderRepository.findByShipperId(shipperId).get(0);
    }
}
