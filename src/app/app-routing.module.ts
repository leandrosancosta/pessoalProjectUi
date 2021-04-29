import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RemedyComponent } from './components/remedy/remedy.component';

const routes: Routes = [
  {path:'remedy', component: RemedyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
