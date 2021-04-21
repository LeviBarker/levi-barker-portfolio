import { AppRoutingModule } from './app-routing.module';
import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {FlexLayoutModule} from '@angular/flex-layout';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTabsModule} from '@angular/material/tabs';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { PortfolioCardComponent } from './core/components/portfolio-card/portfolio-card.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import { MarkdownModule } from 'ngx-markdown';
import { ArticleComponent } from './pages/article/article.component';
import { HomeComponent } from './pages/home/home.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PortfolioCardComponent,
    ArticleComponent,
    HomeComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatTabsModule,
    MatMenuModule,
    MatSidenavModule,
    MatTooltipModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    FontAwesomeModule,
    MatListModule,
    FlexLayoutModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    HttpClientModule,
    MarkdownModule.forRoot({
      loader: HttpClient
    })
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
