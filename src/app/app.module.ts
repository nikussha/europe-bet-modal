import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CashgamesComponent } from './content/cashgames/cashgames.component';
import { FinalStageComponent } from './content/final-stage/final-stage.component';
import { SpringSeriesComponent } from './content/spring-series/spring-series.component';

@NgModule({
  declarations: [AppComponent, CashgamesComponent, FinalStageComponent, SpringSeriesComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
