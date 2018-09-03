import { Component, OnInit,OnDestroy, Renderer, Input } from '@angular/core';
import { FieldInfo } from '../_directives/generic-field/FieldInfo';
import { SeedInputDialogComponent } from '../_directives';
import { GenericService, EnumsMock } from '../_services';
//import { GenericDataSource, DynClass, Utils } from '../_helpers';
import { SeedModel, ProductDetail, Variant, PersonModel, GrowerModel, LoginViewModel, SeedTrialModel } from '../_models';
import { environment } from '../../environments/environment';
import { SeedObservationModel } from '../_models/SeedObservationModel';
import { MatSnackBar, MatDialog } from '@angular/material';
import { ObservationHead } from '../_models/ObservationHeadModel';

import { BehaviorSubject } from 'rxjs';
import { DataSource } from '@angular/cdk/collections';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-seed.observation',
  templateUrl: './seed.observation.component.html',
  styleUrls: ['./seed.observation.component.scss'],
  providers: [GenericService, EnumsMock]
})
export class SeedObservationComponent implements OnInit,OnDestroy {

  @Input() CategoryId: string;
  @Input() ProductId: string;
  @Input() VariantId: string;
  @Input() Region: string;

  //@ViewChild(SeedObservationTableComponent) obsTable: SeedObservationTableComponent;


  constructor(
    private route: ActivatedRoute,
    private gfService: GenericService<FieldInfo>,
    private seedModelService: GenericService<SeedModel>,
    private obsHeadService: GenericService<ObservationHead>,
    private personService: GenericService<PersonModel>,
    private growerService: GenericService<GrowerModel>,
    private observationService: GenericService<SeedObservationModel>,
    private userService: GenericService<LoginViewModel>,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private enumsMock: EnumsMock,
    private renderer: Renderer
  ) {
    this.dataSource = new tableDataSource(this._dataSubject)
    this.regions = enumsMock.getRegion();
    this.seasons = enumsMock.getTrialSeason();
    personService.url = `${environment.URLRestFullApi}/personsByUser/${localStorage.getItem('username')}`
    personService.getAll()
      .subscribe(response => {
        this.persons = response;
      })
    growerService.url = `${environment.URLRestFullApi}/growers`
    growerService.getAll()
      .subscribe(response => this.growers = response);
    obsHeadService.url = `${environment.URLRestFullApi}/observationheads`
    obsHeadService.getAll()
      .subscribe(response => {
        this.obsHeads = response;
        console.log(this.obsHeads);
      });

    // this.seedModelService.url = `${environment.URLRestFullApi}/seed`
    // this.seedModelService.getAll()
    //   .subscribe(response => {
    //     this.seeds = response;
    //   })
  }
  seeds: SeedModel[]=[];
  productDetails: ProductDetail[] = [];
  variants: Variant[] = [];

  seed = new SeedModel();
  product = new ProductDetail();
  variant = new Variant();
  seedObservations: SeedObservationModel[];
  seedObservation: SeedObservationModel;
  dataSource: tableDataSource | null;
  obsHeads: ObservationHead[];

  fields: FieldInfo[] //= [];
  formFields: FieldInfo[];

  regions: string[];
  region: string = "";
  seasons: string[];
  season: string = "";
  persons: PersonModel[];
  person = new PersonModel();
  growers: GrowerModel[];
  grower = new GrowerModel();


  _dataSubject = new BehaviorSubject<any[]>([])
  seedTrial: any;
  ngOnInit() {
    this.seedTrial = this.route.params.subscribe(params => {
      console.log("Kontrol"+params.CategoryId);
      
      this.seedModelService.url = `${environment.URLRestFullApi}/seed`
      this.seedModelService.getAll()
        .subscribe(response => {
          this.seeds = response;
      if(params.CategoryId==undefined) return;
      this.seed=this.seeds.find(s=>s._id==params.CategoryId);
      this.productDetails=this.seed.ProductDetail;
      this.product=this.seed.ProductDetail.find(p=>p._id==params.ProductId);
      this.variants=this.product.Variant;
      this.variant=this.product.Variant.find(v=>v._id==params.VariantId);
      this.isVariantSelected();
    })
    })
  }
  ngOnDestroy() {
  this.seedTrial.unsubscribe();
}
  createTable() {
    this.observationService.url = `${environment.URLRestFullApi}/observationBySeed/${this.seed._id}/${this.product._id}/${this.variant._id}`
    this.observationService.getAll()
      .subscribe(response => {
        this.seedObservations = response;
        this.seedObservation = response[0];
        // this.grower._id=this.seedObservation.GrowerId;
        // this.person._id=this.seedObservation.PersonId;
        // this.region=this.seedObservation.Region;
        if (this.product.TableObservationHeadId != undefined)
          this.updateTableData()
        if (this.product.FormObservationHeadId != undefined)
          this.updateFormData()
      })
  }

