import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Products } from 'src/app/model/products';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {

  
  @Input() products: Products[] = [];
  @Input() isPaginate: boolean = true;
  urlImagePrefix = `${environment.urlImagePrefix}`; // evaluer l'environement depuis l'envirement de developement
  prodSub: Subscription;
  currentPage = 0;
  pages = [0,1,2,3,4,5,6];

  constructor(private prodService: ProductsService, private cartService: CartService) { }

  ngOnInit(): void {
    this.prodSub = this.prodService.prodSubject.subscribe(
      (data) => {
        this.products = data;
      }
    );
    this.prodService.emitProducts
  }
  ngOnDestroy() {
    this.prodSub.unsubscribe();
  }

  changePage(numberPage: number): void{
    const prod = this.prodService.getProductByPage(numberPage);
    if(prod.length){
      this.products = prod;
      this.currentPage = numberPage;
    }
  }

  nextPage(): void{
    const newCurrentPage = this.currentPage +1;
    const prod = this.prodService.getProductByPage(newCurrentPage);
    if(prod.length){
      this.products = prod;
      this.currentPage = newCurrentPage;
    }

  }


  addToCart(product: Products): void {
    this.cartService.addProductToCard(product)
  }

  deleteFromCart(product: Products): void{
    this.cartService.deleteFromCart(product);
    
  }
}
