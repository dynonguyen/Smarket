package api.java.services.admin;

import api.java.dto.ManageOrderDto;
import api.java.dto.OrderDetailInfoDto;

import java.util.List;

public interface  ManageService {
    List<ManageOrderDto> getOrder();

    List<OrderDetailInfoDto> getOrderInfo(int orderId);
}
