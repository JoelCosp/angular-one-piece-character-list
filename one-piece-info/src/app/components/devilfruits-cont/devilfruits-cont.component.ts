import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

const GLOBAL_MATERIALS = [CommonModule];

@Component({
  selector: 'app-devilfruits-cont',
  imports: [GLOBAL_MATERIALS],
  templateUrl: './devilfruits-cont.component.html',
  styleUrl: './devilfruits-cont.component.css'
})
export class DevilfruitsContComponent {
  devilFruitList: any[] = []; // Array empty para almacenar todos los datos

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getDevilFruits();
  }

  getDevilFruits() {
    // SUBSCRIBE() para coger la data que se recibe
    this.http.get("https://api.api-onepiece.com/v2/fruits/en").subscribe((result: any) => {
      this.devilFruitList = result; // El valor de RESULT lo almacenamos en USERLIST
    });
  }
}
