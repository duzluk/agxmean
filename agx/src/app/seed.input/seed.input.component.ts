import { Component, OnInit, ViewEncapsulation, Renderer, ComponentFactoryResolver } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DataSource } from '@angular/cdk/table';
import { MatDialog, SELECT_PANEL_MAX_HEIGHT, MatSnackBar } from '@angular/material';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs/Observable';
import { startWith } from 'rxjs/operators/startWith';
import { map } from 'rxjs/operators/map';
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';

import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import createAutoCorrectedDatePipe from 'text-mask-addons/dist/createAutoCorrectedDatePipe';

import { GenericService, EnumsMock } from '../_services';
import { environment } from '../../environments/environment';
import { SeedModel, PersonModel, SeedInputModel, ProductDetail, Season } from '../_models';
import { GenericDataSource } from '../_helpers/datasource';
import { ConfirmType, ConfirmDialogComponent, SeedInputDialogComponent } from '../_directives';

@Component({
  selector: 'app-seedinput',
  templateUrl: './seed.input.component.html',
  styleUrls: ['./seed.input.component.scss'],
  providers: [GenericService, EnumsMock,
    { provide: MAT_DATE_LOCALE, useValue: 'tr-TR' },
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS }],
  encapsulation: ViewEncapsulation.None
})
export class SeedInputComponent implements OnInit {

  seedInputDataSource: GenericDataSource | null;
  seedInputs: SeedInputModel[] = [];
  seedInputModel = new SeedInputModel();
  seedModel = new SeedModel();
  seeds: SeedModel[] = [];
  persons: PersonModel[] = [];

  products: ProductDetail[];
  productDetailModel = new ProductDetail();
  trCode = "0";
  chipColor = "primary";



  numberMask = createNumberMask({
    prefix: '',
    suffix: '',
    integerLimit: 6,
    includeThousandsSeparator: false
  })
  autoCorrectedDatePipe: any = createAutoCorrectedDatePipe('dd.mm.yyyy');
  dateMask = [/\d/, /\d/, '.', /\d/, /\d/, '.', /\d/, /\d/, /\d/, /\d/];



  displayedColumns = ['Action', 'TrCode', 'BoxNo', 'CategoryTitle', 'ProductTitle', 'Region', 'VariantTitle',
    'ENumber', 'AGCode', 'LotNo', 'Pack', 'MainUnit', 'Amount', 'SecondUnit', 'TotalAmount',
    'Producer', 'ShipmentNumber', 'Responsible', 'Date', 'Deliverer', 'Address', 'Notes'];

  status: string[] = [];
  region: string[] = [];
  trialSeason: Season[] = [];

  categoryFormControl = new FormControl();



  constructor(
    private seedInputService: GenericService<SeedInputModel>,
    private seedModelService: GenericService<SeedModel>,
    private personService: GenericService<PersonModel>,
    private enumsMock: EnumsMock, public dialog: MatDialog,
    private renderer: Renderer,
    private snackBar: MatSnackBar
  ) {
    this.seedModelService.url = `${environment.URLRestFullApi}/seed`;

    this.seedModelService.getAll()
      .subscribe(response => {
        this.seeds = response;
      },
        error => {
          console.log(error);
        }
      )
  }


  ngOnInit() {
    this.status = this.enumsMock.getStatus();
    this.region = this.enumsMock.getRegion();

    this.personService.url = `${environment.URLRestFullApi}/persons`;
    this.personService.getAll()
      .subscribe(response => {
        this.persons = response;
      });
  }

  onValChange(value: any) {
    this.chipColor = value == "0" ? "primary" : "warn"
    console.log(this.chipColor)
  }

  ngOnDestroy() {
    // alert("bye bye")
  }

  selectedSeed(selected: any) {
    this.seedModel = selected;
    this.products = this.seedModel.ProductDetail.filter(pd => pd.IsActive && !pd.IsDeleted);
    let trcode = this.trCode == "0" ? "G" : "Ç";
    this.seedInputService.url = `${environment.URLRestFullApi}/seedinput/${this.seedModel._id}/${trcode}`;

    this.seedInputService.getAll()
      .subscribe(response => {
        this.seedInputs = response;
        if (this.seedInputs.length == 0) {
          let trial = new SeedInputModel()
          trial.CategoryId = this.seedModel._id;
          trial.CategoryTitle = this.seedModel.Title;
          trial.TrCode = trcode;
          this.seedInputs.push(trial);
        }
        this.seedInputDataSource = new GenericDataSource(this.seedInputs);
      },
        error => {
          console.log(error);
        }
      )
  }
  selectedRowIndex: string = "";

  rowClick(row: any, index: number) {
    this.selectedRowIndex = row._id

    if (index == this.seedInputDataSource.data().slice().length - 1) {
      let newRow = new SeedInputModel()
      newRow.CategoryId = this.seedModel._id;
      newRow.TrCode = this.trCode == "0" ? "G" : "Ç";
      newRow.CategoryTitle = this.seedModel.Title;
      newRow.ProductId = "";
      newRow.ProductTitle = "";
      this.seedInputs.push(newRow);
      this.seedInputDataSource.update(this.seedInputs);
    }
  }

