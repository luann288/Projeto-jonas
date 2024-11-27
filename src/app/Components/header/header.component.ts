import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { EsportesComponent } from '../pages/esportes/esportes.component';
import { InternacionaisComponent } from '../pages/internacionais/internacionais.component';
import { HomeComponent } from '../pages/home/home.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule,RouterOutlet, HomeComponent, EsportesComponent, InternacionaisComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
