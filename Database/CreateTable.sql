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
DROP TABLE ProductImage;
GO
DROP TABLE Cart;
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
	AccountType int not null,
	Username varchar(20) not null,
	Password varchar(100) not null,
	Email varchar(100) not null,
	CreateTime datetime not null DEFAULT GETDATE(),
	
	PRIMARY KEY(AccountId)
);
GO

-- Table User

CREATE TABLE AppUser(
	UserId int not null IDENTITY(1,1),
	AccountId int not null,
	Name nvarchar(30) not null,
	PeopleId varchar(12) not null,
	Phone varchar(11) not null,
	Address nvarchar(100) not null,
	Ward int not null,
	
	PRIMARY KEY(UserId)
);
GO

---TABLE Shipper

CREATE TABLE Shipper(
	ShipperId int not null IDENTITY(1,1),
	Status int not null,
	Area int not null,
	ShipperLicense varchar(50) not null,
	ShipperRating float not null,
	UserId int not null, 
	
	PRIMARY KEY(ShipperId)
);
GO

---TABLE Store

CREATE TABLE Store(
	StoreId int not null IDENTITY(1,1),
	StoreType int not null,
	Status int not null,
	Area int not null,
	Categories nvarchar(50) not null,
	Certificate varchar(255) not null,
	UserId int not null,

	PRIMARY KEY(StoreId)
);
GO

---TABLE Customer

CREATE TABLE Customer(
	CustomerId int not null IDENTITY(1,1),
	CustomerLevel int not null,
	UserId int not null,
	PRIMARY KEY(CustomerId)
);
Go

-- TABLE StoreFeedback

CREATE TABLE StoreFeedback(
	FeedbackId int not null IDENTITY(1,1),
	StoreId int not null,
	Content nvarchar(255) not null,
	FeedbackTime datetime not null,
	
	PRIMARY KEY (FeedbackId)
);
GO

-- TABLE ProductType

CREATE TABLE ProductType(
	ProductTypeId int not null IDENTITY(1,1),
	ProductTypeName nvarchar(30) not null,
	ProductTypeDes nvarchar(50) not null,

	PRIMARY KEY(ProductTypeId)
);
GO

--TABLE Product

CREATE TABLE Product(
	ProductId int not null IDENTITY(1,1),
	StoreId int not null,
	ProductName nvarchar(30) not null,
	ProductTypeId int not null,
	ProductDes nvarchar(50) not null,
	ProductRating float not null,
	UnitPrice int not null,
	Unit int not null,
	QuantitativeUnit nvarchar(10) not null,
	Source nvarchar(50) not null,
	Certificate varchar(255) not null,
	
	PRIMARY KEY(ProductId)
);
GO

--- TABLE Cart

CREATE TABLE Cart(
	CartId int not null IDENTITY(1,1),
	SessionId varchar(50),
	ProductId int not null,
	Quantity int not null,

	PRIMARY KEY(CartId)
);
GO

---TABLE ProductImage

CREATE TABLE ProductImage(
	ProductImageId int not null IDENTITY(1,1),
	ProductId int not null,
	IsThumbnail bit not null,
	Source varchar(255) not null,

	PRIMARY KEY(ProductImageId)
)

-- TABLE OrderDetail

CREATE TABLE OrderDetail(
	OrderDetailId int not null IDENTITY(1,1),
	OrderId int not null,
	ProductId int not null,
	UnitPrice int not null,
	Quantity int not null,
	OrderDetailDes nvarchar(50),
	
	PRIMARY KEY(OrderDetailId)
);
GO

--TABLE OrderDetailFeedback

CREATE TABLE OrderDetailFeedback(
	OrderDetailFeedbackId int not null IDENTITY(1,1),
	DetailId int not null,
	Content nvarchar(50) not null,
	Rating float not null,
	FeedbackTime datetime not null,
	
	PRIMARY KEY(OrderDetailFeedbackId)
);
GO

--TABLE Payment

CREATE TABLE Payment(
	PaymentId int not null IDENTITY(1,1),
	BankAccountNumber varchar(16) not null,
	CustomerId int not null,
	OrderId int not null,
	PaymentMethod int not null,
	ShippingMoney int not null,
	TotalMoney int not null,
	PaymentTime datetime not NULL DEFAULT GETDATE(),
	
	PRIMARY KEY(PaymentId)
);
GO

--TABLE Order

CREATE TABLE CusOrder(
	OrderId int not null IDENTITY(1,1),
	CustomerId int not null,
	ShipperId int not null,
	StoreId int not null,
	OrderCode varchar(30) not null,
	OrderStatus int not null,
	OrderTotal int not null,
	DeliveryAddress nvarchar(100) not null,
	DeliveryDate datetime not null,
	ReceiverName nvarchar(30) not null,
	ReceiverPhone varchar(11) not null,
	CreateDate datetime not null,
	
	PRIMARY KEY(OrderId)
);
GO

-- TABLE Refund

CREATE TABLE Refund(
	RefundId int not null IDENTITY(1,1),
	OrderId int not null,
	Reasons varchar(100) not null,
	RefundTime datetime not null DEFAULT GETDATE(),
	
	PRIMARY KEY(RefundId)
);
GO

--TABLE AdminAccount

CREATE TABLE AdminAccount(
	AccountId int not null IDENTITY(1,1),
	Username varchar(30) not null,
	Password varchar(100) not null,
	Name nvarchar(30) not null,
	Address nvarchar(100) not null,
	PermissionLevel int not null,
	Phone varchar(11) not null,
	Email varchar(100) not null,
	
	PRIMARY KEY(AccountId)
);
GO

-- TABLE DatabaseAudit

CREATE TABLE DatabaseAudit(
	AuditId int not null IDENTITY(1,1),
	AdminId int not null,
	CreateTime datetime not null,
	Action varchar(50) not null,
	DangerousLevel int not null,
	Object varchar(20) not null,
	Detail nvarchar(30) not null,
	
	PRIMARY KEY(AuditId)
);
GO

--TABLE Province

CREATE TABLE Province(
	ProvinceId int not null IDENTITY(1,1),
	ProvinceName nvarchar(20) not null,
	PRIMARY KEY(ProvinceId)
);
GO

--TABLE District

CREATE TABLE District(
	DistrictId int not null IDENTITY(1,1),
	DistrictName nvarchar(30) not null,
	Prefix nvarchar(10) not null,
	Province int not null,
	
	PRIMARY KEY(DistrictId)
);
GO

--TABLE District

CREATE TABLE Ward(
	WardId int not null IDENTITY(1,1),
	WardName nvarchar(30) not null,
	Prefix nvarchar(10) not null,
	District int not null,
	
	PRIMARY KEY(WardId)
);
GO
