import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Slide } from '../../carrossel-ngx/slide';
@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
})
export class CursosComponent {
  constructor(private http: HttpClient, private cd: ChangeDetectorRef) {
    this.cursos = [];
    this.slidesCursos = [];
  }

  cursos = [];
  slidesCursos: Slide[];

  ngOnInit(): void {
    this.getData();
  }

  async getData() {
    this.http
      .get(
        'https://us-central1-squad13-7ae1e.cloudfunctions.net/getFirestoreDocs'
      )
      .subscribe((response: any) => {
        this.cursos = response.cursos;

        this.slidesCursos = this.cursos.map((item: any) => ({
          src: item.carrosselImg,
        }));
      });
  }
}
