import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-card-user',
  templateUrl: './card-user.component.html',
  styleUrls: ['./card-user.component.css'],
})
export class CardUserComponent {
  cards: any;

  constructor(private http: HttpClient) {
    this.cards = [];
  }

  ngOnInit(): void {
    this.http
      .get(
        'https://us-central1-squad13-7ae1e.cloudfunctions.net/getFirestoreDocs'
      )
      .subscribe((response: any) => {
        this.cards = response.cardsValidacao;
      });
  }
}
