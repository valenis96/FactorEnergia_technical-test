import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PrivatePageComponent } from './components/private-page/private-page.component';
import { PdfViewerComponent } from './components/pdf-viewer/pdf-viewer.component';
import { PersonalDataComponent } from './components/personal-data/personal-data.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'private-page', component: PrivatePageComponent },
  { path: 'pdfviewer', component: PdfViewerComponent },
  { path: 'personal-data', component: PersonalDataComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
