import { OnInit } from "@angular/core";
import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit{
    @Input('elementServer') element : any = {
        type: '', 
        name: '',
        content:''
    };
    constructor(){}

    ngOnInit() : void{
    }

    
    
}