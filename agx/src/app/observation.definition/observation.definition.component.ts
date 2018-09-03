import { Component, OnInit } from '@angular/core';
import { GenericService } from '../_services';
import { GenericDataSource } from '../_helpers';
import { FieldInfo } from '../_directives/generic-field/FieldInfo';
import { MatDialog, MatSnackBar } from '@angular/material';
import { environment } from '../../environments/environment';
import { ObservationDefinitionDialogComponent } from './observation-definition-dialog/observation-definition-dialog.component';
import { ConfirmType, ConfirmDialogComponent } from '../_directives';
import { ObservationHead } from '../_models/ObservationHeadModel';

@Component({
  selector: 'app-observation.definition',
  templateUrl: './observation.definition.component.html',
  styleUrls: ['./observation.definition.component.css'],
  providers: [GenericService]
})
export class ObservationDefinitionComponent implements OnInit {

  dataSource:GenericDataSource|null;

  obsHeads: ObservationHead[] = [];
  obsHead:ObservationHead;
  displayedColumns = ['Action','Code','Name'];

  constructor(
    private obsHeadService: GenericService<ObservationHead>,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) { 

    obsHeadService.url=`${environment.URLRestFullApi}/observationheads`
    obsHeadService.getAll()
      .subscribe(response=>{
        console.log(response);
        this.obsHeads=response
        this.dataSource=new GenericDataSource(this.obsHeads);
      })
  }

  ngOnInit() {
  }


  onSubmit() {
    this.obsHeadService.url = `${environment.URLRestFullApi}/observationhead`
    this.obsHeadService.insert(this.obsHead)
      .subscribe(response => {
        console.log(response);
      });
  }
  addNew(): void {
    let obervationhead = new ObservationHead();
    let dialogRef = this.dialog.open(ObservationDefinitionDialogComponent, { 
      minWidth: '650px',
      minHeight:'400px',
      data: obervationhead, 
      disableClose: true })
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result == "1") {
        this.obsHeads.push(obervationhead);
        this.dataSource.update(this.obsHeads)
      }
    });
  }

  editItem(index: number, data: ObservationHead) {
    let obsHead = Object.assign({}, data); /// clone object
    let dialogRef = this.dialog.open(ObservationDefinitionDialogComponent, {
      minWidth: '650px',
      minHeight:'400px',
      data: obsHead, disableClose: true
    })
    dialogRef.afterClosed().subscribe(result => {
      if (result == "1") {
        this.obsHeads[index] = obsHead
        this.dataSource.update(this.obsHeads)
      }
    })
  }
  deleteItem(index: number, data: ObservationHead) {
    console.log(data)
    const deleteData = { "Title": data.Code + ' ' + data.Name, "Message": "Dikkat Kayıt silinecektir!!!", "Type": ConfirmType.Delete }
    const type = ConfirmType.Delete;
    let dialogRef = this.dialog.open(ConfirmDialogComponent, { data: deleteData })
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result == "1") {
        console.log(data.Name + ' silindi.')
        this.obsHeadService.url = `${environment.URLRestFullApi}/observationhead/${data._id}`
        this.obsHeadService.delete()
          .subscribe(result => {
            this.obsHeads.splice(index, 1);
            this.dataSource.update(this.obsHeads);
          });
      }
    })
  }
}
