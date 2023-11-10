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
  
  

  slides = [
    {src: '../../../assets/images/img-aula-aberta.png'},
    {src: '../../../assets/images/img-aula-pilula.png'},
  ]

  slickConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000
  };

  constructor() { }

  ngOnInit(): void {
  }


}

