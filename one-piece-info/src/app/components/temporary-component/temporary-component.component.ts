import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

const GLOBAL_MATERIALS = [CommonModule];

@Component({
  selector: 'app-temporary-component',
  imports: [GLOBAL_MATERIALS],
  templateUrl: './temporary-component.component.html',
  styleUrl: './temporary-component.component.css'
})
export class TemporaryComponentComponent {
  
  charactersList: any[] = []; // Array empty para almacenar todos los datos

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getCharacters();
  }


  getCharacters() {
    // SUBSCRIBE() para coger la data que se recibe
    this.http.get("https://api.api-onepiece.com/v2/characters/en").subscribe((result: any) => {
      this.charactersList = result; // El valor de RESULT lo almacenamos en USERLIST
    });
  }
}