  displayedColumns: string[] = [];
  columns: object[] = [];

  updateFormData() {
    console.log(this.seedObservation);
    if (this.seedObservation == undefined) {
      this.seedObservation = new SeedObservationModel();
      this.seedObservation.Form = [];
    }
    this.formFields.forEach(f => {
      f.Value = this.seedObservation.Form[f._id];
    })
  }
  updateTableData() {
    this.displayedColumns = this.fields.map(x => x._id);
    this.displayedColumns.unshift('Action')
    this.columns = this.generateColumns();
    this.tableData = this.generateData();
    this._dataSubject.next(this.tableData);
  }

  generateColumns() {
    var columnObj: object;
    var columns: object[] = [];
    this.fields.forEach(x => {
      columnObj = new function () {
        this.columnDef = x._id;
        this.header = x.Caption;
        this.cell = [];
      }
      columns.push(columnObj)
    });
    return columns;
  }

  tableData = new Array<any[]>();
  generateData() {
    let tableData = new Array<any[]>();
    let tableRow = Object();
    if (this.seedObservations.length > 0) {
      this.seedObservations[0].ObservationLine.forEach(o => {
        this.fields.forEach(f => {
          tableRow[f._id] = new FieldInfo(f._id, f.Type, f.Caption, o[f._id], f.Options)
        })
        tableData.push(tableRow);
        tableRow = [];
      })
      this.fields.forEach(f => {
        tableRow[f._id] = new FieldInfo(f._id, f.Type, f.Caption, f.Value, f.Options)
      })
      tableData.push(tableRow);
      tableRow = [];
    } else {

      this.fields.forEach(f => {
        tableRow[f._id] = new FieldInfo(f._id, f.Type, f.Caption, f.Value, f.Options)
      })
      tableData.push(tableRow);
      this.seedObservations.push(new SeedObservationModel())
      this.seedObservations[0].ObservationLine = [[]];

    }
    return tableData;

  }

  categorySelect() {
    let data = {
      rows: this.seeds,
      columns: [
        { name: 'Cins', prop: 'Title' }
      ],
      filterText: 'Filtre edeceğiniz ürün adını giriniz...'
    }

    let dialogRef = this.dialog.open(SeedInputDialogComponent, { data: data, hasBackdrop: false, autoFocus: true })
    dialogRef.afterClosed().subscribe(result => {
      if(result==="-1") return;
      this.seed = result
      this.fields = undefined;
      this.formFields = undefined;
      this.product = new ProductDetail();
      this.variant = new Variant();
    },
      error => {
        console.log(error);
      }
    )
  }

  productSelect() {
    if (this.seed._id == undefined) return;
    let data = {
      rows: this.seed.ProductDetail,
      columns: [
        { name: 'Cins', prop: 'Title' }
      ],
      filterText: 'Filtre edeceğiniz tür adını giriniz...'
    }

    let dialogRef = this.dialog.open(SeedInputDialogComponent, { data: data, hasBackdrop: false, autoFocus: true })
    dialogRef.afterClosed().subscribe(result => {
      if(result==="-1") return;
      this.product = result;
      this.fields = undefined;
      this.formFields = undefined;
      this.variant = new Variant();
    },
      error => {
        console.log(error);
      }
    )
  }

  variantSelect() {
    if (this.product._id == undefined) return;
    let data = {
      rows: this.product.Variant,
      columns: [
        { name: 'Cins', prop: 'Title' }
      ],
      filterText: 'Filtre edeceğiniz çeşit adını giriniz...'
    }

    let dialogRef = this.dialog.open(SeedInputDialogComponent, { data: data, hasBackdrop: false, autoFocus: true })
    dialogRef.afterClosed().subscribe(result => {
      if(result==="-1") return;
      this.variant = result;
      console.log(this.obsHeads);
      console.log(this.product.TableObservationHeadId);
      this.isVariantSelected()
    },
      error => {
        this.errorMessage(error.message);
      }
    )
  }

