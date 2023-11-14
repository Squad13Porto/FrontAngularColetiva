import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import $ from 'jquery';
import { SlickCarouselModule } from 'ngx-slick-carousel';


@Component({
  selector: 'app-slide-aulas',
  templateUrl: './slide-aulas.component.html',
  standalone: true,
  imports: [CommonModule, SlickCarouselModule],
  styleUrls: ['./slide-aulas.component.css'],
})
export class SlideAulasComponent{
  // @Input('srcs') srcs!: {};
  @Input('arrows') arrows!: boolean;
  
  isArrowsActive: boolean = this.arrows

  constructor() { }
  

  slides = [
    {src: '../../../assets/images/img-aula-aberta.png'},
    {src: '../../../assets/images/img-aula-pilula.png'},
    {src: '../../../assets/images/carrossel.png'}
  ]
  
    slickConfig = {
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: this.arrows //ver pq a variavel n ta funcionando
    };
  
  
  ngOnInit(): void {
  }


}

