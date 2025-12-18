import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/app.state';
import { User } from 'src/assets/public/models';

@Component({
  selector: 'app-private-page',
  standalone: true,
  imports: [CommonModule, MatButtonModule, RouterModule],
  templateUrl: './private-page.component.html',
  styleUrl: './private-page.component.scss'
})
export class PrivatePageComponent {
  user$!: Observable<User>;

  constructor(private store: Store<AppState>) { }


  ngOnInit(): void {
    this.user$ = this.store.select('user')
  }
}
