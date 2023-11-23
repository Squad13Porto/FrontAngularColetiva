import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Slide } from '../../carrossel-ngx/slide';
@Component({
  selector: 'app-aulas',
  templateUrl: './aulas.component.html',
  styleUrls: ['./aulas.component.css'],
})


export class AulasComponent implements OnInit {
  constructor(private http: HttpClient) {
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
    this.getData()
    
    
    
  }

  async getData() {
   this.http.get("https://us-central1-squad13-7ae1e.cloudfunctions.net/getFirestoreDocs")
          .subscribe( async (response: any) => {
      this.aulasAbertas = await response.aulasAbertasUrls; 
      this.aulasPilulas = await response.aulasPilulasUrls;
      // console.log(response.aulasAbertasUrls) //retorna certinho a lista
  
      this.slidesAberta = this.aulasAbertas.map((item: any) => ({
        src: item
      }));
  
      this.slidesPilula = this.aulasPilulas.map((item: any) => ({
        src: item
      }));
      
      console.log(this.slidesAberta) //demora pra retornar por ser async
      // console.log(this.aulasAbertas)
    });
  
  }
  }

