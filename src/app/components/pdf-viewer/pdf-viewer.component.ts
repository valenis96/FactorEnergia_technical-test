import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxExtendedPdfViewerModule, NgxExtendedPdfViewerService } from 'ngx-extended-pdf-viewer';
import { Invoice } from 'src/assets/public/models';
import { invoices } from 'src/assets/public/data';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';

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
  invoices: Invoice[] = invoices

  constructor(private pdfService: NgxExtendedPdfViewerService) { }

}
