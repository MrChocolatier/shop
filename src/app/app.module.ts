import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ProductModule } from './product/product.module';

import { ProductsService } from './product/services/products.service';
import { CartService } from './services/cart.service';

import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    ProductModule
  ],
  providers: [
    ProductsService,
    CartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
