import { Component, OnInit, Renderer, ViewChild } from '@angular/core';
import { GenericDataSource, PieChartConfig } from '../_helpers';
import {
  ComericalDetail, CompetitorDetail, MarketInformation,
  SeedModel, ProductDetail, CompetitorModel, SeedTrialModel, VariantDetail, ProductMarketProfileModel, CompetitorProduct
} from '../_models';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import { MatSnackBar, MatDialog } from '@angular/material';
import { SeedInputDialogComponent, ConfirmType, ConfirmDialogComponent } from '../_directives';
import { GenericService, EnumsMock } from '../_services';
import { environment } from '../../environments/environment';
import { ActivatedRoute } from '@angular/router';
import { CompetitorDialogComponent } from '../competitor/competitor-dialog/competitor-dialog.component';

declare var google: any;

@Component({
  selector: 'app-pmp',
  templateUrl: './pmp.component.html',
  styleUrls: ['./pmp.component.scss'],
  providers: [GenericService, EnumsMock],
  //encapsulation: ViewEncapsulation.None
})
export class PmpComponent implements OnInit {

  @ViewChild('cchart') cchart;

  public changeData2(): void {
    let dataTable = this.cchart.wrapper.getDataTable();
    for (let i = 0; i < 6; i++) {

      dataTable.setValue(i, 1, Math.round(Math.random() * 1000));
      dataTable.setValue(i, 2, Math.round(Math.random() * 1000));
    }
    this.cchart.redraw();
  }


  public changeData(): void {
    // forces a reference update (otherwise angular won't detect the change
    this.pieChartData = Object.create(this.pieChartData);

    console.log(this.pieChartData.dataTable[2][1])
    console.log(this.pieChartData.dataTable[1][2])
    // this.rows = []
    // this.pmp.Comerical.forEach(r => {
    //   if (r.Rate > 0)
    //     this.rows.push({ c: [{ v: r.VariantTitle }, { v: r.Rate }] })
    // })
    // this.pmp.Competitor.forEach(r => {
    //   this.rows.push({ c: [{ v: r.CompetitorProductTitle }, { v: r.Rate }] })
    // })



    // for (let i = 1; i < 7; i++) {
    //   this.columnChartData.dataTable[i][1] = Math.round(
    //     Math.random() * 1000);
    //   this.columnChartData.dataTable[i][2] = Math.round(
    //     Math.random() * 1000);
    // }
  }










  onModelChange(tag: string) {

    switch (tag) {
      case 'Commerical':
        this.pmp.Comerical = this.commericalDataSource.data().slice();
        this.pmp.Comerical.forEach(c => {
          if (c.Rate != undefined) {
            c.Rate = parseFloat(c.Rate.toString().replace("%", ""))
          }
        })
        break;
      case 'Competitor':
        this.pmp.Competitor = this.competitorDataSource.data().slice();
        this.pmp.Competitor.forEach(c => {
          if (c.Rate != undefined) {
            c.Rate = parseFloat(c.Rate.toString().replace("%", ""))
          }
        })


        break;
    }


    this.pmpService.url = `${environment.URLRestFullApi}/pmp`;
    this.pmpService.update(this.pmp)
      .subscribe(response => {
        console.log(response);
      })
    this.chartData();
    let newdata = new google.visualization.DataTable(
      {
        cols: [{ id: 'Variates', label: 'Variates', type: 'string' },
        { id: 'Percentage', label: 'Percentage', type: 'number' }],
        rows: this.rows
      }
    )
    this.pieChartData = Object.create(this.pieChartData);
    this.pieChartData.dataTable = newdata;
   // this.pieChartData.redraw();

  }


