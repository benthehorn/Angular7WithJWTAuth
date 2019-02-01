import { Component, OnInit } from '@angular/core';
import { EntryService } from '../entry.service';
import { MatDialog } from '@angular/material';
import { UpdateEntryComponent } from '../update-entry/update-entry.component';

@Component({
  selector: 'app-entires',
  templateUrl: './entires.component.html',
  styleUrls: ['./entires.component.css']
})
export class EntiresComponent implements OnInit {

  entries: any;
  constructor(private service: EntryService,
              private dialog: MatDialog) { }

  ngOnInit() {
    this.service.getAll().subscribe((data) => {
      this.entries = data;
    });
  }

  updateEntry(entry) {
    console.log(entry);
    this.dialog.open(UpdateEntryComponent, {
      data: {
        Id: entry.Id,
        Description: entry.Description,
        IsExpense: entry.IsExpense,
        Value: entry.Value
      }
    });
  }

}
