import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Products } from 'src/app/model/products';
import { ProductsService } from 'src/app/services/products.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {

  
  products: Products[] = [];
  urlImagePrefix = `${environment.urlImagePrefix}`; // evaluer l'environement depuis l'envirement de developement
  prodSub: Subscription;

  constructor(private prodService: ProductsService) { }

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
}
