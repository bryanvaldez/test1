import { NgModule } from '../../node_modules/@angular/core';
import {
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatListModule,
    MatCardModule,
    MatTooltipModule,
    MatDialogModule,
    MatTableModule
} from '@angular/material';

@NgModule({
  imports: [
      MatButtonModule,
      MatCheckboxModule,
      MatToolbarModule,
      MatIconModule,
      MatMenuModule,
      MatFormFieldModule,
      MatSelectModule,
      MatInputModule,
      MatListModule,
      MatCardModule,
      MatTooltipModule,
      MatDialogModule,
      MatTableModule
    ],
  exports: [
      MatButtonModule,
      MatCheckboxModule,
      MatToolbarModule,
      MatIconModule,
      MatMenuModule,
      MatFormFieldModule,
      MatSelectModule,
      MatInputModule,
      MatListModule,
      MatCardModule,
      MatTooltipModule,
      MatDialogModule,
      MatTableModule
    ],
})

export class MaterialModule { }
