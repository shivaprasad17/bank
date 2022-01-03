import { Component, OnInit , Input, EventEmitter, Output} from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-bankdetailsform',
  templateUrl: './bankdetailsform.component.html',
  styleUrls: ['./bankdetailsform.component.css']
})
export class BankdetailsformComponent implements OnInit {
  @Input()
  bankdetails!: FormGroup;
  @Input() 
  isEdit!: boolean;
  @Output() submitBankDetails = new EventEmitter<any>();

  types=['Type-1','Type-2'];
  paymentFileFormates=['ABA','ABB']
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
     this.submitBankDetails.emit(this.bankdetails)
  }

}
