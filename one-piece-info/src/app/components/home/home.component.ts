import { Component } from '@angular/core';

import { BannerComponent } from '../banner/banner.component';
import { ContainerComponent } from '../container/container.component';

const GLOBAL_MATERIALS = [BannerComponent, ContainerComponent];

@Component({
  selector: 'app-home',
  imports: [GLOBAL_MATERIALS],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
