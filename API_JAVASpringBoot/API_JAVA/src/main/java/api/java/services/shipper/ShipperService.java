package api.java.services.shipper;

import java.util.List;

import api.java.dto.OrderHistoryDto;
import api.java.entities.OrderDetail;

public interface ShipperService {
    List<OrderDetail> getOrderInfo(int orderId);

    List<OrderHistoryDto> getOrderHistory(int shipperId, int page);
}
