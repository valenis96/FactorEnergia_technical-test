import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { users } from 'src/assets/public/data';
import { User } from 'src/assets/public/models';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-personal-data',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatListModule, MatCardModule, MatDialogModule],
  templateUrl: './personal-data.component.html',
  styleUrl: './personal-data.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonalDataComponent {
  user$!: Observable<User>;

  constructor(private readonly dialog: MatDialog, private store: Store<AppState>) { }

  ngOnInit(): void {
    // get user that is stored from the login
    this.user$ = this.store.select('user')
  }

  openDialog(): void {
    // open the dialog to edit the persona data
    this.dialog.open(EditDialogComponent);
  }
}
