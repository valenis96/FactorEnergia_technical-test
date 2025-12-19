import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { Invoice } from 'src/assets/public/models';
import { MatListModule } from '@angular/material/list';
import { map, Observable } from 'rxjs';
import { AppState } from 'src/app/app.state';
import { Store } from '@ngrx/store';
import { InvoicesListComponent } from '../invoices-list/invoices-list.component';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-pdf-viewer',
  standalone: true,
  imports: [CommonModule, NgxExtendedPdfViewerModule, MatListModule, InvoicesListComponent, MatCardModule],
  templateUrl: './pdf-viewer.component.html',
  styleUrls: ['./pdf-viewer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PdfViewerComponent {
  invoices$!: Observable<Invoice[]>;
  openedInvoice$!: Observable<Invoice | undefined>;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    // get invoices that is stored and get the first one as opened invoice
    this.invoices$ = this.store.select('invoices')
    this.openedInvoice$ = this.invoices$.pipe(map(invoices => invoices[0]))
  }

  changePDF(id: number): void {
    // get the clicked invoice from his id
    this.openedInvoice$ = this.invoices$.pipe(map(items => items.find(item => item.id === id)))
  }
}
