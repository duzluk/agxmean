import { Component, OnInit, Inject, Renderer } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA,  MatDialog, MatSnackBar } from '@angular/material';
import { CompetitorModel, CompetitorProduct,  ProductDetail, SeedModel, Season } from '../../_models';
import { GenericService } from '../../_services';
import { environment } from '../../../environments/environment';
import { GenericDataSource } from '../../_helpers';
import { SeedInputDialogComponent, ConfirmType, ConfirmDialogComponent } from '../../_directives';

@Component({
  selector: 'app-competitor-dialog',
  templateUrl: './competitor-dialog.component.html',
  styleUrls: ['./competitor-dialog.component.scss'],
  providers: [GenericService]
})
export class CompetitorDialogComponent implements OnInit {
  public telNoMask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]

  constructor(
    public dialogRef: MatDialogRef<CompetitorDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CompetitorModel,
    private dataService: GenericService<CompetitorModel>,
    private seedModelService: GenericService<SeedModel>,
    public dialog: MatDialog,
    private renderer: Renderer,
    private snackBar: MatSnackBar
  ) {
    this.seedModelService.url = `${environment.URLRestFullApi}/seed`;

    this.seedModelService.getAll()
      .subscribe(response => {
        this.seedModels = response;
      },
        error => {
          console.log(error);
        }
      )
    if (data.Products.length == 0) {
      data.Products.push(new CompetitorProduct());
    }
    this.dataSource = new GenericDataSource(data.Products);
  }
  displayedColumns = ['Action', 'CategoryTitle', 'ProductTitle', 'Title'];
  dataSource: GenericDataSource | null;

  seedModel = new SeedModel();
  seedModels: SeedModel[] = [];
  productDetails: ProductDetail[] = [];
  productDetailModel = new ProductDetail();


  ngOnInit() {
  }


  onNoClick(): void {
    this.dialogRef.close();
  }


  public confirmAdd(): void {
    this.data.Products = this.data.Products.filter(p => p.Title != undefined);
    this.dataService.url = `${environment.URLRestFullApi}/competitor`
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
          this.dialogRef.close("1");
        })
    }
  }


  categorySelect(element: CompetitorProduct) {
    if (element.CategoryTitle == undefined || element.CategoryTitle.length == 0)
      element.CategoryTitle = '';
    let data = {
      rows: this.seedModels,
      columns: [
        { name: 'Ana Segment', prop: 'Title' }
      ],
      filterText: 'Filtre edeceğiniz ana segment adını giriniz...'
    }

    let dialogRef = this.dialog.open(SeedInputDialogComponent, { data: data, hasBackdrop: false, autoFocus: true })
    dialogRef.afterClosed().subscribe(result => {
      if (result == undefined) return;
      element.SeedId = result._id;
      element.CategoryTitle = result.Title;
      this.seedModel = result;
      this.productDetails = this.seedModel.ProductDetail;
    },
      error => {
        console.log(error);
      }
    )
  }


  rowClick(row: any, index: number) {
    console.log("rowclick");
    if (index == this.dataSource.data().slice().length - 1) {
      let newRow = new CompetitorProduct()
      this.data.Products.push(newRow);
      this.dataSource.update(this.data.Products);
    }
  }
  keydown(event, tag, index: number) {
    console.log(event.key)

    if (event.key == 'ArrowDown') {
      if (this.data.Products.length - 1 > index) {
        let element = '#' + tag + '-' + (index + 1)
        let onElement = this.renderer.selectRootElement(element);
        onElement.focus();
        this.rowClick(this.data.Products[index + 1], index + 1)
      }
    }
    if (event.key == 'ArrowUp') {
      if (index > 0) {
        let element = '#' + tag + '-' + (index - 1)
        let onElement = this.renderer.selectRootElement(element);
        onElement.focus();
        this.rowClick(this.data.Products[index - 1], index - 1)
      }
    }
  }


  productSelect(element: CompetitorProduct) {
    if (element.ProductTitle == undefined || element.ProductTitle.length == 0)
      element.ProductTitle = '';
    let data = {
      rows: this.productDetails,
      columns: [
        { name: 'Alt Segment', prop: 'Title' }
      ],
      filterText: 'Filtre edeceğiniz alt segment adını giriniz...'
    }

    let dialogRef = this.dialog.open(SeedInputDialogComponent, { data: data, hasBackdrop: false, autoFocus: true })
    dialogRef.afterClosed().subscribe(result => {
      if (result == undefined) return;
      element.ProductId = result._id;
      element.ProductTitle = result.Title;
      this.productDetailModel = result;
    },
      error => {
        console.log(error);
      }
    )
  }

  

  // productSeasonSelect(element:Product)
  // {
  //     let data = {
  //       rows: this.seedModels.find(s=>s._id==element.SeedId).ProductDetail.find(p=>p._id==element.ProductId).Seasons,
  //       columns: [
  //         { name: 'Segment', prop: 'Season' }
  //       ],
  //       filterText:'Filtre edeceğiniz segment adını giriniz...'
  //     }
  //     console.log(element);
  //     let dialogRef = this.dialog.open(SeedInputDialogComponent, { data: data, hasBackdrop: false, autoFocus: true })
  //     dialogRef.afterClosed().subscribe(result => {
  //       if (result == undefined) return;
  //       element["Detail"].Season=result.Season;
  //     },
  //       error => {
  //         console.log(error);
  //       }
  //     )
  // }

  deleteItem(index: number, data: CompetitorProduct) {
    const deleteData = { "Title": data.CategoryTitle + ' - ' + data.ProductTitle + ' - ' + data.Title, "Message": "Dikkat Kayıt silinecektir!!!", "Type": ConfirmType.Delete }
    const type = ConfirmType.Delete;
    let dialogRef = this.dialog.open(ConfirmDialogComponent, { data: deleteData })
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result == "1") {
        this.snackBar.open('Kayıt Silindi...', '', { duration: 3000, });
        this.data.Products.splice(index, 1);
        this.dataSource.update(this.data.Products);
      }
    })
  }

}
