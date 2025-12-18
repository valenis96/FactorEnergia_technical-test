import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { user } from 'src/assets/public/data';
import { User } from 'src/assets/public/models';

@Component({
    selector: 'app-edit-dialog',
    imports: [CommonModule, MatButtonModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatInputModule],
    templateUrl: './edit-dialog.component.html',
    styleUrl: './edit-dialog.component.scss'
})
export class EditDialogComponent {
  user: User = user;
  private fb = inject(FormBuilder);
  editForm = this.fb.group({
    name: [null, Validators.required],
    email: [null, Validators.required],
    address: [null, Validators.required],
  });

  constructor(private readonly dialog: MatDialogRef<EditDialogComponent>) { }

  changeData(): void {
    this.dialog.close();
  }

  onNoClick(): void {
    this.dialog.close();
  }
}
