
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LineChartComponent } from './line-chart/line-chart.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [

    LineChartComponent

  ],
  exports: [
    LineChartComponent
  ]
})
export class LncModule { }