import { Component, OnInit, Inject, Renderer } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { SeedModel, ProductDetail, Variant, Season } from '../../_models/SeedModel';
import { GenericService } from '../../_services';
import { environment } from '../../../environments/environment';
import { GenericDataSource } from '../../_helpers/datasource';
import { ConfirmModel, ConfirmType, ConfirmDialogComponent } from '../../_directives/confirm.dialog/confirm.dialog.component';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import { VariantDetailComponent } from '../variant-detail/variant-detail.component';
import { ObservationHead } from '../../_models/ObservationHeadModel';
import { SeasonDialogComponent } from '../season-dialog/season-dialog.component';

@Component({
  selector: 'app-seedcarddialog',
  templateUrl: './seedcarddialog.component.html',
  styleUrls: ['./seedcarddialog.component.scss'],
  providers: [GenericService]
})

export class SeedCardDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<SeedCardDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SeedModel,
    private seedService: GenericService<SeedModel>,
    private obsHeadService: GenericService<ObservationHead>,
    private dialog: MatDialog,
    private renderer: Renderer
  ) {
    if (data._id == undefined) {
      data.Seasons = [];
      data.Seasons.push(new Season());
    }
    if (this.data.ProductDetail.length == 0) {
      this.data.ProductDetail = Array<ProductDetail>();
      let newProductDetail = new ProductDetail();
      newProductDetail.Variant = new Array<Variant>();
      newProductDetail.Variant.push(new Variant());
      newProductDetail.Seasons.push(...data.Seasons)
      data.ProductDetail.push(newProductDetail);

    }
    this.productDetail = data.ProductDetail[0];
    this.variant = this.productDetail.Variant[0];

    this.productDataSource = new GenericDataSource(data.ProductDetail);
    this.variantDataSource = new GenericDataSource(data.ProductDetail[0].Variant);
    this.seasonDataSource = new GenericDataSource(data.ProductDetail[0].Seasons);
    this.obsHeadService.url = `${environment.URLRestFullApi}/observationheads`
    this.obsHeadService.getAll()
      .subscribe(response => {
        this.obsHeadsForm = response.filter(obs => obs.Place == "form");
        this.obsHeadsTable = response.filter(obs => obs.Place == "table");
      })
  }
  numberMask = createNumberMask({
    prefix: '',
    suffix: '',
    integerLimit: 6,
    includeThousandsSeparator: false
  })

  productDataSource: GenericDataSource | null;
  variantDataSource: GenericDataSource | null;
  seasonDataSource: GenericDataSource | null;
  obsHeadDataSource: GenericDataSource | null;
  obsHeadsForm: ObservationHead[];
  obsHeadsTable: ObservationHead[];
  productDetail = new ProductDetail();
  variant = new Variant();
  seasons: Season[] = [];
  selectedRowIndex: string;
  selectedVariantRowIndex: string;
  displayColumns = ['Variant', 'ENumber', 'AGCode', 'Action'];
  ngOnInit() {

  }

  onNoClick(): void {
    this.data.ProductDetail = this.data.ProductDetail.filter(prd => prd.Title != "" || prd.Title != undefined);
    this.data.ProductDetail.forEach(p => {
      p.Variant = p.Variant.filter(v => v.Title != undefined).filter(v => v.Title != "");
      p.Seasons = p.Seasons.filter(s => s.Season != undefined).filter(s => s.Season != "");
    })
    this.dialogRef.close();
  }

  submit() {

  }
  private isChanged: Boolean = false;
  modelChanged(event: any) {
    this.isChanged = true;
  }

  modelChangedSeason(event:any){
    this.productDetail.Variant.forEach(v=>{
      v.Seasons=[];
      v.Seasons.push(...this.productDetail.Seasons);
    })

  }

  public confirmAdd(): void {

    this.data.ProductDetail = this.data.ProductDetail.filter(prd => prd.Title != "");
    this.data.ProductDetail.forEach(p => {
      p.Variant = p.Variant.filter(v => v.Title != undefined).filter(v => v.Title != "");
      p.Seasons = p.Seasons.filter(s => s.Season != undefined).filter(s => s.Season != "");
    })
    this.seedService.url = `${environment.URLRestFullApi}/seed`
    if (this.data._id == undefined) {
      this.seedService.insert(this.data)
        .subscribe(response => {
          this.data._id = response._id;
          this.dialogRef.close("1")
        });
    }
    else {
      this.seedService.update(this.data)
        .subscribe(response => {
          console.log("Seed Change");
          this.dialogRef.close("1")
        })
    }
  }

  keydownProductDetail(event, tag, index: number) {
    console.log(event.key)

    if (event.key == 'ArrowDown') {
      if (this.productDataSource.data().slice()[index].Title == "") return;
      if (this.data.ProductDetail.length - 1 > index) {
        let element = '#' + tag + '-' + (index + 1)
        let onElement = this.renderer.selectRootElement(element);
        onElement.focus();
        this.rowClickProductDetail(this.data.ProductDetail[index + 1], index + 1)
      }
    }
    if (event.key == 'ArrowUp') {
      if (index > 0) {
        let element = '#' + tag + '-' + (index - 1)
        let onElement = this.renderer.selectRootElement(element);
        onElement.focus();
        this.rowClickProductDetail(this.data.ProductDetail[index - 1], index - 1)
      }
    }
  }


  productLine(row: ProductDetail) {

    if (row.Variant.length == 0) {
      let v = new Variant();
      if (row.Seasons.length > 0)
        v.Seasons.push(...row.Seasons);
      else if (this.data.Seasons.length > 0)
        v.Seasons.push(...this.data.Seasons)
      row.Variant.push(v);
    }
    if (row.Seasons.length == 0) {
      row.Seasons = [];

      if (this.data.Seasons.length > 0)
        this.seasons.push(...this.data.Seasons)
      else
        this.seasons.push(new Season)
      
      row.Seasons.push(...this.seasons)
    }
    this.seasonDataSource.update(row.Seasons);
    this.variantDataSource.update(row.Variant);
    this.variant = this.productDetail.Variant[0];
  }


  rowClickProductDetail(row: any, index: number) {

    this.productLine(row);
    this.productDetail = row;

    if (this.productDataSource.data().slice().length - 1 == index) {
      let prdDetail = new ProductDetail();
      this.productLine(prdDetail);
      prdDetail.TableObservationHeadId = this.data.TableObservationHeadId
      prdDetail.FormObservationHeadId = this.data.FormObservationHeadId;
      this.data.ProductDetail.push(prdDetail)
      this.productDataSource.update(this.data.ProductDetail);
    }
  }

  keydownVariantDetail(event, tag, index: number) {
    console.log(event.key)

    if (event.key == 'ArrowDown') {
      if (this.variantDataSource.data().slice()[index].Title == "" || this.variantDataSource.data().slice()[index].Title == undefined) return;
      if (this.productDetail.Variant.length - 1 > index) {
        let element = '#' + tag + '-' + (index + 1)
        let onElement = this.renderer.selectRootElement(element);
        onElement.focus();
        this.rowClickVariant(this.productDetail.Variant[index + 1], index + 1)
      }
    }
    if (event.key == 'ArrowUp') {
      if (index > 0) {
        let element = '#' + tag + '-' + (index - 1)
        let onElement = this.renderer.selectRootElement(element);
        onElement.focus();
        this.rowClickVariant(this.productDetail.Variant[index - 1], index - 1)
      }
    }
  }

  keydownSeason(event, tag, index: number) {
    if (event.key == 'ArrowDown') {
      if (this.seasonDataSource.data().slice().length - 1 > index) {
        let element = '#' + tag + '-' + (index + 1)
        let onElement = this.renderer.selectRootElement(element);
        onElement.focus();
        this.rowClickSeason(this.seasonDataSource.data().slice()[index + 1], index + 1)
      }
    }
    if (event.key == 'ArrowUp') {
      if (index > 0) {
        let element = '#' + tag + '-' + (index - 1)
        let onElement = this.renderer.selectRootElement(element);
        onElement.focus();
        this.rowClickSeason(this.seasonDataSource.data().slice()[index - 1], index - 1)
      }
    }
  }

  rowClickSeason(row: any, index: number) {
    this.selectedRowIndex = row._id
    console.log(this.productDetail.Seasons);

    if (this.seasonDataSource.data().slice().length - 1 == index) {
      this.productDetail.Seasons.push(new Season())
      this.seasonDataSource.update(this.productDetail.Seasons);
    }
  }


  rowClickVariant(row: any, index: number) {
    this.variant = row;
    console.log(row._id, this.selectedVariantRowIndex);

    this.selectedVariantRowIndex = row._id

    if (this.variantDataSource.data().slice().length - 1 == index) {
      let variant=new Variant();
      variant.Seasons=this.productDetail.Seasons;
      this.productDetail.Variant.push(variant)
      this.variantDataSource.update(this.productDetail.Variant);
    }
  }
  updateRow(row: any, index: number) {
    // console.log(this.productDataSource);
    // console.log(this.data.ProductDetail);
  }
  deleteItem(index: number, data: any) {
    let deleteData = new ConfirmModel();
    deleteData.Title = data.Title;
    deleteData.Type = ConfirmType.Delete;

    let dialogRef = this.dialog.open(ConfirmDialogComponent, { data: deleteData })
    dialogRef.afterClosed().subscribe(result => {
      this.data.ProductDetail.splice(index, 1);
      this.productDataSource.update(this.data.ProductDetail);
    })
  }
  deleteVariant(index: number, data: any) {
    let deleteData = new ConfirmModel();
    deleteData.Title = data.Title;
    deleteData.Type = ConfirmType.Delete;

    let dialogRef = this.dialog.open(ConfirmDialogComponent, { data: deleteData })
    dialogRef.afterClosed().subscribe(result => {
      this.productDetail.Variant.splice(index, 1);
      this.variantDataSource.update(this.productDetail.Variant);
    })
  }

  deleteSeasonItem(index:number,data:any){
    let deleteData = new ConfirmModel();
    deleteData.Title = data.Season;
    deleteData.Type = ConfirmType.Delete;

    let dialogRef = this.dialog.open(ConfirmDialogComponent, { data: deleteData })
    dialogRef.afterClosed().subscribe(result => {
      this.productDetail.Seasons.splice(index, 1);
      this.seasonDataSource.update(this.productDetail.Seasons);
      this.productDetail.Variant.forEach(v=>{
        v.Seasons=[];
        v.Seasons.push(...this.productDetail.Seasons);
      })
    })
  }
  variantDetailDialog(index:number,data: Variant): void {
    let variant = Object.assign({}, data);
    let dialogRef = this.dialog.open(VariantDetailComponent, { data: variant, disableClose: true })
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result == "1") {
        this.productDetail.Variant[index]=variant;
        
      }
      this.productDetail.Variant[index].Seasons.filter(s=>s.Season!=undefined).filter(s=>s.Season!="");
      this.variantDataSource.update(this.productDetail.Variant);
    });
  }

  seasonDialog(season: Season): void {
    let dialogRef = this.dialog.open(SeasonDialogComponent, { data: this.data, disableClose: true })
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result == "1") {
        this.data.ProductDetail.forEach(p => {
          p.Seasons = [];
          p.Seasons.push(...this.data.Seasons);
          p.Variant.forEach(v => {
            v.Seasons = [];
            v.Seasons.push(...this.data.Seasons);
          })
        })
      }
    });
  }
  onModelChange(event: any, place: string) {
    if (place == "table")
      this.data.ProductDetail.forEach(p => {
        p.TableObservationHeadId = event;
      })
    else
      this.data.ProductDetail.forEach(p => {
        p.FormObservationHeadId = event;
      })
  }

}
