import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import $ from 'jquery';
import { SlickCarouselModule, SlickCarouselComponent } from 'ngx-slick-carousel';

@Component({
  selector: 'app-carrossel-principal',
  templateUrl: './carrossel-principal.component.html',
  styleUrls: ['./carrossel-principal.component.css'],
  standalone: true,
  imports: [CommonModule, SlickCarouselModule, ]
})
export class CarrosselPrincipalComponent {
  slides = [
    {src: '../../../assets/images/img-aula-aberta.png'},
    {src: '../../../assets/images/img-aula-pilula.png'},
    {src: '../../../assets/images/reuniao.jpeg'}
  ]

  slickConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
  };


  constructor() { }

  ngOnInit(): void {
  }


}
