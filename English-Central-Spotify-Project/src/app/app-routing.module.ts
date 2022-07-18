import { LoginComponent } from './component/login/login.component';
import { AppComponent } from './app.component';
import { RedirectComponent } from './component/redirect/redirect.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'redirect', component: RedirectComponent },
  { path: 'login', component: LoginComponent}
  //NEED TO CREATE A PATH FOR LOGIN COMPONENT (deniz)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
