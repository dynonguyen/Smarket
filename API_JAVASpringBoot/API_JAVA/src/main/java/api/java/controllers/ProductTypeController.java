package api.java.controllers;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

//import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import api.java.exception.ResourceNotFoundException;
import api.java.models.ProductType;
import api.java.repositories.ProductTypeRepository;

@RestController
@RequestMapping("/api")
public class ProductTypeController {
	@Autowired
	private ProductTypeRepository productTypeRepository;

	@GetMapping("/product-types")
	public List<ProductType> getAllProductTypes() {
		return productTypeRepository.findAll();
	}

	@GetMapping("/product-type/{id}")
	public ResponseEntity<ProductType> getProductTypeById(@PathVariable(value = "id") Long ProductTypeId)
			throws ResourceNotFoundException {
		ProductType productType = productTypeRepository.findById(ProductTypeId).orElseThrow(
				() -> new ResourceNotFoundException("ProductType not found for this id :: " + ProductTypeId));
		return ResponseEntity.ok().body(productType);
	}

	@PostMapping("/product-types")
	public ProductType createProductType(@Validated @RequestBody ProductType productType) {
		return productTypeRepository.save(productType);
	}

	@PutMapping("/product-types/{id}")
	public ResponseEntity<ProductType> updateProductType(@PathVariable(value = "id") Long ProductTypeId,
			@Validated @RequestBody ProductType productTypeDetails) throws ResourceNotFoundException {
		ProductType productType = productTypeRepository.findById(ProductTypeId).orElseThrow(
				() -> new ResourceNotFoundException("ProductType not found for this id :: " + ProductTypeId));

		productType.setEmailId(productTypeDetails.getEmailId());
		productType.setLastName(productTypeDetails.getLastName());
		productType.setFirstName(productTypeDetails.getFirstName());
		final ProductType updatedProductType = productTypeRepository.save(productType);
		return ResponseEntity.ok(updatedProductType);
	}

	@DeleteMapping("/product-types/{id}")
	public Map<String, Boolean> deleteProductType(@PathVariable(value = "id") Long ProductTypeId)
			throws ResourceNotFoundException {
		ProductType productType = productTypeRepository.findById(ProductTypeId).orElseThrow(
				() -> new ResourceNotFoundException("ProductType not found for this id :: " + ProductTypeId));

		productTypeRepository.delete(productType);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return response;
	}
}