import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxExtendedPdfViewerModule, NgxExtendedPdfViewerService } from 'ngx-extended-pdf-viewer';
import { Invoice } from 'src/assets/public/models';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { Subscription, take } from 'rxjs';
import { AppState } from 'src/app/app.state';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-pdf-viewer',
  standalone: true,
  imports: [CommonModule, NgxExtendedPdfViewerModule, MatListModule, MatCardModule],
  templateUrl: './pdf-viewer.component.html',
  styleUrls: ['./pdf-viewer.component.scss'],
  providers: [NgxExtendedPdfViewerService,],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PdfViewerComponent {
  invoices!: Invoice[];
  openedInvoice!: Invoice;
  private subs = new Subscription();

  constructor(private pdfService: NgxExtendedPdfViewerService, private store: Store<AppState>) { }

  ngOnInit(): void {
    this.subs.add(this.store.select('invoices')
      .pipe(take(1))
      .subscribe((i: Invoice[]) => {
        if (!i) return;
        this.invoices = i
      }));

    this.openedInvoice = this.invoices[0]
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
