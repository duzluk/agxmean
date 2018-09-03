import { Component, OnInit, Inject, Renderer } from '@angular/core';
import { GenericDataSource } from '../../_helpers';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { Season, SeedModel } from '../../_models';
import { ConfirmModel, ConfirmType, ConfirmDialogComponent } from '../../_directives';
import { DataTablePagerComponent } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-season-dialog',
  templateUrl: './season-dialog.component.html',
  styleUrls: ['./season-dialog.component.scss']
})
export class SeasonDialogComponent implements OnInit {

  displayColumns = ['Season', 'Action'];
  seasonDataSource: GenericDataSource | null;
  constructor(
    public dialogRef: MatDialogRef<SeasonDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SeedModel,
    private dialog: MatDialog,
    private renderer: Renderer
  ) {
    if (this.data.Seasons == undefined)
      data.Seasons = []

    data.Seasons.push(new Season());
    this.seasonDataSource = new GenericDataSource(data.ProductDetail[0].Seasons);
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
    if (this.data.Seasons.length - 1 == index) {
      this.data.Seasons.push(new Season());
      this.seasonDataSource.update(this.data.Seasons);
    }
  }


  public confirmAdd(): void {

    this.data.Seasons = this.data.Seasons.filter(s => s.Season !="" );
    console.log(this.data.Seasons)
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
