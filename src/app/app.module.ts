import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './containers/home/home.component';
import { ZoomCardComponent } from './components/zoom-card/zoom-card.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './containers/about/about.component';
import { InfoComponent } from './containers/info/info.component';
import { QuestionCardComponent } from './components/question-card/question-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ZoomCardComponent,
    HeaderComponent,
    AboutComponent,
    InfoComponent,
    QuestionCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