  rows = []
  chartData() {

    this.rows = []
    this.pmp.Comerical.forEach(r => {
      if (r.Rate > 0)
        this.rows.push({ c: [{ v: r.VariantTitle }, { v: r.Rate }] })
    })
    this.pmp.Competitor.forEach(r => {
      this.rows.push({ c: [{ v: r.CompetitorProductTitle }, { v: r.Rate }] })
    })
    // return {
    //   cols: [{ id: 'Variates', label: 'Variates', type: 'string' },
    //   { id: 'Percentage', label: 'Percentage', type: 'number' }],
    //   rows: this.rows
    // }
  }

  rowClick(index: number, tag: string) {
    console.log(index, tag);
    // switch (tag) {
    //   case 'Competitor':
    //     if (index == this.competitorDataSource.data().slice().length - 1) {
    //       let newRow = new CompetitorDetail()
    //       this.competitors.push(newRow);
    //       this.competitorDataSource.update(this.competitors);
    //     }
    //     break;

    //   default:
    //     break;
    // }
  }

  constructor(
    private route: ActivatedRoute,
    private renderer: Renderer,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private enumsMock: EnumsMock,
    private seedModelService: GenericService<SeedModel>,
    //private trialService: GenericService<SeedTrialModel>,
    private pmpService: GenericService<ProductMarketProfileModel>,
    private competitorservice: GenericService<CompetitorModel>
  ) {
    this.screeningDataSource = new GenericDataSource(this.screenings);
    this.introDataSource = new GenericDataSource(this.intros);
    this.commericalOnes = [];
    this.commericalOnes.push(new ComericalDetail());
    this.commericalDataSource = new GenericDataSource(this.commericalOnes);
    this.competitors = [];
    this.competitors.push(new CompetitorDetail());
    this.competitorDataSource = new GenericDataSource(this.competitors);
    this.informations = [];
    this.informations.push(new MarketInformation());
    this.informationDataSource = new GenericDataSource(this.informations);


    this.queryString = this.route.params.subscribe(params => {
      if (params.CategoryId == undefined) return;
      this.seedTrial = params as SeedTrialModel
      this.getPmpParameters(this.seedTrial)
      this.seedModelService.url = `${environment.URLRestFullApi}/seed`
      this.seedModelService.getAll()
        .subscribe(response => {
          this.seeds = response;
          this.seed = this.seeds.find(s => s._id == params.CategoryId);
          this.productDetails = this.seed.ProductDetail;
          this.product = this.seed.ProductDetail.find(p => p._id == params.ProductId);
        });
    })

  }

  screeningDisplayedColumns = ['VariantTitle', 'Status', 'Result', 'SeedOrder', 'Action'];
  introDisplayedColumns = ['VariantTitle', 'Status', 'Result', 'SeedOrder', 'ProposedForNextSeason', 'Action'];
  comericalDisplayedColumns = ['VariantTitle', 'Rate', 'Trend', 'Action'];
  competitorDisplayedColumns = ['Title', 'ProductTitle', 'Rate', 'Trend', 'Action']
  informationColumns = ['MarketSize', 'Baf', 'Pack', 'MarketValue'];

  screeningDataSource: GenericDataSource | null;
  introDataSource: GenericDataSource | null;
  commericalDataSource: GenericDataSource | null;
  competitorDataSource: GenericDataSource | null;
  informationDataSource: GenericDataSource | null;

  screenings: VariantDetail[];
  intros: VariantDetail[];
  commericalOnes: ComericalDetail[];
  competitors: CompetitorDetail[];
  informations: MarketInformation[];

  seeds: SeedModel[] = [];
  productDetails: ProductDetail[] = [];

  seed = new SeedModel();
  product = new ProductDetail();

  queryString: any;

  seedTrial = new SeedTrialModel();
  pmps: ProductMarketProfileModel[] = [];
  pmp = new ProductMarketProfileModel();

  statusScrening: string[] = [];
  statusIntro: string[] = [];

  ngOnInit() {

    this.statusScrening = this.enumsMock.getStatus().filter(s => ['1ST', '2ND'].indexOf(s) !== -1);
    this.statusIntro = this.enumsMock.getStatus().filter(s => ['Intro', 'GT'].indexOf(s) !== -1);
  }


