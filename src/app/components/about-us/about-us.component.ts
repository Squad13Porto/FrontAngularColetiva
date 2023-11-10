import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {

  cards: any;

  constructor(private http: HttpClient) { }
  
  ngOnInit(): void {
    this.http.get("http://177.153.50.192:5001/squad13-7ae1e/us-central1/getFirestoreDocs")
      .subscribe((response: any) => {
        this.cards = response.cardsEquipe;
      });
  }

  
}
