import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { SetUserAction } from 'src/app/store/actions/user.action';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [CommonModule, MatFormFieldModule, ReactiveFormsModule, MatInputModule, FormsModule, MatCardModule, MatButtonModule,],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  private fb = inject(FormBuilder);
  loginForm = this.fb.group({
    email: [null, Validators.required],
    password: [null, Validators.required],
  });


  constructor(private router: Router, private store: Store<AppState>,) { }


  submitForm(): void {
    this.store.dispatch(SetUserAction({
      data: {
        name: "Valentina Maronese",
        email: 'val.maronese@gmail.com',
        date: '23/10/2025',
        address: 'via Domenico Scarlatti 33',
        password: '123'
      }
    }));
    this.router.navigate([`/private-page`]);
  }
}