  isVariantSelected()
  {
  if (this.product.TableObservationHeadId != undefined)
    this.fields = this.obsHeads.find(x => x._id == this.product.TableObservationHeadId).GenericFields;
  if (this.product.FormObservationHeadId != undefined)
    this.formFields = this.obsHeads.find(x => x._id == this.product.FormObservationHeadId).GenericFields;
  let f = this.obsHeads.find(o => o._id == this.product.TableObservationHeadId)
  this.fields = f.GenericFields


  this.createTable();

  }

  errorMessage(message: string) {
    console.log(message);
    this.snackBar.open(message, '', { duration: 3000, });
  }


  onRowChange(event: any) {
    console.log(event)

    let list = this.dataSource.data().slice();

  }
  dynClass = Object();
  dynArray: Object[] = [];

  onModelChange(event: FieldInfo, colIndex: number, rowIndex: number) {
    console.log(this.dataSource.data().slice());
  }
  onFormChange(event: FieldInfo, colIndex: string, rowIndex: number) {
    console.log(this.formFields)
  }

  buttonClick() {

  }


  rowClick(row: any, index: number) {
    if (index == this.dataSource.data().slice().length - 1) {
      console.log(row, index)
      let tableRow = Object();
      this.fields.forEach(f => {
        tableRow[f._id] = new FieldInfo(f._id, f.Type, f.Caption, f.Value, f.Options)
      })
      this.tableData.push(tableRow);
      this._dataSubject.next(this.tableData);
    }
  }
  keydown(event) {
    console.log(event)
    let index = event.rowIndex;
    let tag = event.tag;

    if (event.event.key == 'ArrowDown') {
      if (this.dataSource.data().slice().length - 1 > index) {
        let element = '#' + tag + '-' + (index + 1)
        let onElement = this.renderer.selectRootElement(element);
        onElement.focus();
        this.rowClick(this.dataSource.data().slice()[index + 1], index + 1)
      }
    }
    if (event.event.key == 'ArrowUp') {
      if (index > 0) {
        let element = '#' + tag + '-' + (index - 1)
        let onElement = this.renderer.selectRootElement(element);
        onElement.focus();
        this.rowClick(this.dataSource.data().slice()[index - 1], index - 1)
      }
    }
  }

  save() {
    let form = Object();
    let line = Object();
    let lines: Object[] = [];
    if (this.product.FormObservationHeadId != undefined)
      this.formFields.forEach(f => {
        if (f.Type == 'Datepicker') {
          form[f._id] = f.Value as Date
        }
        else
          form[f._id] = f.Value;
      })
    let obsline = this.dataSource.data().slice();
    let index = 0

    obsline.forEach(l => {
      if (index < obsline.length - 1) {
        this.fields.forEach(f => {
          line[f._id] = l[f._id].Value;
        })
        index++
        lines.push(line)
        line = Object();
      }
    })

    if (this.seedObservation == undefined)
      this.seedObservation = new SeedObservationModel();
    if (this.product.FormObservationHeadId != undefined)
      this.seedObservation.Form = form;
    this.seedObservation.ObservationLine = lines;
    this.seedObservation.ProductDetailId = this.product._id;
    this.seedObservation.SeedId = this.seed._id;
    this.seedObservation.VariantId = this.variant._id;
    this.seedObservation.PersonId = this.person._id;
    this.seedObservation.Region = this.region;
    this.seedObservation.GrowerId = this.grower._id;


    this.observationService.url = `${environment.URLRestFullApi}/observation`
    if (this.seedObservation._id == undefined)
      this.observationService.insert(this.seedObservation)
        .subscribe(resp => {
          this.seedObservation = resp;
          this.snackBar.open('Gözlem kaydı eklendi.', '', { duration: 3000 })
        },
          error => {
            this.snackBar.open(error.message, '', { duration: 3000 })
          });


    else
      this.observationService.update(this.seedObservation)
        .subscribe(resp => {
          this.seedObservation = resp;
          this.snackBar.open('Gözlem kaydı güncellendi.', '', { duration: 3000 })
        },
          error => {
            this.snackBar.open(error.message, '', { duration: 3000 })
          });
    ;
  }

  deleteItem(rindex: number) {

    this.tableData.splice(rindex, 1);
    this._dataSubject.next(this.tableData)
  }

}

export class tableDataSource extends DataSource<any>
{

  constructor(private _data: BehaviorSubject<any[]>) {
    super();
  }

  connect() {
    return this._data.asObservable()
  }
  data() {
    return this._data.value;
  }
  update(data) {
    this._data.next(data);
  }
  disconnect() { }
}