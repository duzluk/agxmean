import { Component, OnInit } from '@angular/core';
import { GenericDataSource } from '../_helpers';
import { LoginViewModel, Authority } from '../_models';
import { ConfirmType, ConfirmDialogComponent } from '../_directives';
import { environment } from '../../environments/environment';
import { GenericService } from '../_services';
import { MatDialog, MatSnackBar } from '@angular/material';
import { UserDialogComponent } from './user-dialog/user-dialog.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [GenericService]
})
export class UserComponent implements OnInit {

  displayedColumns = ['FirstName', 'LastName', 'GsmNr', 'EMail', 'actions'];
  dataSource: GenericDataSource | null;
  users: LoginViewModel[];
  userModel: LoginViewModel = new LoginViewModel();
  constructor(
    private userService: GenericService<LoginViewModel>,
    public dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {
    this.userService.url = `${environment.URLRestFullApi}/users`;
    this.userService.getAll()
      .subscribe(response => {
        this.users = response;
        this.dataSource = new GenericDataSource(this.users);
      });
  }


  ngOnInit() {
  }

  onSubmit() {
    this.userService.url = `${environment.URLRestFullApi}/user`
    this.userService.insert(this.userModel)
      .subscribe(response => {
        console.log(response);
      });
  }


  addNew(): void {
    let user = new LoginViewModel();
    user.Authority=new Authority();
    user.Authority.Modules=[];
    user.Authority.Persons=[];
    let dialogRef = this.dialog.open(UserDialogComponent, {
      data: user,
      disableClose: true
    })
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result == "1") {
        this.users.push(user);
        this.dataSource.update(this.users)
      }
    });
  }

  editItem(index: number, data: LoginViewModel) {
    let user = Object.assign({}, data); /// clone object
    let dialogRef = this.dialog.open(UserDialogComponent, { data: user, disableClose: true })
    dialogRef.afterClosed().subscribe(result => {
      if (result == "1") {
        this.users[index] = user
        this.dataSource.update(this.users)
      }
    })
  }



  deleteItem(index: number, data: LoginViewModel) {
    console.log(data)
    const deleteData = { "Title": data.FirstName + ' ' + data.LastName, "Message": "Dikkat Kayıt silinecektir!!!", "Type": ConfirmType.Delete }
    const type = ConfirmType.Delete;
    let dialogRef = this.dialog.open(ConfirmDialogComponent, { data: deleteData })
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result == "1") {

        this.userService.url = `${environment.URLRestFullApi}/user/${data._id}`
        this.userService.delete()
          .subscribe(result => {
            console.log(data.FirstName + ' silindi.')
            this.snackBar.open('Kayıt Silindi...', '', { duration: 3000, });
            this.users.splice(index, 1);
            this.dataSource.update(this.users);
          });
      }
    })
  }
}
