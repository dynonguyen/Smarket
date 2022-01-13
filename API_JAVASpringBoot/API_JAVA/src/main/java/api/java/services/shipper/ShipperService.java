package api.java.services.shipper;

import java.util.List;

import api.java.dto.OrderDetailInfoDto;
import api.java.dto.OrderHistoryDto;

public interface ShipperService {
    List<OrderDetailInfoDto> getOrderInfo(int orderId);

    List<OrderHistoryDto> getOrderHistory(int shipperId, int page);

    String updateOrderStatus(int status, int orderId);
}
