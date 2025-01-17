import { Component } from '@angular/core';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

const GLOBAL_MATERIAL = [CommonModule, RouterModule];

@Component({
  selector: 'app-container',
  imports: [GLOBAL_MATERIAL],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {
  public guide_sections = [
    { "name": "Sagas", "url": "https://sm.ign.com/ign_es/screenshot/default/maxresdefault_cjw2.jpg", "path": "/sagas" },
    { "name": "Arcos", "url": "https://i.blogs.es/951c46/one-piece/1366_2000.jpeg", "path": "/arcs" },
    { "name": "Frutas del diablo", "url": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0a35f264-3ed1-46a3-9555-d19956182563/dfaga9w-a1d6c3ea-f58e-4cd0-b130-f44e36664c1d.png/v1/fill/w_816,h_979/bara_bara_no_mi_chop_chop_fruit_by_lekabao_dfaga9w-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTUzNiIsInBhdGgiOiJcL2ZcLzBhMzVmMjY0LTNlZDEtNDZhMy05NTU1LWQxOTk1NjE4MjU2M1wvZGZhZ2E5dy1hMWQ2YzNlYS1mNThlLTRjZDAtYjEzMC1mNDRlMzY2NjRjMWQucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.vvLzaZjX8Tqm1a0wRIOBxeLj8dB_J45-6Araygtc3LE", "path": "/diable-fruits" },
    { "name": "Diales", "url": "https://pm1.aminoapps.com/6792/8f9a28411901deaa29669439b474022d8c49c87fv2_00.jpg", "path": "/dials" },
    { "name": "Películas", "url": "https://static.posters.cz/image/1300/posters/one-piece-red-full-crew-i149550.jpg", "path": "/films" },
    { "name": "Espadas", "url": "https://cdn.alfabetajuega.com/alfabetajuega/2023/10/enma-roronoa-zoro.jpg", "path": "/swords" },
    { "name": "Hakis", "url": "https://preview.redd.it/haki-visible-vs-for-viewer-debate-v0-uqx8a5kam3wa1.jpg?width=1080&crop=smart&auto=webp&s=80652811174200d261d9b63bc147fd210f003296", "path": "/hakis" },
    { "name": "Tripulaciones", "url": "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2021/02/Header-2.jpg", "path": "/crews" },
    { "name": "Personajes", "url": "https://i.pinimg.com/736x/f8/0f/a6/f80fa60930114225cb85df6fc2f5882e.jpg", "path": "/characters" },
    { "name": "Barcos", "url": "https://i.pinimg.com/originals/e3/26/35/e326350b5bd3de6ee7021290bea80b10.png", "path": "/ships" },
    { "name": "Localizaciones", "url": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5851f423-3ac3-4eef-88d5-2be0fc69382b/dfrh10w-20f49c9e-26a3-492c-9f65-b82f711150d4.png/v1/fill/w_1280,h_720,q_80,strp/one_piece_laugh_tale_eternal_pose_by_mdwyer5_dfrh10w-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvNTg1MWY0MjMtM2FjMy00ZWVmLTg4ZDUtMmJlMGZjNjkzODJiXC9kZnJoMTB3LTIwZjQ5YzllLTI2YTMtNDkyYy05ZjY1LWI4MmY3MTExNTBkNC5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.sZW9oOuYTiEpJf4nnD0aFdEcGwV0KWtvIUBkgojbl6I", "path": "/locations" }
  ];
}