  keydown(event, tag, index: number) {

    if (event.key == 'ArrowDown') {
      if (this.seedInputs.length - 1 > index) {
        if (tag == 'Region') {
          console.log(event);
        }
        let element = '#' + tag + '-' + (index + 1)
        let onElement = this.renderer.selectRootElement(element);
        onElement.focus();
        this.rowClick(this.seedInputs[index + 1], index + 1)
      }
    }
    if (event.key == 'ArrowUp') {
      if (index > 0) {
        let element = '#' + tag + '-' + (index - 1)
        let onElement = this.renderer.selectRootElement(element);
        onElement.focus();
        this.rowClick(this.seedInputs[index - 1], index - 1)
      }
    }
  }
  productSelect(element: SeedInputModel) {
    if (element.ProductTitle == undefined || element.ProductTitle.length == 0)
      element.ProductTitle = '';
    let data = {
      rows: this.products,
      columns: [
        { name: 'Cins', prop: 'Title' }
      ],
      filterText:'Filtre edeceğiniz alt segment adını giriniz...'
    }

    let dialogRef = this.dialog.open(SeedInputDialogComponent, { data: data, hasBackdrop: false, autoFocus: true })
    dialogRef.afterClosed().subscribe(result => {
      if (result == undefined) return;
      element.ProductId = result._id;
      element.ProductTitle = result.Title;
      this.productDetailModel = result;
      element.Variants = this.productDetailModel.Variant;
      element.VariantId = "";
      element.VariantTitle = ""
      element.MainUnit = "";
      element.SecondUnit = "";
      element.Pack = 0;
      element.ConvFact2 = 0;
      element.ENumber = "";
      element.AGCode = "";


    },
      error => {
        console.log(error);
      }
    )
  }

  variantSelect(element: SeedInputModel) {
    console.log(element.Variants)
    if (element.Variants == undefined) {
      if (element.ProductTitle.length == 0) return;
      element.Variants = this.seeds.find(s => s._id == element.CategoryId).ProductDetail.find(p => p._id == element.ProductId).Variant;
    }
    if (element.VariantTitle == undefined || element.ProductTitle.length == 0)
      element.VariantTitle = '';

    let data = {
      rows: element.Variants,
      columns: [
        { name: 'Cins', prop: 'Title' }
      ],
      filterText:'Filtre edeceğiniz cins adını giriniz...'
    }

    let dialogRef = this.dialog.open(SeedInputDialogComponent, { data: data, hasBackdrop: false, autoFocus: true })
    dialogRef.afterClosed().subscribe(result => {
      if (result == undefined) return;

      element.VariantId = result._id;
      element.VariantTitle = result.Title;
      element.MainUnit = result.MainUnit;
      element.SecondUnit = result.SecondUnit;
      element.Pack = result.ConvFact1;
      element.ConvFact2 = result.ConvFact2;
      element.ENumber = result.ENumber;
      element.AGCode = result.AGCode;
      this.trialSeason=result.Season;
      this.onModelChange(element, 'Category')
    },
      error => {
        console.log(error);
      }
    )
  }

  
  onModelChange(element: SeedInputModel, tag: string) {

    if (tag == 'Pack' || tag == 'Amount') {
      console.log(tag, Number(element.Amount))
      element.TotalAmount = element.Amount * element.Pack;
    }

    if (this.validateRow(element)) {
      if (element._id == undefined) {
        this.seedInputService.url = `${environment.URLRestFullApi}/seedinput`
        this.seedInputService.insert(element)
          .subscribe(response => {
            console.log("SeedInput insert", response);
            element._id = response._id;
          })
      } else {
        this.seedInputService.url = `${environment.URLRestFullApi}/seedinput`
        this.seedInputService.update(element)
          .subscribe(response => {
            console.log("SeedInput insert", response);
          })
      }
    }

  }

  validateRow(element: SeedInputModel): boolean {
    if (element.CategoryId != undefined && element.ProductId != undefined && element.Pack > 0 && element.Amount > 0)
      return true;
    else
      return false;
  }

  deleteItem(index: number, data: SeedInputModel) {
    const deleteData = { "Title": data.CategoryTitle + ' - ' + data.ProductTitle + ' - ' + data.VariantTitle, "Message": "Dikkat Kayıt silinecektir!!!", "Type": ConfirmType.Delete }
    const type = ConfirmType.Delete;
    let dialogRef = this.dialog.open(ConfirmDialogComponent, { data: deleteData })
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result == "1") {

        this.seedInputService.url = `${environment.URLRestFullApi}/seedinput/${data._id}`
        this.seedInputService.delete()
          .subscribe(result => {
            this.snackBar.open('Kayıt Silindi...', '', { duration: 3000, });
            this.seedInputs.splice(index, 1);
            this.seedInputDataSource.update(this.seedInputs);
          });
      }
    })
  }

}
