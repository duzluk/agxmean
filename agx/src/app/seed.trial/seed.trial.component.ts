import { Component, OnInit, ViewEncapsulation, Renderer } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog, MatSnackBar } from '@angular/material';
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import { GenericService, EnumsMock } from '../_services';
import { environment } from '../../environments/environment';
import { SeedModel, PersonModel, ProductDetail, SeedTrialModel, Season, ProductMarketProfileModel, VariantDetail } from '../_models';
import { GenericDataSource } from '../_helpers/datasource';
import { ConfirmType, ConfirmDialogComponent, SeedInputDialogComponent } from '../_directives';


@Component({
  selector: 'app-seed.trial',
  templateUrl: './seed.trial.component.html',
  styleUrls: ['./seed.trial.component.scss'],
  providers: [GenericService, EnumsMock,
    { provide: MAT_DATE_LOCALE, useValue: 'tr-TR' },
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS }],
  encapsulation: ViewEncapsulation.None
})
export class SeedTrialComponent implements OnInit {




  seedTrialDataSource: GenericDataSource | null;
  seedTrials: SeedTrialModel[] = [];
  oldRow = new SeedTrialModel();//new BehaviorSubject<SeedTrialModel>(new SeedTrialModel()); 
  seedTrialModel = new SeedTrialModel();
  seedModel = new SeedModel();
  seedModels: SeedModel[] = [];
  seeds: SeedModel[] = [];
  persons: PersonModel[] = [];
  productDetails: ProductDetail[] = [];
  productDetailModel = new ProductDetail();
  trCode = "0";
  pmps: ProductMarketProfileModel[] = [];
  pmp = new ProductMarketProfileModel();


  numberMask = createNumberMask({
    prefix: '',
    suffix: '',
    integerLimit: 6,
    includeThousandsSeparator: false
  })

  trialYearMask = [/[2]/, /[0]/, /[1-2]/, /\d/, '-', /[2]/, /[0]/, /[1-2]/, /\d/]

  displayedColumns = ['Action', 'CategoryTitle', 'ProductTitle', 'VariantTitle',
    'ENumber', 'AGCode', 'Status', 'Region', 'TrialSeason',
    'TrialYear', 'Pack', 'MainUnit', 'Amount', 'SecondUnit', 'TotalAmount',
    'Responsible', 'Date', 'Deliverer', 'ResponsibleNotes', 'Notes', 'ResultDate', 'Result'];

  status: string[] = [];
  region: string[] = [];
  trialSeason: Season[] = [];

  categoryFormControl = new FormControl();

  constructor(
    private seedTrialService: GenericService<SeedTrialModel>,
    private seedModelService: GenericService<SeedModel>,
    private personService: GenericService<PersonModel>,
    private pmpService: GenericService<ProductMarketProfileModel>,
    private enumsMock: EnumsMock, 
    public dialog: MatDialog,
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



  selectedSeed(selected: any) {
    this.seedModel = selected;
    this.productDetails = this.seedModel.ProductDetail.filter(pd => pd.IsActive && !pd.IsDeleted);
    this.seedTrialService.url = `${environment.URLRestFullApi}/trial/${this.seedModel._id}`;

    this.seedTrialService.getAll()
      .subscribe(response => {
        this.seedTrials = response;
        if (this.seedTrials.length == 0) {
          let trial = new SeedTrialModel()
          trial.CategoryId = this.seedModel._id;
          trial.CategoryTitle = this.seedModel.Title;
          this.seedTrials.push(trial);
        }
        this.seedTrialDataSource = new GenericDataSource(this.seedTrials);
      },
        error => {
          console.log(error);
        }
      )
  }
  selectedRowIndex: string = "";

  rowClick(row: SeedTrialModel, index: number) {
    if (this.oldRow._id != row._id)
      this.oldRow = Object.assign({}, row)

    this.selectedRowIndex = row._id

    if (index == this.seedTrialDataSource.data().slice().length - 1) {
      let newRow = new SeedTrialModel()
      newRow.CategoryId = this.seedModel._id;
      newRow.CategoryTitle = this.seedModel.Title;
      this.seedTrials.push(newRow);
      this.seedTrialDataSource.update(this.seedTrials);
    }
  }
  keydown(event, tag, index: number) {
    console.log(event.key)

    if (event.key == 'ArrowDown') {
      if (this.seedTrials.length - 1 > index) {
        let element = '#' + tag + '-' + (index + 1)
        let onElement = this.renderer.selectRootElement(element);
        onElement.focus();
        this.rowClick(this.seedTrials[index + 1], index + 1)
      }
    }
    if (event.key == 'ArrowUp') {
      if (index > 0) {
        let element = '#' + tag + '-' + (index - 1)
        let onElement = this.renderer.selectRootElement(element);
        onElement.focus();
        this.rowClick(this.seedTrials[index - 1], index - 1)
      }
    }
  }


  productSelect(element: SeedTrialModel) {
    if (element.ProductTitle == undefined || element.ProductTitle.length == 0)
      element.ProductTitle = '';
    let data = {
      rows: this.productDetails,
      columns: [
        { name: 'Cins', prop: 'Title' }
      ],
      filterText: 'Filtre edeceğiniz alt segment adını giriniz...'
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

  variantSelect(element: SeedTrialModel) {
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
        { name: 'Çeşit', prop: 'Title' }
      ],
      filterText: 'Filtre edeceğiniz cins adını giriniz...'
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
      element.TrialSeasons = result.Seasons;
      element.TrialSeason = '';
      this.onModelChange(element, 'Category')
    },
      error => {
        console.log(error);
      }
    )
  }

