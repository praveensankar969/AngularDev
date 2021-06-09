import { Component, OnInit } from '@angular/core';
import { UserData } from '../Services/UserData';


@Component({
  selector: 'app-active-toggler',
  templateUrl: './active-toggler.component.html',
  styleUrls: ['./active-toggler.component.css']
})
export class ActiveTogglerComponent implements OnInit {
  users: string[] = [];
  constructor(private user:UserData) { 
  }

  ngOnInit(): void {
    this.users = this.user.activeUsers;
  }
  

  onActiveToggle(username:string){
    this.user.ToggleInActive(username);
  }

}
