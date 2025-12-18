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
import { users } from 'src/assets/public/data';
import { User } from 'src/assets/public/models';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [CommonModule, MatFormFieldModule, ReactiveFormsModule, MatInputModule, FormsModule, MatCardModule, MatButtonModule,],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  private _snackBar = inject(MatSnackBar);
  private fb = inject(FormBuilder);
  loginForm = this.fb.group({
    email: [null, Validators.required],
    password: [null, Validators.required],
  });

  constructor(private router: Router, private store: Store<AppState>) { }

  submitForm(): void {
    const user = this.getUserFromForm();
    if (user) {
      this.store.dispatch(SetUserAction({ data: user }));
      this.router.navigate([`/private-page`]);
    } else {
      this._snackBar.open("Wrong credentials", "Close");
    }

  }

  getUserFromForm(): User | undefined {
    const { email, password } = this.loginForm.getRawValue();

    if (!email || !password) {
      return undefined;
    }

    return users.find(
      user => user.email === email && user.password === password
    );
  }

}
