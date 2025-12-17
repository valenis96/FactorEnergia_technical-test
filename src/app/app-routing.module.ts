import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PdfViewerComponent } from './components/pdf-viewer/pdf-viewer.component';

const routes: Routes = [{ path: '', component: LoginComponent }, { path: 'pdfviewer', component: PdfViewerComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
