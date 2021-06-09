import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { GamecontrolComponent } from './gamecontrol/gamecontrol.component';
import { OddComponent } from './odd/odd.component';
import { EvenComponent } from './even/even.component';
import { BasicHighlight } from './BasicDirectives/basic-higlight.directive';
import { ActiveTogglerComponent } from './active-toggler/active-toggler.component';
import { InactiveTogglerComponent } from './inactive-toggler/inactive-toggler.component';
import { UserData } from './Services/UserData';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    CockpitComponent,
    GamecontrolComponent,
    OddComponent,
    EvenComponent,
    BasicHighlight,
    ActiveTogglerComponent,
    InactiveTogglerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [UserData],
  bootstrap: [AppComponent]
})
export class AppModule { }
