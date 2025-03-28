import { Module } from '@nestjs/common';
import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';
import { ProductImageModule } from './product-image/product-image.module';
import { CategoryImageModule } from './category-image/category-image.module';
import { AddressModule } from './address/address.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { OrderModule } from './order/order.module';
import { OrderItemModule } from './order-item/order-item.module';
import { PaymentModule } from './payment/payment.module';
import { CartModule } from './cart/cart.module';
import { CartItemModule } from './cart-item/cart-item.module';
import { WishlistModule } from './wishlist/wishlist.module';
import { ReviewModule } from './review/review.module';
import { ReviewImageModule } from './review-image/review-image.module';
import { ShippingModule } from './shipping/shipping.module';
import { SellerModule } from './seller/seller.module';
import { SellerProductsModule } from './seller-products/seller-products.module';
import { NotificationModule } from './notification/notification.module';
import { FaqModule } from './faq/faq.module';
import { SupportModule } from './support/support.module';
import { SubscriptionModule } from './subscription/subscription.module';
import { DiscountModule } from './discount/discount.module';

@Module({
  imports: [
    ProductModule,
    CategoryModule,
    ProductImageModule,
    CategoryImageModule,
    AddressModule,
    AuthModule,
    UserModule,
    OrderModule,
    OrderItemModule,
    PaymentModule,
    CartModule,
    CartItemModule,
    WishlistModule,
    ReviewModule,
    ReviewImageModule,
    ShippingModule,
    SellerModule,
    SellerProductsModule,
    NotificationModule,
    FaqModule,
    SupportModule,
    SubscriptionModule,
    DiscountModule,
  ],
})
export class ApiModule {}
