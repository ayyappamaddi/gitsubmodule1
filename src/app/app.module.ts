import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MicromoduleModule } from './micromodule/micromodule.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, MicromoduleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
