import { Component, OnInit, Renderer, Inject } from '@angular/core';
import { GenericDataSource } from '../../_helpers';
import { FieldInfo } from '../../_directives/generic-field/FieldInfo';
import { GenericService } from '../../_services';
import { MatDialog, MatSnackBar, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ObservationHead } from '../../_models/ObservationHeadModel';
import { environment } from '../../../environments/environment';
import { ConfirmType, ConfirmDialogComponent } from '../../_directives';

@Component({
  selector: 'app-observation-definition-dialog',
  templateUrl: './observation-definition-dialog.component.html',
  styleUrls: ['./observation-definition-dialog.component.scss']
})
export class ObservationDefinitionDialogComponent implements OnInit {

  dataSource:GenericDataSource|null;
  displayedColumns = ['Action', 'Type', 'Caption',  'Value'];

  /*
  Type: string;
    Caption: string;
    Value: any;
    Options?: string[];
    Masked?:string;
    Size?:number;
  */
 type = ['Text','TextArea','Number', 'Option', 'CheckBox','Datepicker','Slide-Toggle','Telephone'];

  constructor(
    public dialogRef: MatDialogRef<ObservationDefinitionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ObservationHead,
    private obsService: GenericService<ObservationHead>,
    private dialog: MatDialog,
    private renderer: Renderer,
    private snackBar:MatSnackBar
  ) { 
    console.log(data.GenericFields);
    if(data.GenericFields.length==0)
    {
      this.data.GenericFields.push(new FieldInfo());
    }
    this.dataSource=new GenericDataSource(data.GenericFields);
  }

  ngOnInit() {
  }


  onNoClick(): void {
    this.dialogRef.close();
  }

  submit() {

  }



  public confirmAdd(): void {

    this.data.GenericFields = this.data.GenericFields.filter(gf => gf.Caption != undefined && gf.Type!=undefined);

    this.obsService.url = `${environment.URLRestFullApi}/observationhead`
    if (this.data._id == undefined) {
      this.obsService.insert(this.data)
        .subscribe(response => {
          this.data._id = response._id;
          this.dialogRef.close("1")
        });
    }
    else {
      this.obsService.update(this.data)
        .subscribe(Response => {
          this.dialogRef.close("1")
        })
    }
  }



  selectedRowIndex: string = "";

  rowClick(row: any, index: number) {
    this.selectedRowIndex = row._id

    if (index == this.dataSource.data().slice().length - 1) {
      let newRow = new FieldInfo()
      this.data.GenericFields.push(newRow);
      this.dataSource.update(this.data.GenericFields);
    }
  }
  keydown(event, tag, index: number) {
    if (event.key == 'ArrowDown') {
      if (this.data.GenericFields.length - 1 > index) {
        let element = '#' + tag + '-' + (index + 1)
        let onElement = this.renderer.selectRootElement(element);
        onElement.focus();
        this.rowClick(this.data.GenericFields[index + 1], index + 1)
      }
    }
    if (event.key == 'ArrowUp') {
      if (index > 0) {
        let element = '#' + tag + '-' + (index - 1)
        let onElement = this.renderer.selectRootElement(element);
        onElement.focus();
        this.rowClick(this.data.GenericFields[index - 1], index - 1)
      }
    }
  }

  onModelChange(element: FieldInfo, tag: string) {
    console.log(element);
    if(element.Type=='Option')
    {
      element.Options=element.Value.split(",");
    }
  }

  validateRow(element: FieldInfo): boolean {
    console.log(element);
    if (element.Type != undefined && element.Caption != undefined)
      return true;
    else
      return false;
  }


  deleteItem(index: number, data: FieldInfo) {
    const deleteData = { "Title": data.Caption, "Message": "Dikkat Kayıt silinecektir!!!", "Type": ConfirmType.Delete }
    const type = ConfirmType.Delete;
    let dialogRef = this.dialog.open(ConfirmDialogComponent, { data: deleteData })
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result == "1") {

           this.snackBar.open('Kayıt Silindi...', '', { duration: 3000, });
            this.data.GenericFields.splice(index, 1);
            this.dataSource.update(this.data.GenericFields);
      }
    })
  }




}
