import { NgModule } from '@angular/core';
import {
  MatIconModule,
  MatButtonModule,
  MatSidenavModule,
  MatToolbarModule,
  MatInputModule,
  MatDatepickerModule,
  MatSelectModule,
  MatCardModule,
  MatListModule,
  MatRadioModule,
  MatCheckboxModule,
  MatDividerModule
}
  from '@angular/material';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatInputModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatSelectModule,
    MatCardModule,
    MatListModule,
    MatRadioModule,
    MatCheckboxModule,
    MatDividerModule
  ],
  exports: [
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatInputModule,
    MatDatepickerModule,
    MatSelectModule,
    MatCardModule,
    MatListModule,
    MatRadioModule,
    MatCheckboxModule,
    MatDividerModule
  ]
})
export class MaterialModule { }