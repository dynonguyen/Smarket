-- Script using for create database, primary key, foreign key, constraint, ...
USE Smarket
GO

DROP TABLE DatabaseAudit;
GO
DROP TABLE AdminAccount;
GO
DROP TABLE Refund;
GO
DROP TABLE StoreFeedback;
GO
DROP TABLE OrderDetailFeedback;
GO
DROP TABLE Payment;
GO
DROP TABLE OrderDetail;
GO
DROP TABLE Product;
GO
DROP TABLE ProductType;
GO
DROP TABLE CusOrder;
GO
DROP TABLE Shipper;
GO
DROP TABLE Customer;
GO
DROP TABLE Store;
GO
DROP TABLE AppUser;
GO
DROP TABLE Ward;
GO
DROP TABLE Account;
GO
DROP TABLE District;
GO
DROP TABLE Province;
GO
-- Table Account


CREATE TABLE Account(
	AccountId int not null IDENTITY(1,1),
	AccountType int,
	Username varchar(20),
	Password varchar(50),
	Email varchar(20),
	CreateTime datetime,
	
	PRIMARY KEY(AccountId)

);
go

-- Table User


CREATE TABLE AppUser(
	AccountId int,
	UserId int not null IDENTITY(1,1),
	Name varchar(20),
	PeopleId varchar(12),
	Phone varchar(11),
	Address varchar(50),
	Ward int,
	
	PRIMARY KEY(UserId)

);
GO
---TABLE Shipper

CREATE TABLE Shipper(
	ShipperId int not null,
	Status int,
	Area int,
	ShipperLicense varchar(50),
	ShipperRating float,
	
	PRIMARY KEY(ShipperId)

);
GO


---TABLE Store


CREATE TABLE Store(
	StoreId int not null,
	StoreType int,
	Status int,
	Area int,
	Categories varchar(20),
	Certificate varchar(50),
	
	PRIMARY KEY(StoreId)

);
GO

---TABLE Customer


CREATE TABLE Customer(
	CustomerId int not null,
	CustomerLevel int,
	
	PRIMARY KEY(CustomerId)

);
Go

-- TABLE StoreFeedback


CREATE TABLE StoreFeedback(
	FeedbackId int not null IDENTITY(1,1),
	StoreId int,
	Content varchar(50),
	FeedbackTime datetime,
	
	PRIMARY KEY (FeedbackId)


);
GO

-- TABLE ProductType


CREATE TABLE ProductType(
	ProductTypeId int not null IDENTITY(1,1),
	ProductTypeName varchar(30),
	ProductTypeDes varchar(50),
	
	
	
	PRIMARY KEY(ProductTypeId)
);
GO

--TABLE Product



CREATE TABLE Product(
	ProductId int not null IDENTITY(1,1),
	StoreId int,
	ProductName varchar(30),
	ProductTypeId int,
	ProductDes varchar(50),
	ProductRating float,
	UnitPrice float,
	Unit float,
	QuantitativeUnit varchar(10),
	Source varchar(50),
	Certificate varchar(20),
	
	PRIMARY KEY(ProductId)

);
GO

-- TABLE OrderDetail


CREATE TABLE OrderDetail(
	OrderDetailId int not null IDENTITY(1,1),
	OrderId int,
	ProductId int,
	UnitPrice float,
	Quantity float,
	OrderDetailDes varchar(50),
	
	PRIMARY KEY(OrderDetailId)

);
GO

--TABLE OrderDetailFeedback


CREATE TABLE OrderDetailFeedback(
	DetailId int,
	Content varchar(50),
	Rating float,
	FeedbackTime datetime
	
	PRIMARY KEY(DetailId)

);
GO


--TABLE Payment


CREATE TABLE Payment(
	BankAccountNumber varchar(16),
	CustomerId int,
	OrderId int,
	PaymentMethod int,
	ShippingMoney int,
	TotalMoney int,
	PaymentTime datetime,
	
	PRIMARY KEY(OrderId)

);
GO

--TABLE Order

CREATE TABLE CusOrder(
	OrderId int not null IDENTITY(1,1),
	CustomerId int,
	ShipperId int,
	StoreId int,
	OrderCode varchar(30),
	OrderStatus int,
	OrderTotal float,
	DeliveryAddress varchar(30),
	DeliveryDate datetime,
	ReceiverName varchar(30),
	ReceiverPhone varchar(11),
	CreateDate datetime,
	
	PRIMARY KEY(OrderId)

);
GO

-- TABLE Refund



CREATE TABLE Refund(
	OrderId int,
	Reasons varchar(100),
	RefundTime datetime,
	
	PRIMARY KEY(OrderId)

);
GO

--TABLE AdminAccount



CREATE TABLE AdminAccount(
	AccountId int not null IDENTITY(1,1),
	Username varchar(30),
	Password varchar(20),
	Name varchar(20),
	Address varchar(50),
	PermissionLevel int,
	Phone varchar(11),
	Email varchar(20),
	
	PRIMARY KEY(AccountId)
);
GO

-- TABLE DatabaseAudit


CREATE TABLE DatabaseAudit(
	AuditId int not null IDENTITY(1,1),
	AdminId int,
	CreateTime datetime,
	Action varchar(10),
	DangerousLevel int,
	Object varchar(20),
	Detail varchar(30),
	
	PRIMARY KEY(AuditId)
	
);
GO

--TABLE Province



CREATE TABLE Province(
	ProvinceId int not null IDENTITY(1,1),
	ProvinceName varchar(20),
	
	PRIMARY KEY(ProvinceId)
);
GO

--TABLE District



CREATE TABLE District(
	DistrictId int not null IDENTITY(1,1),
	DistrictName varchar(20),
	Province int,
	
	PRIMARY KEY(DistrictId)
);
GO

--TABLE District



CREATE TABLE Ward(
	WardId int not null IDENTITY(1,1),
	WardName varchar(20),
	District int,
	
	PRIMARY KEY(WardId)
);
GO






 