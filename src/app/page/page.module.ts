import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BankdetailsaddComponent } from './bankdetailsadd/bankdetailsadd.component';
import { PageRoutingModule } from './page-routing.module';
import { ComponentsModule } from '../components/components.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BanklistpageComponent } from './banklistpage/banklistpage.component';
import { BankeditpageComponent } from './bankeditpage/bankeditpage.component';
import { BankviewpageComponent } from './bankviewpage/bankviewpage.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';


@NgModule({
  declarations: [
    BankdetailsaddComponent,
    BanklistpageComponent,
    BankeditpageComponent,
    BankviewpageComponent
  ],
  imports: [
    CommonModule,
    PageRoutingModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatButtonModule,
    MatTabsModule
  ]
})
export class PageModule { }
