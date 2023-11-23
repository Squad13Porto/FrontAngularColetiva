import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { Slide } from './slide';
import $ from 'jquery';

@Component({
  selector: 'app-carrossel-ngx',
  templateUrl: './carrossel-ngx.component.html',
  standalone: true,
  imports: [CommonModule, SlickCarouselModule],
  styleUrls: ['./carrossel-ngx.component.css'],
})
export class CarrosselNgxComponent {
  //src imgs slide
  @Input() slidesAulasAbertas: Slide[] = [];
  @Input() slidesAulasPilulas: Slide[] = [];

  constructor(private http: HttpClient) {
    this.slidesAberta = [];
    this.slidesPilula = [];
  }

  // imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  // preciso receber de uma propriedade com o ID do curso especifico, para colocar no <a>
  // dentro do html desse slide, e assim referencialo
  // <a routerLink="/first-component" routerLinkActive="active" ariaCurrentWhenActive="page">First Component</a>

  slidesAberta: Slide[];
  slidesPilula: Slide[];

  slickConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  // slidesAberta = [
  //   {src: ''}
  // ]

  // slidesPilula = [
  //   {src: ''}
  // ]

  ngOnInit(): void {
    this.slidesAberta = this.slidesAulasAbertas.map((item: any) => ({
      src: item.src,
    }));
    this.slidesPilula = this.slidesAulasPilulas.map((item: any) => ({
      src: item.src,
    }));
  }
}
