import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-collaborator',
  templateUrl: './card-collaborator.component.html',
  styleUrls: ['./card-collaborator.component.css']
})
export class CardCollaboratorComponent {
  @Input('collaboratorName') collaboratorName!: string;  
  @Input('description') description!: string;
  @Input('src') src!: string;
}