  numberMask = createNumberMask({
    prefix: '',
    suffix: '',
    allowDecimal: true,
    integerLimit: 9,
    includeThousandsSeparator: false
  })

  percentMask = createNumberMask({
    prefix: '',
    suffix: '%',
    allowDecimal: true,
    integerLimit: 3
  });

  public pieChartData: any = {
    chartType: 'PieChart',
    dataTable: [
      ['Seed', 'Market Percentage'],
      ['Diğer', 100]
    ],
    options: {
      title: 'Market Profile',
      slices: {
        0: {
          offset: 0.1
        }
        //   1: {
        //     offset: 0.2
        //   }
      },
      is3D: true,
      chartArea: { left: 0, top: 15, width: '100%', height: '80%' },
      legend: { position: 'bottom', alignment: 'center', textStyle: { color: 'blue', fontSize: 10 } },

      animation: {
        duration: 1000,
        easing: 'out'
      },
    }
  };
  percentControl(event) {
    if (parseInt(event.target.value) > 100) {
      event.target.value = event.target.value.substring(0, event.target.value.length - 1);
    }
    console.log(event.target.value);
    if (parseInt(event.target.value) == undefined || event.target.value == 'NaN') {
      event.target.value = '0';
    }
  }
  keydown(event, colection, tag, index: number, pIndex: number) {
    switch (colection) {
      case 'screening':
        if (index == this.screeningDataSource.data().slice().length - 1) {
          let newRow = new VariantDetail()
          newRow.VariantId = "";
          newRow.VariantTitle = "";
          this.screenings.push(newRow);
          this.screeningDataSource.update(this.screenings);
        }
        this.keyControl(this.screenings, tag + "-" + pIndex, event.key, index);
        break;
      case 'intro':
        if (index == this.introDataSource.data().slice().length - 1) {
          let newRow = new VariantDetail()
          newRow.VariantId = "";
          newRow.VariantTitle = "";
          this.intros.push(newRow);
          this.introDataSource.update(this.intros);
        }
        this.keyControl(this.intros, tag + "-" + pIndex, event.key, index);
        break;
      case 'commerical':
        if (index == this.commericalDataSource.data().slice().length - 1) {
          let newRow = new ComericalDetail()
          newRow.VariantId = "";
          newRow.VariantTitle = "";
          this.commericalOnes.push(newRow);
          this.commericalDataSource.update(this.commericalOnes);
        }
        this.keyControl(this.commericalOnes, tag + "-" + pIndex, event.key, index);
        break;
      case 'competitor':
        if (index == this.competitorDataSource.data().slice().length - 1) {
          let newRow = new CompetitorDetail()
          newRow.CompetitorProductTitle = "";
          newRow.CompetitorTitle = "";
          this.competitors.push(newRow);
          this.competitorDataSource.update(this.competitors);
        }
        this.keyControl(this.competitors, tag + "-" + pIndex, event.key, index);
        break;
    }



  }

  keyControl(collections, tag, key, index) {
    if (key == 'ArrowDown') {
      if (collections.length - 1 > index) {
        let element = '#' + tag + '-' + (index + 1)
        let onElement = this.renderer.selectRootElement(element);
        onElement.focus();
      }
    }
    if (key == 'ArrowUp') {
      if (index > 0) {
        let element = '#' + tag + '-' + (index - 1)
        let onElement = this.renderer.selectRootElement(element);
        onElement.focus();
      }
    }
  }


