import { Component, Input, OnInit } from '@angular/core';
import { CartItem } from 'src/app/model/cart-item';
import { Product } from 'src/app/model/Product';
import { CartService } from 'src/app/services/cart.service';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-giohang',
  templateUrl: './giohang.component.html',
  styleUrls: ['./giohang.component.scss']
})
export class GiohangComponent implements OnInit {


  CartItems = [];
  cartTotal = 0
  @Input() cartItem: any
  constructor(
    private msg: MessengerService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.handleSubscription();
    this.loadCartItems();
  }
  
  handleSubscription() {
    this.msg.getMsg().subscribe((product: Product) => {
      this.loadCartItems();
    })
  }

  loadCartItems() {
    this.cartService.getCartItems().subscribe((items: CartItem[]) => {
      this.CartItems = items;
      this.calcCartTotal();
    })
  }

  calcCartTotal() {
    this.cartTotal = 0
    this.CartItems.forEach(item => {
      this.cartTotal += (item.qty * item.price)
    })
  }

}
