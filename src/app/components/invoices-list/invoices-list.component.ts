import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/app.state';
import { Invoice } from 'src/assets/public/models';

@Component({
  selector: 'app-invoices-list',
  imports: [CommonModule, MatCardModule, MatListModule],
  templateUrl: './invoices-list.component.html',
  styleUrl: './invoices-list.component.scss',
})
export class InvoicesListComponent {
  invoices$!: Observable<Invoice[]>;
  @Output() changePDFEvent = new EventEmitter<number>();

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    // get invoices that is stored 
    this.invoices$ = this.store.select('invoices')
  }

  changePDF(id: number): void {
    // emit the event to change the pdf in the father component
    this.changePDFEvent.emit(id);
  }

}
