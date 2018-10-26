import { NgModule } from '@angular/core';
import {MatIconModule, MatButtonModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule
  ],
exports: [
  MatIconModule,
  MatButtonModule
]
})
export class MaterialModule { }
