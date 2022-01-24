package api.java.services.admin;

import java.util.List;

import api.java.dto.AccountDto;
import api.java.dto.ManageOrderDto;
import api.java.dto.OrderDetailInfoDto;
import api.java.dto.PaginationDto;
import api.java.entities.Account;

public interface ManageService {
    List<ManageOrderDto> getOrder();

    List<OrderDetailInfoDto> getOrderInfo(int orderId);

    List<Account> getAccounts();

    <Any> Any getUserInfo(int accountId);

    PaginationDto<AccountDto> getAccountNeedAccepting(int type, int page);

}
