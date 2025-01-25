import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

const GLOBAL_MATERIALS = [CommonModule];

@Component({
  selector: 'app-hakis-cont',
  imports: [GLOBAL_MATERIALS],
  templateUrl: './hakis-cont.component.html',
  styleUrl: './hakis-cont.component.css'
})
export class HakisContComponent {
  hakisList: any[] = []; // Array empty para almacenar todos los datos

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getHakis();
  }

  getHakis() {
    // SUBSCRIBE() para coger la data que se recibe
    this.http.get("https://api.api-onepiece.com/v2/hakis/en").subscribe((result: any) => {
      this.hakisList = result; // El valor de RESULT lo almacenamos en USERLIST
    });
  }
}
