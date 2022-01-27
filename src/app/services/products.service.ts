import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Products } from '../model/products';
import { Result } from '../model/result';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: Products[] = [];
  prodSubject = new Subject<Products[]>();

  constructor(private http: HttpClient) { 
    this.getProductsServer();
  }

  //mise a jour s'il ya un produit modifie
  emitProducts() {
    this.prodSubject.next(this.products);
  }

  getProductsServer() {
    const url = `${environment.API + 'products?' + environment.API_KEY}`
    
    this.http.get(url).subscribe(
      (dataProducts: Result) => {
        if (dataProducts.status == 200) {
          this.products = dataProducts.result;
          this.emitProducts();
  
        } else {
          console.log("Error : " + dataProducts.message);
        }
      }
    )
  }
}
