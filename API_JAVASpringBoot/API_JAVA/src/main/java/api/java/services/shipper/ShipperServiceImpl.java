package api.java.services.shipper;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import api.java.dto.OrderHistoryDto;
import api.java.entities.OrderDetail;
import api.java.repositories.OrderDetailRepository;
import api.java.utils.EntityManagerUtil;
import api.java.utils.QueryUtil;

@Service("shipperService")
@Transactional
public class ShipperServiceImpl implements ShipperService {
    @Autowired
    private OrderDetailRepository oDetailRepository;

    @Autowired
    private EntityManagerUtil<OrderHistoryDto> orderHistoryEmu;

    @Override
    public List<OrderDetail> getOrderInfo(int orderId) {
        try {
            return oDetailRepository.findByOrderId(orderId);
        } catch (Exception e) {
            System.out.println("GET ORDER INFO ERROR" + e.toString());
            return null;
        }
    }

    @Override
    public List<OrderHistoryDto> getOrderHistory(int shipperId, int page) {
        try {
            String sqlString = QueryUtil.getOrderHistoryWithShipper(shipperId);
            return orderHistoryEmu.getResultList(OrderHistoryDto.class, sqlString, page);
        } catch (Exception e) {
            System.out.println("GET ORDER HISTORY SHIPPER SERVICE ERROR: " + e.toString());
            return List.of();
        }
    }
}