  categorySelect() {
    this.seedModelService.url = `${environment.URLRestFullApi}/seed`
    this.seedModelService.getAll()
      .subscribe(
        response => {
          this.seeds = response
          let data = {
            rows: this.seeds,
            columns: [
              { name: 'Ürün', prop: 'Title' }
            ],
            filterText: 'Filtre edeceğiniz ürün adını giriniz...'
          }

          let dialogRef = this.dialog.open(SeedInputDialogComponent, { data: data, hasBackdrop: false, autoFocus: true, maxHeight: '600px' })
          dialogRef.afterClosed().subscribe(result => {
            if (result === "-1") return;
            this.seed = result
            this.product = new ProductDetail();
          },
            error => {
              this.snackBar.open(error.message, '', { duration: 3000 })
            }
          )
        }
      );
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

    let dialogRef = this.dialog.open(SeedInputDialogComponent, { data: data, hasBackdrop: false, autoFocus: true, height: '600px' })
    dialogRef.afterClosed().subscribe(result => {
      if (result === "-1") return;
      this.product = result;
      this.getPmp();

    },
      error => {
        this.snackBar.open(error.message, '', { duration: 3000 })
      }
    )
  }

  getPmp() {
    this.pmpService.url = `${environment.URLRestFullApi}/Pmp?ProductId=${this.product._id}`;
    this.pmpService.getAll()
      .subscribe(response => {
        this.pmps = response;
      })
  }


  getPmpParameters(parameter: SeedTrialModel) {
    this.pmpService.url =
      `${environment.URLRestFullApi}/pmp?ProductId=${parameter.ProductId}&TrialSeason=${parameter.TrialSeason}&Region=${parameter.Region}`;
    this.pmpService.getAll()
      .subscribe(response => {
        this.pmps = response;

      });

  }


  //   /// Trials distinct
  //   for (var i = 0, l = trials.length; i < l; i++)
  //     if (this.Trials.filter(x => trials[i].TrialSeason == x.TrialSeason && x.Region == trials[i].Region).length == 0) {
  //       this.Trials.push(trials[i]);
  //     }

  expPanelOpened(pmp: ProductMarketProfileModel) {
    this.pmp = pmp;
    this.screenings = [];
    this.intros = [];

    let intro: VariantDetail;
    let screening: VariantDetail

    this.pmp.VariantDetail.forEach(t => {
      screening = new VariantDetail();
      intro = new VariantDetail();
      switch (t.Status) {
        case '1ST':
        case '2ND':
          screening.VariantId = t.VariantId;
          screening.VariantTitle = t.VariantTitle;
          screening.Status = t.Status;
          screening.Result = t.Result;
          this.screenings.push(screening);

          break;
        case 'Intro':
        case 'GT':
          intro.VariantId = t.VariantId;
          intro.VariantTitle = t.VariantTitle;
          intro.Status = t.Status;
          intro.Result = t.Result;
          this.intros.push(intro);

          break;
      }
    });
    if (this.screenings.length == 0)
      this.screenings.push(new VariantDetail());

    if (this.intros.length == 0)
      this.intros.push(new VariantDetail());

    if (pmp.Comerical.length == 0)
      pmp.Comerical.push(new ComericalDetail());

    if (pmp.Competitor.length == 0)
      pmp.Competitor.push(new CompetitorDetail());

    this.screeningDataSource.update(this.screenings);
    this.introDataSource.update(this.intros);
    this.commericalDataSource.update(pmp.Comerical);
    this.competitorDataSource.update(pmp.Competitor);


    //TODO: Grafik Verileri Dinamik Yapılacak

    this.chartData();
    let newdata = new google.visualization.DataTable(
      {
        cols: [{ id: 'Variates', label: 'Variates', type: 'string' },
        { id: 'Percentage', label: 'Percentage', type: 'number' }],
        rows: this.rows
      }
    )
    this.pieChartData = Object.create(this.pieChartData);
    this.pieChartData.dataTable = newdata;
  }

