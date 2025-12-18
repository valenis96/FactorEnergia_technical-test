import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { Invoice } from 'src/assets/public/models';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { map, Observable } from 'rxjs';
import { AppState } from 'src/app/app.state';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-pdf-viewer',
  standalone: true,
  imports: [CommonModule, NgxExtendedPdfViewerModule, MatListModule, MatCardModule],
  templateUrl: './pdf-viewer.component.html',
  styleUrls: ['./pdf-viewer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PdfViewerComponent {
  invoices$!: Observable<Invoice[]>;
  openedInvoice$!: Observable<Invoice | undefined>;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.invoices$ = this.store.select('invoices')
    this.openedInvoice$ = this.invoices$.pipe(map(invoices => invoices[0]))
  }

  changePDF(id: number): void {
    this.openedInvoice$ = this.invoices$.pipe(map(items => items.find(item => item.id === id)))
  }
}
