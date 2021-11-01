import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainRoutingModule } from './main-routing.module';
import { OrderListService } from '../service/api/order-list.service';
import { TableModule } from '../table/table.module';
import { MaterialModule } from '../material/material.module';
import { ChartComponent } from './chart/chart.component';



@NgModule({
  declarations: [
    MainComponent,
    ChartComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MainRoutingModule,
    TableModule,
    MaterialModule
  ],
  exports: [
    MainComponent,
    ChartComponent
  ],
  providers: [
    OrderListService
  ]
})
export class MainModule { }
