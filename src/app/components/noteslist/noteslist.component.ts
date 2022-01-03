import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { FormGroup, FormControl, Validators,FormBuilder, FormArray } from '@angular/forms';
import { DatePipe} from '@angular/common';

const ELEMENT_DATA = [
  {title:'test',memo:'memo test',date:'12/9/2021',time:'9:00 AM',type:'',direction:''},
];

@Component({
  selector: 'app-noteslist',
  templateUrl: './noteslist.component.html',
  styleUrls: ['./noteslist.component.css']
})
export class NoteslistComponent implements OnInit {
  displayedColumns: string[] = ['title','memo','date','time','type','direction','options'];
  dataSource = ELEMENT_DATA;
  addNewNotes:boolean=false;
  @Input()
  bankdetails!: FormGroup;
  notesForm!: FormGroup;
  @Output() addNotes = new EventEmitter<any>();
  @Output() deleteNotes = new EventEmitter<any>();

  constructor(private fb: FormBuilder,
    private datePipe:DatePipe) { }

  ngOnInit(): void {
    this.notesForm=this.fb.group({
      title:[''],
      memo:['',Validators.compose([Validators.required])],
      date:[''],
      time:[''],
      type:[''],
      direction:['']
    })
  }
  addNotesForm(){
    let date=new Date();
    this.notesForm.patchValue({
      date:this.datePipe.transform(date,'dd-MM-yyyy'),
      time:this.datePipe.transform(date,'HH:mm'),
    })
    this.addNewNotes=true
  }
  closeNotes(){
    this.addNewNotes=false;
    this.notesForm.reset();
  }
  submitNotes(){
   this.addNotes.emit(this.notesForm.value)
   this.closeNotes()
  }
  cancelNotes(el:any){
    let index=this.bankdetails.value.notes.findIndex((n:any)=>n.id===el.id);
    this.deleteNotes.emit(index)
  }

}
