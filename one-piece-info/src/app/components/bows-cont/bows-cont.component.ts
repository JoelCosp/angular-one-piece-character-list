import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

const GLOBAL_MATERIALS = [CommonModule];

@Component({
  selector: 'app-bows-cont',
  imports: [GLOBAL_MATERIALS],
  templateUrl: './bows-cont.component.html',
  styleUrl: './bows-cont.component.css'
})
export class BowsContComponent {
  bowsList: any[] = []; // Array empty para almacenar todos los datos

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getBows();
  }

  getBows() {
    // SUBSCRIBE() para coger la data que se recibe
    this.http.get("https://api.api-onepiece.com/v2/arcs/en").subscribe((result: any) => {
      this.bowsList = result; // El valor de RESULT lo almacenamos en USERLIST
    });
  }
}
