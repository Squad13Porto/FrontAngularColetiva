import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-aulas',
  templateUrl: './aulas.component.html',
  styleUrls: ['./aulas.component.css']
})
export class AulasComponent {

  slideImgs: any;

  constructor(private http: HttpClient) {  }

  ngOnInit(): void {
    this.http.get("http://177.153.50.192:5001/squad13-7ae1e/us-central1/getFirestoreDocs")
      .subscribe((response: any) => {
        this.slideImgs = response.aulasAbertasUrls;
        console.log(typeof(this.slideImgs)) // retrona object
      });      
  }
}
