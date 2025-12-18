import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { provideAnimations } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    imports: [CommonModule, MatFormFieldModule, ReactiveFormsModule, MatInputModule, FormsModule, MatCardModule, MatButtonModule],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [provideAnimations()]
})
export class LoginComponent {
  private fb = inject(FormBuilder);
  loginForm = this.fb.group({
    email: [null, Validators.required],
    password: [null, Validators.required],
  });


  constructor(private router: Router,) { }


  submitForm(): void {
    this.router.navigate([`/private-page`]);
  }
}
