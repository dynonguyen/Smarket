package api.java.services.admin;

import javax.transaction.Transactional;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import api.java.dto.*;
import api.java.utils.EntityManagerUtil;
import api.java.utils.QueryUtil;
import api.java.entities.*;
import api.java.repositories.*;

@Service("manageService")
@Transactional
public class ManageServiceImpl implements ManageService {
    @Autowired
    private EntityManagerUtil<ManageOrderDto> gOrder;

    @Autowired
    private EntityManagerUtil<OrderDetailInfoDto> orderDetailInfoEmu;

    @Autowired
    private AccountRepository accountRepo;

    @Autowired
    private EntityManagerUtil<CustomerDto> cusDto;

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

    @Override
    public List<Account> getAccounts() {
        try {
            return accountRepo.findAll();
        } catch (Exception e) {
            return null;
        }
    }

    @Override
    public CustomerDto getUserInfo(int accountId) {
        try {
            String query = QueryUtil.getCustomerInfo(accountId);
            return (CustomerDto) cusDto.getSingleResult(query);
        } catch (Exception e) {
            return null;
        }
       
    }
}
