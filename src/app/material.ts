import { NgModule } from '@angular/core';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule, MatPseudoCheckboxModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatProgressBarModule } from '@angular/material/progress-bar'
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatGridListModule } from '@angular/material/grid-list';
@NgModule({
  imports: [MatNativeDateModule, MatDatepickerModule, MatIconModule, MatButtonModule, MatPseudoCheckboxModule, MatToolbarModule, FormsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatListModule, MatRadioModule, MatProgressBarModule, MatSnackBarModule, MatGridListModule],

  exports: [MatNativeDateModule, FormsModule,
    MatDatepickerModule, MatIconModule, MatButtonModule, MatCheckboxModule, MatToolbarModule, MatCardModule, MatFormFieldModule, MatInputModule, MatListModule, MatRadioModule, MatProgressBarModule, MatSnackBarModule, MatGridListModule],

})

export class MyMaterialModule { }
