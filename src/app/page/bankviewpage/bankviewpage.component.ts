import { Component, OnInit } from '@angular/core';
import { BankdetailsService } from '../../providers/bankdetails.service'
import { ActivatedRoute ,Router} from '@angular/router';

@Component({
  selector: 'app-bankviewpage',
  templateUrl: './bankviewpage.component.html',
  styleUrls: ['./bankviewpage.component.css']
})
export class BankviewpageComponent implements OnInit {
  id!:number;
  viewDetails!:any;
  constructor(private bankdetailsService:BankdetailsService,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe((params:any)=>{
      let id=+params.id
      this.id=id
      let bankdetails:any=this.bankdetailsService.getBankdetails()
      if(bankdetails && bankdetails.length){
        this.viewDetails=bankdetails.filter((bank: any)=>bank.id===id)[0]
      }
    })

  }

}
