import { Component } from '@angular/core';
import { CompetitorModel } from '../_models/';
import { CompetitorDialogComponent } from './competitor-dialog/competitor-dialog.component';
import { GenericService } from '../_services/generic.service';
import { MatDialog } from '@angular/material';
import { environment } from '../../environments/environment';
import { ConfirmType, ConfirmDialogComponent } from '../_directives/confirm.dialog/confirm.dialog.component';
import { GenericDataSource } from '../_helpers';

@Component({
  selector: 'app-competitor',
  templateUrl: './competitor.component.html',
  styleUrls: ['./competitor.component.css']
})
export class CompetitorComponent  {

  displayedColumns = ['Title','Incharge','TelNrs1','District','City','actions'];
  dataSource:GenericDataSource|null;
  competitors:CompetitorModel[]=[];
  competitorModel=new CompetitorModel();
 

  constructor(
      private competitorService:GenericService<CompetitorModel>,
      public dialog: MatDialog
  ) { 
    //let userName=localStorage.getItem("username");
    this.competitorService.url=`${environment.URLRestFullApi}/competitors`
    this.competitorService.getAll()
      .subscribe(response=>{
        this.competitors=response;
        this.dataSource=new GenericDataSource(this.competitors);
      });

  }

  onSubmit()
  {
    this.competitorService.url=`${environment.URLRestFullApi}/competitor`
    this.competitorService.insert(this.competitorModel)
      .subscribe(response=>{
        console.log(response);
      });
  }
  addNew():void
  {
    let competitor=new CompetitorModel();
    let dialogRef=this.dialog.open(CompetitorDialogComponent
      ,{data:competitor,disableClose: true})
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if(result=="1")
      {
        this.competitors.push(competitor);
        this.dataSource.update(this.competitors)
      } 
    });
  }

  editItem(index:number, data:CompetitorModel)
  {
    let competitor= Object.assign({}, data); /// clone object
    let dialogRef=this.dialog.open(CompetitorDialogComponent,{data:competitor,disableClose: true})
    
    dialogRef.afterClosed().subscribe(result=>{
      if(result=="1")
      {
        this.competitors[index]=competitor
        this.dataSource.update(this.competitors)
      }
    })
  }
  deleteItem(index:number, data:CompetitorModel)
  { 
    const deleteData={"Title":data.Title ,"Message":"Dikkat Kayıt silinecektir!!!","Type":ConfirmType.Delete}
    const type=ConfirmType.Delete;
    let dialogRef=this.dialog.open(ConfirmDialogComponent,{data:deleteData})
    dialogRef.afterClosed().subscribe(result=>{
      console.log(result);
      if(result=="1")
      {
        console.log(data.Title +' silindi.')
        this.competitorService.url=`${environment.URLRestFullApi}/competitor/${data._id}`
        this.competitorService.delete()
          .subscribe(result=>{
            this.competitors.splice(index,1);
            this.dataSource.update(this.competitors);
          });
      }
    })
  }
}