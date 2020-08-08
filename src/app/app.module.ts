import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ToolbarComponent, PlayGroundComponent } from './components';
import { EventHandlerDirective } from './directives';

import { BoxDataService } from './services';
@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    PlayGroundComponent,
    EventHandlerDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [BoxDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
