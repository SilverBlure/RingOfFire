import { Component } from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';
import { MatFormField } from '@angular/material/form-field';
import { MatLabel } from '@angular/material/form-field';


@Component({
  selector: 'app-dialog-add-player',
  standalone: true,
  imports: [MatDialogModule, MatFormField, MatLabel],
  templateUrl: './dialog-add-player.component.html',
  styleUrl: './dialog-add-player.component.scss'
})
export class DialogAddPlayerComponent {


  name: string = "";

  onNoClick(){
    
  }
}
