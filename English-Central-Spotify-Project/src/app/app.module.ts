import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RedirectComponent } from './component/redirect/redirect.component';
import { LoginComponent } from './component/login/login.component';
import { HomepageComponent } from './component/homepage/homepage.component';
import { TrackComponent } from './component/track/track.component';
// import { AppStateService } from './app-state.service';

@NgModule({
  declarations: [
    AppComponent,
    RedirectComponent,
    LoginComponent,
    HomepageComponent,
    TrackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  // providers: [
  //   AppStateService
  // ],
  bootstrap: [AppComponent]
})
export class AppModule { }
