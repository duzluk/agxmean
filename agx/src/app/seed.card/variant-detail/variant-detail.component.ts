import { Component, OnInit, Inject, Renderer } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { Variant, Season } from '../../_models';
import { GenericService } from '../../_services';
import { GenericDataSource } from '../../_helpers';
import { ConfirmModel, ConfirmType, ConfirmDialogComponent } from '../../_directives';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';

@Component({
  selector: 'app-variant-detail',
  templateUrl: './variant-detail.component.html',
  styleUrls: ['./variant-detail.component.scss'],
  providers: [GenericService]
})
export class VariantDetailComponent implements OnInit {

  variant: Variant;
  displayColumns = ['Season', 'Status', 'Action'];
  seasonDataSource: GenericDataSource | null;
  trialYearMask = [/[2]/, /[0]/, /[1-2]/, /\d/, '-', /[2]/, /[0]/, /[1-2]/, /\d/]

  numberMask = createNumberMask({
    prefix: '',
    suffix: '',
    integerLimit: 6,
    includeThousandsSeparator: false
  })

  constructor(
    public dialogRef: MatDialogRef<VariantDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Variant,
    private seedService: GenericService<Variant>,
    private dialog: MatDialog,
    private renderer: Renderer

  ) {
    
    this.variant = data;
    if (data.Seasons == undefined) {
      data.Seasons = Array<Season>();
      data.Seasons.push(new Season());
    }
    console.log(this.data.Seasons.length)
    this.seasonDataSource = new GenericDataSource(data.Seasons);

  }

  ngOnInit() {
  }




  onNoClick(): void {
    this.dialogRef.close();
  }

  submit() {

  }
  private isChanged: Boolean = false;
  modelChanged(event: any, index: number) {
    this.isChanged = true;
    console.log(this.data.Seasons.length - 1, index)
    if (this.data.Seasons.length - 1 == index) {
      this.data.Seasons.push(new Season());
      this.seasonDataSource.update(this.data.Seasons);
    }
  }


  public confirmAdd(): void {
    console.log("confirm")
    this.dialogRef.close("1");
  }

  keydownSeason(event, tag, index: number) {
    if (event.key == 'ArrowDown') {
      if (this.data.Seasons.length - 1 > index) {
        let element = '#' + tag + '-' + (index + 1)
        let onElement = this.renderer.selectRootElement(element);
        onElement.focus();
        this.rowClick(this.data.Seasons[index + 1], index + 1)
      }
    }
    if (event.key == 'ArrowUp') {
      if (index > 0) {
        let element = '#' + tag + '-' + (index - 1)
        let onElement = this.renderer.selectRootElement(element);
        onElement.focus();
        this.rowClick(this.data.Seasons[index - 1], index - 1)
      }
    }
  }

  selectedRowIndex: string;

  rowClick(row: any, index: number) {
    this.selectedRowIndex = row._id
    if (this.seasonDataSource.data().slice().length - 1 == index) {
      this.data.Seasons.push(new Season())
      this.seasonDataSource.update(this.data.Seasons);
    }
  }
  seasonRenew()
  {
    this.data.Seasons
  }

  deleteItem(index: number, data: any) {
    let deleteData = new ConfirmModel();
    deleteData.Title = data.Title;
    deleteData.Type = ConfirmType.Delete;

    let dialogRef = this.dialog.open(ConfirmDialogComponent, { data: deleteData })
    dialogRef.afterClosed().subscribe(result => {
      this.data.Seasons.splice(index, 1);
      this.seasonDataSource.update(this.data.Seasons);
    })
  }
}
