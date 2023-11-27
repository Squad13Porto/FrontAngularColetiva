import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  public currentText: string = 'Arquitetura';
  public fadeClass: string = '';

  private texts: string[] = ['Arquitetura', 'Eng. Civil', 'Design de Interiores'];
  private currentIndex: number = 0;

  ngOnInit() {
    setInterval(() => {
      // Adiciona a classe 'text-fade' para começar a transição de desaparecimento
      this.fadeClass = 'text-fade';
      setTimeout(() => {
        // Muda o texto após a transição de desaparecimento
        this.currentIndex = (this.currentIndex + 1) % this.texts.length;
        this.currentText = this.texts[this.currentIndex];

        // Remove a classe 'text-fade' para o novo texto aparecer com transição
        this.fadeClass = '';
      }, 300); // Este timeout deve ser igual ao tempo de transição
    }, 2200); // Intervalo de tempo entre as transições completas
  }
}
