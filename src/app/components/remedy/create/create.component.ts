import { Component, HostListener, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Remedy } from '../model/remedy.model';
import { RemedyService } from '../service/remedy.service';
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

  constructor(private remedyService: RemedyService, private titleService: Title, private router: Router) {
    this.remedyForm = new Remedy();
  }

  ngOnInit(): void {
    

  }
  onSubmit(remForm: NgForm) {
    if(!remForm.valid)
      return 

    this.remedyForm.daysOfWeek = this.daysOfWeek.toString().replace(/,/g, '');
    this.remedyForm.schedules = this.schedules.toString();

    this.remedyService.createRemedy(this.remedyForm).subscribe((data) => {
      if(data.status == 200)
      this.router.navigate(['/remedy']);
        
    })

  }

  addHour(event) {
    if (event != null && event != undefined && event != '')
      this.schedules.push(event);

    if (this.schedules.length == this.remedyForm.quantityDay)
      $("#hourModal").modal('hide')

  }

  teste(event) {
    console.log(event);
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

  disabledButton(): boolean {
    return !(this.remedyForm.quantityDay > 0 || (this.remedyForm.quantityDay > 0 && (this.remedyForm.quantityDay >= this.schedules.length)));
  }

}
