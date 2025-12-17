import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-private-page',
  standalone: true,
  imports: [MatButtonModule, RouterModule],
  templateUrl: './private-page.component.html',
  styleUrl: './private-page.component.scss'
})
export class PrivatePageComponent {
  name: string = 'Valentina'
}
