import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableComponent } from './table.component';
import { MaterialModule } from '../material/material.module';
import { SortHeaderComponent } from '../sort-header/sort-header.component';
import { NoDataFoundComponent } from '../no-data-found/no-data-found.component';
import { NgxUiLoaderModule, SPINNER } from 'ngx-ui-loader';
import { SortableColumnDirective } from '../sort-header/sortable-column.directive';



@NgModule({
  declarations: [
    TableComponent,
    SortHeaderComponent,
    NoDataFoundComponent,
    SortableColumnDirective
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NgxUiLoaderModule.forRoot({
      fgsType: SPINNER.doubleBounce,
      fgsColor: "#aaaaaa",
      fgsSize: 80,
      overlayColor: "rgba(255,255,255,0.6)",
      hasProgressBar: false
    }),
  ],
  exports: [
    TableComponent,
    SortHeaderComponent,
    NoDataFoundComponent,
    SortableColumnDirective
  ],
  providers: [
  ]
})
export class TableModule { }
