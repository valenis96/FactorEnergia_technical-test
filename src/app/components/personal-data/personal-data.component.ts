import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { users } from 'src/assets/public/data';
import { User } from 'src/assets/public/models';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';

@Component({
  selector: 'app-personal-data',
  imports: [MatButtonModule, MatListModule, MatCardModule, MatDialogModule],
  templateUrl: './personal-data.component.html',
  styleUrl: './personal-data.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonalDataComponent {
  users: User[] = users;

  constructor(private readonly dialog: MatDialog) { }

  openDialog(): void {
    this.dialog.open(EditDialogComponent);
  }

}
