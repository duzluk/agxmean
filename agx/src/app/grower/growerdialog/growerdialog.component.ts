import { Component, OnInit, Inject } from '@angular/core';
import { GrowerModel } from '../../_models/GrowerModel';
import { PersonModel } from '../../_models/PersonModel';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { GenericService } from '../../_services/generic.service';
import { environment } from '../../../environments/environment';
import { SelectionModel } from '@angular/cdk/collections';
import { GenericDataSource } from '../../_helpers';
import { EnumsMock } from '../../_services';


@Component({
  selector: 'app-growerdialog',
  templateUrl:'growerdialog.component.html',
  styleUrls: ['growerdialog.component.css'],
  providers:[GenericService,EnumsMock]
})
export class GrowerDialogComponent implements OnInit {

  variantColumns = ['select','Code', 'Title'];
  personColumns= ['select','FirstName', 'LastName'];
  dataSource :GenericDataSource|null;
  personDataSource:GenericDataSource|null;
  //selectionVariant = new SelectionModel<VariantModel>(true, []);
  selectionPerson = new SelectionModel<PersonModel>(true, []);
  //variants:VariantModel[]=[];
  persons:PersonModel[]=[];
  public telNoMask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]

  public grower=new GrowerModel();
  trCodes:string[];
  formOfProduct:string[];
  regions:string[];

  constructor(
      public dialogRef:MatDialogRef<GrowerDialogComponent>,
      @Inject(MAT_DIALOG_DATA)  public data:GrowerModel ,
      private dataService:GenericService<GrowerModel>,
      private personService:GenericService<PersonModel>,
      private enumsMock:EnumsMock
  ) {  
    this.trCodes=enumsMock.getGrowerTrCode();
    this.formOfProduct=enumsMock.getGrowerFormOfProduction();
    this.regions=enumsMock.getRegion();
   }

  ngOnInit() {

    this.personService.url=`${environment.URLRestFullApi}/persons`

    this.personService.getAll()
      .subscribe(response=>{
        this.persons=response;
        this.personDataSource=new GenericDataSource(this.persons);
        if(this.data._id!=undefined)
        {
          this.personSelect()
        }
      });
    
      // this.variantService.url = `${environment.URLRestFullApi}/variants`;
      //           this.variantService.getAll()
      //             .subscribe(response => {
      //               this.variants = response;
      //               this.dataSource = new GenericDataSource(this.variants);
      //               if(this.data._id!=undefined)
      //               {
      //                 this.variantSelect()
      //               }
      //             })
  }

////   -------   Form Methods   -------   ///


  onNoClick():void{
    this.dialogRef.close();
  }


  public confirmAdd():void{
    // this.data.Variants=[];
    // this.selectionVariant.selected
    //   .forEach(row=>{
    //     this.data.Variants.push(row._id)
    //   })
      this.data.Persons=[];
      this.selectionPerson.selected
        .forEach(row=>{
          this.data.Persons.push(row._id)
        })
    this.dataService.url=`${environment.URLRestFullApi}/grower`
    if(this.data._id==undefined)
    {
    this.dataService.insert(this.data)
      .subscribe(response=>{
        this.data._id=response._id;
        this.dialogRef.close("1")
      });
    }
    else
    {
      this.dataService.update(this.data)
        .subscribe(Response=>{
          this.dialogRef.close("1");
        })
    }
  }

  // ////  ----   Product Table Methods   ----   ////

  // variantSelect(){
  //   console.log(this.data.Variants)
  //   this.data.Variants.forEach(row=>{

  //     console.log(this.variants.find(v=>v._id==row))
  //     this.selectionVariant.select(this.variants.find(v=>v._id==row));
  //   })
  // }

  // isVariantAllSelected() {
  //   const numSelected = this.selectionVariant.selected.length;
  //   const numRows = this.variants.length;
  //   return numSelected === numRows;
  // }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  // masterToggleVariant() {
  //   this.isVariantAllSelected() ?
  //       this.selectionVariant.clear() :
  //       this.dataSource.data().forEach(row =>{ 
  //         this.selectionVariant.select(row)
  //       });
  // }

  ////// - Persons Tab  Select Methods -  //////

  personSelect(){
    console.log('Persons')
    console.log(this.data.Persons)
    this.data.Persons.forEach(row=>{
      console.log('SelectPerson:',this.persons.find(p=>p._id==row))
      this.selectionPerson.select(this.persons.find(p=>p._id==row));
    })
  }

  isPersonAllSelected() {
    const numSelected = this.selectionPerson.selected.length;
    const numRows = this.persons.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterTogglePerson() {
    this.isPersonAllSelected() ?
        this.selectionPerson.clear() :
        this.personDataSource.data().forEach(row =>{ 
          this.selectionPerson.select(row)
        });
  }

}
