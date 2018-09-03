import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { PersonModel } from '../../_models/PersonModel';
import { GenericService } from '../../_services/generic.service';
import { environment } from '../../../environments/environment';
import { SelectionModel } from '@angular/cdk/collections';
//import { VariantModel } from '../../_models/VariantModel';
import { LoginViewModel } from '../../_models/LoginViewModel';
import { EnumsMock } from '../../_services';


@Component({
  selector: 'app-persondialog',
  templateUrl: 'persondialog.component.html',
  styleUrls: ['./persondialog.component.css'],//
  providers: [GenericService,EnumsMock]
})
export class PersonDialogComponent implements OnInit {

  public person = new PersonModel();
  users: LoginViewModel[] = [];
  trCodes:string[];
  removable: boolean = true // kullanıcı silinebilsin (chip)
  public telNoMask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]

  constructor(
    public dialogRef: MatDialogRef<PersonDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PersonModel,
    private dataService: GenericService<PersonModel>,
    private enumsMock: EnumsMock
  ) {
    this.trCodes=enumsMock.getPersonTrCode();
  }



  ngOnInit() { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  submit() {

  }

  public confirmAdd(): void {
    this.dataService.url = `${environment.URLRestFullApi}/person`
    if (this.data._id == undefined) {
      this.dataService.insert(this.data)
        .subscribe(response => {
          this.data._id = response._id;
          this.dialogRef.close("1")
        });
    }
    else {
      this.dataService.update(this.data)
        .subscribe(Response => {
          console.log("person change");
          this.dialogRef.close("1")
        })
    }
  }
}
