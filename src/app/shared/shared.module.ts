import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { FilterComponent } from './filter/filter.component';
import { SearchComponent } from './search/search.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ],
  declarations: [
    FilterComponent,
    SearchComponent
  ],
  exports: [
    FilterComponent,
    SearchComponent
  ]
})
export class SharedModule { }
