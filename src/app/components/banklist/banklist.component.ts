import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import {MatSort, Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { BankdetailsService } from '../../providers/bankdetails.service';;
import { Router } from '@angular/router';

export interface PeriodicElement {
  name: string;
  type:string;
  paymentFileFormate:string;
  subsidiary:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
];

@Component({
  selector: 'app-banklist',
  templateUrl: './banklist.component.html',
  styleUrls: ['./banklist.component.css']
})
export class BanklistComponent implements OnInit {

  displayedColumns: string[] = ['name','type','paymentFileFormate','subsidiary','edit','remove'];
  dataSource = new MatTableDataSource(this.bankdetailsService.getBankdetails());

  constructor(private _liveAnnouncer: LiveAnnouncer,private bankdetailsService:BankdetailsService,private router:Router) {}

  @ViewChild(MatSort)
  sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  ngOnInit(): void {
  }

  navEditItem(id:number){
    this.router.navigate(['bank/edit',id])
  }

  navViewItem(id:number){
    this.router.navigate(['bank/view',id])
  }

}
