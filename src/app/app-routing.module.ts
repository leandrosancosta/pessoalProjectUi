import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateRemedyComponent } from './components/remedy/create/create.component';
import { RemedyComponent } from './components/remedy/remedy.component';

const routes: Routes = [
  {path:'remedy', component: RemedyComponent},
  {path:'remedy/create', component: CreateRemedyComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
