import { Component, OnInit } from '@angular/core';
import { PersonModel } from '../_models/PersonModel';
import { GenericService } from '../_services/generic.service';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Rx'
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { DataSource } from '@angular/cdk/collections';
import { MatDialog } from '@angular/material';
import { PersonDialogComponent } from '../person/persondialog/persondialog.component';
import { ConfirmDialogComponent, ConfirmType } from '../_directives/confirm.dialog/confirm.dialog.component';
import { LoginViewModel } from '../_models/LoginViewModel';
import { GenericDataSource } from '../_helpers';

@Component({
  selector: 'app-person',
  templateUrl:'person.component.html',
  styleUrls: ['person.component.css'],
  providers:[GenericService]
})
export class PersonComponent implements OnInit {
  displayedColumns = ['FirstName', 'LastName','GsmNr','EMail','actions'];
  dataSource:GenericDataSource|null;
  persons:PersonModel[];
  personModel:PersonModel=new PersonModel();

  constructor(
      private personService:GenericService<PersonModel>,
      public dialog: MatDialog) 
  { 
    this.personService.url=`${environment.URLRestFullApi}/persons`;
    this.personService.getAll()
      .subscribe(response=>{
        this.persons=response;
        this.dataSource=new GenericDataSource(this.persons);
      });
  }


  ngOnInit() {
  }

  onSubmit()
  {
    this.personService.url=`${environment.URLRestFullApi}/person`
    this.personService.insert(this.personModel)
      .subscribe(response=>{
        console.log(response);
      });
  }
  addNew():void
  {
    let person=new PersonModel();
    let dialogRef=this.dialog.open(PersonDialogComponent,{data:person,disableClose: true})
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if(result=="1")
      {
        this.persons.push(person);
        this.dataSource.update(this.persons)
      } 
    });
  }

  editItem(index:number, data:PersonModel)
  {
    let person= Object.assign({}, data); /// clone object
    let dialogRef=this.dialog.open(PersonDialogComponent,{minWidth:'450px', data:person,disableClose: true})
    dialogRef.afterClosed().subscribe(result=>{
      if(result=="1")
      {
        this.persons[index]=person
        this.dataSource.update(this.persons)
      }
    })
  }
  deleteItem(index:number, data:PersonModel)
  { 
    console.log(data)
    const deleteData={"Title":data.FirstName+ ' ' +data.LastName ,"Message":"Dikkat Kayıt silinecektir!!!","Type":ConfirmType.Delete}
    const type=ConfirmType.Delete;
    let dialogRef=this.dialog.open(ConfirmDialogComponent,{data:deleteData})
    dialogRef.afterClosed().subscribe(result=>{
      console.log(result);
      if(result=="1")
      {
        console.log(data.FirstName +' silindi.')
        this.personService.url=`${environment.URLRestFullApi}/person/${data._id}`
        this.personService.delete()
          .subscribe(result=>{
            this.persons.splice(index,1);
            this.dataSource.update(this.persons);
          });
      }
    })
  }
}
