import { OnInit } from "@angular/core";
import { Component } from "@angular/core";

@Component({
    selector: 'server-root',
    templateUrl: './server.component.html'
})
export class ServerComponent implements OnInit{
    allowNewServer = false;
    serverName="Test";
    serverStatus: string = "No servers are created";
    constructor(){
        setTimeout(() =>{
            this.allowNewServer= true;
        },2000);
    };

    ngOnInit() : void{
    }

    onServerAdd(){
        this.serverStatus= "New Server added! Server name is"+ this.serverName;
    }
}