import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { GenericDataSource } from '../../_helpers/datasource';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ProductDetail } from '../../_models';
import { tick } from '@angular/core/testing';


@Component({
  selector: 'app-seedinputdialog',
  templateUrl: './seedinputdialog.component.html',
  styleUrls: ['./seedinputdialog.component.css']
})
export class SeedInputDialogComponent implements OnInit {

  selectedRow: any;

  constructor(
    public dialogRef: MatDialogRef<SeedInputDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.temp = [...data.rows];

    // push our inital complete list
    this.rows = data.rows;
    if (this.rows.length > 0)
      this.selected = [this.rows[0]];

  }
  rows: any[];
  selected: any[];
  temp: any[];
  table = {
    offset: 0,
  };
  //   @ViewChild(DatatableComponent) table: DatatableComponent;

  columns = this.data.columns;
  placeholder = this.data.filterText;
  ngOnInit() {
    this.dialogRef.updateSize("500px","600px");
    console.log("hopppp");
  }


  onSelect({ selected }) {
    //console.log('Select Event', selected, this.selected);
    this.selectedRow = selected;
  }


  onActivate(event) {
    //console.log('Activate Event', event);
    if (event.event.type == "dblclick") {
      //console.log("çift tık")
      //this.selectedRow=event.row;  
      this.dialogRef._containerInstance = this.selectedRow;
      this.dialogRef.close();
    }
  }
  confirm() {
    this.dialogRef._containerInstance = this.selectedRow;
    this.dialogRef.close();
  }

  onNoClick(): void {
    this.dialogRef.close("-1");
  }

  index = 0;
  updateFilter(event) {
    const val = event.target.value.toLowerCase();


    if (event.key == 'ArrowDown') {
      if (this.rows.length - 1 > this.index) {
        this.index++;
      }
    }
    if (event.key == 'ArrowUp') {
      if (this.index > 0) {
        this.index--;
      }
    }


    // filter our data
    const temp = this.temp.filter(function (d) {
      if (d.Title != undefined)
        return d.Title.toLowerCase().indexOf(val) !== -1 || !val;
      else
        return d.ENumber.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.rows = temp;
    this.selected = [this.rows[this.index]];
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }
}

