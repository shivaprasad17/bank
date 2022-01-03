import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators,FormBuilder, FormArray } from '@angular/forms';
import { ActivatedRoute ,Router} from '@angular/router';
import { BankdetailsService} from '../../providers/bankdetails.service';

@Component({
  selector: 'app-bankeditpage',
  templateUrl: './bankeditpage.component.html',
  styleUrls: ['./bankeditpage.component.css']
})
export class BankeditpageComponent implements OnInit {

  bankDetailsForm!: FormGroup;
  id!: number;
  public notes!: FormArray;
  constructor(private fb: FormBuilder,
    private activatedRoute:ActivatedRoute,
    private bankdetailsService:BankdetailsService,
    private router:Router) {}

  ngOnInit() {
    this.bankDetailsForm = this.fb.group({
      name: ['', Validators.required],
      bankAccountNumber:['',Validators.compose([Validators.required])],
      bankAccountName:['',Validators.compose([Validators.required])],
      bankNumber:['',Validators.compose([Validators.required])],
      branchNumber:['',Validators.compose([Validators.required])],
      bankAccountPaymentDescription:['',Validators.compose([])],
      paymentFileFormat:['',Validators.compose([Validators.required])],
      type:[null,Validators.compose([Validators.required])],
      inActive:['0'],
      countryCheck:[''],
      bankCode:[''],
      processorCode:[''],
      notes:this.fb.array([])
    });

    this.activatedRoute.params.subscribe((params:any)=>{
      let id=+params.id
      this.id=id
      let bankdetails:any=this.bankdetailsService.getBankdetails()
      if(bankdetails && bankdetails.length){
        let editDetails=bankdetails.filter((bank: any)=>bank.id===id)[0]
        this.bankDetailsForm.patchValue({
          name:editDetails.name,
          bankNumber:editDetails.bankNumber,
          bankAccountNumber:editDetails.bankAccountNumber,
          branchNumber:editDetails.branchNumber,
          bankAccountName:editDetails.bankAccountName,
          type:editDetails.type,
          bankAccountPaymentDescription:editDetails.bankAccountPaymentDescription,
          paymentFileFormat:editDetails.paymentFileFormat,
          countryCheck:editDetails.countryCheck,
          bankCode:editDetails.bankCode,
          processorCode:editDetails.processorCode
        })
        this.bankDetailsForm.controls['countryCheck'].disable();
        this.bankDetailsForm.controls['bankCode'].disable();
        this.bankDetailsForm.controls['processorCode'].disable();
        let notesArry=this.bankDetailsForm.controls['notes'] as FormArray
        editDetails.notes && editDetails.notes.map((details:any,index:number)=>{
          notesArry.push(this.initNotes(details))
        })

        console.log(this.bankDetailsForm.value)
       
      }
    })
  }

  initNotes(e:any): FormGroup {
    return this.fb.group({
      title: e.title,
      memo: e.memo,
      date: e.date,
      time: e.time,
      type: e.type,
      direction:e.direction,
      id:e.id
    });
  }
  
  addNotes(e:any): void {
    this.notes = this.bankDetailsForm.get('notes') as FormArray;
    this.notes.push(this.initNotes(e));
  }

  deleteNotes(i:number):void{
    this.notes = this.bankDetailsForm.get('notes') as FormArray;
    this.notes.removeAt(i)
  }

  editBankDetails(e:any){
    let itemIndex=this.bankdetailsService.bankDetails.findIndex(bank=>bank.id===this.id)
    this.bankdetailsService.bankDetails[itemIndex]={...this.bankdetailsService.bankDetails[itemIndex],...this.bankDetailsForm.value}
    this.router.navigate(['bank/list'])
  }


}
