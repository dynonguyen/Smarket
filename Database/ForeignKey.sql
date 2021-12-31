USE Smarket;
GO
--------------------------
--- District ----> Province
--------------------------
ALTER TABLE District
DROP CONSTRAINT FK_District_Province;
GO

ALTER TABLE District
ADD CONSTRAINT FK_District_Province
FOREIGN KEY (Province)
REFERENCES Province(ProvinceId);
GO


--------------------------
--- Ward ----> District
--------------------------
ALTER TABLE Ward
DROP CONSTRAINT FK_Ward_District;
GO

ALTER TABLE Ward
ADD CONSTRAINT FK_Ward_District
FOREIGN KEY (District)
REFERENCES District(DistrictId);
GO

--------------------------
--- Shipper ----> District
--------------------------
ALTER TABLE Shipper
DROP CONSTRAINT FK_Shipper_District;
GO

ALTER TABLE Shipper
ADD CONSTRAINT FK_Shipper_District
FOREIGN KEY (Area)
REFERENCES District(DistrictId);
GO

--------------------------
--- AppUser ----> Account
--------------------------
ALTER TABLE AppUser
DROP CONSTRAINT FK_AppUser_Account;
GO

ALTER TABLE AppUser
ADD CONSTRAINT FK_AppUser_Account
FOREIGN KEY (AccountId)
REFERENCES Account(AccountId);
GO

--------------------------
--- AppUser ----> Ward
--------------------------
ALTER TABLE AppUser
DROP CONSTRAINT FK_AppUser_Ward;
GO

ALTER TABLE AppUser
ADD CONSTRAINT FK_AppUser_Ward
FOREIGN KEY (Ward)
REFERENCES Ward(WardId);
GO

--------------------------
--- Shipper ----> AppUser
--------------------------
ALTER TABLE Shipper
DROP CONSTRAINT FK_Shipper_AppUser;
GO

ALTER TABLE Shipper
ADD CONSTRAINT FK_Shipper_AppUser
FOREIGN KEY (UserId)
REFERENCES AppUser(UserId);
GO

--------------------------
--- Customer ----> AppUser
--------------------------
ALTER TABLE Customer
DROP CONSTRAINT FK_Customer_AppUser;
GO

ALTER TABLE Customer
ADD CONSTRAINT FK_Customer_AppUser
FOREIGN KEY (UserId)
REFERENCES AppUser(UserId);
GO

--------------------------
--- Store ----> AppUser
--------------------------
ALTER TABLE Store
DROP CONSTRAINT FK_Store_AppUser;
GO

ALTER TABLE Store
ADD CONSTRAINT FK_Store_AppUser
FOREIGN KEY (UserId)
REFERENCES AppUser(UserId);
GO

--------------------------
--- StoreFeedback ----> Store
--------------------------
ALTER TABLE StoreFeedback
DROP CONSTRAINT FK_StoreFeedback_Store;
GO

ALTER TABLE StoreFeedback
ADD CONSTRAINT FK_StoreFeedback_Store
FOREIGN KEY (StoreId)
REFERENCES Store(StoreId);
GO

--------------------------
--- StoreFeedback ----> Store
--------------------------
ALTER TABLE StoreFeedback
DROP CONSTRAINT FK_StoreFeedback_Store;
GO

ALTER TABLE StoreFeedback
ADD CONSTRAINT FK_StoreFeedback_Store
FOREIGN KEY (StoreId)
REFERENCES Store(StoreId);
GO

--------------------------
--- Product ----> ProductType
--------------------------
ALTER TABLE Product
DROP CONSTRAINT FK_Product_ProductType;
GO
	
ALTER TABLE Product
ADD CONSTRAINT FK_Product_ProductType
FOREIGN KEY (ProductTypeId)
REFERENCES ProductType(ProductTypeId);
GO

--------------------------
--- ProductImage ----> Product
--------------------------
ALTER TABLE ProductImage
DROP CONSTRAINT FK_ProductImage_Product;
GO
	
ALTER TABLE ProductImage
ADD CONSTRAINT FK_ProductImage_Product
FOREIGN KEY (ProductId)
REFERENCES Product(ProductId);
GO

