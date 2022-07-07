import { AppComponent } from './app.component';
import { RedirectComponent } from './component/redirect/redirect.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'app-component', component: AppComponent },
  { path: 'redirect-component', component: RedirectComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
