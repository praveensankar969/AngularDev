import { Component, EventEmitter, OnInit, Output, ViewEncapsulation } from '@angular/core';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
  //encapsulation: ViewEncapsulation.None
})
export class CockpitComponent implements OnInit {
  newServerName = '';
  newServerContent = '';
  @Output() serverDetail= new EventEmitter<{serverName :string, serverContent:string}>();
  @Output() bluePrintDetail= new EventEmitter<{serverName :string, serverContent:string}>();
  constructor() { }


  ngOnInit(): void {
  }

  onAddServer() {
    this.serverDetail.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent
    });
  }

  onAddBlueprint() {
    this.bluePrintDetail.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent
    });
  }
}
