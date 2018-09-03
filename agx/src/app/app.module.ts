import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { routedComponents, AppRoutingModule } from './app.router';
import { AuthGuard } from './_guard/auth.guard.service';
import { AuthenticationService, UserService, EnumsMock, GenericService } from './_services/index';
import { AppMaterialModule } from './_app-material/app-material';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { TextMaskModule } from 'angular2-text-mask';


import 'hammerjs';

import { SeedInputDialogComponent } from './_directives/seedinputdialog/seedinputdialog.component';
import { PersonDialogComponent } from './person/persondialog/persondialog.component';
import { ConfirmDialogComponent } from './_directives/confirm.dialog/confirm.dialog.component';
import { GrowerDialogComponent } from './grower/growerdialog/growerdialog.component';
import { SeedCardDialogComponent } from './seed.card/seedcarddialog/seedcarddialog.component'
import { JwtInterceptor } from './_helpers/index';


import { IsDeletePipe } from './_helpers/is-delete.pipe';
import { SelectDialogComponent } from './_directives/select-dialog/select-dialog.component';
import { UserDialogComponent } from './user/user-dialog/user-dialog.component';
import { GenericFieldComponent } from './_directives/generic-field/generic-field.component';
import { VariantDetailComponent } from './seed.card/variant-detail/variant-detail.component';

import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { ObservationDefinitionDialogComponent } from './observation.definition/observation-definition-dialog/observation-definition-dialog.component';
import { GrowerFilterComponent } from './grower/grower-filter/grower-filter.component';
import { SeasonDialogComponent } from './seed.card/season-dialog/season-dialog.component';
import { CompetitorDialogComponent } from './competitor/competitor-dialog/competitor-dialog.component';
import { PieChartComponent } from './piechart/piechart.component';



// import { CalendarChartComponent } from './_charts/calendar-chart/calendar-chart.component';
// import { PieChartComponent } from './_charts/pie-chart/pie-chart.component';






@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        AppRoutingModule,
        AppMaterialModule,
        BrowserAnimationsModule,
        NgxDatatableModule,
        TextMaskModule,
        Ng2GoogleChartsModule     
    ],
    declarations: [
        AppComponent,
        routedComponents,
        PersonDialogComponent,
        ConfirmDialogComponent,
        GrowerDialogComponent,
        SeedInputDialogComponent,
        SeedCardDialogComponent,
        SelectDialogComponent,
        IsDeletePipe,
        UserDialogComponent,
        GenericFieldComponent,
        VariantDetailComponent,
        ObservationDefinitionDialogComponent,
        GrowerFilterComponent,
        SeasonDialogComponent,
        CompetitorDialogComponent,
        PieChartComponent
    ],
    providers: [
        AuthGuard,
        EnumsMock,
        GenericService,
        AuthenticationService,
        UserService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: JwtInterceptor,
            multi: true
        },

    ],
    entryComponents: [
        PersonDialogComponent,
        ConfirmDialogComponent,
        GrowerDialogComponent,
        SeedInputDialogComponent,
        SeedCardDialogComponent,
        SelectDialogComponent,
        UserDialogComponent,
        VariantDetailComponent,
        SeasonDialogComponent,
        CompetitorDialogComponent,
        ObservationDefinitionDialogComponent
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }

