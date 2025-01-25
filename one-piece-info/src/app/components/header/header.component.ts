import { Component } from '@angular/core';

import { RouterModule } from '@angular/router';
import { GBtnComponent } from '../g-btn/g-btn.component';

const GLOBAL_MATERIALS = [RouterModule, GBtnComponent];

@Component({
  selector: 'app-header',
  imports: [GLOBAL_MATERIALS],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
