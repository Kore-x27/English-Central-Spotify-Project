import { AppComponent } from './app.component';
import { RedirectComponent } from './component/redirect/redirect.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './component/homepage/homepage.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'redirect', component: RedirectComponent },
  { path: 'homepage', component: HomepageComponent },
  //NEED TO CREATE A PATH FOR LOGIN COMPONENT (deniz)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
