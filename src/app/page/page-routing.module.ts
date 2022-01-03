import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BankdetailsaddComponent } from './bankdetailsadd/bankdetailsadd.component';
import { BanklistpageComponent } from './banklistpage/banklistpage.component';
import { BankeditpageComponent } from './bankeditpage/bankeditpage.component';
import { BankviewpageComponent } from './bankviewpage/bankviewpage.component'

const routes: Routes = [
    {path:'bank/add', component:BankdetailsaddComponent},
    {path:'bank/list',component:BanklistpageComponent},
    {path:'bank/edit/:id',component:BankeditpageComponent},
    {path:'bank/view/:id',component:BankviewpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule { }
