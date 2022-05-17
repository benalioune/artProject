import { Component, OnInit } from '@angular/core';
import {Artists} from '../model/artists'

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  artistAll: Artists[] = [
    
    { id: 1, name: 'Alyssa', description: 'Alyssa Venue tout droit d’Érythrée', imgProfile: '../../assets/img/artists/alyssa.jpeg', snapchat: 'snap', instagram: 'instagram', twitter: 'twitter' },
    { id: 2, name: 'Goldeva', description: 'Goldeva est une créatrice de Bijoux ', imgProfile: '../../assets/img/artists/Goldeva 340-314.jpg', snapchat: 'snap', instagram: 'instagram', twitter: 'twitter' },
    { id: 3, name: 'Elayci', description: 'l’Atelier Eclayci propose des creations en argile blanc handmade dans un univers rétro pastel', imgProfile: '../../assets/img/artists/elayci.png', snapchat: 'snap', instagram: 'instagram', twitter: 'twitter' },
    { id: 3, name: 'Alyssa', description: 'Alyssa Venue tout droit d’Érythrée', imgProfile: '../../assets/img/artists/alyssa.jpeg', snapchat: 'snap', instagram: 'instagram', twitter: 'twitter' },
    


  ]

  constructor() { }

  ngOnInit(): void {
  }

}