  trialSeasonSelect(element: SeedTrialModel) {
    if (element.TrialSeasons == undefined || element.TrialSeason.length==0) {
      element.TrialSeasons = this.seeds.find(s => s._id == element.CategoryId).ProductDetail.find(p => p._id == element.ProductId).Seasons;
    }
    
    if (element.VariantTitle == undefined || element.ProductTitle.length == 0)
      element.TrialSeason = '';


    let data = {
      rows: element.TrialSeasons,
      columns: [
        { name: 'Segment', prop: 'Season' }
      ],
      filterText: 'Filtre edeceğiniz segment adını giriniz...'
    }
    console.log(element);
    let dialogRef = this.dialog.open(SeedInputDialogComponent, { data: data, hasBackdrop: false, autoFocus: true })
    dialogRef.afterClosed().subscribe(result => {
      if (result == undefined) return;
      element.TrialSeason = result.Season;
      this.onModelChange(element, 'Season')
    },
      error => {
        console.log(error);
      }
    )
  }

  onModelChange(element: SeedTrialModel, tag: string) {

    console.log(this.oldRow.Region, element.Region);


    if (tag == 'Pack' || tag == 'Amount') {
      element.TotalAmount = element.Amount * element.Pack;
    }

    if (this.validateRow(element)) {
      if (element._id == undefined) {
        this.seedTrialService.url = `${environment.URLRestFullApi}/trial`
        this.seedTrialService.insert(element)
          .subscribe(response => {
            console.log("SeedTrial insert", response);
            element._id = response._id;
            this.pmp=new ProductMarketProfileModel();
            this.insertPmp(response);
            this.oldRow = Object.assign({}, element);
          }, error => {
            
            if (error.code = '11000')
              this.snackBar.open('HATA: Aynı sezon ve bölgede planlama yapılmış!', '', { duration: 3000 })
            else
              this.snackBar.open(error.error.message, '', { duration: 3000 });

          }
          );
      } else {
        this.seedTrialService.url = `${environment.URLRestFullApi}/trial`
        this.seedTrialService.update(element)
          .subscribe(response => {
            console.log("SeedTrial updated", response);
            this.updatePmp(response);
            this.oldRow = Object.assign({}, element);
          }, error => {
            if (error.code = '11000')
              this.snackBar.open('HATA: Aynı sezon ve bölgede planlama yapılmış!', '', { duration: 3000 })
            else
              this.snackBar.open(error.error.message, '', { duration: 3000 });

          });
      }
    }

  }

  validateRow(element: SeedTrialModel): boolean {
    if (element.CategoryId != undefined &&
      element.ProductId != undefined &&
      element.VariantId != undefined &&
      element.TrialSeason != undefined &&
      element.TrialYear != undefined &&
      element.Pack > 0 && element.Amount > 0)
      return true;
    else
      return false;
  }

