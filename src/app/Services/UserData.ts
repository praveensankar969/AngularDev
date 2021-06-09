import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class UserData {
   activeUsers: string[] = ["User1", "User 3"];
   inactiveUsers: string[] = ["User 2", "User 4"];


   ToggleActive(user: string) {
      var index = this.inactiveUsers.indexOf(user, 0);
      var delUser = this.inactiveUsers[index];
      this.inactiveUsers.splice(index, 1);
      this.activeUsers.push(delUser);
      console.log("active users: "+this.activeUsers);
   }

   ToggleInActive(user: string) {
      var index = this.activeUsers.indexOf(user, 0);
      var delUser = this.activeUsers[index];
      this.activeUsers.splice(index, 1);
      this.inactiveUsers.push(delUser);
      console.log("inactive users: "+this.inactiveUsers);
   }
}