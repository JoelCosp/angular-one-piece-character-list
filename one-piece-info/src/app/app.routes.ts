import { Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { TemporaryComponentComponent } from './components/temporary-component/temporary-component.component';
import { CharactersContComponent } from './components/characters-cont/characters-cont.component';
import { BowsContComponent } from './components/bows-cont/bows-cont.component';
import { DevilfruitsContComponent } from './components/devilfruits-cont/devilfruits-cont.component';
import { HakisContComponent } from './components/hakis-cont/hakis-cont.component';

export const routes: Routes = [
    {path:'', component: HomeComponent },
    {path:'sagas', component: TemporaryComponentComponent },
    {path:'arcs', component: BowsContComponent },
    {path:'devil-fruits', component: DevilfruitsContComponent },
    {path:'dials', component: TemporaryComponentComponent },
    {path:'films', component: TemporaryComponentComponent },
    {path:'swords', component: TemporaryComponentComponent },
    {path:'hakis', component: HakisContComponent },
    {path:'crews', component: TemporaryComponentComponent },
    {path:'characters', component: CharactersContComponent },
    {path:'ships', component: TemporaryComponentComponent },
    {path:'locations', component: TemporaryComponentComponent },
    /* 
    ESTE PATH SIEMPRE DEBE IR AL FINAL
    Al tener el **, coincide con cualquier path, asi que si esta
    encima del todo, al recorrer el array coincidira con la ruta del 
    boton que se este pulsando.
    */
    {path:'**', redirectTo: '', pathMatch: 'full' }
];
