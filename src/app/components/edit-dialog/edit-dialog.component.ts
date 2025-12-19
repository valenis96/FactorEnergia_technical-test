import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Store } from '@ngrx/store';
import { Subscription, take } from 'rxjs';
import { AppState } from 'src/app/app.state';
import { SetUserAction } from 'src/app/store/actions/user.action';
import { User } from 'src/assets/public/models';

@Component({
  selector: 'app-edit-dialog',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatDialogModule, MatFormFieldModule, ReactiveFormsModule, MatInputModule, MatInputModule],
  templateUrl: './edit-dialog.component.html',
  styleUrl: './edit-dialog.component.scss'
})
export class EditDialogComponent {
  user!: User
  private fb = inject(FormBuilder);
  editForm = this.fb.nonNullable.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    address: ['', Validators.required],
  });
  private subs = new Subscription();

  constructor(private readonly dialog: MatDialogRef<EditDialogComponent>, private store: Store<AppState>) { }

  ngOnInit(): void {
    // get the user data and put it in the form
    this.subs.add(this.store.select('user')
      .pipe(take(1))
      .subscribe((u: User) => {
        if (!u) return;
        this.user = u

        this.editForm.patchValue({
          name: u.name,
          email: u.email,
          address: u.address,
        });
      }));
  }

  changeData(): void {
    // get the new form value and put it in the store to edit the personal data
    const editedUser: User = {
      ...this.user,
      ...this.editForm.value,
    };
    this.store.dispatch(SetUserAction({ data: editedUser }));

    this.dialog.close();
  }

  cancel(): void {
    this.dialog.close();
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
