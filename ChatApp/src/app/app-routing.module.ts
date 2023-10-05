import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';

const routes: Routes = [
  { path:'',component:HomeComponent},
  {path:'navbar',component:NavbarComponent},
  {path:'footer',component:FooterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
