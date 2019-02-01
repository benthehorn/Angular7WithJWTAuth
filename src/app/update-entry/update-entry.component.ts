import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Type } from '../interfaces/Type';
import { EntryService } from '../entry.service';

@Component({
  selector: 'app-update-entry',
  templateUrl: './update-entry.component.html',
  styleUrls: ['./update-entry.component.css']
})
export class UpdateEntryComponent implements OnInit {

  form: FormGroup;
  id: number;
  types: Type[] = [
    {value: true, display: 'Expense'},
    {value: false, display: 'Income'}
  ];

  constructor(private fb: FormBuilder,
              private service: EntryService,
              private dialogRef: MatDialogRef<UpdateEntryComponent>,
              @Inject(MAT_DIALOG_DATA) {Description, IsExpense, Value, Id}) {
                this.id = Id;
                this.form = fb.group({
                  description: [Description, Validators.required],
                  isExpense:[IsExpense, Validators.required],
                  value: [Value, Validators.required],
                })
               }

  ngOnInit() {
  }

  close() {
    this.dialogRef.close();
  }

  save() {
    this.form.value.id = this.id;
    console.log('In form : ', this.id);
    console.log(this.form.value);
    this.service.updateEntry(this.id, this.form.value).subscribe((data) => {
      console.log('Data : ', data);
    })
  }

}
