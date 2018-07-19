import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ProductModule } from './product/product.module';
import { CartModule } from './cart/cart.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { OrdersModule } from './orders/orders.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CoreModule,
    SharedModule,
    ProductModule,
    CartModule,
    OrdersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
