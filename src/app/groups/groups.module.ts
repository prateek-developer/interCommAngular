import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddGroupsComponent } from './components/add-groups/add-groups.component';
import { ShowGroupComponent } from './components/show-group/show-group.component';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDateSelectionModel, MatDatepickerModule } from '@angular/material/datepicker';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RouterModule, RouterLink } from '@angular/router';



@NgModule({
  declarations: [

    AddGroupsComponent,
    ShowGroupComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatOptionModule,
    RouterModule,
    MatCardModule,
    MatFormFieldModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    RouterLink,
    MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule,
   
 
  ]
})
export class GroupsModule { }
