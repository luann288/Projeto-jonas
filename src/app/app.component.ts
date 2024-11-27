import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './Components/header/header.component';
import { HomeComponent } from './Components/pages/home/home.component';
import { EsportesComponent } from './Components/pages/esportes/esportes.component';
import { InternacionaisComponent } from './Components/pages/internacionais/internacionais.component';
import { BrasileiraComponent } from './Components/pages/brasileira/brasileira.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, RouterOutlet,HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projeto';
}
