package api.java.services.shipper;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import api.java.dto.OrderDetailInfoDto;
import api.java.dto.OrderHistoryDto;
import api.java.utils.EntityManagerUtil;
import api.java.utils.QueryUtil;

@Service("shipperService")
@Transactional
public class ShipperServiceImpl implements ShipperService {

    @Autowired
    private EntityManagerUtil<OrderHistoryDto> orderHistoryEmu;

    @Autowired
    private EntityManagerUtil<OrderDetailInfoDto> orderDetailInfoEmu;

    @Override
    public List<OrderDetailInfoDto> getOrderInfo(int orderId) {
        try {
            String sqlString = QueryUtil.getOrderInfoWithOrderId(orderId);
            return orderDetailInfoEmu.getResultList(OrderDetailInfoDto.class, sqlString);
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
