import { Component, HostListener, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Remedy } from '../model/remedy.model';
declare var $: any

@Component({
  selector: 'lsc-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateRemedyComponent implements OnInit {

  remedyForm: Remedy;
  daysOfWeek: string[] = ['0', '0', '0', '0', '0', '0', '0']
  schedules: string[] = [];

  constructor() {
    this.remedyForm = new Remedy();
    
   }

  ngOnInit(): void {

  }
  onSubmit(remForm: NgForm) {
    this.remedyForm.daysOfWeek = this.daysOfWeek.toString().replace(/,/g, '');
  }

  addHour(event){
    if(event != null || event != undefined)
      this.schedules.push(event);
  }

  @HostListener('click', ['$event'])
  dayClick(event) {
    if (!event.target.className.includes("day"))
      return;
    let day = event.target.id;
    let IsActived: boolean = $(`#${day}`)[0].classList.toString().includes('actived');
    if (IsActived)
      $(`#${day}`).removeClass('actived')
    else
      $(`#${day}`).addClass("actived")

    let index = $(`#${day}`)[0].attributes.value.value;

    this.daysOfWeek[index] = IsActived ? '0' : '1';
  }

  disabledButton(): boolean{
    return !(this.remedyForm.quantityDay > 0 || (this.remedyForm.quantityDay > 0 && (this.remedyForm.quantityDay >= this.schedules.length)));
  }

}
