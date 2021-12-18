package api.java.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import api.java.entities.Ward;
import api.java.repositories.AccountRepository;
import api.java.repositories.AdminAccountRepository;
import api.java.repositories.AppUserRepository;
import api.java.repositories.CusOrderRepository;
import api.java.repositories.CustomerRepository;
import api.java.repositories.DatabaseAuditRepository;
import api.java.repositories.DistrictRepository;
import api.java.repositories.OrderDetailFeedbackRepository;
import api.java.repositories.OrderDetailRepository;
import api.java.repositories.PaymentRepository;
import api.java.repositories.ProductRepository;
import api.java.repositories.ProductTypeRepository;
import api.java.repositories.ProvinceRepository;
import api.java.repositories.RefundRepository;
import api.java.repositories.ShipperRepository;
import api.java.repositories.StoreFeedbackRepository;
import api.java.repositories.StoreRepository;
import api.java.repositories.WardRepository;

@RestController
@RequestMapping("/api/test")
public class TestDBConnection {
	@Autowired
	private AccountRepository accountRepository;

	@Autowired
	private AdminAccountRepository adminAccountRepository;

	@Autowired
	private AppUserRepository userRepository;

	@Autowired
	private CusOrderRepository cusOrderRepository;

	@Autowired
	private CustomerRepository customerRepository;

	@Autowired
	private DatabaseAuditRepository auditRepository;

	@Autowired
	private DistrictRepository districtRepository;

	@Autowired
	private OrderDetailRepository orderDetailRepository;

	@Autowired
	private OrderDetailFeedbackRepository oDetailFeedbackRepository;

	@Autowired
	private PaymentRepository paymentRepository;

	@Autowired
	private ProductRepository productRepository;

	@Autowired
	private ProductTypeRepository pTypeRepository;

	@Autowired
	private ProvinceRepository provinceRepository;

	@Autowired
	private RefundRepository refundRepository;

	@Autowired
	private ShipperRepository sRepository;

	@Autowired
	private StoreRepository storeRepository;

	@Autowired
	private StoreFeedbackRepository storeFeedbackRepository;

	@Autowired
	private WardRepository wardRepository;

	@GetMapping("/")
	public List<Ward> getDemo() {
		return wardRepository.findAll();
	}

}