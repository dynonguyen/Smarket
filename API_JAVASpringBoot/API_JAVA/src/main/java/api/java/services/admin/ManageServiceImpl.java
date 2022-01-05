package api.java.services.admin;

import javax.transaction.Transactional;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import api.java.constants.AppConstants;
import api.java.dto.EmptyDto;
import api.java.dto.ManageOrderDto;
import api.java.dto.OrderDetailInfoDto;
import api.java.utils.EntityManagerUtil;
import api.java.utils.QueryUtil;

@Service("manageService")
@Transactional
public class ManageServiceImpl implements ManageService {
    @Autowired
    private EntityManagerUtil<ManageOrderDto> gOrder;

    @Autowired
    private EntityManagerUtil<OrderDetailInfoDto> orderDetailInfoEmu;

    @Override
    public List<ManageOrderDto> getOrder() {
        try {
            String sqlString = QueryUtil.getOrderInfor("CusOrder");
            List<ManageOrderDto> list = gOrder.getResultList(ManageOrderDto.class, sqlString);
            return list;
        } catch (Exception e) {
            System.out.println("GET ORDER ERROR: " + e.toString());
            return List.of();
        }
    }
    
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
}
