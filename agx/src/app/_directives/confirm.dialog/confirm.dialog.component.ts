import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { GenericService } from '../../_services/generic.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-confirm.dialog',
  templateUrl: 'confirm.dialog.component.html',
  styles: ['confirm.dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {
  ngOnInit(): void {

  }

  constructor(public dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ConfirmModel) {
    
    switch (this.data.Type) {
      case ConfirmType.Delete:
        this.confirmButtonText = "Sil"
        data.Message = "Dikkat Kayıt Silinecek!!!";
        this.toolbarColor = "warn";
        break;
      case ConfirmType.Add:
        this.confirmButtonText = "Ekle";
        this.data.Message = "Kayıt Eklenecek"
        this.toolbarColor = "primary";
        
        break;
      case ConfirmType.Update:
        this.confirmButtonText = "Kaydet";
        this.confirmCancelButtonText = 
        this.data.Message = "Değişiklikler Kaydedilecek"
        this.toolbarColor = "primary";
        break;
      default:
        this.confirmButtonText = "Evet";
        this.confirmCancelButtonText = "Hayır"
    }
  }
  toolbarColor = "accent"
  confirmButtonText: string = "";
  confirmCancelButtonText = "Vazgeç";

  onNoClick(): void {
    this.dialogRef.close()
  }
  confirm(): void {
    this.dialogRef.close("1")
  }
}

export enum ConfirmType {
  Delete,
  Update,
  Add,
  Other
}

export class ConfirmModel {
  Title: string;
  Message: string;
  Type: ConfirmType;
}