  deleteItem(index: number, data: SeedTrialModel) {
    const deleteData = { "Title": data.CategoryTitle + ' - ' + data.ProductTitle + ' - ' + data.VariantTitle, "Message": "Dikkat Kayıt silinecektir!!!", "Type": ConfirmType.Delete }
//    const type = ConfirmType.Delete;
    let dialogRef = this.dialog.open(ConfirmDialogComponent, { data: deleteData })
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result == "1") {
        this.seedTrialService.url = `${environment.URLRestFullApi}/trial/${data._id}`
        this.seedTrialService.delete()
          .subscribe(result => {
            this.snackBar.open('Kayıt Silindi...', '', { duration: 3000, });
            this.seedTrials.splice(index, 1);
            this.seedTrialDataSource.update(this.seedTrials);
            this.deletePmp(data);
          });
      }
    })
  }

  deletePmp(arg0: SeedTrialModel): void {
    
    this.pmpService.url = `${environment.URLRestFullApi}/pmp?CategoryId=${arg0.CategoryId}&ProductId=${arg0.ProductId}&TrialSeason=${arg0.TrialSeason}&TrialYear=${arg0.TrialYear}&Region=${arg0.Region}`;
    this.pmpService.getAll()
      .subscribe(response => {
        this.pmp = response[0];
        
        if(this.pmp.VariantDetail.length==1)
        {
          this.pmpService.url = `${environment.URLRestFullApi}/pmp/${this.pmp._id}`;
          this.pmpService.delete()
          .subscribe(response=>{
            console.log(response);
          });
          return;
        }
        this.pmp.VariantDetail = this.pmp.VariantDetail.filter(x => x.VariantId != arg0.VariantId);
        this.pmpService.url = `${environment.URLRestFullApi}/pmp`;
        this.pmpService.update(this.pmp)
          .subscribe(resp => {
            console.log(resp);
          });
      })
  }
  updatePmp(arg0: SeedTrialModel): void {
    if (
      this.oldRow.VariantId === arg0.VariantId &&
      this.oldRow.Region === arg0.Region &&
      this.oldRow.TrialSeason === arg0.TrialSeason &&
      this.oldRow.TrialYear === arg0.TrialYear) {
      this.insertPmp(arg0);
    }
    else {
      //`${environment.URLRestFullApi}/Pmp?ProductId=${this.product._id}`;
      this.pmpService.url = `${environment.URLRestFullApi}/pmp?CategoryId=${this.oldRow.CategoryId}&ProductId=${this.oldRow.ProductId}&TrialSeason=${this.oldRow.TrialSeason}&TrialYear=${this.oldRow.TrialYear}&Region=${this.oldRow.Region}`;
      this.pmpService.getAll()
        .subscribe(response => {
          this.pmp = response[0];
          this.pmp.VariantDetail = this.pmp.VariantDetail.filter(x => x.VariantId != this.oldRow.VariantId);
          this.pmpService.url = `${environment.URLRestFullApi}/pmp`;
          this.pmpService.update(this.pmp)
            .subscribe(resp => {
              console.log(resp);
            });
        })
      this.insertPmp(arg0)
    }
  }
  insertPmp(arg0: SeedTrialModel): void {
    this.pmpService.url = `${environment.URLRestFullApi}/pmp?CategoryId=${arg0.CategoryId}&ProductId=${arg0.ProductId}&TrialSeason=${arg0.TrialSeason}&TrialYear=${arg0.TrialYear}&Region=${arg0.Region}`;
    this.pmpService.getAll()
      .subscribe(response => {
        this.pmp.SeedId = arg0.CategoryId;
        this.pmp.CategoryTitle = arg0.CategoryTitle;
        this.pmp.ProductId = arg0.ProductId;
        this.pmp.ProductTitle = arg0.ProductTitle;
        this.pmp.Region = arg0.Region;
        this.pmp.TrialSeason = arg0.TrialSeason;
        this.pmp.TrialYear = arg0.TrialYear;
        let variantDetail = new VariantDetail();
        variantDetail.VariantId = arg0.VariantId;
        variantDetail.VariantTitle = arg0.VariantTitle;
        variantDetail.Status = arg0.Status;
        if (response.length == 0) {
          this.pmp.VariantDetail = [];
          this.pmp.VariantDetail.push(variantDetail);
          this.pmpService.url = `${environment.URLRestFullApi}/pmp`;
          this.pmpService.insert(this.pmp)
            .subscribe(resp => {
              console.log(resp);
            });
        }
        else {
          this.pmp = response[0];
          let vdControl = this.pmp.VariantDetail.find(x => x.VariantId == variantDetail.VariantId)
          if (!vdControl) {
            this.pmp.VariantDetail.push(variantDetail)
            this.pmpService.url = `${environment.URLRestFullApi}/pmp`;
            this.pmpService.update(this.pmp)
              .subscribe(resp => {
                console.log(resp);
              });
          }else{
            this.pmp.VariantDetail.find(x => x.VariantId == variantDetail.VariantId).Status=variantDetail.Status;
            this.pmpService.url = `${environment.URLRestFullApi}/pmp`;
            this.pmpService.update(this.pmp)
              .subscribe(resp => {
                console.log(resp);
              });
          }
        }
      });
  }

}
