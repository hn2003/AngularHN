import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  {
    component:HomeComponent,
    path:'home'
  },
  {
    component:AboutComponent,
    path:'about'
  },
  {
    component:ServicesComponent,
    path:'services'
  },
  {
    component:ContactComponent,
    path:'contact'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
