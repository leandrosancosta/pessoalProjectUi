import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Remedy } from './model/remedy.model';
import { RemedyService } from './service/remedy.service';

@Component({
  selector: 'lsc-remedy',
  templateUrl: './remedy.component.html',
  styleUrls: ['./remedy.component.scss']
})
export class RemedyComponent implements OnInit {

  remedyList: Remedy[];
  loading: boolean = false;

  constructor(
    private remedyService: RemedyService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.getAll();
  }

  goToCreate(): void{
    this.router.navigate(['remedy/create'])
  }


  getAll() {
    this.loading = true;
    this.remedyService.getRemedies().subscribe((data)=>{
      this.remedyList = data;
      this.remedyList.map((item)=>{
        let days = '';
        for(let i= 0; i < item.daysOfWeek.length; i++){
          switch(i){
            case 0:
              if(item.daysOfWeek[i] === "1")
                days += "DOM "
              break;
            case 1:
              if(item.daysOfWeek[i] === "1")
                days += "SEG "
              break;
            case 2:
              if(item.daysOfWeek[i] === "1")
                days += "TER "
              break;
            case 3:
              if(item.daysOfWeek[i] === "1")
                days += "QUA "
              break;
            case 4:
              if(item.daysOfWeek[i] === "1")
                days += "QUI "
              break;
            case 5:
              if(item.daysOfWeek[i] === "1")
                days += "SEX "
              break;
            case 6:
              if(item.daysOfWeek[i] === "1")
                days += "SAB"
              break;
          }
        }

        item.daysOfWeek = days;
        this.loading = false;
      })
      
    })
  }



  

}
