import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateRemedyComponent } from './components/remedy/create/create.component';
import { RemedyComponent } from './components/remedy/remedy.component';

const routes: Routes = [
  {path:'remedy', component: RemedyComponent, children:[
    { path: 'create', component: CreateRemedyComponent, pathMatch: 'full' }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
