import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements: any = [{type:'server',name:'ServerProd',content:'New server'}];
  
  onServerAdded(serverCreated:{serverName :string, serverContent:string}) {
    this.serverElements.push({
      type: 'server',
      name: serverCreated.serverName,
      content: serverCreated.serverContent
    });
  }

  onBlueprintAdded(bluePrintCreated:{serverName :string, serverContent:string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: bluePrintCreated.serverName,
      content: bluePrintCreated.serverContent
    });
  }
  
}
