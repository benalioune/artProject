import { Component, Input, OnInit } from '@angular/core';
import { Products } from 'src/app/model/products';
import { environment } from 'src/environments/environment';
import { CartService } from '../../services/cart.service';


@Component({
  selector: 'app-quick-view-modal',
  templateUrl: './quick-view-modal.component.html',
  styleUrls: ['./quick-view-modal.component.css']
})
export class QuickViewModalComponent implements OnInit {



  @Input() products: Products[]; // ce component n'existerait pas si on ne clique pas sur un produit | le @input permettra de recuperer l'id du produit cliqué et generer le template view product du produit cliqué

  urlImagePrefix = `${environment.urlImagePrefix}`;

  

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  addCart(product: Products): void{
    this.cartService.addProductToCard(product);
  }

}
