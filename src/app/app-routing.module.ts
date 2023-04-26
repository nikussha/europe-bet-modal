import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CashgamesComponent } from './content/cashgames/cashgames.component';
import { FinalStageComponent } from './content/final-stage/final-stage.component';
import { SpringSeriesComponent } from './content/spring-series/spring-series.component';

const routes: Routes = [
  { path: 'cashgames', component: CashgamesComponent },
  { path: 'spring-series', component: SpringSeriesComponent },
  { path: 'final-stage', component: FinalStageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
