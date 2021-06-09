import { Component, OnInit } from '@angular/core';
import { UserData } from '../Services/UserData';

@Component({
  selector: 'app-inactive-toggler',
  templateUrl: './inactive-toggler.component.html',
  styleUrls: ['./inactive-toggler.component.css']
})
export class InactiveTogglerComponent implements OnInit {
  users: string[] = [];
  constructor(private user:UserData) { 
  }

  ngOnInit(): void {
    this.users = this.user.inactiveUsers;
    console.log(this.users);
  }
  
  

  onInActiveToggle(username:string){
    this.user.ToggleActive(username);
    console.log(this.users);
  }

}
