import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { GenericService } from '../../_services/generic.service';
import { environment } from '../../../environments/environment';
import { GenericDataSource } from '../../_helpers';


@Component({
  selector: 'app-select-dialog',
  templateUrl: './select-dialog.component.html',
  styleUrls: ['./select-dialog.component.css'],
  providers:[GenericService]
})
export class SelectDialogComponent implements OnInit {
  dataSource:GenericDataSource|null;
  displayedColumns=['Code','Title'];
  selectedRowIndex:string;
  selectedRow:any;
  constructor(
    public dialogRef: MatDialogRef<SelectDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any) { 
      this.dataSource=new GenericDataSource(data);
    }

  ngOnInit() {
    alert("hopp")
  }
  rowClick(row: any,index:number) {
    this.selectedRowIndex = row._id
    this.selectedRow = row;
  }

  confirm()
  {
    this.dialogRef._containerInstance=this.selectedRow;
    this.dialogRef.close();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
