import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroComponent } from './heroes/hero/hero.component';
import { CounterComponent } from './counter/counter.component';
import { ListComponent } from './heroes/list/list.component';

@NgModule({
  declarations: [AppComponent, HeroComponent, CounterComponent, ListComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
