import { Products } from "./products";

export interface Cart {
    number: number; // nombre de fois d'un produit dans le panier
    product: Products; 
}
