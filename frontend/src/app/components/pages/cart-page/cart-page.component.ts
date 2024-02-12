import { Component } from '@angular/core';
import { Cart } from '../../../shared/models/cart';
import { CartService } from '../../../services/cart.service';
import { CartItem } from '../../../shared/models/cartItem';
import { RouterLink } from '@angular/router';
import { NotFoundComponent } from '../../partials/not-found/not-found.component';

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [RouterLink,NotFoundComponent],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css'
})
export class CartPageComponent {
  cart!: Cart;
  constructor(private cartService: CartService){
    this.cartService.getCartObservable().subscribe((cart)=> {
          this.cart = cart;
    })
  }

  removeFromCart(cartItem:CartItem){
    this.cartService.removeFromCart(cartItem.food.id);
  }

  changeQuantity(cartItem:CartItem,quantity: string){
    this.cartService.changeQuantity(cartItem.food.id,parseInt(quantity))
  }
}
