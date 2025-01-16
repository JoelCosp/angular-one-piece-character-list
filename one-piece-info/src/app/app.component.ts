import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

// Componentes
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BannerComponent } from './components/banner/banner.component';
import { ContainerComponent } from './components/container/container.component';


const GLOBAL_MATERIALS = [RouterOutlet, HeaderComponent, FooterComponent, BannerComponent, ContainerComponent, CommonModule];

@Component({
  selector: 'app-root',
  imports: [GLOBAL_MATERIALS],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'one-piece-info';

  ngOnInit(): void {
    initFlowbite();
  }
}