--------------------------
--- Cart ----> Product
--------------------------
ALTER TABLE Cart
DROP CONSTRAINT FK_Cart_Product;
GO
	
ALTER TABLE Cart
ADD CONSTRAINT FK_Cart_Product
FOREIGN KEY (ProductId)
REFERENCES Product(ProductId);
GO

--------------------------
--- CusOrder ----> Shipper
--------------------------
ALTER TABLE CusOrder
DROP CONSTRAINT FK_CusOrder_Shipper;
GO
	
ALTER TABLE CusOrder
ADD CONSTRAINT FK_CusOrder_Shipper
FOREIGN KEY (ShipperId)
REFERENCES Shipper(ShipperId);
GO


--------------------------
--- OrderDetail ----> CusOrder
--------------------------
ALTER TABLE OrderDetail
DROP CONSTRAINT FK_OrderDetail_CusOrder;
GO
	
ALTER TABLE OrderDetail
ADD CONSTRAINT FK_OrderDetail_CusOrder
FOREIGN KEY (OrderId)
REFERENCES CusOrder(OrderId);
GO


--------------------------
--- OrderDetail ----> Product
--------------------------
ALTER TABLE OrderDetail
DROP CONSTRAINT FK_OrderDetail_Product;
GO
	
ALTER TABLE OrderDetail
ADD CONSTRAINT FK_OrderDetail_Product
FOREIGN KEY (ProductId)
REFERENCES Product(ProductId);
GO

--------------------------
--- Payment ----> Customer
--------------------------
ALTER TABLE Payment
DROP CONSTRAINT FK_Payment_Customer;
GO
	
ALTER TABLE Payment
ADD CONSTRAINT FK_Payment_Customer
FOREIGN KEY (CustomerId)
REFERENCES Customer(CustomerId);
GO


--------------------------
--- Refund ----> CusOrder
--------------------------
ALTER TABLE Refund
DROP CONSTRAINT FK_Refund_CusOrder;
GO
	
ALTER TABLE Refund
ADD CONSTRAINT FK_Refund_CusOrder
FOREIGN KEY (OrderId)
REFERENCES CusOrder(OrderId);
GO 

--------------------------
--- OrderDetailFeedback ----> OrderDetail
--------------------------
ALTER TABLE OrderDetailFeedback
DROP CONSTRAINT FK_OrderDetailFeedback_OrderDetail;
GO
	
ALTER TABLE OrderDetailFeedback
ADD CONSTRAINT FK_OrderDetailFeedback_OrderDetail
FOREIGN KEY (DetailId)
REFERENCES OrderDetail(OrderDetailId);
GO 


--------------------------
--- Payment ----> Order
--------------------------
ALTER TABLE Payment
DROP CONSTRAINT FK_Payment_CusOrder;
GO
	
ALTER TABLE Payment
ADD CONSTRAINT FK_Payment_CusOrder
FOREIGN KEY (OrderId)
REFERENCES CusOrder(OrderId);
GO 


--------------------------
--- CusOrder ----> Customer
--------------------------
ALTER TABLE CusOrder
DROP CONSTRAINT FK_CusOrder_Customer;
GO
	
ALTER TABLE CusOrder
ADD CONSTRAINT FK_CusOrder_Customer
FOREIGN KEY (CustomerId)
REFERENCES Customer(CustomerId);
GO 

--------------------------
--- CusOrder ----> Store
--------------------------
ALTER TABLE CusOrder
DROP CONSTRAINT FK_CusOrder_Store;
GO
	
ALTER TABLE CusOrder
ADD CONSTRAINT FK_CusOrder_Store
FOREIGN KEY (StoreId)
REFERENCES Store(StoreId);
GO 

--------------------------
--- DatabaseAudit ----> Account
--------------------------
ALTER TABLE DatabaseAudit
DROP CONSTRAINT FK_DatabaseAudit_Account;
GO
	
ALTER TABLE DatabaseAudit
ADD CONSTRAINT FK_DatabaseAudit_Account
FOREIGN KEY (AccountId)
REFERENCES Account(AccountId);
GO 
