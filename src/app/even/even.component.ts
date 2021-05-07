import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css']
})
export class EvenComponent implements OnInit {

  @Input() num:number=0;
  even:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  IsEven(){
    console.log(this.num);
    if(this.num %2 ===0){
      this.even = true;
    }
    else{ 
      this.even = false;
    }

    return this.even;
  }

 
}
