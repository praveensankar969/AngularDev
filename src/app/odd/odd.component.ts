import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit {

  @Input() num:number=0;
  odd:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  IsOdd(){
    
    if(this.num %2 ===0){
      this.odd = false;
    }
    else{ 
      this.odd = true;
    }

    return this.odd;
  }
}
