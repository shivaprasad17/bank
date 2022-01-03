import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleoneComponent } from './titleone/titleone.component';
import { TitletwoComponent } from './titletwo/titletwo.component';
import { BankdetailsformComponent } from './bankdetailsform/bankdetailsform.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { BanklistComponent } from './banklist/banklist.component';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatIconModule} from '@angular/material/icon';
import { BankeditComponent } from './bankedit/bankedit.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { BankviewComponent } from './bankview/bankview.component';
import { NoteslistComponent } from './noteslist/noteslist.component';
import { DatePipe} from '@angular/common';


@NgModule({
  declarations: [
    TitleoneComponent,
    TitletwoComponent,
    BankdetailsformComponent,
    BanklistComponent,
    BankeditComponent,
    BankviewComponent,
    NoteslistComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatGridListModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    MatSortModule,
    MatIconModule,
    MatCheckboxModule
  ],
  exports:[
    TitleoneComponent,
    TitletwoComponent,
    BankdetailsformComponent,
    BanklistComponent,
    BankeditComponent,
    BankviewComponent,
    NoteslistComponent
  ],
  providers:[DatePipe]
})
export class ComponentsModule { }
