import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bankview',
  templateUrl: './bankview.component.html',
  styleUrls: ['./bankview.component.css']
})
export class BankviewComponent implements OnInit {
  @Input() viewDetails:any;
  constructor() { }

  ngOnInit(): void {
  }

}
