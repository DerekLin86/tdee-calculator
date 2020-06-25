import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalculatorComponent } from './calculator/calculator.component';
import { AppComponent } from './app.component';


const routes: Routes = [{
  path: 'calculator',
  pathMatch: 'full',
  component: CalculatorComponent
}, {
  path: '',
  redirectTo: 'calculator',
  pathMatch: 'full'
}, {
  path: '**',
  redirectTo: 'calculator'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
