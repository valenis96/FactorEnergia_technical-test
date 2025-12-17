import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { user } from 'src/assets/public/data';
import { User } from 'src/assets/public/models';

@Component({
  selector: 'app-personal-data',
  standalone: true,
  imports: [MatListModule],
  templateUrl: './personal-data.component.html',
  styleUrl: './personal-data.component.scss'
})
export class PersonalDataComponent {
  user: User = user

}
