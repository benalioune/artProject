import { Injectable } from '@angular/core';
import { Cart } from '../model/cart';
import { Products } from '../model/products';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: Cart[] = [];
  cartData = { len: 0, cost: 0 }; 

  constructor() { }

  //update les données concernant notre Panier
  updateDataCart() {
    let len = 0;
    let cost = 0;
    this.cart.forEach(element => {
      element.number;
      len += element.number;
      cost += element.product.price * element.number;
    })
    
    this.cartData.len = len;
    this.cartData.cost = cost;
  }

  addProductToCard(newProduct: Products): void{
    const checkedProduct = this.cart.find(element => element.product == newProduct) // on va parcourir le paier et a chaque elemt nous allons regarder son produit qui est dedans et on regarde es ce que ce produt est egale au produit qu'on nous donne en parametre a ajouter
  
    if (checkedProduct) {
      checkedProduct.number++;
    }
    else {
      const newProductToAdd = {
        number: 1,
        product: newProduct
      };
      this.cart.push(newProductToAdd);

    }
    this.updateDataCart();
  }

  deleteFromCart(productToDelete: Products): void{
    const indexProduct = this.cart.findIndex(element => element.product === productToDelete)
    
    if (indexProduct) {
      if (this.cart[indexProduct].number > 1) {
        this.cart[indexProduct].number--;
      } else {
        this.cart.splice(indexProduct, 1);
      }
    }
    this.updateDataCart();
  }


  removeElementOfCart(index: number): void{
    this.cart.splice(index,1);
    this.updateDataCart();
  }

}
