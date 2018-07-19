import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { CartService } from './services/cart.service';

import { CartItemComponent } from './components/cart-item/cart-item.component';
import { CartListComponent } from './components/cart-list/cart-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    CartListComponent,
    CartItemComponent
  ],
  exports: [
    CartListComponent
  ],
  providers: [
    CartService
  ]
})
export class CartModule { }
