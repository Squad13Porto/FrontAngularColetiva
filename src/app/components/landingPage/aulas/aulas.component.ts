import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-aulas',
  templateUrl: './aulas.component.html',
  styleUrls: ['./aulas.component.css']
})


export class AulasComponent {
  aulasAbertas: any;
  aulasPilulas: any;
  
  
  constructor(private http: HttpClient) {  }
  slidesAberta = [
    {src: '../../../assets/images/reuniao.jpeg'},
    {src: '../../../assets/images/img-aula-aberta.png'},
    {src: '../../../assets/images/img-aula-pilula.png'},
    // {src: ''}
  ]

  slidesPilula = [
    {src: '../../../assets/images/reuniao.jpeg'},
    {src: '../../../assets/images/img-aula-aberta.png'},
    {src: '../../../assets/images/img-aula-pilula.png'},
    // {src: ''}
  ]

  
  ngOnInit(): void {
    this.http.get("https://us-central1-squad13-7ae1e.cloudfunctions.net/getFirestoreDocs")
    .subscribe((response: any) => {
      this.aulasAbertas = response.aulasAbertasUrls;  // retrona object
      this.aulasPilulas = response.aulasPilulasUrls;
      
      
      // this.slidesAberta = [...this.aulasAbertas.map((item: any) => ({
      //   src: item 
      // }))];

      // this.slidesPilula = [...this.aulasPilulas.map((item: any) => ({
      //   src: item 
      // }))];

      // console.log(this.slidesAberta)
      // console.log('////////////////')
      // console.log(this.slidesPilula)


    });      
}
 }
