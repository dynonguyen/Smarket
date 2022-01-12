using API_.NET.DTO;
using Microsoft.EntityFrameworkCore;
using System;
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
        public virtual DbSet<CusOrder> CusOrder { get; set; }
        public virtual DbSet<Customer> Customer { get; set; }
        public virtual DbSet<DatabaseAudit> DatabaseAudit { get; set; }
        public virtual DbSet<District> District { get; set; }
        public virtual DbSet<OrderDetail> OrderDetail { get; set; }
        public virtual DbSet<OrderDetailFeedback> OrderDetailFeedback { get; set; }
        public virtual DbSet<Payment> Payment { get; set; }
        public virtual DbSet<Product> Product { get; set; }
        public virtual DbSet<ProductImage> ProductImage { get; set; }
        public virtual DbSet<ProductType> ProductType { get; set; }
        public virtual DbSet<Province> Province { get; set; }
        public virtual DbSet<Refund> Refund { get; set; }
        public virtual DbSet<Shipper> Shipper { get; set; }
        public virtual DbSet<Store> Store { get; set; }
        public virtual DbSet<StoreFeedback> StoreFeedback { get; set; }
        public virtual DbSet<Ward> Ward { get; set; }
        public DbSet<DTO_Stores> Stores { get; set; }
        public DbSet<DTO_Empty> Empty { get; set; }
        public DbSet<DTO_ProductEachType> ProductEachType { get; set; }
        
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                DotNetEnv.Env.Load();
                var username = Environment.GetEnvironmentVariable("USERNAME");
                var password = Environment.GetEnvironmentVariable("PASSWORD");
                //#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer($"Server=.;Database=Smarket;Trusted_Connection=true;User ID='{username}';Password='{password}'; ");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Account>(entity =>
            {
                entity.Property(e => e.CreateTime)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.Password)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.Username)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<AdminAccount>(entity =>
            {
                entity.HasKey(e => e.AccountId);

                entity.Property(e => e.Address)
                    .IsRequired()
                    .HasMaxLength(100);

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(30);

                entity.Property(e => e.Password)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.Phone)
                    .IsRequired()
                    .HasMaxLength(11)
                    .IsUnicode(false);

                entity.Property(e => e.Username)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<AppUser>(entity =>
            {
                entity.HasKey(e => e.UserId);

                entity.Property(e => e.Address)
                    .IsRequired()
                    .HasMaxLength(100);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(30);

                entity.Property(e => e.Avatar)
                    .IsRequired()
                    .HasMaxLength(30);

                entity.Property(e => e.PeopleId)
                    .IsRequired()
                    .HasMaxLength(12)
                    .IsUnicode(false);

                entity.Property(e => e.Phone)
                    .IsRequired()
                    .HasMaxLength(11)
                    .IsUnicode(false);

                entity.HasOne(d => d.Account)
                    .WithMany(p => p.AppUser)
                    .HasForeignKey(d => d.AccountId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_AppUser_Account");

                entity.HasOne(d => d.WardNavigation)
                    .WithMany(p => p.AppUser)
                    .HasForeignKey(d => d.Ward)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_AppUser_Ward");
            });

            modelBuilder.Entity<Cart>(entity =>
            {
                entity.Property(e => e.SessionId)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.HasOne(d => d.Product)
                    .WithMany(p => p.Cart)
                    .HasForeignKey(d => d.ProductId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Cart_Product");
            });

            modelBuilder.Entity<CusOrder>(entity =>
            {
                entity.HasKey(e => e.OrderId);

                entity.Property(e => e.CreateDate).HasColumnType("datetime");

                entity.Property(e => e.DeliveryAddress)
                    .IsRequired()
                    .HasMaxLength(100);

                entity.Property(e => e.DeliveryDate).HasColumnType("datetime");

                entity.Property(e => e.OrderCode)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.ReceiverName)
                    .IsRequired()
                    .HasMaxLength(30);

                entity.Property(e => e.ReceiverPhone)
                    .IsRequired()
                    .HasMaxLength(11)
                    .IsUnicode(false);

                entity.HasOne(d => d.Customer)
                    .WithMany(p => p.CusOrder)
                    .HasForeignKey(d => d.CustomerId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_CusOrder_Customer");

                entity.HasOne(d => d.Shipper)
                    .WithMany(p => p.CusOrder)
                    .HasForeignKey(d => d.ShipperId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_CusOrder_Shipper");

                entity.HasOne(d => d.Store)
                    .WithMany(p => p.CusOrder)
                    .HasForeignKey(d => d.StoreId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_CusOrder_Store");
            });

            modelBuilder.Entity<Customer>(entity =>
            {
                entity.HasOne(d => d.User)
                    .WithMany(p => p.Customer)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Customer_AppUser");
            });

            modelBuilder.Entity<DatabaseAudit>(entity =>
            {
                entity.HasKey(e => e.AuditId);

                entity.Property(e => e.Action)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.CreateTime).HasColumnType("datetime");

                entity.Property(e => e.Detail)
                    .IsRequired()
                    .HasMaxLength(30);

                entity.Property(e => e.Object)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.HasOne(d => d.Admin)
                    .WithMany(p => p.DatabaseAudit)
                    .HasForeignKey(d => d.AdminId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_DatabaseAudit_AdminAccount");
            });

            modelBuilder.Entity<District>(entity =>
            {
                entity.Property(e => e.DistrictName)
                    .IsRequired()
                    .HasMaxLength(30);

                entity.Property(e => e.Prefix)
                    .IsRequired()
                    .HasMaxLength(10);

                entity.HasOne(d => d.ProvinceNavigation)
                    .WithMany(p => p.District)
                    .HasForeignKey(d => d.Province)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_District_Province");
            });

            modelBuilder.Entity<OrderDetail>(entity =>
            {
                entity.Property(e => e.OrderDetailDes).HasMaxLength(50);

                entity.HasOne(d => d.Order)
                    .WithMany(p => p.OrderDetail)
                    .HasForeignKey(d => d.OrderId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_OrderDetail_CusOrder");

                entity.HasOne(d => d.Product)
                    .WithMany(p => p.OrderDetail)
                    .HasForeignKey(d => d.ProductId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_OrderDetail_Product");
            });

            modelBuilder.Entity<OrderDetailFeedback>(entity =>
            {
                entity.Property(e => e.Content)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.FeedbackTime).HasColumnType("datetime");

                entity.HasOne(d => d.Detail)
                    .WithMany(p => p.OrderDetailFeedback)
                    .HasForeignKey(d => d.DetailId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_OrderDetailFeedback_OrderDetail");
            });

            modelBuilder.Entity<Payment>(entity =>
            {
                entity.Property(e => e.BankAccountNumber)
                    .IsRequired()
                    .HasMaxLength(16)
                    .IsUnicode(false);

                entity.Property(e => e.PaymentTime)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.HasOne(d => d.Customer)
                    .WithMany(p => p.Payment)
                    .HasForeignKey(d => d.CustomerId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Payment_Customer");

                entity.HasOne(d => d.Order)
                    .WithMany(p => p.Payment)
                    .HasForeignKey(d => d.OrderId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Payment_CusOrder");
            });

            modelBuilder.Entity<Product>(entity =>
            {
                entity.Property(e => e.Certificate)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.ProductDes)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.ProductName)
                    .IsRequired()
                    .HasMaxLength(30);

                entity.Property(e => e.QuantitativeUnit)
                    .IsRequired()
                    .HasMaxLength(10);

                entity.Property(e => e.Source)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.HasOne(d => d.ProductType)
                    .WithMany(p => p.Product)
                    .HasForeignKey(d => d.ProductTypeId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Product_ProductType");
            });

            modelBuilder.Entity<ProductImage>(entity =>
            {
                entity.Property(e => e.Source)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.HasOne(d => d.Product)
                    .WithMany(p => p.ProductImage)
                    .HasForeignKey(d => d.ProductId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_ProductImage_Product");
            });

            modelBuilder.Entity<ProductType>(entity =>
            {
                entity.Property(e => e.ProductTypeDes)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.ProductTypeName)
                    .IsRequired()
                    .HasMaxLength(30);

            });

            modelBuilder.Entity<Province>(entity =>
            {
                entity.Property(e => e.ProvinceName)
                    .IsRequired()
                    .HasMaxLength(20);
            });

            modelBuilder.Entity<Refund>(entity =>
            {
                entity.Property(e => e.Reasons)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.RefundTime)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.HasOne(d => d.Order)
                    .WithMany(p => p.Refund)
                    .HasForeignKey(d => d.OrderId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Refund_CusOrder");
            });

            modelBuilder.Entity<Shipper>(entity =>
            {
                entity.Property(e => e.ShipperLicense)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.HasOne(d => d.AreaNavigation)
                    .WithMany(p => p.Shipper)
                    .HasForeignKey(d => d.Area)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Shipper_District");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.Shipper)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Shipper_AppUser");
            });

            modelBuilder.Entity<Store>(entity =>
            {
                entity.Property(e => e.Categories)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.Certificate)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.HasOne(d => d.User)
                    .WithMany(p => p.Store)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Store_AppUser");
            });

            modelBuilder.Entity<StoreFeedback>(entity =>
            {
                entity.HasKey(e => e.FeedbackId);

                entity.Property(e => e.Content)
                    .IsRequired()
                    .HasMaxLength(255);

                entity.Property(e => e.FeedbackTime).HasColumnType("datetime");

                entity.HasOne(d => d.Store)
                    .WithMany(p => p.StoreFeedback)
                    .HasForeignKey(d => d.StoreId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_StoreFeedback_Store");
            });

            modelBuilder.Entity<Ward>(entity =>
            {
                entity.Property(e => e.Prefix)
                    .IsRequired()
                    .HasMaxLength(10);

                entity.Property(e => e.WardName)
                    .IsRequired()
                    .HasMaxLength(30);

                entity.Property(e => e.Level)
                    .IsRequired()
                    .HasMaxLength(10);
                    
                entity.HasOne(d => d.DistrictNavigation)
                    .WithMany(p => p.Ward)
                    .HasForeignKey(d => d.District)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Ward_District");
            });
        }
    }
}
