import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { LoginViewModel, PersonModel } from '../../_models';
import { GenericService } from '../../_services';
import { environment } from '../../../environments/environment';
import { Sidenav } from '../../_models/sidenav';
import { GenericDataSource } from '../../_helpers';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.css'],
  providers: [GenericService]
})
export class UserDialogComponent implements OnInit {

  public telNoMask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  persons: PersonModel[] = [];
  selectedPersons: PersonModel[] = [];
  person: string;

  constructor(
    public dialogRef: MatDialogRef<UserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: LoginViewModel,
    private dataService: GenericService<LoginViewModel>,
    private personService: GenericService<PersonModel>
  ) {
    this.sidenavItems=environment.Sidenav;
    this.menuDataSource = new GenericDataSource(this.sidenavItems)
    if (this.data._id != undefined) {
      this.menuSelect()
    }
    else
      this.data.Roll = "user";

  }

  ngOnInit() {
    this.personService.url = `${environment.URLRestFullApi}/persons`;
    this.personService.getAll()
      .subscribe(rest => {
        this.persons = rest.filter(p => this.data.Authority.Persons.indexOf(p._id) === -1);
        this.selectedPersons = rest.filter(p => this.data.Authority.Persons.indexOf(p._id) !== -1);

      });

  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  passwordChange = false;
  onModelChange(): void {
    this.passwordChange = true;
  }

  addPerson(select: PersonModel) {
    this.selectedPersons.push(select);
    this.persons = this.persons.filter(p => p._id != select._id);
    this.data.Authority.Persons.push(select._id);
  }
  removePerson(person: PersonModel) {
    this.persons.push(person);
    this.selectedPersons = this.selectedPersons.filter(p => p._id != person._id)
    this.data.Authority.Persons = this.data.Authority.Persons.filter(p => p != person._id);
    console.log(this.data);
  }

  public confirmAdd(): void {
    this.data.Authority.Modules = [];
    this.selectionMenu.selected
      .forEach(row => {
        console.log(row);
        this.data.Authority.Modules.push(row.id)
      })
    this.dataService.url = `${environment.URLRestFullApi}/user`
    if (this.data._id == undefined) {
      this.dataService.insert(this.data)
        .subscribe(response => {
          this.data._id = response._id;
          this.dialogRef.close("1")
        });
    }
    else {
      if (this.passwordChange)
        this.dataService.url = `${environment.URLRestFullApi}/userAndPassword`
      this.dataService.update(this.data)
        .subscribe(Response => {
          console.log("user change");
          this.dialogRef.close("1")
        })
    }
  }
  /////// Menu Yetkileri İle ilgili alanlar ve metodlar

  selectionMenu = new SelectionModel<Sidenav>(true, []);
  menuColumns = ['select', 'definition'];
  menuDataSource: GenericDataSource | null;
  sidenavItems: any[];


  menuSelect() {
    console.log('Menu')
    console.log(this.data.Authority)
    this.data.Authority.Modules.forEach(row => {
      console.log('SelectPerson:', this.sidenavItems.find(p => p.id == row))
      this.selectionMenu.select(this.sidenavItems.find(p => p.id == row));
    })
  }

  isMenuAllSelected() {
    const numSelected = this.selectionMenu.selected.length;
    const numRows = this.sidenavItems.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggleMenu() {
    this.isMenuAllSelected() ?
      this.selectionMenu.clear() :
      this.menuDataSource.data().forEach(row => {
        this.selectionMenu.select(row)
      });
  }
}
