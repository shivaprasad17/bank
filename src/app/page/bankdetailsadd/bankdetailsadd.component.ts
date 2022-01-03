import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators,FormBuilder, FormArray } from '@angular/forms';
import { BankdetailsService } from '../../providers/bankdetails.service';
import { ActivatedRoute ,Router} from '@angular/router';

@Component({
  selector: 'app-bankdetailsadd',
  templateUrl: './bankdetailsadd.component.html',
  styleUrls: ['./bankdetailsadd.component.css']
})
export class BankdetailsaddComponent implements OnInit {

  bankDetailsForm!: FormGroup;
  public notes!: FormArray;
  constructor(private fb: FormBuilder,
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
      type:['',Validators.compose([Validators.required])],
      inActive:['1'],
      notes:this.fb.array([])
    }); 

  }

  initNotes(e:any): FormGroup {
    return this.fb.group({
      title: e.title,
      memo: e.memo,
      date: e.date,
      time: e.time,
      type: e.type,
      direction:e.direction,
      id:Date.now()
    });
  }

  addNotes(e:any): void {
    this.notes = this.bankDetailsForm.get('notes') as FormArray;
    this.notes.push(this.initNotes(e));
  }

  deleteNotes(i:number):void{
    this.notes.removeAt(i)
  }

  submitBankDetails(e:any){
    this.bankdetailsService.bankDetails.push({...this.bankDetailsForm.value,id:Date.now()});
    this.router.navigate(['/bank/list'])
  }



}
