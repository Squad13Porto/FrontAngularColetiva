import { Component, Input } from '@angular/core';
import { Slide } from '../../carrossel-ngx/slide';

@Component({
  selector: 'app-aulas-pilulas',
  templateUrl: './aulas-pilulas.component.html',
  styleUrls: ['./aulas-pilulas.component.css']
})
export class AulasPilulasComponent {
  @Input() pathAulasPilulas: Slide[] = [];

  constructor() {
    this.pathPilula = [];
  }

  pathPilula: Slide[]

  ngOnInit(): void {
    this.pathPilula = this.pathAulasPilulas.map((item: any) => ({
      src: item.src,
    }));

  }
}
