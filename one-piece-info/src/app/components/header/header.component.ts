import { Component } from '@angular/core';

import { RouterModule } from '@angular/router';

const GLOBAL_MATERIALS = [RouterModule];

@Component({
  selector: 'app-header',
  imports: [GLOBAL_MATERIALS],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
