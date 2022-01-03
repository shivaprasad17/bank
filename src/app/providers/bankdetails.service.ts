import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BankdetailsService {
  bankDetails=[
    {id:1234,name: 'Chase',type:'Primary',paymentFileFormate:'ACH - CCD/PPD',subsidiary:'',countryCheck:'6',bankCode:'0032',processorCode:'0720',bban:'',bic:'',issuerNumber:'',parentPartner:'',billingSequenceType:'',dateOfReferenceMandate:'',referenceAmended:'',finalPaymentDate:'',numberOfPaymentsMade:3,firstPaymentDate:'12/12/2021',companyId:9086,signature:'',bankFeeCode:'9866',address1:'#12-5-2',address2:'SVN lane',address3:'WL',city:'HYD',swiftCode:'',state:'TS',zip:'506002',country:'India',bankNumber:'9087',bankAccountNumber:'5689237',bankAccountName:'Savings',branchName:'west US',branchNumber:'78900',parentCustomerRefund:''},
    {id:7890,name: 'DBS',type:'Primary',paymentFileFormate:'ACH - CCD/PPD',subsidiary:'',countryCheck:'6',bankCode:'0032',processorCode:'0720',bban:'',bic:'',issuerNumber:'',parentPartner:'',billingSequenceType:'',dateOfReferenceMandate:'',referenceAmended:'',finalPaymentDate:'',numberOfPaymentsMade:3,firstPaymentDate:'12/12/2021',companyId:9086,signature:'',bankFeeCode:'9866',address1:'#12-5-2',address2:'SVN lane',address3:'LYU',city:'HYD',swiftCode:'',state:'TS',zip:'506002',country:'India',bankNumber:'4568',bankAccountNumber:'65465654',bankAccountName:'Salary',branchName:'North US',branchNumber:'35468',parentCustomerRefund:''},
  ]
  constructor( private http :HttpClient) { }
   getBankdetails(){
    // return this.http.post('http://localhost:3000/bankdetails',{})
     return this.bankDetails
   }
   getBankdetailsById(id: number){
     return this.bankDetails.filter(bank=>bank.id===id).length>0?this.bankDetails.filter(bank=>bank.id=id)[0]:{}
   }
}
