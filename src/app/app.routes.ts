import { Routes } from '@angular/router';
import { HomeComponent } from './Components/pages/home/home.component';
import { BrasileiraComponent } from './Components/pages/brasileira/brasileira.component';
import { EsportesComponent } from './Components/pages/esportes/esportes.component';
import { InternacionaisComponent } from './Components/pages/internacionais/internacionais.component';
import { HeaderComponent } from './Components/header/header.component';

export const routes: Routes = [
    {path: '',
         component: HomeComponent},
    {path: 'esportes',
         component: EsportesComponent},
    {path: 'internacionais',
         component: InternacionaisComponent},
    {path: 'brasileira',
         component: BrasileiraComponent},
];