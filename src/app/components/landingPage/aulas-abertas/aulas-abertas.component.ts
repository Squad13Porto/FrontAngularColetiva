import { Component, Input } from '@angular/core';
import { Slide } from '../../carrossel-ngx/slide';

@Component({
  selector: 'app-aulas-abertas',
  templateUrl: './aulas-abertas.component.html',
  styleUrls: ['./aulas-abertas.component.css'],
})
export class AulasAbertasComponent {

  @Input() pathAulasAbertas: Slide[] = [];

  constructor() {
    this.pathAberta = [];
  }


  pathAberta: Slide[]

  ngOnInit(): void {
    console.log('ngOnInit - AulasAbertasComponent', this.pathAulasAbertas);
    this.pathAberta = this.pathAulasAbertas.map((item: any) => ({
      src: item.src,
    }));
    console.log('pathAberta após map:', this.pathAberta);
  }


}

