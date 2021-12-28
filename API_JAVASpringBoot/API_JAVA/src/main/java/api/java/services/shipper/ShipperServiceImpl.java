package api.java.services.shipper;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import api.java.entities.OrderDetail;
import api.java.repositories.OrderDetailRepository;

@Service("shipperService")
@Transactional
public class ShipperServiceImpl implements ShipperService {
    @Autowired
    private OrderDetailRepository oDetailRepository;

    @Override
    public List<OrderDetail> getOrderInfo(int orderId) {
        try {
            return oDetailRepository.findByOrderId(orderId);
        } catch (Exception e) {
            System.out.println("GET ORDER INFO ERROR" + e.toString());
            return null;
        }
    }

}
