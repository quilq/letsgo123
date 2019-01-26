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
  MatDividerModule,
  MatGridListModule,
  MatExpansionModule,
  MatProgressBarModule,
  MatTabsModule
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
    MatGridListModule,
    MatDividerModule,
    MatExpansionModule,
    MatProgressBarModule,
    MatTabsModule
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
    MatGridListModule,
    MatDividerModule,
    MatExpansionModule,
    MatProgressBarModule,
    MatTabsModule
  ]
})
export class MaterialModule { }
