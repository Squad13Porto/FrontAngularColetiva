import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Slide } from '../../carrossel-ngx/slide';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-aulas',
  templateUrl: './aulas.component.html',
  styleUrls: ['./aulas.component.css'],
})


export class AulasComponent implements OnInit {
  constructor(private http: HttpClient, private cd: ChangeDetectorRef) {
    this.aulasAbertas = [];
    this.aulasPilulas = [];

    this.slidesAberta = [];
    this.slidesPilula = [];
  }

  aulasAbertas = [];
  aulasPilulas = [];

  slidesAberta: Slide[];
  slidesPilula: Slide[];

  ngOnInit(): void {
    console.log('ngOnInit - AulasComponent');
    this.getData();
  }

  async getData() {
    console.log('getData - chamado');
    this.http.get("https://us-central1-squad13-7ae1e.cloudfunctions.net/getFirestoreDocs")
      .subscribe((response: any) => {
        console.log('Resposta do GET:', response);
        this.aulasAbertas = response.aulasAbertasUrls;
        this.aulasPilulas = response.aulasPilulasUrls;

        this.slidesAberta = this.aulasAbertas.map((item: any) => ({ src: item }));
        this.slidesPilula = this.aulasPilulas.map((item: any) => ({ src: item }));
        console.log('slidesPilula após map:', this.slidesPilula);
      }, error => {
        console.error('Erro na requisição GET:', error);
        this.cd.detectChanges();
      });
  }
}

