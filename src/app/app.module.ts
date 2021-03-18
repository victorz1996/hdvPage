import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PdfViewerModule } from 'ng2-pdf-viewer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EstudiosComponent } from './components/estudios/estudios.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SoportesComponent } from './components/soportes/soportes.component';
import { InformacionGeneralComponent } from './components/informacion-general/informacion-general.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';

@NgModule({
  declarations: [AppComponent, EstudiosComponent, SoportesComponent, InformacionGeneralComponent, ExperienciaComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    PdfViewerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
