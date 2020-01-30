import { Component, OnInit } from '@angular/core';
import {CartService} from '../cart.service';
import {FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
checkoutForm;
items=[];
  constructor(
    private cartService:CartService,
    private formbuilder:FormBuilder
    ) { 
      this.checkoutForm=this.formbuilder.group({
        name:'',
        address:''
      })
    }

  ngOnInit() {
    this.items=this.cartService.getItems();
  }

  onSubmitData(customerData)
  {
   console.warn('Your order has been submitted', customerData);
   this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  }

}