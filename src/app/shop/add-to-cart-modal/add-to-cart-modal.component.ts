import { Component, Input, OnInit } from '@angular/core';
import { Products } from 'src/app/model/products';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-add-to-cart-modal',
  templateUrl: './add-to-cart-modal.component.html',
  styleUrls: ['./add-to-cart-modal.component.css']
})
export class AddToCartModalComponent implements OnInit {


  @Input() products: Products[]; // ce component n'existerait pas si on ne clique pas sur un produit | le @input permettra de recuperer l'id du produit cliqué et generer le template view product du produit cliqué

  urlImagePrefix = `${environment.urlImagePrefix}`;


  constructor() { }

  ngOnInit(): void {
  }

}
