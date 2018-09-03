import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { GenericService } from '../_services';
import { environment } from '../../environments/environment';
import { MatSnackBar, MatDialog } from '@angular/material';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators/map';
import { GenericDataSource } from '../_helpers/datasource';
import { SeedModel, ProductDetail, Variant } from '../_models/SeedModel';
import { SeedCardDialogComponent } from './seedcarddialog/seedcarddialog.component';
import { ConfirmType, ConfirmDialogComponent } from '../_directives/confirm.dialog/confirm.dialog.component';
import { VariantDetailComponent } from './variant-detail/variant-detail.component';

@Component({
  selector: 'app-seedcard',
  templateUrl: './seed.card.component.html',
  styleUrls: ['./seed.card.component.scss'],
  providers: [GenericService],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0', visibility: 'hidden' })),
      state('expanded', style({ height: '*', visibility: 'visible' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class SeedCardComponent implements OnInit {

  seedColumns = ['Code', 'Title', 'actions'];
  detailDataSource: DetailDataSource;
  dataSource: GenericDataSource;
  seedModel: SeedModel = new SeedModel();
  seeds: SeedModel[] = [];

  wasExpanded = new Set<DetailRow>();
  expandedSeed: SeedModel;

  isDetailRow = (_index: number, row: DetailRow | SeedModel) => row.hasOwnProperty('detailRow');
  
  constructor(
    private seedService: GenericService<SeedModel>,
    private producDetailService: GenericService<ProductDetail>,
    public snackBar: MatSnackBar,
    public dialog: MatDialog
  ) {
    this.seedService.url = environment.URLRestFullApi + '/seed';
    this.seedService.getAll()
      .subscribe(response => {
        this.seeds = response;
        this.seeds.forEach(prd => {
          prd.ProductDetail = prd.ProductDetail.filter(p => p.IsDeleted == false);
        })
        this.dataSource = new GenericDataSource(this.seeds)
        this.detailDataSource = new DetailDataSource(this.dataSource)
      },
        error => {
          console.log(error);
          this.snackBar.open(error.message, '', { duration: 3000, });
        });
  }

  ngOnInit() {
  }

  addNew(): void {
    let seed = new SeedModel();
    let dialogRef = this.dialog.open(SeedCardDialogComponent, { data: seed, disableClose: true })
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result == "1") {
        this.seeds.push(seed);
        this.dataSource.update(this.seeds)
      }
    });
  }

  variantDetail(item:ProductDetail,variant:Variant):void{

    let dialogRef = this.dialog.open(VariantDetailComponent, { data: variant, disableClose: true })
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result == "1") {
        variant.Seasons=variant.Seasons.filter(v=>v.Season!=""&&v.Status!="");
        this.producDetailService.url = `${environment.URLRestFullApi}/seed/product`
        this.producDetailService.update(item)
          .subscribe(result => {
            console.log(result);
          });
        console.log("kayıt edilecek");
      }
    });
  }

  editItem(index: number, data: SeedModel) {
    let seed = Object.assign({}, data); /// clone object
    let dialogRef = this.dialog.open(SeedCardDialogComponent, { data: seed, disableClose: true })
    dialogRef.afterClosed().subscribe(result => {
      if (result == "1") {
        this.seeds[index] = seed
        this.dataSource.update(this.seeds)
      }
    })
  }

  deleteItem(index: number, data: SeedModel) {

    const deleteData = { "Title": data.Title, "Message": "Dikkat Kayıt silinecektir!!! ", "Type": ConfirmType.Delete }
    const type = ConfirmType.Delete;
    let dialogRef = this.dialog.open(ConfirmDialogComponent, { data: deleteData })
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result == "1") {
        this.seedService.url = `${environment.URLRestFullApi}/seed/${data._id}`
        this.seedService.delete()
          .subscribe(result => {
            //this.seeds.splice(index, 1);
            this.seeds = this.seeds.filter(s => s._id != data._id)
            this.dataSource.update(this.seeds);
          });
      }
    })
  }
  // deleteProductItem(list: ProductDetail[], data: ProductDetail) {
  //   const deleteData = { "Title": data.Title, "Message": "Dikkat Kayıt silinecektir!!! ", "Type": ConfirmType.Delete }
  //   const type = ConfirmType.Delete;
  //   let dialogRef = this.dialog.open(ConfirmDialogComponent, { data: deleteData })
  //   dialogRef.afterClosed().subscribe(result => {
  //     if (result == "1") {
  //       this.seedService.url = `${environment.URLRestFullApi}/seed/product/${data._id}`
  //       this.seedService.delete()
  //         .subscribe(result => {
  //           list = list.filter(row => row._id != data._id && row.IsDeleted == false);
  //           console.log(list);
  //           this.expandedSeed.ProductDetail = list;
  //         });
  //     }
  //   });
  // }
 


  // productIsActive(item: ProductDetail) {

  //   this.producDetailService.url = `${environment.URLRestFullApi}/seed/product`
  //   this.producDetailService.update(item)
  //     .subscribe(result => {
  //       console.log(result);
  //     });
  // }
}

export interface DetailRow {
  detailRow: boolean;
  data: SeedModel;
}


export class DetailDataSource extends DataSource<any> {
  constructor(private _seedDataSource: GenericDataSource) {
    super();
  }

  connect(): Observable<(SeedModel | DetailRow)[]> {
    return this._seedDataSource.connect().pipe(map(data => {
      const rows: (SeedModel | DetailRow)[] = [];
      data.forEach(seed => rows.push(seed, { detailRow: true, data: seed }));
      return rows;
    }));
  }

  disconnect() {
    // No-op
  }
}
