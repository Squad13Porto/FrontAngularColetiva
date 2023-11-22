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
    this.http.get("https://us-central1-squad13-7ae1e.cloudfunctions.net/getFirestoreDocs")
      .subscribe((response: any) => {
        this.cards = response.cardsEquipe;
      });
  }

  
}
