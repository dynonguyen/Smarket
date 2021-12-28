package api.java.services.shipper;

import java.util.List;

import api.java.entities.OrderDetail;

public interface ShipperService {
    List<OrderDetail> getOrderInfo(int orderId);
}
