import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';




@Component({
  selector: 'app-caroussel',
  templateUrl: './caroussel.component.html',
  styleUrls: ['./caroussel.component.css'],
  providers: [NgbCarouselConfig]
})
export class CarousselComponent implements OnInit {

  constructor(config: NgbCarouselConfig) {
    config.interval = 2000;
    config.keyboard = true;
    config.pauseOnHover = true;
  }

  images = [
    {title: 'First Slide', short: 'First Slide Short', src: "https://www.studyrama.com/local/cache-vignettes/L990xH363/arton105299-bf271.jpg?1610385335"},
    {title: 'Second Slide', short: 'Second Slide Short', src: "https://www.studyrama.com/local/cache-vignettes/L990xH353/arton107776-eb212.png?1610532906"},
    {title: 'Third Slide', short: 'Third Slide Short', src: "https://www.lisaa.com/sites/default/files/lisaa-nantes-design-mode-unicef-frimousses-createurs.jpg"}
  ];

  ngOnInit(): void {
  }


  

}
