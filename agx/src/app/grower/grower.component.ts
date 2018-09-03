import { Component } from '@angular/core';
import { GrowerModel } from '../_models/GrowerModel';
import { GenericService } from '../_services/generic.service';
import { MatDialog } from '@angular/material';
import { environment } from '../../environments/environment';
import { GrowerDialogComponent } from './growerdialog/growerdialog.component';
import { ConfirmType, ConfirmDialogComponent } from '../_directives/confirm.dialog/confirm.dialog.component';
import { GenericDataSource } from '../_helpers';

@Component({
  selector: 'app-grower',
  templateUrl:'grower.component.html',
  styleUrls: ['grover.component.css'],
  providers:[GenericService]
})
export class GrowerComponent  {

  displayedColumns = ['FirstName', 'LastName','GsmNr','City','District','actions'];
  dataSource:GenericDataSource|null;
  growers:GrowerModel[]=[];
  growerModel:GrowerModel=new GrowerModel();
 

  constructor(
      private growerService:GenericService<GrowerModel>,
      public dialog: MatDialog
  ) { 
    //let userName=localStorage.getItem("username");
    this.growerService.url=`${environment.URLRestFullApi}/growers`
    this.growerService.getAll()
      .subscribe(response=>{
        this.growers=response;
        this.dataSource=new GenericDataSource(this.growers);
      });

  }

  onSubmit()
  {
    this.growerService.url=`${environment.URLRestFullApi}/grower`
    this.growerService.insert(this.growerModel)
      .subscribe(response=>{
        console.log(response);
      });
  }
  addNew():void
  {
    let grower=new GrowerModel();
    let dialogRef=this.dialog.open(GrowerDialogComponent,{data:grower,disableClose: true})
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if(result=="1")
      {
        this.growers.push(grower);
        this.dataSource.update(this.growers)
      } 
    });
  }

  editItem(index:number, data:GrowerModel)
  {
    let grower= Object.assign({}, data); /// clone object
    let dialogRef=this.dialog.open(GrowerDialogComponent,{data:grower,disableClose: true})
    dialogRef.afterClosed().subscribe(result=>{
      if(result=="1")
      {
        this.growers[index]=grower
        this.dataSource.update(this.growers)
      }
    })
  }
  deleteItem(index:number, data:GrowerModel)
  { 
    const deleteData={"Title":data.FirstName+ ' ' +data.LastName ,"Message":"Dikkat Kayıt silinecektir!!!","Type":ConfirmType.Delete}
    const type=ConfirmType.Delete;
    let dialogRef=this.dialog.open(ConfirmDialogComponent,{data:deleteData})
    dialogRef.afterClosed().subscribe(result=>{
      console.log(result);
      if(result=="1")
      {
        console.log(data.FirstName +' silindi.')
        this.growerService.url=`${environment.URLRestFullApi}/grower/${data._id}`
        this.growerService.delete()
          .subscribe(result=>{
            this.growers.splice(index,1);
            this.dataSource.update(this.growers);
          });
      }
    })
  }
}
