package api.java.apis.shipper;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import api.java.entities.OrderDetail;
import api.java.services.shipper.ShipperService;

@RestController
@RequestMapping(path = "/api/shipper")
public class ShipperApi {
    @Autowired
    private ShipperService shipperService;

    @GetMapping(path = "/order-info/{orderId}")
    public List<OrderDetail> getOrderInfo(@PathVariable int orderId) {
        return shipperService.getOrderInfo(orderId);
    }
}
