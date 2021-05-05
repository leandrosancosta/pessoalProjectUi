import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RemedyComponent } from './remedy.component';
import { CreateRemedyComponent } from './create/create.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RemedyComponent,
    CreateRemedyComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
    
  ],
  exports: [
    CreateRemedyComponent
  ]
})
export class RemedyModule { }
