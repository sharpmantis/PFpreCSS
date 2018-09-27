import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AjoutComponent } from './components/ajout/ajout.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { ResultatComponent } from './components/resultat/resultat.component';
import { AffichageComponent } from './components/affichage/affichage.component';
import { SemainierSecoursComponent } from './components/semainier-secours/semainier-secours.component';

@NgModule({
  declarations: [
    AppComponent,
    AjoutComponent,
    ResultatComponent,
    AffichageComponent,
    SemainierSecoursComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
