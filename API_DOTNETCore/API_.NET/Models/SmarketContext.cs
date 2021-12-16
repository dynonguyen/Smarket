using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace API_.NET.Models
{
    public partial class SmarketContext : DbContext
    {
        public SmarketContext()
        {
        }

        public SmarketContext(DbContextOptions<SmarketContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Account> Account { get; set; }
        public virtual DbSet<AdminAccount> AdminAccount { get; set; }
        public virtual DbSet<AppUser> AppUser { get; set; }
        public virtual DbSet<Cart> Cart { get; set; }
        public virtual DbSet<CartDetail> CartDetail { get; set; }
        public virtual DbSet<CusOrder> CusOrder { get; set; }
        public virtual DbSet<Customer> Customer { get; set; }
        public virtual DbSet<DatabaseAudit> DatabaseAudit { get; set; }
        public virtual DbSet<District> District { get; set; }
        public virtual DbSet<OrderDetail> OrderDetail { get; set; }
        public virtual DbSet<OrderDetailFeedback> OrderDetailFeedback { get; set; }
        public virtual DbSet<Payment> Payment { get; set; }
        public virtual DbSet<Product> Product { get; set; }
        public virtual DbSet<ProductType> ProductType { get; set; }
        public virtual DbSet<Province> Province { get; set; }
        public virtual DbSet<Refund> Refund { get; set; }
        public virtual DbSet<Shipper> Shipper { get; set; }
        public virtual DbSet<Store> Store { get; set; }
        public virtual DbSet<StoreFeedback> StoreFeedback { get; set; }
        public virtual DbSet<Ward> Ward { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Server =.\\sqlexpress;Database=Smarket;Trusted_Connection=True");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Account>(entity =>
            {
                entity.Property(e => e.AccountId).ValueGeneratedNever();

                entity.Property(e => e.CreateTime).HasColumnType("datetime");

                entity.Property(e => e.Email)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Password)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Username)
                    .HasMaxLength(20)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<AdminAccount>(entity =>
            {
                entity.HasKey(e => e.AccountId);

                entity.Property(e => e.AccountId).ValueGeneratedNever();

                entity.Property(e => e.Address)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Email)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Name)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Password)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Phone)
                    .HasMaxLength(11)
                    .IsUnicode(false);

                entity.Property(e => e.Username)
                    .HasMaxLength(30)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<AppUser>(entity =>
            {
                entity.HasKey(e => e.UserId);

                entity.Property(e => e.UserId).ValueGeneratedNever();

                entity.Property(e => e.Name)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.PeopleId)
                    .HasMaxLength(12)
                    .IsUnicode(false);

                entity.HasOne(d => d.Account)
                    .WithMany(p => p.AppUser)
                    .HasForeignKey(d => d.AccountId)
                    .HasConstraintName("FK_AppUser_Account");
            });

            modelBuilder.Entity<Cart>(entity =>
            {
                entity.Property(e => e.CartId).ValueGeneratedNever();

                entity.HasOne(d => d.Customer)
                    .WithMany(p => p.Cart)
                    .HasForeignKey(d => d.CustomerId)
                    .HasConstraintName("FK_Cart_Customer");
            });

            modelBuilder.Entity<CartDetail>(entity =>
            {
                entity.HasKey(e => new { e.CartId, e.ProductId });

                entity.Property(e => e.AddTime).HasColumnType("datetime");

                entity.HasOne(d => d.Cart)
                    .WithMany(p => p.CartDetail)
                    .HasForeignKey(d => d.CartId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_CartDetail_Cart");

                entity.HasOne(d => d.Product)
                    .WithMany(p => p.CartDetail)
                    .HasForeignKey(d => d.ProductId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_CartDetail_Product");
            });

            modelBuilder.Entity<CusOrder>(entity =>
            {
                entity.HasKey(e => e.OrderId);

                entity.Property(e => e.OrderId).ValueGeneratedNever();

                entity.Property(e => e.CreateDate).HasColumnType("datetime");

                entity.Property(e => e.DeliveryAddress)
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.DeliveryDate).HasColumnType("datetime");

                entity.Property(e => e.OrderCode)
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.ReceiverName)
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.ReceiverPhone)
                    .HasMaxLength(11)
                    .IsUnicode(false);

                entity.HasOne(d => d.Customer)
                    .WithMany(p => p.CusOrder)
                    .HasForeignKey(d => d.CustomerId)
                    .HasConstraintName("FK_CusOrder_Customer");

                entity.HasOne(d => d.Shipper)
                    .WithMany(p => p.CusOrder)
                    .HasForeignKey(d => d.ShipperId)
                    .HasConstraintName("FK_CusOrder_Shipper");

                entity.HasOne(d => d.Store)
                    .WithMany(p => p.CusOrder)
                    .HasForeignKey(d => d.StoreId)
                    .HasConstraintName("FK_CusOrder_Store");
            });

            modelBuilder.Entity<Customer>(entity =>
            {
                entity.Property(e => e.CustomerId).ValueGeneratedNever();

                entity.HasOne(d => d.CustomerNavigation)
                    .WithOne(p => p.Customer)
                    .HasForeignKey<Customer>(d => d.CustomerId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Customer_AppUser");
            });

            modelBuilder.Entity<DatabaseAudit>(entity =>
            {
                entity.HasKey(e => e.AuditId);

                entity.Property(e => e.AuditId).ValueGeneratedNever();

                entity.Property(e => e.Action)
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.CreateTime).HasColumnType("datetime");

                entity.Property(e => e.Detail)
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.Object)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.HasOne(d => d.Admin)
                    .WithMany(p => p.DatabaseAudit)
                    .HasForeignKey(d => d.AdminId)
                    .HasConstraintName("FK_DatabaseAudit_AdminAccount");
            });

            modelBuilder.Entity<District>(entity =>
            {
                entity.Property(e => e.DistrictId).ValueGeneratedNever();

                entity.Property(e => e.DistrictName)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.HasOne(d => d.ProvinceNavigation)
                    .WithMany(p => p.District)
                    .HasForeignKey(d => d.Province)
                    .HasConstraintName("FK_District_Province");
            });

            modelBuilder.Entity<OrderDetail>(entity =>
            {
                entity.Property(e => e.OrderDetailId).ValueGeneratedNever();

                entity.Property(e => e.OrderDes)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.HasOne(d => d.Order)
                    .WithMany(p => p.OrderDetail)
                    .HasForeignKey(d => d.OrderId)
                    .HasConstraintName("FK_OrderDetail_CusOrder");

                entity.HasOne(d => d.Product)
                    .WithMany(p => p.OrderDetail)
                    .HasForeignKey(d => d.ProductId)
                    .HasConstraintName("FK_OrderDetail_Product");
            });

            modelBuilder.Entity<OrderDetailFeedback>(entity =>
            {
                entity.HasKey(e => e.DetailId);

                entity.Property(e => e.DetailId).ValueGeneratedNever();

                entity.Property(e => e.Content)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.FeedbackTime).HasColumnType("datetime");

                entity.HasOne(d => d.Detail)
                    .WithOne(p => p.OrderDetailFeedback)
                    .HasForeignKey<OrderDetailFeedback>(d => d.DetailId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_OrderDetailFeedback_OrderDetail");
            });

            modelBuilder.Entity<Payment>(entity =>
            {
                entity.HasKey(e => e.BankAccountNumber);

                entity.Property(e => e.BankAccountNumber)
                    .HasMaxLength(16)
                    .IsUnicode(false)
                    .ValueGeneratedNever();

                entity.Property(e => e.PaymentTime).HasColumnType("datetime");

                entity.HasOne(d => d.Customer)
                    .WithMany(p => p.Payment)
                    .HasForeignKey(d => d.CustomerId)
                    .HasConstraintName("FK_Payment_Customer");

                entity.HasOne(d => d.Order)
                    .WithMany(p => p.Payment)
                    .HasForeignKey(d => d.OrderId)
                    .HasConstraintName("FK_Payment_CusOrder");
            });

            modelBuilder.Entity<Product>(entity =>
            {
                entity.Property(e => e.ProductId).ValueGeneratedNever();

                entity.Property(e => e.Certificate)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.ProductDes)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.ProductName)
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.Source)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.HasOne(d => d.ProductType)
                    .WithMany(p => p.Product)
                    .HasForeignKey(d => d.ProductTypeId)
                    .HasConstraintName("FK_Product_ProductType");
            });

            modelBuilder.Entity<ProductType>(entity =>
            {
                entity.Property(e => e.ProductTypeId).ValueGeneratedNever();

                entity.Property(e => e.ProductTypeDes)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.ProductTypeName)
                    .HasMaxLength(30)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Province>(entity =>
            {
                entity.Property(e => e.ProvinceId).ValueGeneratedNever();

                entity.Property(e => e.ProvinceName)
                    .HasMaxLength(20)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Refund>(entity =>
            {
                entity.HasKey(e => e.OrderId);

                entity.Property(e => e.OrderId).ValueGeneratedNever();

                entity.Property(e => e.Reasons)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.RefundTime).HasColumnType("datetime");

                entity.HasOne(d => d.Order)
                    .WithOne(p => p.Refund)
                    .HasForeignKey<Refund>(d => d.OrderId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Refund_CusOrder");
            });

            modelBuilder.Entity<Shipper>(entity =>
            {
                entity.Property(e => e.ShipperId).ValueGeneratedNever();

                entity.Property(e => e.Shipperlicense)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.HasOne(d => d.AreaNavigation)
                    .WithMany(p => p.Shipper)
                    .HasForeignKey(d => d.Area)
                    .HasConstraintName("FK_Shipper_District");

                entity.HasOne(d => d.ShipperNavigation)
                    .WithOne(p => p.Shipper)
                    .HasForeignKey<Shipper>(d => d.ShipperId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Shipper_AppUser");
            });

            modelBuilder.Entity<Store>(entity =>
            {
                entity.Property(e => e.StoreId).ValueGeneratedNever();

                entity.Property(e => e.Categories)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Certificate)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.HasOne(d => d.StoreNavigation)
                    .WithOne(p => p.Store)
                    .HasForeignKey<Store>(d => d.StoreId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Store_AppUser");
            });

            modelBuilder.Entity<StoreFeedback>(entity =>
            {
                entity.HasKey(e => e.FeedbackId);

                entity.Property(e => e.FeedbackId).ValueGeneratedNever();

                entity.Property(e => e.Content)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.FeedbackTime).HasColumnType("datetime");

                entity.HasOne(d => d.Store)
                    .WithMany(p => p.StoreFeedback)
                    .HasForeignKey(d => d.StoreId)
                    .HasConstraintName("FK_StoreFeedback_Store");
            });

            modelBuilder.Entity<Ward>(entity =>
            {
                entity.Property(e => e.WardId).ValueGeneratedNever();

                entity.Property(e => e.WardName)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.HasOne(d => d.DistrictNavigation)
                    .WithMany(p => p.Ward)
                    .HasForeignKey(d => d.District)
                    .HasConstraintName("FK_Ward_District");
            });
        }
    }
}
