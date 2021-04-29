import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RemedyComponent } from './remedy.component';
import { CreateRemedyComponent } from './create/create.component';


@NgModule({
  declarations: [
    RemedyComponent,
    CreateRemedyComponent
  ],
  imports: [
    CommonModule,
    
  ],
  exports: [
    CreateRemedyComponent
  ]
})
export class RemedyModule { }