  variantSelect(element: any) {

    if (element.VariantTitle == undefined || this.product == undefined)
      element.VariantTitle = '';

    let data = {
      rows: this.product.Variant,
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
    },
      error => {
        console.log(error);
      }
    )
  }


  addCompetitorProduct(element: CompetitorDetail, competitor: CompetitorModel): void {
    const firmData = { "Title": element.CompetitorProductTitle, "Message": "Ürünü Bulunamadı. Eklensin mi?", "Type": ConfirmType.Add }
    //    const type = ConfirmType.Delete;
    let dialogRef = this.dialog.open(ConfirmDialogComponent, { data: firmData })
    dialogRef.afterClosed().subscribe(result => {
      if (result == "1") {
        let dialogRef = this.dialog.open(CompetitorDialogComponent
          , { data: competitor, disableClose: true })
        dialogRef.afterClosed().subscribe(result => {
          if (result == "1") {
            let competitorProduct = new CompetitorProduct();
            competitorProduct.SeedId = this.seed._id;
            competitorProduct.CategoryTitle = this.seed.Title;
            competitorProduct.ProductId = this.product._id;
            competitorProduct.ProductTitle = this.product.Title;
            competitor.Products.push(competitorProduct);
            this.competitorservice.url = `${environment.URLRestFullApi}/competitor`
            this.competitorservice.update(competitor)
              .subscribe(response => {
                console.log(response);
              })
            this.snackBar.open('Kayıt Eklendi', '', { duration: 3000 });
          }
        });
      }
    })
  }

  competitorProductControl(element: CompetitorDetail) {
    console.log(element);
    if (element.CompetitorId == undefined) return;
    if (element.Products == undefined) {
      this.competitorservice.url = `${environment.URLRestFullApi}/competitorById/${element.CompetitorId}`;
      this.competitorservice.getOne()
        .subscribe(response => {
          element.Products = response.Products.filter(x => x.ProductId == this.product._id);
        })
    }
    //let products: CompetitorProduct[]=[];
    if (element.CompetitorProductTitle.length > 0)
      element.Products = element.Products.filter(p => p.Title.toLowerCase().indexOf(element.CompetitorProductTitle.toLowerCase()) !== -1);
    if (element.Products.length == 1) {
      element.CompetitorProductTitle = element.Products[0].Title;
      element.CompetitorProductId = element.Products[0]._id;
    } else if (element.Products.length > 1) {
      this.getCompetitorProduct(element.Products, element)
    } else {
      ////////////////////////////

      const productData = { "Title": element.CompetitorProductTitle, "Message": "Bulunamadı. Eklensin mi?", "Type": ConfirmType.Add }
      //    const type = ConfirmType.Delete;
      let dialogRef = this.dialog.open(ConfirmDialogComponent, { data: productData })
      dialogRef.afterClosed().subscribe(result => {
        if (result == "1") {
          let competitor: CompetitorModel
          this.competitorservice.url = `${environment.URLRestFullApi}/competitorById/${element.CompetitorId}`;
          this.competitorservice.getOne()
            .subscribe(response => {
              competitor = response;
              let prd = new CompetitorProduct()
              prd.SeedId = this.seed._id;
              prd.CategoryTitle = this.seed.Title;
              prd.ProductId = this.product._id;
              prd.ProductTitle = this.product.Title;
              prd.Title = element.CompetitorProductTitle;
              competitor.Products.push(prd)
              this.competitorservice.url = `${environment.URLRestFullApi}/competitor`;
              this.competitorservice.update(competitor)
                .subscribe(resp => {
                  this.snackBar.open(resp.Title + " Firmasına Çeşit Eklendi", '', { duration: 3000 });
                  element.CompetitorProductId = resp.Products.find(p => p.Title == element.CompetitorProductTitle)._id;
                },
                  error => {
                    this.snackBar.open(error.error.message, '', { duration: 3000 });
                  });
            })
        }
      })

      /////////////////////////////////////
    }

  }

  competitorProductSelect(element: CompetitorDetail) {
    if (element.CompetitorId == undefined) return;
    if (element.Products == undefined) {
      this.competitorservice.url = `${environment.URLRestFullApi}/competitorById/${element.CompetitorId}`;
      this.competitorservice.getOne()
        .subscribe(response => {
          element.Products = response.Products.filter(x => x.ProductId == this.product._id);
          this.getCompetitorProduct(element.Products, element)
        })
    }
    else {
      element.Products = element.Products.filter(x => x.ProductId == this.product._id);
      this.getCompetitorProduct(element.Products, element)
    }
  }

  getCompetitorProduct(pdata, element) {
    let data = {
      rows: pdata,
      columns: [
        { name: 'Çeşit', prop: 'Title' }
      ],
      filterText: 'Filtre edeceğiniz çeşit adını giriniz...'
    }

    let dialogRef = this.dialog.open(SeedInputDialogComponent, { data: data, hasBackdrop: false, autoFocus: true, maxHeight: '600px' })
    dialogRef.afterClosed().subscribe(result => {
      if (result === "-1") return;
      element.CompetitorProductTitle = result.Title;
      element.CompetitorProductId = result._id;
    },
      error => {
        this.snackBar.open(error.message, '', { duration: 3000 })
      }
    )
  }

  competitorControl(arg0: CompetitorDetail, index: number) {
    if (arg0.CompetitorTitle.length == 0) return;
    this.competitorservice.url = `${environment.URLRestFullApi}/competitorByTitle/${arg0.CompetitorTitle}`;
    this.competitorservice.getAll()
      .subscribe(response => {
        if (response.length == 0) {
          const firmData = { "Title": arg0.CompetitorTitle, "Message": "Firması Bulunamadı. Eklensin mi?", "Type": ConfirmType.Add }
          let dialogRef = this.dialog.open(ConfirmDialogComponent, { data: firmData })
          dialogRef.afterClosed().subscribe(result => {
            if (result == "1") {
              let competitor = new CompetitorModel();
              competitor.Title = arg0.CompetitorTitle;
              let dialogRef = this.dialog.open(CompetitorDialogComponent
                , { data: competitor, disableClose: true })
              dialogRef.afterClosed().subscribe(result => {
                if (result == "1") {
                  arg0.CompetitorId = competitor._id;
                  arg0.CompetitorTitle = competitor.Title;
                  arg0.Products = competitor.Products.filter(x => x.ProductId == this.product._id);
                  this.snackBar.open('Kayıt Eklendi', '', { duration: 3000 });
                }
              });
            }
          })
        } else if (response.length > 1) {
          this.getCompetitor(response, index)
        }
        else {
          arg0.CompetitorId = response[0]._id
          arg0.CompetitorTitle = response[0].Title
          arg0.Products = response[0].Products.filter(x => x.ProductId == this.product._id);
        }
      })
  }
  competitorSelect(index: number) {

    let competitors: CompetitorModel[] = []
    this.competitorservice.url = `${environment.URLRestFullApi}/competitors`;
    this.competitorservice.getAll()
      .subscribe(response => {
        console.log(response)
        competitors = response;
        this.getCompetitor(competitors, index);
      })
  }
  getCompetitor(cdata, index) {
    let data = {
      rows: cdata,
      columns: [
        { name: 'Ünvan', prop: 'Title' }
      ],
      filterText: 'Filtre edeceğiniz Firma adını giriniz...'
    }

    let dialogRef = this.dialog.open(SeedInputDialogComponent, { data: data, hasBackdrop: false, autoFocus: true, maxHeight: '600px' })
    dialogRef.afterClosed().subscribe(result => {
      if (result === "-1") return;
      this.competitors[index].CompetitorTitle = result.Title;
      this.competitors[index].CompetitorId = result._id;
      this.competitors[index].Products = result.Products.filter(x => x.ProductId == this.product._id);
      this.competitorDataSource.update(this.competitors);
    },
      error => {
        this.snackBar.open(error.message, '', { duration: 3000 })
      }
    )
  }


  //TODO: Burası Neden kaldı ne yapacaktım ???????
  // onModelChange(element:any,model:string,table:string,pIndex:number,event:any):void{

  // }

}
