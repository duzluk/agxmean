webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/_app-material/app-material.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppMaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_cdk_table__ = __webpack_require__("../../../cdk/esm5/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material_moment_adapter__ = __webpack_require__("../../../material-moment-adapter/esm5/material-moment-adapter.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppMaterialModule = /** @class */ (function () {
    function AppMaterialModule() {
    }
    AppMaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_cdk_table__["m" /* CdkTableModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["f" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["g" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["h" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["i" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["j" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["k" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["l" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["n" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["p" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["r" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["s" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["t" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["u" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["v" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["w" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["x" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["y" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["z" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["A" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["B" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["C" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["D" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["F" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["E" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["H" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["I" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["K" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["L" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["M" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["N" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["J" /* MatStepperModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["q" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material_moment_adapter__["b" /* MatMomentDateModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_flex_layout__["a" /* FlexLayoutModule */]
            ]
        })
    ], AppMaterialModule);
    return AppMaterialModule;
}());



/***/ }),

/***/ "../../../../../src/app/_directives/confirm.dialog/confirm.dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"dialog-card\">\r\n  <mat-card-header>\r\n    <mat-card-title >\r\n      <mat-toolbar color=\"{{toolbarColor}}\">\r\n        {{data.Title}}\r\n      </mat-toolbar>\r\n    </mat-card-title>\r\n  </mat-card-header>\r\n  <mat-card-content>\r\n    <p><p></p>\r\n       <h3> {{data.Message}} </h3>\r\n      <p></p>\r\n        Eminmisiniz?\r\n      <p></p>\r\n  </mat-card-content>\r\n  <mat-card-actions>\r\n    <button mat-button [mat-dialog-close]=\"1\" (click)=\"confirm()\"> {{confirmButtonText}}</button>\r\n    <button mat-button (click)=\"onNoClick()\" tabindex=\"-1\">{{confirmCancelButtonText}}</button>\r\n  </mat-card-actions>\r\n</mat-card>"

/***/ }),

/***/ "../../../../../src/app/_directives/confirm.dialog/confirm.dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmDialogComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ConfirmType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ConfirmModel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var ConfirmDialogComponent = /** @class */ (function () {
    function ConfirmDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.toolbarColor = "accent";
        this.confirmButtonText = "";
        this.confirmCancelButtonText = "Vazgeç";
        switch (this.data.Type) {
            case ConfirmType.Delete:
                this.confirmButtonText = "Sil";
                data.Message = "Dikkat Kayıt Silinecek!!!";
                this.toolbarColor = "warn";
                break;
            case ConfirmType.Add:
                this.confirmButtonText = "Ekle";
                this.data.Message = "Kayıt Eklenecek";
                this.toolbarColor = "primary";
                break;
            case ConfirmType.Update:
                this.confirmButtonText = "Kaydet";
                this.confirmCancelButtonText =
                    this.data.Message = "Değişiklikler Kaydedilecek";
                this.toolbarColor = "primary";
                break;
            default:
                this.confirmButtonText = "Evet";
                this.confirmCancelButtonText = "Hayır";
        }
    }
    ConfirmDialogComponent.prototype.ngOnInit = function () {
    };
    ConfirmDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    ConfirmDialogComponent.prototype.confirm = function () {
        this.dialogRef.close("1");
    };
    ConfirmDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-confirm.dialog',
            template: __webpack_require__("../../../../../src/app/_directives/confirm.dialog/confirm.dialog.component.html"),
            styles: ['confirm.dialog.component.css']
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MatDialogRef */],
            ConfirmModel])
    ], ConfirmDialogComponent);
    return ConfirmDialogComponent;
}());

var ConfirmType;
(function (ConfirmType) {
    ConfirmType[ConfirmType["Delete"] = 0] = "Delete";
    ConfirmType[ConfirmType["Update"] = 1] = "Update";
    ConfirmType[ConfirmType["Add"] = 2] = "Add";
    ConfirmType[ConfirmType["Other"] = 3] = "Other";
})(ConfirmType || (ConfirmType = {}));
var ConfirmModel = /** @class */ (function () {
    function ConfirmModel() {
    }
    return ConfirmModel;
}());



/***/ }),

/***/ "../../../../../src/app/_directives/generic-field/FieldInfo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FieldInfo; });
var FieldInfo = /** @class */ (function () {
    function FieldInfo(_id, Type, Caption, Value, Options, IsActive, IsDeleted) {
        if (IsActive === void 0) { IsActive = true; }
        if (IsDeleted === void 0) { IsDeleted = false; }
        this._id = _id;
        this.Type = Type;
        this.Caption = Caption;
        this.Value = Value;
        this.Options = Options;
        this.IsActive = IsActive;
        this.IsDeleted = IsDeleted;
    }
    return FieldInfo;
}());



/***/ }),

/***/ "../../../../../src/app/_directives/generic-field/generic-field.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/_directives/generic-field/generic-field.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <!-- <span>{{fieldInfo.Caption}}</span> -->\n\n  <span [ngSwitch]=\"fieldInfo.Type\">\n\n    <mat-checkbox id=\"element{{col}}-{{row}}\" *ngSwitchCase=\"'CheckBox'\" [value]=\"fieldInfo.Value\" [(ngModel)]=\"fieldInfo.Value\" (ngModelChange)=\"onChangeValue(fieldInfo)\"></mat-checkbox>\n\n    <mat-form-field *ngSwitchCase=\"'Text'\" style=\"width: 100%\" >\n      <input id=\"element{{col}}-{{row}}\" matInput placeholder=\"{{fieldInfo.Caption}}\" type=\"text\" [value]=\"fieldInfo.Value\"  \n        [(ngModel)]=\"fieldInfo.Value\" (ngModelChange)=\"onChangeValue(fieldInfo)\" (keydown)=\"keydown($event,col,row)\">\n    </mat-form-field>\n\n    <mat-form-field *ngSwitchCase=\"'TextArea'\" style=\"width: 100%\" >\n        <textarea id=\"element{{col}}-{{row}}\" matInput placeholder=\"{{fieldInfo.Caption}}\" type=\"text\" [value]=\"fieldInfo.Value\"  \n          [(ngModel)]=\"fieldInfo.Value\" (ngModelChange)=\"onChangeValue(fieldInfo)\" (keydown)=\"keydown($event,col,row)\"> </textarea>\n      </mat-form-field>\n  \n\n    <mat-form-field *ngSwitchCase=\"'Number'\"  style=\"width: 100%\">\n      <input id=\"element{{col}}-{{row}}\" matInput placeholder=\"{{fieldInfo.Caption}}\" type=\"text\" [value]=\"fieldInfo.Value\" [textMask]=\"{mask: numberMask}\"\n        [(ngModel)]=\"fieldInfo.Value\" (ngModelChange)=\"onChangeValue(fieldInfo)\" (keydown)=\"keydown($event,col,row)\">\n    </mat-form-field>\n\n\n    <mat-form-field *ngSwitchCase=\"'Telephone'\"  style=\"width: 100%\">\n      <input id=\"element{{col}}-{{row}}\" matInput placeholder=\"{{fieldInfo.Caption}}\" type=\"text\" [value]=\"fieldInfo.Value\" [textMask]=\"{mask: telNoMask}\"\n        [(ngModel)]=\"fieldInfo.Value\" (ngModelChange)=\"onChangeValue(fieldInfo)\" (keydown)=\"keydown($event,col,row)\">\n    </mat-form-field>\n\n    <mat-form-field *ngSwitchCase=\"'Option'\"  style=\"width: 100%\">\n      <mat-select id=\"element{{col}}-{{row}}\" type=\"text\" placeholder=\"{{fieldInfo.Caption}}\" [(ngModel)]=\"fieldInfo.Value\"  [(value)]=\"fieldInfo.Value\"   (ngModelChange)=\"onChangeValue(fieldInfo)\">\n        <mat-option *ngFor=\"let option of fieldInfo.Options\" [value]=\"option\">\n          {{ option }}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n\n    <mat-form-field *ngSwitchCase=\"'Datepicker'\" style=\"width: 100%\" >\n      <input id=\"element{{col}}-{{row}}\" matInput [matDatepicker]=\"picker\" placeholder=\"{{fieldInfo.Caption}}\" \n        [(ngModel)]=\"fieldInfo.Value\" (ngModelChange)=\"onChangeValue(fieldInfo)\" (keydown)=\"keydown($event,col,row)\"  >\n      <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n      <mat-datepicker #picker></mat-datepicker>\n    </mat-form-field>\n\n    <mat-slide-toggle id=\"element{{col}}-{{row}}\" *ngSwitchCase=\"'Slide-Toggle'\" [color]=\"primary\" [checked]=\"checked\" [(ngModel)]=\"fieldInfo.Value\" (ngModelChange)=\"onChangeValue(fieldInfo)\">\n    </mat-slide-toggle>\n\n  </span>\n</div>"

/***/ }),

/***/ "../../../../../src/app/_directives/generic-field/generic-field.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GenericFieldComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__FieldInfo__ = __webpack_require__("../../../../../src/app/_directives/generic-field/FieldInfo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material_moment_adapter__ = __webpack_require__("../../../material-moment-adapter/esm5/material-moment-adapter.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_text_mask_addons_dist_createNumberMask__ = __webpack_require__("../../../../text-mask-addons/dist/createNumberMask.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_text_mask_addons_dist_createNumberMask___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_text_mask_addons_dist_createNumberMask__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_text_mask_addons_dist_createAutoCorrectedDatePipe__ = __webpack_require__("../../../../text-mask-addons/dist/createAutoCorrectedDatePipe.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_text_mask_addons_dist_createAutoCorrectedDatePipe___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_text_mask_addons_dist_createAutoCorrectedDatePipe__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var GenericFieldComponent = /** @class */ (function () {
    function GenericFieldComponent() {
        //  @Input() value:any;
        this.valueChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.keypress = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.telNoMask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
        this.numberMask = __WEBPACK_IMPORTED_MODULE_4_text_mask_addons_dist_createNumberMask___default()({
            prefix: '',
            suffix: '',
            includeThousandsSeparator: false // Binler Basamağı ayıracı.
        });
        this.autoCorrectedDatePipe = __WEBPACK_IMPORTED_MODULE_5_text_mask_addons_dist_createAutoCorrectedDatePipe___default()('dd.mm.yyyy');
        this.dateMask = [/\d/, /\d/, '.', /\d/, /\d/, '.', /\d/, /\d/, /\d/, /\d/];
    }
    GenericFieldComponent.prototype.ngOnInit = function () {
        // if(this.value!=undefined)
        // this.fieldInfo.Value=this.value;
    };
    /*
    createNumberMask
    createNumberMask returns a numberMask function that will format user input as currency. createNumberMask accepts an object with the following keys:
    
    prefix (string): what to display before the amount. Defaults to '$'.
    suffix (string): what to display after the amount. Defaults to empty string.
    includeThousandsSeparator (boolean): whether or not to separate thousands. Defaults to to true.
    thousandsSeparatorSymbol (string): character with which to separate thousands. Default to ','.
    allowDecimal (boolean): whether or not to allow the user to enter a fraction with the amount. Default to false.
    decimalSymbol (string): character that will act as a decimal point. Defaults to '.'
    decimalLimit (number): how many digits to allow after the decimal. Defaults to 2
    integerLimit (number): limit the length of the integer number. Defaults to null for unlimited
    requireDecimal (boolean): whether or not to always include a decimal point and placeholder for decimal digits after the integer. Defaults to false.
    allowNegative (boolean): whether or not to allow negative numbers. Defaults to false
    allowLeadingZeroes (boolean): whether or not to allow leading zeroes. Defaults to false
    */
    GenericFieldComponent.prototype.onChangeValue = function (fieldInfo) {
        this.valueChange.emit(fieldInfo);
    };
    GenericFieldComponent.prototype.keydown = function (event, colIndex, rowIndex) {
        var tag = "element" + colIndex;
        this.keypress.emit({ event: event, tag: tag, rowIndex: rowIndex });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__FieldInfo__["a" /* FieldInfo */])
    ], GenericFieldComponent.prototype, "fieldInfo", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], GenericFieldComponent.prototype, "row", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], GenericFieldComponent.prototype, "col", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], GenericFieldComponent.prototype, "valueChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], GenericFieldComponent.prototype, "keypress", void 0);
    GenericFieldComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'generic-field',
            template: __webpack_require__("../../../../../src/app/_directives/generic-field/generic-field.component.html"),
            styles: [__webpack_require__("../../../../../src/app/_directives/generic-field/generic-field.component.css")],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MAT_DATE_LOCALE */], useValue: 'tr-TR' },
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* DateAdapter */], useClass: __WEBPACK_IMPORTED_MODULE_3__angular_material_moment_adapter__["c" /* MomentDateAdapter */], deps: [__WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MAT_DATE_LOCALE */]] },
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MAT_DATE_FORMATS */], useValue: __WEBPACK_IMPORTED_MODULE_3__angular_material_moment_adapter__["a" /* MAT_MOMENT_DATE_FORMATS */] }
            ],
        })
    ], GenericFieldComponent);
    return GenericFieldComponent;
}());



/***/ }),

/***/ "../../../../../src/app/_directives/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__seedinputdialog_seedinputdialog_component__ = __webpack_require__("../../../../../src/app/_directives/seedinputdialog/seedinputdialog.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__seedinputdialog_seedinputdialog_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__confirm_dialog_confirm_dialog_component__ = __webpack_require__("../../../../../src/app/_directives/confirm.dialog/confirm.dialog.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__confirm_dialog_confirm_dialog_component__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__confirm_dialog_confirm_dialog_component__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__confirm_dialog_confirm_dialog_component__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__select_dialog_select_dialog_component__ = __webpack_require__("../../../../../src/app/_directives/select-dialog/select-dialog.component.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__generic_field_generic_field_component__ = __webpack_require__("../../../../../src/app/_directives/generic-field/generic-field.component.ts");
/* unused harmony namespace reexport */






/***/ }),

/***/ "../../../../../src/app/_directives/seedinputdialog/seedinputdialog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.fullscreen {\r\n    position:initial !important;\r\n    height: 400px;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    width: 100%;\r\n  \r\n  }\r\n\r\n  .container{\r\n      min-width: 450px;\r\n      min-height: 450px;\r\n  }\r\n\r\n  .datatable{\r\n      max-width: 450px;\r\n      width: 400px;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/_directives/seedinputdialog/seedinputdialog.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <input matInput type='text' style='padding:8px;margin:15px auto;width:80%;' placeholder={{placeholder}} (keyup)='updateFilter($event)'\n  />\n  <div class=\"container\">\n    <ngx-datatable #table class=\"material fullscreen\" style=\"margin: 0,50\" [columns]=\"columns\" [columnMode]=\"'force'\" [headerHeight]=\"50\"\n      [footerHeight]=\"0\" [rowHeight]=\"50\" [selected]=\"selected\" [selectionType]=\"'single'\" (activate)=\"onActivate($event)\"\n      (select)=\"onSelect($event)\" (dblclick)=\"onDblClick($event)\" [scrollbarV]=\"true\" [scrollbarH]=\"true\" [rows]=\"rows\">\n    </ngx-datatable>\n  </div>\n\n  <button mat-raised-button [type]=\"submit\" [mat-dialog-close]=\"selected[0]\" (click)=\"confirm\" color=\"warn\">Seç</button>\n  <button mat-raised-button (click)=\"onNoClick()\" tabindex=\"-1\">Vazgeç</button>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/_directives/seedinputdialog/seedinputdialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SeedInputDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var SeedInputDialogComponent = /** @class */ (function () {
    function SeedInputDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.table = {
            offset: 0,
        };
        //   @ViewChild(DatatableComponent) table: DatatableComponent;
        this.columns = this.data.columns;
        this.placeholder = this.data.filterText;
        this.index = 0;
        this.temp = data.rows.slice();
        // push our inital complete list
        this.rows = data.rows;
        if (this.rows.length > 0)
            this.selected = [this.rows[0]];
    }
    SeedInputDialogComponent.prototype.ngOnInit = function () {
        this.dialogRef.updateSize("500px", "600px");
        console.log("hopppp");
    };
    SeedInputDialogComponent.prototype.onSelect = function (_a) {
        var selected = _a.selected;
        //console.log('Select Event', selected, this.selected);
        this.selectedRow = selected;
    };
    SeedInputDialogComponent.prototype.onActivate = function (event) {
        //console.log('Activate Event', event);
        if (event.event.type == "dblclick") {
            //console.log("çift tık")
            //this.selectedRow=event.row;  
            this.dialogRef._containerInstance = this.selectedRow;
            this.dialogRef.close();
        }
    };
    SeedInputDialogComponent.prototype.confirm = function () {
        this.dialogRef._containerInstance = this.selectedRow;
        this.dialogRef.close();
    };
    SeedInputDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close("-1");
    };
    SeedInputDialogComponent.prototype.updateFilter = function (event) {
        var val = event.target.value.toLowerCase();
        if (event.key == 'ArrowDown') {
            if (this.rows.length - 1 > this.index) {
                this.index++;
            }
        }
        if (event.key == 'ArrowUp') {
            if (this.index > 0) {
                this.index--;
            }
        }
        // filter our data
        var temp = this.temp.filter(function (d) {
            if (d.Title != undefined)
                return d.Title.toLowerCase().indexOf(val) !== -1 || !val;
            else
                return d.ENumber.toLowerCase().indexOf(val) !== -1 || !val;
        });
        // update the rows
        this.rows = temp;
        this.selected = [this.rows[this.index]];
        // Whenever the filter changes, always go back to the first page
        this.table.offset = 0;
    };
    SeedInputDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-seedinputdialog',
            template: __webpack_require__("../../../../../src/app/_directives/seedinputdialog/seedinputdialog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/_directives/seedinputdialog/seedinputdialog.component.css")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MatDialogRef */], Object])
    ], SeedInputDialogComponent);
    return SeedInputDialogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/_directives/select-dialog/select-dialog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".category-table {\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1 1 auto;\r\n            flex: 1 1 auto;\r\n    overflow: auto;\r\n    max-height: 350px;\r\n    min-width: 300px; \r\n  }\r\n  .highlight{\r\n    background-color:#42A948;\r\n    \r\n  }\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/_directives/select-dialog/select-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "\n  <div fxLayout=\"column\" fxLayoutAlign=\"end stretch\" class=\"container\">\n    <div class=\"container\">\n      <mat-table #variantTable [dataSource]=\"dataSource\" class=\"category-table\">\n        <!-- Code Column -->\n        <ng-container matColumnDef=\"Code\">\n          <mat-header-cell *matHeaderCellDef class=\"example-header-cell\"> Kodu </mat-header-cell>\n          <mat-cell *matCellDef=\"let row;let rindex=index\" class=\"example-cell\">\n            {{row.Code}}\n          </mat-cell>\n        </ng-container>\n\n        <!-- Title Column -->\n        <ng-container matColumnDef=\"Title\">\n          <mat-header-cell *matHeaderCellDef class=\"example-header-cell\"> Açıklama </mat-header-cell>\n          <mat-cell *matCellDef=\"let row;let rindex=index\" class=\"example-cell\">\n            {{row.Title}}\n          </mat-cell>\n        </ng-container>\n        <mat-header-row *matHeaderRowDef=\"displayedColumns\" class=\"example-header-row\"></mat-header-row>\n        <mat-row *matRowDef=\"let row; columns: displayedColumns;\" [ngClass]=\"{'highlight': selectedRowIndex == row._id}\" class=\"example-row\"\n        (click)=\"rowClick(row,rindex)\">\n        </mat-row>\n      </mat-table>\n    </div>\n\n    <button mat-raised-button [type]=\"submit\" [mat-dialog-close]=\"selectedRow\" (click)=\"confirm\" color=\"warn\">Seç</button>\n    <button mat-raised-button (click)=\"onNoClick()\" tabindex=\"-1\">Vazgeç</button>\n\n    </div>"

/***/ }),

/***/ "../../../../../src/app/_directives/select-dialog/select-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_generic_service__ = __webpack_require__("../../../../../src/app/_services/generic.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers__ = __webpack_require__("../../../../../src/app/_helpers/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var SelectDialogComponent = /** @class */ (function () {
    function SelectDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.displayedColumns = ['Code', 'Title'];
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_3__helpers__["a" /* GenericDataSource */](data);
    }
    SelectDialogComponent.prototype.ngOnInit = function () {
        alert("hopp");
    };
    SelectDialogComponent.prototype.rowClick = function (row, index) {
        this.selectedRowIndex = row._id;
        this.selectedRow = row;
    };
    SelectDialogComponent.prototype.confirm = function () {
        this.dialogRef._containerInstance = this.selectedRow;
        this.dialogRef.close();
    };
    SelectDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    SelectDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-select-dialog',
            template: __webpack_require__("../../../../../src/app/_directives/select-dialog/select-dialog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/_directives/select-dialog/select-dialog.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_generic_service__["a" /* GenericService */]]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MatDialogRef */], Object])
    ], SelectDialogComponent);
    return SelectDialogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/_guard/auth.guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__("../../../../../src/app/_services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, enums) {
        this.router = router;
        this.enums = enums;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var currentUser = localStorage.getItem('currentUser');
        if (currentUser) {
            // console.log(this.enums.user);
            // console.log(route);
            // logged in so return true
            var roll = JSON.parse(currentUser).roll.toString();
            var roles = route.data["roles"];
            if (roles)
                if (roles.indexOf(roll) !== -1)
                    return true;
                else {
                    return false; //this.router.navigate(['']);
                }
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__services__["b" /* EnumsMock */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/_helpers/ChartConfig.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PieChartConfig; });
/* unused harmony export CalendarChartConfig */
var PieChartConfig = /** @class */ (function () {
    function PieChartConfig(title, pieHole, width, height) {
        this.title = title;
        this.pieHole = pieHole;
        this.width = width;
        this.height = height;
    }
    return PieChartConfig;
}());

var CalendarChartConfig = /** @class */ (function () {
    function CalendarChartConfig(title, height) {
        this.title = title;
        this.height = height;
    }
    return CalendarChartConfig;
}());



/***/ }),

/***/ "../../../../../src/app/_helpers/GoogleChartsBaseService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleChartsBaseService; });
var GoogleChartsBaseService = /** @class */ (function () {
    function GoogleChartsBaseService() {
        google.charts.load('current', { 'packages': ['corechart'] });
    }
    GoogleChartsBaseService.prototype.buildChart = function (data, chartFunc, options) {
        var func = function (chartFunc, options) {
            var datatable = google.visualization.arrayToDataTable(data);
            chartFunc().draw(datatable, options);
        };
        var callback = function () { return func(chartFunc, options); };
        google.charts.setOnLoadCallback(callback);
    };
    return GoogleChartsBaseService;
}());



/***/ }),

/***/ "../../../../../src/app/_helpers/datasource.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GenericDataSource; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_cdk_collections__ = __webpack_require__("../../../cdk/esm5/collections.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var GenericDataSource = /** @class */ (function (_super) {
    __extends(GenericDataSource, _super);
    function GenericDataSource(data) {
        var _this = _super.call(this) || this;
        _this.dataSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"]([]);
        _this.dataSubject.next(data);
        return _this;
    }
    GenericDataSource.prototype.data = function () {
        return this.dataSubject.value;
    };
    GenericDataSource.prototype.update = function (data) {
        this.dataSubject.next(data);
    };
    GenericDataSource.prototype.connect = function () {
        //return this.categoryService.getAll() ;
        return this.dataSubject;
    };
    GenericDataSource.prototype.disconnect = function () { };
    return GenericDataSource;
}(__WEBPACK_IMPORTED_MODULE_0__angular_cdk_collections__["a" /* DataSource */]));



/***/ }),

/***/ "../../../../../src/app/_helpers/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__jwt_interceptor__ = __webpack_require__("../../../../../src/app/_helpers/jwt.interceptor.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__jwt_interceptor__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__datasource__ = __webpack_require__("../../../../../src/app/_helpers/datasource.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__datasource__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__("../../../../../src/app/_helpers/utils.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ChartConfig__ = __webpack_require__("../../../../../src/app/_helpers/ChartConfig.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__ChartConfig__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__GoogleChartsBaseService__ = __webpack_require__("../../../../../src/app/_helpers/GoogleChartsBaseService.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_4__GoogleChartsBaseService__["a"]; });
 // Auth hedader
 // GenericDataSource - MatTable ve CdkTable datasource





/***/ }),

/***/ "../../../../../src/app/_helpers/is-delete.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IsDeletePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var IsDeletePipe = /** @class */ (function () {
    function IsDeletePipe() {
    }
    IsDeletePipe.prototype.transform = function (value, filter) {
        if (!filter)
            return value;
        return value.filter(function (p) { return p.IsDeleted == filter; });
    };
    IsDeletePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'isDelete'
        })
    ], IsDeletePipe);
    return IsDeletePipe;
}());



/***/ }),

/***/ "../../../../../src/app/_helpers/jwt.interceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JwtInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var JwtInterceptor = /** @class */ (function () {
    function JwtInterceptor() {
    }
    JwtInterceptor.prototype.intercept = function (request, next) {
        // token alındıysa header'a eklenir
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: "" + currentUser.token
                }
            });
        }
        return next.handle(request);
    };
    JwtInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], JwtInterceptor);
    return JwtInterceptor;
}());



/***/ }),

/***/ "../../../../../src/app/_helpers/utils.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Utils */
/* unused harmony export DynClass */
var Utils = /** @class */ (function () {
    function Utils() {
    }
    Utils.getProperties = function (obj) {
        var result = [];
        for (var property in obj) {
            if (obj.hasOwnProperty(property) && !property.startsWith('_')) {
                result.push(property);
            }
        }
        return result;
    };
    return Utils;
}());

var DynClass = /** @class */ (function () {
    function DynClass(json) {
        var _this = this;
        var parsedJson = JSON.parse(json);
        Object.keys(parsedJson).forEach(function (key) {
            _this[key] = parsedJson[key];
        });
        this['someProperty'] = true;
    }
    return DynClass;
}());



/***/ }),

/***/ "../../../../../src/app/_models/CompetitorModel.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompetitorModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CompetitorProduct; });
/* unused harmony export CompetitorProductDetail */
var CompetitorModel = /** @class */ (function () {
    function CompetitorModel() {
        this.IsActive = true;
        this.IsDeleted = false;
        this.Products = [];
    }
    return CompetitorModel;
}());

var CompetitorProduct = /** @class */ (function () {
    function CompetitorProduct() {
        this.Detail = [];
    }
    return CompetitorProduct;
}());

var CompetitorProductDetail = /** @class */ (function () {
    function CompetitorProductDetail() {
    }
    return CompetitorProductDetail;
}());



/***/ }),

/***/ "../../../../../src/app/_models/GrowerModel.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GrowerModel; });
var GrowerModel = /** @class */ (function () {
    function GrowerModel() {
        this.IsActive = true;
        this.IsDelete = false;
    }
    return GrowerModel;
}());



/***/ }),

/***/ "../../../../../src/app/_models/LoginViewModel.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LoginViewModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Authority; });
var LoginViewModel = /** @class */ (function () {
    function LoginViewModel() {
        this.Roll = "";
    }
    return LoginViewModel;
}());

var Authority = /** @class */ (function () {
    function Authority() {
        this.Persons = [];
        this.Modules = [];
    }
    return Authority;
}());



/***/ }),

/***/ "../../../../../src/app/_models/ObservationHeadModel.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ObservationHead; });
var ObservationHead = /** @class */ (function () {
    function ObservationHead() {
        this.GenericFields = [];
        this.IsDeleted = false;
        this.IsActive = true;
    }
    return ObservationHead;
}());



/***/ }),

/***/ "../../../../../src/app/_models/OpenIdDictToken.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export OpenIdDictToken */
var OpenIdDictToken = /** @class */ (function () {
    function OpenIdDictToken() {
    }
    return OpenIdDictToken;
}());



/***/ }),

/***/ "../../../../../src/app/_models/PersonModel.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonModel; });
/* unused harmony export PersonSeed */
var PersonModel = /** @class */ (function () {
    function PersonModel() {
    }
    return PersonModel;
}());

var PersonSeed = /** @class */ (function () {
    function PersonSeed() {
    }
    return PersonSeed;
}());



/***/ }),

/***/ "../../../../../src/app/_models/ProductMarketProfileModel.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ProductMarketProfileModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return VariantDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComericalDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CompetitorDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return MarketInformation; });
var ProductMarketProfileModel = /** @class */ (function () {
    function ProductMarketProfileModel() {
    }
    return ProductMarketProfileModel;
}());

var VariantDetail = /** @class */ (function () {
    function VariantDetail() {
    }
    return VariantDetail;
}());

var ComericalDetail = /** @class */ (function () {
    function ComericalDetail() {
        this.Trend = 0;
    }
    return ComericalDetail;
}());

var CompetitorDetail = /** @class */ (function () {
    function CompetitorDetail() {
        this.CompetitorTitle = "";
        this.CompetitorProductTitle = "";
        this.Trend = 0;
    }
    return CompetitorDetail;
}());

var MarketInformation = /** @class */ (function () {
    function MarketInformation() {
    }
    return MarketInformation;
}());



/***/ }),

/***/ "../../../../../src/app/_models/SeedInputModel.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SeedInputModel; });
var SeedInputModel = /** @class */ (function () {
    function SeedInputModel() {
        this.ProductDetail = [];
        /// Bölge
        this.Region = "";
        /// Tohumu Veren    
        this.Deliverer = "";
        /// Sorumlu
        this.Responsible = "";
    }
    return SeedInputModel;
}());



/***/ }),

/***/ "../../../../../src/app/_models/SeedModel.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SeedModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Variant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Season; });
var SeedModel = /** @class */ (function () {
    function SeedModel() {
        this.ProductDetail = [];
        this.IsActive = true;
        this.IsDeleted = false;
        this.Seasons = [];
    }
    return SeedModel;
}());

var ProductDetail = /** @class */ (function () {
    function ProductDetail() {
        this.Title = "";
        this.IsActive = true;
        this.IsDeleted = false;
        this.Variant = [];
        this.Seasons = [];
    }
    return ProductDetail;
}());

var Variant = /** @class */ (function () {
    function Variant() {
        this.MainUnit = "Adet";
        this.SecondUnit = "Paket";
        this.ConvFact1 = 1;
        this.ConvFact2 = 1;
        this.IsActive = true;
        this.IsDeleted = false;
        this.ENumber = "";
        this.AGCode = "";
        this.TrialYear = "";
        this.Seasons = [];
    }
    return Variant;
}());

var Season = /** @class */ (function () {
    function Season() {
        this.Season = "";
        this.Status = "";
    }
    return Season;
}());



/***/ }),

/***/ "../../../../../src/app/_models/SeedObservationModel.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SeedObservationModel; });
/* unused harmony export ObsrvLine */
/* unused harmony export ObservationLine */
var SeedObservationModel = /** @class */ (function () {
    function SeedObservationModel() {
    }
    return SeedObservationModel;
}());

var ObsrvLine = /** @class */ (function () {
    function ObsrvLine() {
    }
    return ObsrvLine;
}());

var ObservationLine = /** @class */ (function () {
    function ObservationLine() {
    }
    return ObservationLine;
}());



/***/ }),

/***/ "../../../../../src/app/_models/SeedTrialModel.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SeedTrialModel; });
var SeedTrialModel = /** @class */ (function () {
    function SeedTrialModel() {
    }
    return SeedTrialModel;
}());



/***/ }),

/***/ "../../../../../src/app/_models/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__GrowerModel__ = __webpack_require__("../../../../../src/app/_models/GrowerModel.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_0__GrowerModel__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__LoginViewModel__ = __webpack_require__("../../../../../src/app/_models/LoginViewModel.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__LoginViewModel__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_1__LoginViewModel__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__OpenIdDictToken__ = __webpack_require__("../../../../../src/app/_models/OpenIdDictToken.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__PersonModel__ = __webpack_require__("../../../../../src/app/_models/PersonModel.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_3__PersonModel__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__SeedTrialModel__ = __webpack_require__("../../../../../src/app/_models/SeedTrialModel.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "o", function() { return __WEBPACK_IMPORTED_MODULE_4__SeedTrialModel__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__SeedModel__ = __webpack_require__("../../../../../src/app/_models/SeedModel.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_5__SeedModel__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_5__SeedModel__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_5__SeedModel__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "p", function() { return __WEBPACK_IMPORTED_MODULE_5__SeedModel__["d"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__SeedInputModel__ = __webpack_require__("../../../../../src/app/_models/SeedInputModel.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_6__SeedInputModel__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__CompetitorModel__ = __webpack_require__("../../../../../src/app/_models/CompetitorModel.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_7__CompetitorModel__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_7__CompetitorModel__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ProductMarketProfileModel__ = __webpack_require__("../../../../../src/app/_models/ProductMarketProfileModel.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_8__ProductMarketProfileModel__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_8__ProductMarketProfileModel__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_8__ProductMarketProfileModel__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_8__ProductMarketProfileModel__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "q", function() { return __WEBPACK_IMPORTED_MODULE_8__ProductMarketProfileModel__["e"]; });











/***/ }),

/***/ "../../../../../src/app/_services/GooglePieChartService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GooglePieChartService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers__ = __webpack_require__("../../../../../src/app/_helpers/index.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GooglePieChartService = /** @class */ (function (_super) {
    __extends(GooglePieChartService, _super);
    function GooglePieChartService() {
        var _this = _super.call(this) || this;
        google.charts.load('current', { 'packages': ['corechart'] });
        return _this;
    }
    GooglePieChartService.prototype.BuildPieChart = function (elementId, data, config) {
        var chartFunc = function () { return new google.visualization.PieChart(document.getElementById(elementId)); };
        var options = {
            title: config.title,
            pieHole: config.pieHole,
            width: config.width,
            height: config.height
        };
        this.buildChart(data, chartFunc, options);
    };
    GooglePieChartService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], GooglePieChartService);
    return GooglePieChartService;
}(__WEBPACK_IMPORTED_MODULE_1__helpers__["b" /* GoogleChartsBaseService */]));



/***/ }),

/***/ "../../../../../src/app/_services/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http) {
        this.http = http;
    }
    AuthenticationService.prototype.login = function (username, password) {
        var url = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].URLRestFullApi + "/authenticate";
        return this.http.post(url, { username: username, password: password })
            .map(function (user) {
            // login olunursa jwt bir token döndürür
            if (user && user.token) {
                // kullanıcı adı ve token bilgilerini kullanıcının refresh işlemine tebdir olarak localStorage kullanılmalı
                localStorage.setItem('currentUser', JSON.stringify(user));
                localStorage.setItem('username', username);
            }
            return user;
        });
    };
    AuthenticationService.prototype.logout = function () {
        // logout işleminden sonra kullanıcı bilgilerini localStorage den siler
        localStorage.removeItem('currentUser');
        localStorage.removeItem('username');
    };
    AuthenticationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "../../../../../src/app/_services/enums-mock.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnumsMock; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__generic_service__ = __webpack_require__("../../../../../src/app/_services/generic.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EnumsMock = /** @class */ (function () {
    // user: LoginViewModel;
    // constructor(private userService: GenericService<LoginViewModel>) {
    //     userService.url = `${environment.URLRestFullApi}/users`
    //     userService.getAll()
    //         .subscribe(response => {
    //             this.user = response.find(r => r.username == localStorage.getItem('username'))
    //         })
    // }
    // private getUser(): LoginViewModel {
    //     return this.user
    // }
    /**
     *
     */
    function EnumsMock(userService) {
        this.userService = userService;
    }
    EnumsMock.prototype.getStatus = function () {
        return ['1ST', '2ND', 'Intro', 'GT', 'COM'];
    };
    EnumsMock.prototype.getTrialSeason = function () {
        return ['İB', 'Y', 'SB', 'K'];
    };
    EnumsMock.prototype.getRegion = function () {
        return [
            'Antalya Merkez', 'Antalya Yayla', 'Antalya Batı', 'Antalya Doğu',
            'Çukurova', 'Ege', 'Marmara', 'Karadeniz', 'İç Anadolu', 'Doğu Anadolu'
        ];
    };
    EnumsMock.prototype.getPersonTrCode = function () {
        return [
            'Deneme Sorumlusu',
            'Ürün geliştirme sorumlusu',
            'Satış Sorumlusu',
            'Ticari Sorumlu'
        ];
    };
    EnumsMock.prototype.getGrowerTrCode = function () {
        return [
            'Üretici', 'Tüccar', 'Halci', 'Bayi'
        ];
    };
    EnumsMock.prototype.getGrowerFormOfProduction = function () {
        return [
            'Örtü altı', 'Açık Saha'
        ];
    };
    EnumsMock = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__generic_service__["a" /* GenericService */]])
    ], EnumsMock);
    return EnumsMock;
}());



/***/ }),

/***/ "../../../../../src/app/_services/generic.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GenericService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GenericService = /** @class */ (function () {
    function GenericService(http) {
        this.http = http;
    }
    GenericService.prototype.insert = function (data) {
        return this.http.post(this.url, data);
    };
    GenericService.prototype.update = function (data) {
        return this.http.put(this.url, data);
    };
    GenericService.prototype.getAll = function () {
        return this.http
            .get(this.url)
            .map(function (response) { return response; })
            .catch(this.handleError);
    };
    GenericService.prototype.getOne = function () {
        return this.http
            .get(this.url)
            .map(function (response) { return response; })
            .catch(this.handleError);
    };
    GenericService.prototype.delete = function () {
        return this.http.delete(this.url);
    };
    GenericService.prototype.handleError = function (res) {
        console.error(res.error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(res.error || 'Server error');
    };
    GenericService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], GenericService);
    return GenericService;
}());



/***/ }),

/***/ "../../../../../src/app/_services/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__authentication_service__ = __webpack_require__("../../../../../src/app/_services/authentication.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__authentication_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__generic_service__ = __webpack_require__("../../../../../src/app/_services/generic.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__generic_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__("../../../../../src/app/_services/user.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_2__user_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__enums_mock_service__ = __webpack_require__("../../../../../src/app/_services/enums-mock.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__enums_mock_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__style_service__ = __webpack_require__("../../../../../src/app/_services/style.service.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__GooglePieChartService__ = __webpack_require__("../../../../../src/app/_services/GooglePieChartService.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_5__GooglePieChartService__["a"]; });








/***/ }),

/***/ "../../../../../src/app/_services/style.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export StyleService */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { STYLE_HOST } from 'app/common';
var StyleService = /** @class */ (function () {
    function StyleService() {
        this.stylesMap = new Map();
        // if (host === null) {
        //   this.host = document.head;
        // }
    }
    StyleService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], StyleService);
    return StyleService;
}());



/***/ }),

/***/ "../../../../../src/app/_services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.getAll = function () {
        return this.http.get('/api/users');
    };
    UserService.prototype.getById = function (id) {
        return this.http.get('/api/users/' + id);
    };
    UserService.prototype.create = function (user) {
        return this.http.post('/api/users', user);
    };
    UserService.prototype.update = function (user) {
        return this.http.put('/api/users/' + user._id, user);
    };
    UserService.prototype.delete = function (id) {
        return this.http.delete('/api/users/' + id);
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ng-valid[required], .ng-valid.required  {\r\n    border-left: 5px solid #42A948; /* green */\r\n  }\r\n  \r\n  .ng-invalid:not(form)  {\r\n    border-left: 5px solid #a94442; /* red */\r\n  }\r\n  \r\n  /* You can add global styles to this file, and also import other style files */\r\n  \r\n  /* Master Styles */\r\n  \r\n  h1 {\r\n    color: #369;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    font-size: 250%;\r\n  }\r\n  \r\n  h2, h3 {\r\n    color: #444;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    font-weight: lighter;\r\n  }\r\n  \r\n  body {\r\n    margin: 2em;\r\n  }\r\n  \r\n  body, input[text], button {\r\n    color: #888;\r\n    font-family: Cambria, Georgia;\r\n  }\r\n  \r\n  a {\r\n    cursor: pointer;\r\n    cursor: hand;\r\n  }\r\n  \r\n  button {\r\n    font-family: Arial;\r\n    background-color: #eee;\r\n    border: none;\r\n    padding: 5px 10px;\r\n    border-radius: 4px;\r\n    cursor: pointer;\r\n    cursor: hand;\r\n  }\r\n  \r\n  button:hover {\r\n    background-color: #cfd8dc;\r\n  }\r\n  \r\n  button:disabled {\r\n    background-color: #eee;\r\n    color: #aaa;\r\n    cursor: auto;\r\n  }\r\n  \r\n  /* Navigation link styles */\r\n  \r\n  nav a {\r\n    padding: 5px 10px;\r\n    text-decoration: none;\r\n    margin-right: 10px;\r\n    margin-top: 10px;\r\n    display: inline-block;\r\n    background-color: #eee;\r\n    border-radius: 4px;\r\n  }\r\n  \r\n  nav a:visited, a:link {\r\n    color: #607D8B;\r\n  }\r\n  \r\n  nav a:hover {\r\n    color: #039be5;\r\n    background-color: #CFD8DC;\r\n  }\r\n  \r\n  nav a.active {\r\n    color: #039be5;\r\n  }\r\n  \r\n  /* everywhere else */\r\n  \r\n  * {\r\n    font-family: Arial, Helvetica, sans-serif;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_router__ = __webpack_require__("../../../../../src/app/app.router.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__guard_auth_guard_service__ = __webpack_require__("../../../../../src/app/_guard/auth.guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_index__ = __webpack_require__("../../../../../src/app/_services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_material_app_material__ = __webpack_require__("../../../../../src/app/_app-material/app-material.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__swimlane_ngx_datatable__ = __webpack_require__("../../../../@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__swimlane_ngx_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__swimlane_ngx_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular2_text_mask__ = __webpack_require__("../../../../angular2-text-mask/dist/angular2TextMask.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular2_text_mask___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_angular2_text_mask__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__directives_seedinputdialog_seedinputdialog_component__ = __webpack_require__("../../../../../src/app/_directives/seedinputdialog/seedinputdialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__person_persondialog_persondialog_component__ = __webpack_require__("../../../../../src/app/person/persondialog/persondialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__directives_confirm_dialog_confirm_dialog_component__ = __webpack_require__("../../../../../src/app/_directives/confirm.dialog/confirm.dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__grower_growerdialog_growerdialog_component__ = __webpack_require__("../../../../../src/app/grower/growerdialog/growerdialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__seed_card_seedcarddialog_seedcarddialog_component__ = __webpack_require__("../../../../../src/app/seed.card/seedcarddialog/seedcarddialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__helpers_index__ = __webpack_require__("../../../../../src/app/_helpers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__helpers_is_delete_pipe__ = __webpack_require__("../../../../../src/app/_helpers/is-delete.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__directives_select_dialog_select_dialog_component__ = __webpack_require__("../../../../../src/app/_directives/select-dialog/select-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__user_user_dialog_user_dialog_component__ = __webpack_require__("../../../../../src/app/user/user-dialog/user-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__directives_generic_field_generic_field_component__ = __webpack_require__("../../../../../src/app/_directives/generic-field/generic-field.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__seed_card_variant_detail_variant_detail_component__ = __webpack_require__("../../../../../src/app/seed.card/variant-detail/variant-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_ng2_google_charts__ = __webpack_require__("../../../../ng2-google-charts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__observation_definition_observation_definition_dialog_observation_definition_dialog_component__ = __webpack_require__("../../../../../src/app/observation.definition/observation-definition-dialog/observation-definition-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__grower_grower_filter_grower_filter_component__ = __webpack_require__("../../../../../src/app/grower/grower-filter/grower-filter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__seed_card_season_dialog_season_dialog_component__ = __webpack_require__("../../../../../src/app/seed.card/season-dialog/season-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__competitor_competitor_dialog_competitor_dialog_component__ = __webpack_require__("../../../../../src/app/competitor/competitor-dialog/competitor-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__piechart_piechart_component__ = __webpack_require__("../../../../../src/app/piechart/piechart.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






























// import { CalendarChartComponent } from './_charts/calendar-chart/calendar-chart.component';
// import { PieChartComponent } from './_charts/pie-chart/pie-chart.component';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_6__app_router__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_9__app_material_app_material__["a" /* AppMaterialModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_10__swimlane_ngx_datatable__["NgxDatatableModule"],
                __WEBPACK_IMPORTED_MODULE_11_angular2_text_mask__["TextMaskModule"],
                __WEBPACK_IMPORTED_MODULE_24_ng2_google_charts__["a" /* Ng2GoogleChartsModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__app_router__["b" /* routedComponents */],
                __WEBPACK_IMPORTED_MODULE_14__person_persondialog_persondialog_component__["a" /* PersonDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_15__directives_confirm_dialog_confirm_dialog_component__["a" /* ConfirmDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_16__grower_growerdialog_growerdialog_component__["a" /* GrowerDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_13__directives_seedinputdialog_seedinputdialog_component__["a" /* SeedInputDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_17__seed_card_seedcarddialog_seedcarddialog_component__["a" /* SeedCardDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_20__directives_select_dialog_select_dialog_component__["a" /* SelectDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_19__helpers_is_delete_pipe__["a" /* IsDeletePipe */],
                __WEBPACK_IMPORTED_MODULE_21__user_user_dialog_user_dialog_component__["a" /* UserDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_22__directives_generic_field_generic_field_component__["a" /* GenericFieldComponent */],
                __WEBPACK_IMPORTED_MODULE_23__seed_card_variant_detail_variant_detail_component__["a" /* VariantDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_25__observation_definition_observation_definition_dialog_observation_definition_dialog_component__["a" /* ObservationDefinitionDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_26__grower_grower_filter_grower_filter_component__["a" /* GrowerFilterComponent */],
                __WEBPACK_IMPORTED_MODULE_27__seed_card_season_dialog_season_dialog_component__["a" /* SeasonDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_28__competitor_competitor_dialog_competitor_dialog_component__["a" /* CompetitorDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_29__piechart_piechart_component__["a" /* PieChartComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__guard_auth_guard_service__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_8__services_index__["b" /* EnumsMock */],
                __WEBPACK_IMPORTED_MODULE_8__services_index__["c" /* GenericService */],
                __WEBPACK_IMPORTED_MODULE_8__services_index__["a" /* AuthenticationService */],
                __WEBPACK_IMPORTED_MODULE_8__services_index__["e" /* UserService */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                    useClass: __WEBPACK_IMPORTED_MODULE_18__helpers_index__["c" /* JwtInterceptor */],
                    multi: true
                },
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_14__person_persondialog_persondialog_component__["a" /* PersonDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_15__directives_confirm_dialog_confirm_dialog_component__["a" /* ConfirmDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_16__grower_growerdialog_growerdialog_component__["a" /* GrowerDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_13__directives_seedinputdialog_seedinputdialog_component__["a" /* SeedInputDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_17__seed_card_seedcarddialog_seedcarddialog_component__["a" /* SeedCardDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_20__directives_select_dialog_select_dialog_component__["a" /* SelectDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_21__user_user_dialog_user_dialog_component__["a" /* UserDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_23__seed_card_variant_detail_variant_detail_component__["a" /* VariantDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_27__seed_card_season_dialog_season_dialog_component__["a" /* SeasonDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_28__competitor_competitor_dialog_competitor_dialog_component__["a" /* CompetitorDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_25__observation_definition_observation_definition_dialog_observation_definition_dialog_component__["a" /* ObservationDefinitionDialogComponent */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.router.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return routedComponents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_layout_component__ = __webpack_require__("../../../../../src/app/login/login-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sidenavmenu_sidenavmenu_component__ = __webpack_require__("../../../../../src/app/sidenavmenu/sidenavmenu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__sidenavmenu_menu_item_menu_item_component__ = __webpack_require__("../../../../../src/app/sidenavmenu/menu-item/menu-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__person_person_component__ = __webpack_require__("../../../../../src/app/person/person.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__grower_grower_component__ = __webpack_require__("../../../../../src/app/grower/grower.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__seed_card_seed_card_component__ = __webpack_require__("../../../../../src/app/seed.card/seed.card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__observation_definition_observation_definition_component__ = __webpack_require__("../../../../../src/app/observation.definition/observation.definition.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__guard_auth_guard_service__ = __webpack_require__("../../../../../src/app/_guard/auth.guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__seed_trial_seed_trial_component__ = __webpack_require__("../../../../../src/app/seed.trial/seed.trial.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__seed_input_seed_input_component__ = __webpack_require__("../../../../../src/app/seed.input/seed.input.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__user_user_component__ = __webpack_require__("../../../../../src/app/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__seed_observation_seed_observation_component__ = __webpack_require__("../../../../../src/app/seed.observation/seed.observation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__observation_observation_component__ = __webpack_require__("../../../../../src/app/observation/observation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__competitor_competitor_component__ = __webpack_require__("../../../../../src/app/competitor/competitor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pmp_pmp_component__ = __webpack_require__("../../../../../src/app/pmp/pmp.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_5__sidenavmenu_sidenavmenu_component__["a" /* SidenavmenuComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_11__guard_auth_guard_service__["a" /* AuthGuard */]],
        children: [
            {
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard_component__["a" /* DashboardComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_11__guard_auth_guard_service__["a" /* AuthGuard */]],
                data: { roles: ['admin', 'user'], modules: "10" }
            },
            {
                path: 'dashboard',
                component: __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard_component__["a" /* DashboardComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_11__guard_auth_guard_service__["a" /* AuthGuard */]],
                data: { roles: ['admin', 'user'], modules: "10" }
            },
            {
                path: 'seed.card',
                component: __WEBPACK_IMPORTED_MODULE_9__seed_card_seed_card_component__["a" /* SeedCardComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_11__guard_auth_guard_service__["a" /* AuthGuard */]],
                data: { roles: ['admin', 'user'], modules: "1" }
            },
            {
                path: 'person',
                component: __WEBPACK_IMPORTED_MODULE_7__person_person_component__["a" /* PersonComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_11__guard_auth_guard_service__["a" /* AuthGuard */]],
                data: { roles: ['admin', 'user'], modules: "2" }
            },
            {
                path: 'grow',
                component: __WEBPACK_IMPORTED_MODULE_8__grower_grower_component__["a" /* GrowerComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_11__guard_auth_guard_service__["a" /* AuthGuard */]],
                data: { roles: ['admin', 'user'], modules: "3" }
            },
            {
                path: 'seed.input',
                component: __WEBPACK_IMPORTED_MODULE_13__seed_input_seed_input_component__["a" /* SeedInputComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_11__guard_auth_guard_service__["a" /* AuthGuard */]],
                data: { roles: ['admin', 'user'], modules: "4" }
            },
            {
                path: 'seed.trial',
                component: __WEBPACK_IMPORTED_MODULE_12__seed_trial_seed_trial_component__["a" /* SeedTrialComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_11__guard_auth_guard_service__["a" /* AuthGuard */]],
                data: { roles: ['admin', 'user'], modules: "11" }
            },
            {
                path: 'user',
                component: __WEBPACK_IMPORTED_MODULE_14__user_user_component__["a" /* UserComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_11__guard_auth_guard_service__["a" /* AuthGuard */]],
                data: { roles: ['admin'], modules: "52" }
            },
            {
                path: 'observationDefinition',
                component: __WEBPACK_IMPORTED_MODULE_10__observation_definition_observation_definition_component__["a" /* ObservationDefinitionComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_11__guard_auth_guard_service__["a" /* AuthGuard */]],
                data: { roles: ['admin'], modules: "54" }
            },
            {
                path: 'seedObservation',
                component: __WEBPACK_IMPORTED_MODULE_15__seed_observation_seed_observation_component__["a" /* SeedObservationComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_11__guard_auth_guard_service__["a" /* AuthGuard */]],
                data: { roles: ['admin', 'user'], modules: "7" }
            },
            {
                path: 'observation',
                component: __WEBPACK_IMPORTED_MODULE_16__observation_observation_component__["a" /* ObservationComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_11__guard_auth_guard_service__["a" /* AuthGuard */]],
                data: { roles: ['admin', 'user'], modules: '6' }
            },
            {
                path: 'competitor',
                component: __WEBPACK_IMPORTED_MODULE_17__competitor_competitor_component__["a" /* CompetitorComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_11__guard_auth_guard_service__["a" /* AuthGuard */]],
                data: { roles: ['admin', 'user'], modules: '9' }
            },
            {
                path: 'productmarketprofile',
                component: __WEBPACK_IMPORTED_MODULE_18__pmp_pmp_component__["a" /* PmpComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_11__guard_auth_guard_service__["a" /* AuthGuard */]],
                data: { roles: ['admin', 'user'], modules: '6' }
            },
        ]
    },
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__login_login_layout_component__["a" /* LoginLayoutComponent */],
        children: [
            {
                path: 'login',
                component: __WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */]
            }
        ]
    }
    /*,
    { path: '**', redirectTo: '' }
    */
];
var routedComponents = [
    __WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */],
    __WEBPACK_IMPORTED_MODULE_2__login_login_layout_component__["a" /* LoginLayoutComponent */],
    __WEBPACK_IMPORTED_MODULE_5__sidenavmenu_sidenavmenu_component__["a" /* SidenavmenuComponent */],
    __WEBPACK_IMPORTED_MODULE_6__sidenavmenu_menu_item_menu_item_component__["a" /* MenuItemComponent */],
    __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard_component__["a" /* DashboardComponent */],
    __WEBPACK_IMPORTED_MODULE_7__person_person_component__["a" /* PersonComponent */],
    __WEBPACK_IMPORTED_MODULE_8__grower_grower_component__["a" /* GrowerComponent */],
    __WEBPACK_IMPORTED_MODULE_12__seed_trial_seed_trial_component__["a" /* SeedTrialComponent */],
    __WEBPACK_IMPORTED_MODULE_9__seed_card_seed_card_component__["a" /* SeedCardComponent */],
    __WEBPACK_IMPORTED_MODULE_13__seed_input_seed_input_component__["a" /* SeedInputComponent */],
    __WEBPACK_IMPORTED_MODULE_14__user_user_component__["a" /* UserComponent */],
    __WEBPACK_IMPORTED_MODULE_10__observation_definition_observation_definition_component__["a" /* ObservationDefinitionComponent */],
    __WEBPACK_IMPORTED_MODULE_15__seed_observation_seed_observation_component__["a" /* SeedObservationComponent */],
    __WEBPACK_IMPORTED_MODULE_16__observation_observation_component__["a" /* ObservationComponent */],
    __WEBPACK_IMPORTED_MODULE_17__competitor_competitor_component__["a" /* CompetitorComponent */],
    __WEBPACK_IMPORTED_MODULE_18__pmp_pmp_component__["a" /* PmpComponent */]
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/competitor/competitor-dialog/competitor-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<form  (ngSubmit)=\"submit\" #formControl=\"ngForm\">\n  <mat-card >\n    <mat-card-header>\n      <mat-card-subtitle>Rakip Firma</mat-card-subtitle>\n    </mat-card-header>\n    <mat-card-content>\n      <mat-tab-group class=\"dialogCard\">\n        <mat-tab label=\"Genel Bilgiler\" >\n          <div fxLayout=\"column\" fxLayoutAlign=\"end stretch\">\n\n            <mat-form-field>\n              <input matInput required #FirstName placeholder=\"Ünavan\" name=\"title\" [(ngModel)]=\"data.Title\">\n            </mat-form-field>\n            <div flexLayout=\"row\" fxLayout.xs=\"column\" fxLayoutGap=\"20px\">\n              <mat-form-field>\n                <input matInput required placeholder=\"İlgili\" name=\"incharge\" [(ngModel)]=\"data.Incharge\">\n              </mat-form-field>\n\n              <mat-form-field>\n                <input matInput required placeholder=\"İlgili 2\" name=\"incharge2\" [(ngModel)]=\"data.Incharge2\">\n              </mat-form-field>\n\n              <mat-form-field>\n                <input matInput required placeholder=\"İlgili 3\" name=\"incharge3\" [(ngModel)]=\"data.Incharge3\">\n              </mat-form-field>\n            </div>\n            <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutGap=\"20px\">\n              <mat-form-field>\n                <input matInput [textMask]=\"{mask: telNoMask}\" placeholder=\"Gsm No\" name=\"gsmnr\" [(ngModel)]=\"data.Gsm\">\n              </mat-form-field>\n              <mat-form-field>\n                <input matInput [textMask]=\"{mask: telNoMask}\" placeholder=\"Tel No 1\" name=\"telnr1\" [(ngModel)]=\"data.TelNrs1\">\n              </mat-form-field>\n              <mat-form-field>\n                <input matInput [textMask]=\"{mask: telNoMask}\" placeholder=\"Tel No 2\" name=\"telnr2\" [(ngModel)]=\"data.TelNrs2\">\n              </mat-form-field>\n            </div>\n            <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutGap=\"20px\">\n              <mat-form-field>\n                <input matInput placeholder=\"İl\" name=\"city\" [(ngModel)]=\"data.City\">\n              </mat-form-field>\n              <mat-form-field>\n                <input matInput placeholder=\"İlçe\" name=\"district\" [(ngModel)]=\"data.District\">\n              </mat-form-field>\n            </div>\n          </div>\n        </mat-tab>\n        <mat-tab label=\"Ürünleri\">\n\n          <div class=\"container\">\n            <cdk-table #table [dataSource]=\"dataSource\" >\n                <ng-container cdkColumnDef=\"Action\">\n                    <cdk-header-cell *cdkHeaderCellDef>Sil</cdk-header-cell>\n                    <cdk-cell *cdkCellDef=\"let element;let rindex=index\">\n                      <button mat-icon-button (click)=\"deleteItem(rindex,element)\" tabindex=\"-1\">\n                        <mat-icon aria-label=\"Delete\" color=\"warn\">delete</mat-icon>\n                      </button>\n                    </cdk-cell>\n                  </ng-container>\n                <ng-container cdkColumnDef=\"CategoryTitle\">\n                    <cdk-header-cell *cdkHeaderCellDef class=\"table-header-cell\"> Ana Segment </cdk-header-cell>\n                    <cdk-cell *cdkCellDef=\"let element;let rindex=index\" class=\"table-cell\">\n                      <mat-form-field>\n                          <input matInput placeholder=\"Ana Segment\" [(ngModel)]=\"element.CategoryTitle\" (keydown.f10)=\"categorySelect(element)\" (ngModelChange)=\"onModelChange(element,'CategoryTitle')\"\n                          name=\"CategoryTitle-{{rindex}}\" id=\"CategoryTitle-{{rindex}}\" (keydown)=\"keydown($event,'CategoryTitle',rindex)\" class=\"table-input\">\n                        <button mat-icon-button matSuffix color=\"basic\" (click)=\"categorySelect(element)\">\n                          <mat-icon aria-label=\"Search\">search</mat-icon>\n                        </button>\n                      </mat-form-field>\n                    </cdk-cell>\n                  </ng-container>\n            \n                  <ng-container cdkColumnDef=\"ProductTitle\">\n                    <cdk-header-cell *cdkHeaderCellDef class=\"table-header-cell\">\n                        Alt Segment\n                    </cdk-header-cell>\n                    <cdk-cell *cdkCellDef=\"let element;let rindex=index\" class=\"table-cell\">\n                      <mat-form-field>\n                        <input matInput placeholder=\"Alt Segment\" [(ngModel)]=\"element.ProductTitle\" (keydown.f10)=\"productSelect(element)\" (ngModelChange)=\"onModelChange(element,'ProductTitle')\"\n                        name=\"ProductTitle-{{rindex}}\" id=\"ProductTitle-{{rindex}}\" (keydown)=\"keydown($event,'ProductTitle',rindex)\" class=\"table-input\">\n                        <button mat-icon-button matSuffix color=\"basic\" (click)=\"productSelect(element)\">\n                          <mat-icon aria-label=\"Search\">search</mat-icon>\n                        </button>\n                      </mat-form-field>\n                    </cdk-cell>\n                  </ng-container>\n                  <ng-container cdkColumnDef=\"Title\">\n                      <cdk-header-cell *cdkHeaderCellDef class=\"table-header-cell\">\n                          Çeşit\n                      </cdk-header-cell>\n                      <cdk-cell *cdkCellDef=\"let element;let rindex=index\" class=\"table-cell\">\n                        <mat-form-field>\n                          <input matInput placeholder=\"Çeşit\" [(ngModel)]=\"element.Title\"  (ngModelChange)=\"onModelChange(element,'Title')\"\n                          name=\"Title-{{rindex}}\" id=\"Title-{{rindex}}\" (keydown)=\"keydown($event,'Title',rindex)\" class=\"table-input\">\n                        </mat-form-field>\n                      </cdk-cell>\n                    </ng-container>\n              <cdk-header-row *cdkHeaderRowDef=\"displayedColumns\" class=\"table-header-row\"></cdk-header-row>\n              <cdk-row *cdkRowDef=\"let row;let rindex=index; columns: displayedColumns;\" [ngClass]=\"{'highlight': selectedRowIndex == row._id}\"\n              class=\"table-row\" (click)=\"rowClick(row,rindex)\"></cdk-row>\n            </cdk-table>\n          </div>\n\n        </mat-tab>\n      </mat-tab-group>\n    </mat-card-content>\n    <mat-card-actions>\n      <button type=\"submit\" mat-raised-button (click)=\"confirmAdd()\" color=\"warn\">Kaydet</button>\n      <button mat-raised-button (click)=\"onNoClick()\" tabindex=\"-1\">Vazgeç</button>\n    </mat-card-actions>\n\n\n  </mat-card>\n</form>"

/***/ }),

/***/ "../../../../../src/app/competitor/competitor-dialog/competitor-dialog.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dialogCard {\n  height: 300px; }\n\n.table-input,\n.table-select {\n  border: none; }\n\n.table-input:hover,\n.table-select:hover,\n.table-input:focus,\n.table-select:focus {\n  border: 1px inset lightblue;\n  border-radius: 5px; }\n\ncdk-table {\n  display: block;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  min-width: 300px;\n  width: 100%;\n  height: 250px;\n  overflow: auto;\n  border-bottom: 1px solid #7c7c7c; }\n\n.table-header-row, .table-row {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 32px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 1px 8px; }\n\n.table-cell, .table-header-cell {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  padding-left: 1px;\n  padding-right: 1px; }\n\n.cdk-header-cell {\n  font-size: 10px;\n  font-weight: bolder; }\n\n.cdk-cell {\n  font-size: 11px; }\n\n.table-header-cell {\n  text-align: left; }\n\n.cdk-column-ProductTitle,\n.cdk-column-VariantTitle,\n.cdk-column-Title {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  min-width: 100px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row; }\n\nmat-form-field {\n  width: 100%; }\n\n.cdk-column-Action {\n  min-width: 30px;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/competitor/competitor-dialog/competitor-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompetitorDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models__ = __webpack_require__("../../../../../src/app/_models/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services__ = __webpack_require__("../../../../../src/app/_services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__helpers__ = __webpack_require__("../../../../../src/app/_helpers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__directives__ = __webpack_require__("../../../../../src/app/_directives/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var CompetitorDialogComponent = /** @class */ (function () {
    function CompetitorDialogComponent(dialogRef, data, dataService, seedModelService, dialog, renderer, snackBar) {
        var _this = this;
        this.dialogRef = dialogRef;
        this.data = data;
        this.dataService = dataService;
        this.seedModelService = seedModelService;
        this.dialog = dialog;
        this.renderer = renderer;
        this.snackBar = snackBar;
        this.telNoMask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
        this.displayedColumns = ['Action', 'CategoryTitle', 'ProductTitle', 'Title'];
        this.seedModel = new __WEBPACK_IMPORTED_MODULE_2__models__["n" /* SeedModel */]();
        this.seedModels = [];
        this.productDetails = [];
        this.productDetailModel = new __WEBPACK_IMPORTED_MODULE_2__models__["j" /* ProductDetail */]();
        this.seedModelService.url = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].URLRestFullApi + "/seed";
        this.seedModelService.getAll()
            .subscribe(function (response) {
            _this.seedModels = response;
        }, function (error) {
            console.log(error);
        });
        if (data.Products.length == 0) {
            data.Products.push(new __WEBPACK_IMPORTED_MODULE_2__models__["e" /* CompetitorProduct */]());
        }
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_5__helpers__["a" /* GenericDataSource */](data.Products);
    }
    CompetitorDialogComponent.prototype.ngOnInit = function () {
    };
    CompetitorDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    CompetitorDialogComponent.prototype.confirmAdd = function () {
        var _this = this;
        this.data.Products = this.data.Products.filter(function (p) { return p.Title != undefined; });
        this.dataService.url = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].URLRestFullApi + "/competitor";
        if (this.data._id == undefined) {
            this.dataService.insert(this.data)
                .subscribe(function (response) {
                _this.data._id = response._id;
                _this.dialogRef.close("1");
            });
        }
        else {
            this.dataService.update(this.data)
                .subscribe(function (Response) {
                _this.dialogRef.close("1");
            });
        }
    };
    CompetitorDialogComponent.prototype.categorySelect = function (element) {
        var _this = this;
        if (element.CategoryTitle == undefined || element.CategoryTitle.length == 0)
            element.CategoryTitle = '';
        var data = {
            rows: this.seedModels,
            columns: [
                { name: 'Ana Segment', prop: 'Title' }
            ],
            filterText: 'Filtre edeceğiniz ana segment adını giriniz...'
        };
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__directives__["d" /* SeedInputDialogComponent */], { data: data, hasBackdrop: false, autoFocus: true });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result == undefined)
                return;
            element.SeedId = result._id;
            element.CategoryTitle = result.Title;
            _this.seedModel = result;
            _this.productDetails = _this.seedModel.ProductDetail;
        }, function (error) {
            console.log(error);
        });
    };
    CompetitorDialogComponent.prototype.rowClick = function (row, index) {
        console.log("rowclick");
        if (index == this.dataSource.data().slice().length - 1) {
            var newRow = new __WEBPACK_IMPORTED_MODULE_2__models__["e" /* CompetitorProduct */]();
            this.data.Products.push(newRow);
            this.dataSource.update(this.data.Products);
        }
    };
    CompetitorDialogComponent.prototype.keydown = function (event, tag, index) {
        console.log(event.key);
        if (event.key == 'ArrowDown') {
            if (this.data.Products.length - 1 > index) {
                var element = '#' + tag + '-' + (index + 1);
                var onElement = this.renderer.selectRootElement(element);
                onElement.focus();
                this.rowClick(this.data.Products[index + 1], index + 1);
            }
        }
        if (event.key == 'ArrowUp') {
            if (index > 0) {
                var element = '#' + tag + '-' + (index - 1);
                var onElement = this.renderer.selectRootElement(element);
                onElement.focus();
                this.rowClick(this.data.Products[index - 1], index - 1);
            }
        }
    };
    CompetitorDialogComponent.prototype.productSelect = function (element) {
        var _this = this;
        if (element.ProductTitle == undefined || element.ProductTitle.length == 0)
            element.ProductTitle = '';
        var data = {
            rows: this.productDetails,
            columns: [
                { name: 'Alt Segment', prop: 'Title' }
            ],
            filterText: 'Filtre edeceğiniz alt segment adını giriniz...'
        };
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__directives__["d" /* SeedInputDialogComponent */], { data: data, hasBackdrop: false, autoFocus: true });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result == undefined)
                return;
            element.ProductId = result._id;
            element.ProductTitle = result.Title;
            _this.productDetailModel = result;
        }, function (error) {
            console.log(error);
        });
    };
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
    CompetitorDialogComponent.prototype.deleteItem = function (index, data) {
        var _this = this;
        var deleteData = { "Title": data.CategoryTitle + ' - ' + data.ProductTitle + ' - ' + data.Title, "Message": "Dikkat Kayıt silinecektir!!!", "Type": __WEBPACK_IMPORTED_MODULE_6__directives__["c" /* ConfirmType */].Delete };
        var type = __WEBPACK_IMPORTED_MODULE_6__directives__["c" /* ConfirmType */].Delete;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__directives__["a" /* ConfirmDialogComponent */], { data: deleteData });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log(result);
            if (result == "1") {
                _this.snackBar.open('Kayıt Silindi...', '', { duration: 3000, });
                _this.data.Products.splice(index, 1);
                _this.dataSource.update(_this.data.Products);
            }
        });
    };
    CompetitorDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-competitor-dialog',
            template: __webpack_require__("../../../../../src/app/competitor/competitor-dialog/competitor-dialog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/competitor/competitor-dialog/competitor-dialog.component.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_3__services__["c" /* GenericService */]]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MatDialogRef */],
            __WEBPACK_IMPORTED_MODULE_2__models__["d" /* CompetitorModel */],
            __WEBPACK_IMPORTED_MODULE_3__services__["c" /* GenericService */],
            __WEBPACK_IMPORTED_MODULE_3__services__["c" /* GenericService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["G" /* MatSnackBar */]])
    ], CompetitorDialogComponent);
    return CompetitorDialogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/competitor/competitor.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/competitor/competitor.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"demo-table-card\" fxLayout=\"column\" fxLayoutAlign=\"end stretch\">\n  <h3> Rakip Firmalar </h3>\n\n  <mat-table class=\"container\" #table [dataSource]=\"dataSource\"  class=\"mat-elevation-z8\">\n\n\n    <ng-container matColumnDef=\"Title\">\n      <mat-header-cell *matHeaderCellDef>Ünvanı</mat-header-cell>\n      <mat-cell *matCellDef=\"let row\"> {{row.Title}}</mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"Incharge\">\n        <mat-header-cell *matHeaderCellDef>İlgili</mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.Incharge}}</mat-cell>\n      </ng-container>\n  \n    <ng-container matColumnDef=\"TelNrs1\">\n      <mat-header-cell *matHeaderCellDef>Telefon No</mat-header-cell>\n      <mat-cell *matCellDef=\"let row\"> {{row.TelNrs1}}</mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"District\">\n      <mat-header-cell *matHeaderCellDef>İlçe</mat-header-cell>\n      <mat-cell *matCellDef=\"let row\"> {{row.District}}</mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"City\">\n      <mat-header-cell *matHeaderCellDef>İl</mat-header-cell>\n      <mat-cell *matCellDef=\"let row\"> {{row.City}}</mat-cell>\n    </ng-container>\n\n    <!-- actions -->\n    <ng-container matColumnDef=\"actions\">\n      <mat-header-cell *matHeaderCellDef>\n        <button mat-mini-fab color=\"primary\" (click)=\"addNew()\">\n          <mat-icon aria-label=\"Add\">add</mat-icon>\n        </button>\n      </mat-header-cell>\n\n      <mat-cell *matCellDef=\"let row;let i=index\">\n        <button mat-icon-button color=\"accent\" (click)=\"editItem(i,row)\">\n          <mat-icon aria-label=\"Edit\">edit</mat-icon>\n        </button>\n\n        <button mat-icon-button color=\"accent\" (click)=\"deleteItem(i,row)\">\n          <mat-icon aria-label=\"Delete\">delete</mat-icon>\n        </button>\n      </mat-cell>\n    </ng-container>\n\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\" class=\"rowheigth\"></mat-row>\n  </mat-table>\n\n</mat-card>"

/***/ }),

/***/ "../../../../../src/app/competitor/competitor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompetitorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models___ = __webpack_require__("../../../../../src/app/_models/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__competitor_dialog_competitor_dialog_component__ = __webpack_require__("../../../../../src/app/competitor/competitor-dialog/competitor-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_generic_service__ = __webpack_require__("../../../../../src/app/_services/generic.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__directives_confirm_dialog_confirm_dialog_component__ = __webpack_require__("../../../../../src/app/_directives/confirm.dialog/confirm.dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__helpers__ = __webpack_require__("../../../../../src/app/_helpers/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CompetitorComponent = /** @class */ (function () {
    function CompetitorComponent(competitorService, dialog) {
        var _this = this;
        this.competitorService = competitorService;
        this.dialog = dialog;
        this.displayedColumns = ['Title', 'Incharge', 'TelNrs1', 'District', 'City', 'actions'];
        this.competitors = [];
        this.competitorModel = new __WEBPACK_IMPORTED_MODULE_1__models___["d" /* CompetitorModel */]();
        //let userName=localStorage.getItem("username");
        this.competitorService.url = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].URLRestFullApi + "/competitors";
        this.competitorService.getAll()
            .subscribe(function (response) {
            _this.competitors = response;
            _this.dataSource = new __WEBPACK_IMPORTED_MODULE_7__helpers__["a" /* GenericDataSource */](_this.competitors);
        });
    }
    CompetitorComponent.prototype.onSubmit = function () {
        this.competitorService.url = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].URLRestFullApi + "/competitor";
        this.competitorService.insert(this.competitorModel)
            .subscribe(function (response) {
            console.log(response);
        });
    };
    CompetitorComponent.prototype.addNew = function () {
        var _this = this;
        var competitor = new __WEBPACK_IMPORTED_MODULE_1__models___["d" /* CompetitorModel */]();
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__competitor_dialog_competitor_dialog_component__["a" /* CompetitorDialogComponent */], { data: competitor, disableClose: true });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log(result);
            if (result == "1") {
                _this.competitors.push(competitor);
                _this.dataSource.update(_this.competitors);
            }
        });
    };
    CompetitorComponent.prototype.editItem = function (index, data) {
        var _this = this;
        var competitor = Object.assign({}, data); /// clone object
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__competitor_dialog_competitor_dialog_component__["a" /* CompetitorDialogComponent */], { data: competitor, disableClose: true });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result == "1") {
                _this.competitors[index] = competitor;
                _this.dataSource.update(_this.competitors);
            }
        });
    };
    CompetitorComponent.prototype.deleteItem = function (index, data) {
        var _this = this;
        var deleteData = { "Title": data.Title, "Message": "Dikkat Kayıt silinecektir!!!", "Type": __WEBPACK_IMPORTED_MODULE_6__directives_confirm_dialog_confirm_dialog_component__["c" /* ConfirmType */].Delete };
        var type = __WEBPACK_IMPORTED_MODULE_6__directives_confirm_dialog_confirm_dialog_component__["c" /* ConfirmType */].Delete;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__directives_confirm_dialog_confirm_dialog_component__["a" /* ConfirmDialogComponent */], { data: deleteData });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log(result);
            if (result == "1") {
                console.log(data.Title + ' silindi.');
                _this.competitorService.url = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].URLRestFullApi + "/competitor/" + data._id;
                _this.competitorService.delete()
                    .subscribe(function (result) {
                    _this.competitors.splice(index, 1);
                    _this.dataSource.update(_this.competitors);
                });
            }
        });
    };
    CompetitorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-competitor',
            template: __webpack_require__("../../../../../src/app/competitor/competitor.component.html"),
            styles: [__webpack_require__("../../../../../src/app/competitor/competitor.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_generic_service__["a" /* GenericService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["m" /* MatDialog */]])
    ], CompetitorComponent);
    return CompetitorComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".about-list-item, \r\n.about-list-item:active, \r\n.about-list-item:focus, \r\n.about-list-item:hover {\r\n    text-decoration: none;\r\n}\r\n\r\n.about-list {\r\n    padding: 20px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<h2>{{title}}</h2>\r\n\r\n<div class=\"about-list\" fxLayout=\"row\" fxLayout.xs=\"column\" \r\n    fxLayoutGap=\"20px\" fxLayoutGap.xs=\"5px\" fxLayoutAlign=\"start start\">\r\n    <mat-card fxFlex class=\"about-list-item\">\r\n        <mat-card-header>\r\n            Deneme Listesi\r\n        </mat-card-header>\r\n        <mat-card-content>\r\n            <app-observation></app-observation>\r\n        </mat-card-content>\r\n    </mat-card>\r\n\r\n    <!-- <a routerLink=\"/seedObservation\" fxFlex [ngStyle.xs]=\"{width:'100%'}\" class=\"about-list-item\">\r\n        <mat-card class=\"about-list-item\">\r\n            <mat-card-title class=\"about-list-item\">Gözlem Tablosu</mat-card-title>\r\n        </mat-card>\r\n    </a> -->\r\n</div>\r\n\r\n<google-chart [data]=\"calendarChartData\" (chartSelect)=\"select($event)\"></google-chart>\r\n<h1>Column chart</h1>\r\n<google-chart [data]=\"columnChartData\"></google-chart>\r\n<input type=\"button\" value=\"Change data\" (click)=\"changeData()\">\r\n<input type=\"button\" value=\"Change chart type\" (click)=\"changeChartType()\">\r\n<p></p>\r\n<h4>Animated</h4>\r\n<google-chart #cchart [data]=\"columnChartData2\"></google-chart>\r\n<input type=\"button\" value=\"Change data\" (click)=\"changeData2()\">\r\n<h1>Pie chart</h1>\r\n<google-chart [data]=\"pieChartData\"></google-chart>\r\n<h1>Gauge</h1>\r\n<div style=\"width: 1px; margin: 0 auto;\">\r\n    <google-chart [data]=\"gaugeChartData\"></google-chart>\r\n</div>\r\n<h1>Scatter chart</h1>\r\n<google-chart [data]=\"scatterChartData\"></google-chart>\r\n<h1>Timeline chart</h1>\r\n<google-chart [data]=\"timelineChartData\"></google-chart>\r\n<h1>Line chart with events</h1>\r\n<h4>Selected row: {{selectEvent?.row}}</h4>\r\n<h4>Selected column: {{selectEvent?.column}}</h4>\r\n<pre>{{selectEvent | json}}</pre>\r\n<google-chart [data]=\"lineChartData\" (chartReady)=\"ready($event)\" (chartError)=\"error($event)\" (chartSelect)=\"select($event)\"></google-chart>\r\n<h1>Combo chart</h1>\r\n<p>See console log for mouse over events.\r\n    <google-chart [data]=\"comboChartData\" (mouseOver)=\"mouseOver($event)\" (mouseOut)=\"mouseOut($event)\"></google-chart>\r\n    <h1>Table with formatter</h1>\r\n    <p></p>\r\n    <google-chart [data]=\"tableChartData\"></google-chart>\r\n    <p></p>"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
        this.columnChartData = {
            chartType: 'ColumnChart',
            dataTable: [
                ['Country', 'Performance', 'Profits'],
                ['Germany', 700, 1200],
                ['USA', 300, 600],
                ['Brazil', 400, 500],
                ['Canada', 500, 1000],
                ['France', 600, 1100],
                ['RU', 800, 1000]
            ],
            options: { title: 'Countries' }
        };
        this.columnChartData2 = {
            chartType: 'ColumnChart',
            dataTable: [
                ['Country', 'Performance', 'Profits'],
                ['Germany', 0, 0],
                ['USA', 0, 0],
                ['Brazil', 0, 0],
                ['Canada', 0, 0],
                ['France', 0, 0],
                ['RU', 0, 0]
            ],
            options: {
                title: 'Countries',
                animation: {
                    duration: 1000,
                    easing: 'out',
                    startup: true
                }
            }
        };
        this.pieChartData = {
            chartType: 'PieChart',
            dataTable: [
                ['Task', 'Hours per Day'],
                ['Work', 11],
                ['Eat', 2],
                ['Commute', 2],
                ['Watch TV', 2],
                ['Sleep', 7]
            ],
            options: {
                title: 'Tasks',
                slices: {
                    0: {
                        offset: 0.3
                    },
                    1: {
                        offset: 0.2
                    }
                }
            }
        };
        this.gaugeChartData = {
            chartType: 'Gauge',
            dataTable: [
                ['Label', 'Value'],
                ['Value', 1.78]
            ],
            options: {
                animation: { easing: 'out' },
                width: 150, height: 150,
                greenFrom: 1, greenTo: 4,
                minorTicks: 5,
                min: 0, max: 5,
                majorTicks: ['0', '1', '2', '3', '4', '5'],
                greenColor: '#d0e9c6'
            }
        };
        this.scatterChartData = {
            chartType: 'ScatterChart',
            dataTable: [
                ['Age', 'Weight'],
                [8, 12],
                [4, 5.5],
                [11, 14],
                [4, 5],
                [3, 3.5],
                [6.5, 7]
            ],
            options: {
                title: 'Age vs. Weight comparison',
                hAxis: { title: 'Age', minValue: 0, maxValue: 15 },
                vAxis: { title: 'Weight', minValue: 0, maxValue: 15 },
                legend: 'none'
            }
        };
        this.timelineChartData = {
            chartType: 'Timeline',
            dataTable: [
                ['Name', 'From', 'To'],
                ['Washington', new Date(1789, 3, 30), new Date(1797, 2, 4)],
                ['Adams', new Date(1797, 2, 4), new Date(1801, 2, 4)],
                ['Jefferson', new Date(1801, 2, 4), new Date(1809, 2, 4)]
            ]
        };
        this.calendarChartData = {
            chartType: 'Calendar',
            dataTable: [
                ['Date', 'Value'],
                [new Date(2017, 3, 13), 37032],
                [new Date(2017, 3, 14), 38024],
                [new Date(2017, 3, 15), 38024],
                [new Date(2017, 3, 16), 38108],
                [new Date(2017, 3, 17), 38229],
                // Many rows omitted for brevity.
                [new Date(2018, 4, 4), 38177],
                [new Date(2018, 4, 5), 38705],
                [new Date(2018, 4, 12), 38210],
                [new Date(2018, 4, 13), 38029],
                [new Date(2018, 4, 19), 38823],
                [new Date(2018, 4, 23), 38345],
                [new Date(2018, 4, 24), 38436],
                [new Date(2018, 4, 30), 38447]
            ],
            options: {
                title: "Red Sox Attendance",
                height: 350,
                calendar: {
                    dayOfWeekRightSpace: 10,
                    daysOfWeek: 'PPSÇPCC',
                }
            }
        };
        this.lineChartData = {
            chartType: 'LineChart',
            dataTable: [
                ['Year', 'Sales', 'Expenses'],
                ['2004', 1000, 400],
                ['2005', 1170, 460],
                ['2006', 660, 1120],
                ['2007', 1030, 540]
            ],
            options: { title: 'Company Performance' }
        };
        this.comboChartData = {
            chartType: 'ComboChart',
            dataTable: [
                ['Month', 'Bolivia', 'Ecuador', 'Madagascar', 'Papua New Guinea', 'Rwanda', 'Average'],
                ['2004/05', 165, 938, 522, 998, 450, 614.6],
                ['2005/06', 135, 1120, 599, 1268, 288, 682],
                ['2006/07', 157, 1167, 587, 807, 397, 623],
                ['2007/08', 139, 1110, 615, 968, 215, 609.4],
                ['2008/09', 136, 691, 629, 1026, 366, 569.6]
            ],
            options: {
                title: 'Monthly Coffee Production by Country',
                vAxis: { title: 'Cups' },
                hAxis: { title: 'Month' },
                seriesType: 'bars',
                series: { 5: { type: 'line' } }
            }
        };
        this.tableChartData = {
            chartType: 'Table',
            dataTable: [
                ['Department', 'Revenues', 'Another column'],
                ['Shoes', 10700, -100],
                ['Sports', -15400, 25],
                ['Toys', 12500, 40],
                ['Electronics', -2100, 889],
                ['Food', 22600, 78],
                ['Art', 1100, 42]
            ],
            formatters: [
                {
                    columns: [1, 2],
                    type: 'NumberFormat',
                    options: {
                        prefix: '&euro;', negativeColor: 'red', negativeParens: true
                    }
                }
            ],
            options: { title: 'Countries', allowHtml: true }
        };
        this.geoChartData = {
            chartType: 'GeoChart',
            dataTable: [
                ['City', 'Population', 'Area'],
                ['Rome', 2761477, 1285.31],
                ['Milan', 1324110, 181.76],
                ['Naples', 959574, 117.27],
                ['Turin', 907563, 130.17],
                ['Palermo', 655875, 158.9],
                ['Genoa', 607906, 243.60],
                ['Bologna', 380181, 140.7],
                ['Florence', 371282, 102.41],
                ['Fiumicino', 67370, 213.44],
                ['Anzio', 52192, 43.43],
                ['Ciampino', 38262, 11]
            ],
            options: {
                region: 'IT',
                displayMode: 'markers',
                colorAxis: { colors: ['green', 'blue'] }
            }
        };
    }
    DashboardComponent.prototype.ngOnInit = function () {
        for (var i = 1; i < 7; i++) {
            this.columnChartData2.dataTable[i][1] = Math.round(Math.random() * 1000);
            this.columnChartData2.dataTable[i][2] = Math.round(Math.random() * 1000);
        }
    };
    DashboardComponent.prototype.changeData2 = function () {
        var dataTable = this.cchart.wrapper.getDataTable();
        for (var i = 0; i < 6; i++) {
            dataTable.setValue(i, 1, Math.round(Math.random() * 1000));
            dataTable.setValue(i, 2, Math.round(Math.random() * 1000));
        }
        this.cchart.redraw();
    };
    DashboardComponent.prototype.changeData = function () {
        // forces a reference update (otherwise angular won't detect the change
        this.columnChartData = Object.create(this.columnChartData);
        for (var i = 1; i < 7; i++) {
            this.columnChartData.dataTable[i][1] = Math.round(Math.random() * 1000);
            this.columnChartData.dataTable[i][2] = Math.round(Math.random() * 1000);
        }
    };
    DashboardComponent.prototype.changeChartType = function () {
        // forces a reference update (otherwise angular doesn't detect the change)
        this.columnChartData = Object.create(this.columnChartData);
        if (this.columnChartData.chartType == 'ColumnChart')
            this.columnChartData.chartType = 'PieChart';
        else
            this.columnChartData.chartType = 'ColumnChart';
    };
    DashboardComponent.prototype.ready = function (event) {
        console.log(event.message);
    };
    DashboardComponent.prototype.error = function (event) {
        console.error(event);
    };
    DashboardComponent.prototype.select = function (event) {
        this.selectEvent = event;
        console.log(event);
    };
    DashboardComponent.prototype.mouseOver = function (event) {
        console.log('ChartMouseOverEvent');
        console.log('bb: ' + JSON.stringify(event.boundingBox));
        console.log('pos: ' + JSON.stringify(event.position));
        console.log('type: ' + JSON.stringify(event.columnType));
        console.log('label: ' + JSON.stringify(event.columnLabel));
        console.log('value: ' + JSON.stringify(event.value));
    };
    DashboardComponent.prototype.mouseOut = function (event) {
        console.log('ChartMouseOutEvent');
        console.log('bb: ' + JSON.stringify(event.boundingBox));
        console.log('pos: ' + JSON.stringify(event.position));
        console.log('type: ' + JSON.stringify(event.columnType));
        console.log('label: ' + JSON.stringify(event.columnLabel));
        console.log('value: ' + JSON.stringify(event.value));
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('cchart'),
        __metadata("design:type", Object)
    ], DashboardComponent.prototype, "cchart", void 0);
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/grower/grover.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "mat-table{\r\n    overflow: auto;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/grower/grower-filter/grower-filter.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/grower/grower-filter/grower-filter.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  grower-filter works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/grower/grower-filter/grower-filter.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GrowerFilterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GrowerFilterComponent = /** @class */ (function () {
    function GrowerFilterComponent() {
    }
    GrowerFilterComponent.prototype.ngOnInit = function () {
    };
    GrowerFilterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-grower-filter',
            template: __webpack_require__("../../../../../src/app/grower/grower-filter/grower-filter.component.html"),
            styles: [__webpack_require__("../../../../../src/app/grower/grower-filter/grower-filter.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GrowerFilterComponent);
    return GrowerFilterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/grower/grower.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"demo-table-card\" fxLayout=\"column\" fxLayoutAlign=\"end stretch\">\r\n  <h3> Üretici Tanımları </h3>\r\n\r\n  <mat-table class=\"container\" #table [dataSource]=\"dataSource\" fxLayout=\"column\" fxLayoutAlign=\"end stretch\" class=\"mat-elevation-z8\">\r\n\r\n\r\n    <ng-container matColumnDef=\"FirstName\">\r\n      <mat-header-cell *matHeaderCellDef>Adı</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row\"> {{row.FirstName}}</mat-cell>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"LastName\">\r\n      <mat-header-cell *matHeaderCellDef>Soyadı</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row\"> {{row.LastName}}</mat-cell>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"GsmNr\">\r\n      <mat-header-cell *matHeaderCellDef>Telefon No</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row\"> {{row.Gsm}}</mat-cell>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"City\">\r\n      <mat-header-cell *matHeaderCellDef>İl</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row\"> {{row.City}}</mat-cell>\r\n    </ng-container>\r\n\r\n\r\n    <ng-container matColumnDef=\"District\">\r\n      <mat-header-cell *matHeaderCellDef>İlçe</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row\"> {{row.District}}</mat-cell>\r\n    </ng-container>\r\n\r\n    <!-- actions -->\r\n    <ng-container matColumnDef=\"actions\">\r\n      <mat-header-cell *matHeaderCellDef>\r\n        <button mat-mini-fab color=\"primary\" (click)=\"addNew()\">\r\n          <mat-icon aria-label=\"Add\">add</mat-icon>\r\n        </button>\r\n        <button mat-icon-button tabindex=\"-1\" (click)=\"filter()\">\r\n          <mat-icon aria-label=\"Filter\">filter_list</mat-icon>\r\n        </button>\r\n      </mat-header-cell>\r\n\r\n      <mat-cell *matCellDef=\"let row;let i=index\">\r\n        <button mat-icon-button color=\"accent\" (click)=\"editItem(i,row)\">\r\n          <mat-icon aria-label=\"Edit\">edit</mat-icon>\r\n        </button>\r\n\r\n        <button mat-icon-button color=\"accent\" (click)=\"deleteItem(i,row)\">\r\n          <mat-icon aria-label=\"Delete\">delete</mat-icon>\r\n        </button>\r\n      </mat-cell>\r\n    </ng-container>\r\n\r\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\" class=\"rowheigth\"></mat-row>\r\n  </mat-table>\r\n\r\n</mat-card>"

/***/ }),

/***/ "../../../../../src/app/grower/grower.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GrowerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_GrowerModel__ = __webpack_require__("../../../../../src/app/_models/GrowerModel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_generic_service__ = __webpack_require__("../../../../../src/app/_services/generic.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__growerdialog_growerdialog_component__ = __webpack_require__("../../../../../src/app/grower/growerdialog/growerdialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__directives_confirm_dialog_confirm_dialog_component__ = __webpack_require__("../../../../../src/app/_directives/confirm.dialog/confirm.dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__helpers__ = __webpack_require__("../../../../../src/app/_helpers/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var GrowerComponent = /** @class */ (function () {
    function GrowerComponent(growerService, dialog) {
        var _this = this;
        this.growerService = growerService;
        this.dialog = dialog;
        this.displayedColumns = ['FirstName', 'LastName', 'GsmNr', 'City', 'District', 'actions'];
        this.growers = [];
        this.growerModel = new __WEBPACK_IMPORTED_MODULE_1__models_GrowerModel__["a" /* GrowerModel */]();
        //let userName=localStorage.getItem("username");
        this.growerService.url = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].URLRestFullApi + "/growers";
        this.growerService.getAll()
            .subscribe(function (response) {
            _this.growers = response;
            _this.dataSource = new __WEBPACK_IMPORTED_MODULE_7__helpers__["a" /* GenericDataSource */](_this.growers);
        });
    }
    GrowerComponent.prototype.onSubmit = function () {
        this.growerService.url = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].URLRestFullApi + "/grower";
        this.growerService.insert(this.growerModel)
            .subscribe(function (response) {
            console.log(response);
        });
    };
    GrowerComponent.prototype.addNew = function () {
        var _this = this;
        var grower = new __WEBPACK_IMPORTED_MODULE_1__models_GrowerModel__["a" /* GrowerModel */]();
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__growerdialog_growerdialog_component__["a" /* GrowerDialogComponent */], { data: grower, disableClose: true });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log(result);
            if (result == "1") {
                _this.growers.push(grower);
                _this.dataSource.update(_this.growers);
            }
        });
    };
    GrowerComponent.prototype.editItem = function (index, data) {
        var _this = this;
        var grower = Object.assign({}, data); /// clone object
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__growerdialog_growerdialog_component__["a" /* GrowerDialogComponent */], { data: grower, disableClose: true });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result == "1") {
                _this.growers[index] = grower;
                _this.dataSource.update(_this.growers);
            }
        });
    };
    GrowerComponent.prototype.deleteItem = function (index, data) {
        var _this = this;
        var deleteData = { "Title": data.FirstName + ' ' + data.LastName, "Message": "Dikkat Kayıt silinecektir!!!", "Type": __WEBPACK_IMPORTED_MODULE_6__directives_confirm_dialog_confirm_dialog_component__["c" /* ConfirmType */].Delete };
        var type = __WEBPACK_IMPORTED_MODULE_6__directives_confirm_dialog_confirm_dialog_component__["c" /* ConfirmType */].Delete;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__directives_confirm_dialog_confirm_dialog_component__["a" /* ConfirmDialogComponent */], { data: deleteData });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log(result);
            if (result == "1") {
                console.log(data.FirstName + ' silindi.');
                _this.growerService.url = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].URLRestFullApi + "/grower/" + data._id;
                _this.growerService.delete()
                    .subscribe(function (result) {
                    _this.growers.splice(index, 1);
                    _this.dataSource.update(_this.growers);
                });
            }
        });
    };
    GrowerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-grower',
            template: __webpack_require__("../../../../../src/app/grower/grower.component.html"),
            styles: [__webpack_require__("../../../../../src/app/grower/grover.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_generic_service__["a" /* GenericService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_generic_service__["a" /* GenericService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["m" /* MatDialog */]])
    ], GrowerComponent);
    return GrowerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/grower/growerdialog/growerdialog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* .container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 450px;\r\n  }\r\n  \r\n  */\r\n  .container {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    min-width: 300px;\r\n    max-height: 450px;\r\n  }\r\n  .container > * {\r\n    width: 100%;\r\n  }\r\n  /* .form {\r\n    display: flex;\r\n    padding-top: 2px;\r\n  }\r\n  \r\n  .form-control {\r\n    display: flex;\r\n    padding: 0px;\r\n    width: 100%;\r\n  }\r\n   \r\n  \r\n  .mat-form-field {\r\n    font-size: 12px;\r\n    width: 100%;\r\n    padding: 0 2px;\r\n    flex-grow: 1;\r\n  } */\r\n  .category-table {\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1 1 auto;\r\n            flex: 1 1 auto;\r\n    overflow: auto;\r\n    max-height: 400px;\r\n    min-width: 300px; \r\n  }\r\n  .example-header-row, .example-row {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    border-bottom: 1px solid rgb(124, 124, 124);\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    height: 32px;\r\n    padding: 0 8px;\r\n  }\r\n  .example-cell, .example-header-cell {\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1;\r\n            flex: 1;\r\n  }\r\n  .example-header-cell {\r\n    font-size: 12px;\r\n    font-weight: bold;\r\n  \r\n  }\r\n  .example-cell {\r\n    font-size: 13px;\r\n  }\r\n  /*   \r\n  \r\n  input:hover{\r\n    color: #fff;\r\n    background-color: #707070\r\n  }\r\n  input:focus mat-row{\r\n    background-color:#42A948;\r\n  }\r\n   */\r\n  .highlight{\r\n      background-color:#42A948;\r\n      \r\n    }\r\n  ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/grower/growerdialog/growerdialog.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"mat-dialog-content\" (ngSubmit)=\"submit\" #formControl=\"ngForm\">\r\n  <mat-card>\r\n    <mat-card-header>\r\n      <mat-card-subtitle>Üretici Tanımı</mat-card-subtitle>\r\n    </mat-card-header>\r\n    <mat-card-content>\r\n      <mat-tab-group>\r\n        <mat-tab label=\"Genel Bilgiler\">\r\n          <div fxLayout=\"column\" fxLayoutAlign=\"end stretch\">\r\n            <div flexLayout=\"row\" fxLayout.xs=\"column\" fxLayoutGap=\"20px\">\r\n              <mat-form-field>\r\n                <input matInput required #FirstName placeholder=\"Adı\" name=\"firstname\" [(ngModel)]=\"data.FirstName\">\r\n              </mat-form-field>\r\n              <mat-form-field>\r\n                <input matInput required placeholder=\"Soyadı\" name=\"lastname\" [(ngModel)]=\"data.LastName\">\r\n              </mat-form-field>\r\n            </div>\r\n            <mat-form-field>\r\n              <input matInput required placeholder=\"Ünvan\" name=\"title\" [(ngModel)]=\"data.Title\">\r\n            </mat-form-field>\r\n            <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutGap=\"20px\">\r\n              <mat-form-field>\r\n                <input matInput [textMask]=\"{mask: telNoMask}\" placeholder=\"Gsm No\" name=\"gsmnr\" [(ngModel)]=\"data.Gsm\">\r\n              </mat-form-field>\r\n              <mat-form-field>\r\n                <input matInput [textMask]=\"{mask: telNoMask}\" placeholder=\"Tel No 1\" name=\"telnr1\" [(ngModel)]=\"data.TelNrs1\">\r\n              </mat-form-field>\r\n              <mat-form-field>\r\n                <input matInput [textMask]=\"{mask: telNoMask}\" placeholder=\"Tel No 2\" name=\"telnr2\" [(ngModel)]=\"data.TelNrs2\">\r\n              </mat-form-field>\r\n            </div>\r\n            <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutGap=\"20px\">\r\n              <mat-form-field>\r\n                <input matInput placeholder=\"İl\" name=\"city\" [(ngModel)]=\"data.City\">\r\n              </mat-form-field>\r\n              <mat-form-field>\r\n                <input matInput placeholder=\"İlçe\" name=\"district\" [(ngModel)]=\"data.District\">\r\n              </mat-form-field>\r\n            </div>\r\n            <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutGap=\"20px\">\r\n              <mat-form-field>\r\n                <mat-select placeholder=\"Tip\" disableRipple [(ngModel)]=\"data.TrCode\" name=\"trCode\">\r\n                  <mat-option *ngFor=\"let item of trCodes\" [value]=\"item\">\r\n                    {{item}}\r\n                  </mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n              <mat-form-field>\r\n                <mat-select placeholder=\"Üretim Şekli\"  [(ngModel)]=\"data.FormOfProduct\" name=\"formOfProduct\">\r\n                  <mat-option *ngFor=\"let item of formOfProduct\" [value]=\"item\">\r\n                    {{item}}\r\n                  </mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n              <mat-form-field>\r\n                <mat-select placeholder=\"Bölge\"  [(ngModel)]=\"data.Region\" name=\"region\">\r\n                  <mat-option *ngFor=\"let item of regions\" [value]=\"item\">\r\n                    {{item}}\r\n                  </mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n            </div>\r\n          </div>\r\n        </mat-tab>\r\n        <!--     <mat-tab label=\"Ürün\" flexLayout=\"column\">\r\n\r\n        <div class=\"container\">\r\n          <cdk-table #variantTable [dataSource]=\"dataSource\" class=\"category-table\">\r\n\r\n            <ng-container cdkColumnDef=\"select\">\r\n              <cdk-header-cell *cdkHeaderCellDef class=\"example-header-cell\">\r\n                <mat-checkbox (change)=\"$event ? masterToggleVariant() : null\" [checked]=\"selectionVariant.hasValue() && isVariantAllSelected()\"\r\n                  [indeterminate]=\"selectionVariant.hasValue() && !isVariantAllSelected()\">\r\n                </mat-checkbox>\r\n              </cdk-header-cell>\r\n              <cdk-cell *cdkCellDef=\"let row\">\r\n                <mat-checkbox (click)=\"$event.stopPropagation()\" (change)=\"$event ? selectionVariant.toggle(row) : null\" [checked]=\"selectionVariant.isSelected(row)\">\r\n                </mat-checkbox>\r\n              </cdk-cell>\r\n            </ng-container>\r\n\r\n            <ng-container cdkColumnDef=\"Code\">\r\n              <cdk-header-cell *cdkHeaderCellDef class=\"example-header-cell\"> Kodu </cdk-header-cell>\r\n              <cdk-cell *cdkCellDef=\"let row;let rindex=index\" class=\"example-cell\">\r\n                {{row.Code}}\r\n              </cdk-cell>\r\n            </ng-container>\r\n\r\n            <ng-container cdkColumnDef=\"Title\">\r\n              <cdk-header-cell *cdkHeaderCellDef class=\"example-header-cell\"> Açıklama </cdk-header-cell>\r\n              <cdk-cell *cdkCellDef=\"let row;let rindex=index\" class=\"example-cell\">\r\n                {{row.Title}}\r\n              </cdk-cell>\r\n            </ng-container>\r\n            <cdk-header-row *cdkHeaderRowDef=\"variantColumns\" class=\"example-header-row\"></cdk-header-row>\r\n            <cdk-row *matRowDef=\"let row; columns: variantColumns;\" [ngClass]=\"{'highlight': selectedRowIndex == row._id}\" class=\"example-row\"\r\n              (click)=\"selectionVariant.toggle(row)\">\r\n            </cdk-row>\r\n          </cdk-table>\r\n\r\n\r\n        </div>\r\n\r\n      </mat-tab> -->\r\n        <mat-tab label=\"Temsilci\">\r\n\r\n          <div class=\"container\">\r\n            <cdk-table #personTable [dataSource]=\"personDataSource\">\r\n              <!-- Checkbox Column -->\r\n              <ng-container cdkColumnDef=\"select\">\r\n                <cdk-header-cell *cdkHeaderCellDef class=\"example-header-cell\">\r\n                  <mat-checkbox (change)=\"$event ? masterTogglePerson() : null\" [checked]=\"selectionPerson.hasValue() && isPersonAllSelected()\"\r\n                    [indeterminate]=\"selectionPerson.hasValue() && !isPersonAllSelected()\">\r\n                  </mat-checkbox>\r\n                </cdk-header-cell>\r\n                <cdk-cell *cdkCellDef=\"let row\">\r\n                  <mat-checkbox (click)=\"$event.stopPropagation()\" (change)=\"$event ? selectionPerson.toggle(row) : null\" [checked]=\"selectionPerson.isSelected(row)\">\r\n                  </mat-checkbox>\r\n                </cdk-cell>\r\n              </ng-container>\r\n              <ng-container cdkColumnDef=\"FirstName\">\r\n                <cdk-header-cell *cdkHeaderCellDef class=\"example-header-cell\"> Adı </cdk-header-cell>\r\n                <cdk-cell *cdkCellDef=\"let row;let rindex=index\" class=\"example-cell\">\r\n                  {{row.FirstName}}\r\n                </cdk-cell>\r\n              </ng-container>\r\n              <ng-container cdkColumnDef=\"LastName\">\r\n                <cdk-header-cell *cdkHeaderCellDef class=\"example-header-cell\"> Soyadı </cdk-header-cell>\r\n                <cdk-cell *cdkCellDef=\"let row;let rindex=index\" class=\"example-cell\">\r\n                  {{row.LastName}}\r\n                </cdk-cell>\r\n              </ng-container>\r\n              <cdk-header-row *cdkHeaderRowDef=\"personColumns\" class=\"example-header-row\"></cdk-header-row>\r\n              <cdk-row *matRowDef=\"let row; columns: personColumns;\" [ngClass]=\"{'highlight': selectedRowIndex == row._id}\" class=\"example-row\"\r\n                (click)=\"selectionPerson.toggle(row)\">\r\n              </cdk-row>\r\n            </cdk-table>\r\n          </div>\r\n        </mat-tab>\r\n      </mat-tab-group>\r\n    </mat-card-content>\r\n    <mat-card-actions>\r\n      <button type=\"submit\" mat-raised-button (click)=\"confirmAdd()\" color=\"warn\">Kaydet</button>\r\n      <button mat-raised-button (click)=\"onNoClick()\" tabindex=\"-1\">Vazgeç</button>\r\n    </mat-card-actions>\r\n\r\n\r\n  </mat-card>\r\n</form>"

/***/ }),

/***/ "../../../../../src/app/grower/growerdialog/growerdialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GrowerDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_GrowerModel__ = __webpack_require__("../../../../../src/app/_models/GrowerModel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_generic_service__ = __webpack_require__("../../../../../src/app/_services/generic.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_cdk_collections__ = __webpack_require__("../../../cdk/esm5/collections.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__helpers__ = __webpack_require__("../../../../../src/app/_helpers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services__ = __webpack_require__("../../../../../src/app/_services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};








var GrowerDialogComponent = /** @class */ (function () {
    function GrowerDialogComponent(dialogRef, data, dataService, personService, enumsMock) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.dataService = dataService;
        this.personService = personService;
        this.enumsMock = enumsMock;
        this.variantColumns = ['select', 'Code', 'Title'];
        this.personColumns = ['select', 'FirstName', 'LastName'];
        //selectionVariant = new SelectionModel<VariantModel>(true, []);
        this.selectionPerson = new __WEBPACK_IMPORTED_MODULE_5__angular_cdk_collections__["b" /* SelectionModel */](true, []);
        //variants:VariantModel[]=[];
        this.persons = [];
        this.telNoMask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
        this.grower = new __WEBPACK_IMPORTED_MODULE_1__models_GrowerModel__["a" /* GrowerModel */]();
        this.trCodes = enumsMock.getGrowerTrCode();
        this.formOfProduct = enumsMock.getGrowerFormOfProduction();
        this.regions = enumsMock.getRegion();
    }
    GrowerDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.personService.url = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].URLRestFullApi + "/persons";
        this.personService.getAll()
            .subscribe(function (response) {
            _this.persons = response;
            _this.personDataSource = new __WEBPACK_IMPORTED_MODULE_6__helpers__["a" /* GenericDataSource */](_this.persons);
            if (_this.data._id != undefined) {
                _this.personSelect();
            }
        });
        // this.variantService.url = `${environment.URLRestFullApi}/variants`;
        //           this.variantService.getAll()
        //             .subscribe(response => {
        //               this.variants = response;
        //               this.dataSource = new GenericDataSource(this.variants);
        //               if(this.data._id!=undefined)
        //               {
        //                 this.variantSelect()
        //               }
        //             })
    };
    ////   -------   Form Methods   -------   ///
    GrowerDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    GrowerDialogComponent.prototype.confirmAdd = function () {
        var _this = this;
        // this.data.Variants=[];
        // this.selectionVariant.selected
        //   .forEach(row=>{
        //     this.data.Variants.push(row._id)
        //   })
        this.data.Persons = [];
        this.selectionPerson.selected
            .forEach(function (row) {
            _this.data.Persons.push(row._id);
        });
        this.dataService.url = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].URLRestFullApi + "/grower";
        if (this.data._id == undefined) {
            this.dataService.insert(this.data)
                .subscribe(function (response) {
                _this.data._id = response._id;
                _this.dialogRef.close("1");
            });
        }
        else {
            this.dataService.update(this.data)
                .subscribe(function (Response) {
                _this.dialogRef.close("1");
            });
        }
    };
    // ////  ----   Product Table Methods   ----   ////
    // variantSelect(){
    //   console.log(this.data.Variants)
    //   this.data.Variants.forEach(row=>{
    //     console.log(this.variants.find(v=>v._id==row))
    //     this.selectionVariant.select(this.variants.find(v=>v._id==row));
    //   })
    // }
    // isVariantAllSelected() {
    //   const numSelected = this.selectionVariant.selected.length;
    //   const numRows = this.variants.length;
    //   return numSelected === numRows;
    // }
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    // masterToggleVariant() {
    //   this.isVariantAllSelected() ?
    //       this.selectionVariant.clear() :
    //       this.dataSource.data().forEach(row =>{ 
    //         this.selectionVariant.select(row)
    //       });
    // }
    ////// - Persons Tab  Select Methods -  //////
    GrowerDialogComponent.prototype.personSelect = function () {
        var _this = this;
        console.log('Persons');
        console.log(this.data.Persons);
        this.data.Persons.forEach(function (row) {
            console.log('SelectPerson:', _this.persons.find(function (p) { return p._id == row; }));
            _this.selectionPerson.select(_this.persons.find(function (p) { return p._id == row; }));
        });
    };
    GrowerDialogComponent.prototype.isPersonAllSelected = function () {
        var numSelected = this.selectionPerson.selected.length;
        var numRows = this.persons.length;
        return numSelected === numRows;
    };
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    GrowerDialogComponent.prototype.masterTogglePerson = function () {
        var _this = this;
        this.isPersonAllSelected() ?
            this.selectionPerson.clear() :
            this.personDataSource.data().forEach(function (row) {
                _this.selectionPerson.select(row);
            });
    };
    GrowerDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-growerdialog',
            template: __webpack_require__("../../../../../src/app/grower/growerdialog/growerdialog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/grower/growerdialog/growerdialog.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_3__services_generic_service__["a" /* GenericService */], __WEBPACK_IMPORTED_MODULE_7__services__["b" /* EnumsMock */]]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_material__["o" /* MatDialogRef */],
            __WEBPACK_IMPORTED_MODULE_1__models_GrowerModel__["a" /* GrowerModel */],
            __WEBPACK_IMPORTED_MODULE_3__services_generic_service__["a" /* GenericService */],
            __WEBPACK_IMPORTED_MODULE_3__services_generic_service__["a" /* GenericService */],
            __WEBPACK_IMPORTED_MODULE_7__services__["b" /* EnumsMock */]])
    ], GrowerDialogComponent);
    return GrowerDialogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/login-layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginLayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LoginLayoutComponent = /** @class */ (function () {
    function LoginLayoutComponent() {
    }
    LoginLayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login-layout',
            template: "\n  <router-outlet></router-outlet>\n  ",
            styles: []
        })
    ], LoginLayoutComponent);
    return LoginLayoutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.app-content{\r\n  margin: 100px;\r\n  padding: 50px;\r\n\r\n}\r\n\r\n.app-input-icon {\r\n  font-size: 16px;\r\n}\r\n\r\nmat-card {\r\n  width: 220px;\r\n  margin: auto;\r\n  padding: 3em 2em 2em 2em;\r\n }\r\n\r\nmat-card-title{\r\n  color: darkgrey;\r\n  font-size: 16px;\r\n  text-align: center;\r\n}\r\n\r\n.group {\r\n  position: relative;\r\n  margin-bottom: 45px;\r\n}\r\n\r\n.corner-ribbon{\r\n  width: 200px;\r\n  background: #e43;\r\n  position: absolute;\r\n  top: 25px;\r\n  left: -50px;\r\n  text-align: center;\r\n  line-height: 50px;\r\n  letter-spacing: 1px;\r\n  color: #f0f0f0;\r\n  transform: rotate(-45deg);\r\n  -webkit-transform: rotate(-45deg);\r\n}\r\n\r\n/* Custom styles */\r\n\r\n.corner-ribbon.sticky{\r\n  position: fixed;\r\n}\r\n\r\n.corner-ribbon.shadow{\r\n  -webkit-box-shadow: 0 0 3px rgba(0,0,0,.3);\r\n          box-shadow: 0 0 3px rgba(0,0,0,.3);\r\n}\r\n\r\n/* positions */\r\n\r\n.corner-ribbon.top-right{\r\n  top: 25px;\r\n  right: -50px;\r\n  left: auto;\r\n  transform: rotate(45deg);\r\n  -webkit-transform: rotate(45deg);\r\n}\r\n\r\n#err {\r\n  color : red;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"loginViewModel != null\">\n    <div class=\"app-content\">\n        <div class=\"group\">\n            <form (ngSubmit)=\"onSubmit()\" #loginForm=\"ngForm\">\n                <mat-card>\n                        <mat-card-title>\n                        Lütfen Giriş Yapınız\n                        </mat-card-title>\n                    <mat-card-content>\n\n                        <mat-input-container>\n                            <input matInput type=\"text\" required [(ngModel)]=\"loginViewModel.username\" id=\"username\" name=\"username\" autocomplete=\"off\">\n                            <mat-placeholder>\n                                <i class=\"material-icons app-input-icon\">face</i>Kullanıcı Adı\n                            </mat-placeholder>\n                        </mat-input-container>\n                        <br>\n                        <br>\n                        <mat-input-container>\n                            <input matInput type=\"password\" required [(ngModel)]=\"loginViewModel.password\" id=\"password\" name=\"password\" autocomplete=\"off\">\n                            <mat-placeholder>\n                                <i class=\"material-icons app-input-icon\">lock_open</i>Şifre\n                            </mat-placeholder>\n                        </mat-input-container>\n                        <br>\n                        <br>\n                        <button mat-raised-button type=\"submit\" color=\"warn\" name=\"action\">\n                            Giriş Yap\n                        </button>\n                        <br>\n                        <br>\n            <!--        <span id=\"err\">\n                            <small>{{errorMessage}}</small>\n                        </span>\n             \n                <mat-slide-toggle color=\"primary\">\n                    <small>Beni Hatıla!</small>\n                </mat-slide-toggle>\n            -->\n                    </mat-card-content>\n                </mat-card>\n            </form>\n\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_index__ = __webpack_require__("../../../../../src/app/_services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_LoginViewModel__ = __webpack_require__("../../../../../src/app/_models/LoginViewModel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(route, router, authenticationService, snackBar) {
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.snackBar = snackBar;
        this.loading = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        // reset login status
        this.authenticationService.logout();
        this.loginViewModel = new __WEBPACK_IMPORTED_MODULE_3__models_LoginViewModel__["b" /* LoginViewModel */]();
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    LoginComponent.prototype.onSubmit = function () {
        if (this.form.valid) {
            this.login();
        }
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.loading = true;
        this.authenticationService.login(this.loginViewModel.username, this.loginViewModel.password)
            .subscribe(function (data) {
            _this.router.navigate(['/dashboard']); //this.route.url
        }, function (error) {
            _this.snackBar.open(error.error.message, '', { duration: 3000, });
            _this.loading = false;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('loginForm'),
        __metadata("design:type", Object)
    ], LoginComponent.prototype, "form", void 0);
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_index__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["G" /* MatSnackBar */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/observation.definition/observation-definition-dialog/observation-definition-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-card-header>\n    <mat-card-subtitle>Gözlem Tanımı</mat-card-subtitle>\n  </mat-card-header>\n\n  <mat-card-content>\n\n    <div fxLayout=\"column\" fxLayoutAlign=\"end stretch\">\n      <div fxLayout=\"row\">\n        <mat-form-field>\n          <input matInput required placeholder=\"Kod\" [(ngModel)]=\"data.Code\">\n        </mat-form-field>\n        <mat-form-field>\n          <input matInput required placeholder=\"Açıklama\" [(ngModel)]=\"data.Name\">\n        </mat-form-field>\n        <div class=\"right\">\n          <mat-button-toggle-group #group=\"matButtonToggleGroup\" [(ngModel)]=\"data.Place\" (change)=\"onValChange(group.value)\">\n            <mat-button-toggle checked=\"true\" value=\"table\">\n              Tablo\n            </mat-button-toggle>\n            <mat-button-toggle value=\"form\">\n              Form\n            </mat-button-toggle>\n          </mat-button-toggle-group>\n        </div>\n\n      </div>\n      <cdk-table #table [dataSource]=\"dataSource\">\n\n        <ng-container cdkColumnDef=\"Action\">\n          <cdk-header-cell *cdkHeaderCellDef class=\"table-header-cell\">Sil/Aktif</cdk-header-cell>\n          <cdk-cell *cdkCellDef=\"let element;let rindex=index\" class=\"table-cell\">\n            <button mat-icon-button (click)=\"deleteItem(rindex,element)\" tabindex=\"-1\">\n              <mat-icon aria-label=\"Delete\" color=\"warn\">delete</mat-icon>\n            </button>\n            <mat-checkbox [(ngModel)]=\"element.IsActive\"></mat-checkbox>\n          </cdk-cell>\n        </ng-container>\n\n        <ng-container cdkColumnDef=\"Type\" flexLayout=\"column\" class=\"table-header-cell\">\n          <cdk-header-cell *cdkHeaderCellDef class=\"table-cell\"> Giriş Şekli </cdk-header-cell>\n          <cdk-cell *cdkCellDef=\"let element\">\n            <mat-select placeholder=\"Giriş Şekli\" disableRipple [(ngModel)]=\"element.Type\" (ngModelChange)=\"onModelChange(element,'Type')\"\n              class=\"table-select\">\n              <mat-option *ngFor=\"let item of type\" [value]=\"item\">\n                {{item}}\n              </mat-option>\n            </mat-select>\n          </cdk-cell>\n        </ng-container>\n\n        <ng-container cdkColumnDef=\"Caption\">\n          <cdk-header-cell *cdkHeaderCellDef class=\"table-header-cell\"> Etiket </cdk-header-cell>\n          <cdk-cell *cdkCellDef=\"let element;let rindex=index\" class=\"table-cell\">\n            <input matInput type=\"text\" [(ngModel)]=\"element.Caption\" placeholder=\"Etiket\" (ngModelChange)=\"onModelChange(element,'Caption')\"\n              id=\"Caption-{{rindex}}\" (keydown)=\"keydown($event,'Caption',rindex)\" class=\"table-input\">\n          </cdk-cell>\n        </ng-container>\n\n        <!-- <ng-container cdkColumnDef=\"Options\">\n              <cdk-header-cell *cdkHeaderCellDef class=\"table-header-cell\" > Seçim Listesi </cdk-header-cell>\n              <cdk-cell *cdkCellDef=\"let element;let rindex=index\" class=\"table-cell\" >\n                <input matInput type=\"text\"  [(ngModel)]=\"element.Options\" placeholder=\"Seçim Listesi\" (ngModelChange)=\"onModelChange(element,'Options')\"\n                  id=\"Options-{{rindex}}\" (keydown)=\"keydown($event,'Options',rindex)\" class=\"table-input\">\n              </cdk-cell>\n          </ng-container> -->\n\n        <ng-container cdkColumnDef=\"Value\">\n          <cdk-header-cell *cdkHeaderCellDef class=\"table-header-cell\"> Ön değer </cdk-header-cell>\n          <cdk-cell *cdkCellDef=\"let element;let rindex=index\" class=\"table-cell\">\n            <input matInput type=\"text\" [(ngModel)]=\"element.Value\" placeholder=\"Ön değer\" (ngModelChange)=\"onModelChange(element,'Value')\"\n              id=\"Value-{{rindex}}\" (keydown)=\"keydown($event,'Value',rindex)\" class=\"table-input\">\n          </cdk-cell>\n        </ng-container>\n\n\n\n        <cdk-header-row *cdkHeaderRowDef=\"displayedColumns\" class=\"table-header-row\"></cdk-header-row>\n        <cdk-row *cdkRowDef=\"let row;let rindex=index; columns: displayedColumns;\" class=\"table-row\" (click)=\"rowClick(row,rindex)\"></cdk-row>\n      </cdk-table>\n    </div>\n\n  </mat-card-content>\n  <mat-card-actions>\n    <button mat-raised-button (click)=\"confirmAdd()\" color=\"warn\">Kaydet</button>\n    <button mat-raised-button (click)=\"onNoClick()\" tabindex=\"-1\">Vazgeç</button>\n  </mat-card-actions>\n</mat-card>"

/***/ }),

/***/ "../../../../../src/app/observation.definition/observation-definition-dialog/observation-definition-dialog.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".table-input,\n.table-select {\n  border: none;\n  display: inline; }\n\n.right {\n  padding-right: 1em; }\n\n.table-input:hover,\n.table-select:hover,\n.table-input:focus,\n.table-select:focus {\n  border: 1px inset lightblue;\n  border-radius: 5px; }\n\ncdk-table {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  max-height: 450px;\n  display: block;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  min-width: 300px;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  border-bottom: 1px solid #7c7c7c; }\n\n.table-header-row, .table-row {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 32px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 1px 8px; }\n\n.table-cell, .table-header-cell {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  padding-left: 1px;\n  padding-right: 1px; }\n\n.cdk-header-cell {\n  font-size: 10px;\n  font-weight: bolder; }\n\n.cdk-cell {\n  font-size: 11px; }\n\n.cdk-column-Action {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  max-width: 90px; }\n\n.cdk-column-Type {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  max-width: 100px; }\n\n.cdk-column-Options,\n.cdk-column-Caption,\n.cdk-column-Value {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row; }\n\n.cdk-column-Caption {\n  width: 60%; }\n\n.cdk-column-Value {\n  max-width: 200px; }\n\n.cdk-column-Options {\n  max-width: 200px; }\n\n.table-header-cell {\n  text-align: left; }\n\n.mat-chip {\n  font-size: 11px;\n  line-height: 15px;\n  margin-bottom: 2px; }\n\n.highlight {\n  background-color: brown;\n  color: white; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/observation.definition/observation-definition-dialog/observation-definition-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ObservationDefinitionDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers__ = __webpack_require__("../../../../../src/app/_helpers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__directives_generic_field_FieldInfo__ = __webpack_require__("../../../../../src/app/_directives/generic-field/FieldInfo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services__ = __webpack_require__("../../../../../src/app/_services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_ObservationHeadModel__ = __webpack_require__("../../../../../src/app/_models/ObservationHeadModel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__directives__ = __webpack_require__("../../../../../src/app/_directives/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};








var ObservationDefinitionDialogComponent = /** @class */ (function () {
    function ObservationDefinitionDialogComponent(dialogRef, data, obsService, dialog, renderer, snackBar) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.obsService = obsService;
        this.dialog = dialog;
        this.renderer = renderer;
        this.snackBar = snackBar;
        this.displayedColumns = ['Action', 'Type', 'Caption', 'Value'];
        /*
        Type: string;
          Caption: string;
          Value: any;
          Options?: string[];
          Masked?:string;
          Size?:number;
        */
        this.type = ['Text', 'TextArea', 'Number', 'Option', 'CheckBox', 'Datepicker', 'Slide-Toggle', 'Telephone'];
        this.selectedRowIndex = "";
        console.log(data.GenericFields);
        if (data.GenericFields.length == 0) {
            this.data.GenericFields.push(new __WEBPACK_IMPORTED_MODULE_2__directives_generic_field_FieldInfo__["a" /* FieldInfo */]());
        }
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__helpers__["a" /* GenericDataSource */](data.GenericFields);
    }
    ObservationDefinitionDialogComponent.prototype.ngOnInit = function () {
    };
    ObservationDefinitionDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    ObservationDefinitionDialogComponent.prototype.submit = function () {
    };
    ObservationDefinitionDialogComponent.prototype.confirmAdd = function () {
        var _this = this;
        this.data.GenericFields = this.data.GenericFields.filter(function (gf) { return gf.Caption != undefined && gf.Type != undefined; });
        this.obsService.url = __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].URLRestFullApi + "/observationhead";
        if (this.data._id == undefined) {
            this.obsService.insert(this.data)
                .subscribe(function (response) {
                _this.data._id = response._id;
                _this.dialogRef.close("1");
            });
        }
        else {
            this.obsService.update(this.data)
                .subscribe(function (Response) {
                _this.dialogRef.close("1");
            });
        }
    };
    ObservationDefinitionDialogComponent.prototype.rowClick = function (row, index) {
        this.selectedRowIndex = row._id;
        if (index == this.dataSource.data().slice().length - 1) {
            var newRow = new __WEBPACK_IMPORTED_MODULE_2__directives_generic_field_FieldInfo__["a" /* FieldInfo */]();
            this.data.GenericFields.push(newRow);
            this.dataSource.update(this.data.GenericFields);
        }
    };
    ObservationDefinitionDialogComponent.prototype.keydown = function (event, tag, index) {
        if (event.key == 'ArrowDown') {
            if (this.data.GenericFields.length - 1 > index) {
                var element = '#' + tag + '-' + (index + 1);
                var onElement = this.renderer.selectRootElement(element);
                onElement.focus();
                this.rowClick(this.data.GenericFields[index + 1], index + 1);
            }
        }
        if (event.key == 'ArrowUp') {
            if (index > 0) {
                var element = '#' + tag + '-' + (index - 1);
                var onElement = this.renderer.selectRootElement(element);
                onElement.focus();
                this.rowClick(this.data.GenericFields[index - 1], index - 1);
            }
        }
    };
    ObservationDefinitionDialogComponent.prototype.onModelChange = function (element, tag) {
        console.log(element);
        if (element.Type == 'Option') {
            element.Options = element.Value.split(",");
        }
    };
    ObservationDefinitionDialogComponent.prototype.validateRow = function (element) {
        console.log(element);
        if (element.Type != undefined && element.Caption != undefined)
            return true;
        else
            return false;
    };
    ObservationDefinitionDialogComponent.prototype.deleteItem = function (index, data) {
        var _this = this;
        var deleteData = { "Title": data.Caption, "Message": "Dikkat Kayıt silinecektir!!!", "Type": __WEBPACK_IMPORTED_MODULE_7__directives__["c" /* ConfirmType */].Delete };
        var type = __WEBPACK_IMPORTED_MODULE_7__directives__["c" /* ConfirmType */].Delete;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_7__directives__["a" /* ConfirmDialogComponent */], { data: deleteData });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log(result);
            if (result == "1") {
                _this.snackBar.open('Kayıt Silindi...', '', { duration: 3000, });
                _this.data.GenericFields.splice(index, 1);
                _this.dataSource.update(_this.data.GenericFields);
            }
        });
    };
    ObservationDefinitionDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-observation-definition-dialog',
            template: __webpack_require__("../../../../../src/app/observation.definition/observation-definition-dialog/observation-definition-dialog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/observation.definition/observation-definition-dialog/observation-definition-dialog.component.scss")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_4__angular_material__["e" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_material__["o" /* MatDialogRef */],
            __WEBPACK_IMPORTED_MODULE_5__models_ObservationHeadModel__["a" /* ObservationHead */],
            __WEBPACK_IMPORTED_MODULE_3__services__["c" /* GenericService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["m" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["G" /* MatSnackBar */]])
    ], ObservationDefinitionDialogComponent);
    return ObservationDefinitionDialogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/observation.definition/observation.definition.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/observation.definition/observation.definition.component.html":
/***/ (function(module, exports) {

module.exports = "\n  <div>\n    <mat-card  fxLayout=\"column\" fxLayoutAlign=\"end stretch\" >\n      <h3>Gözlem Tablosu Tanımları </h3>\n  \n\n\n    <mat-table #table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n  \n  \n      <ng-container matColumnDef=\"Code\">\n        <mat-header-cell *matHeaderCellDef>Kodu</mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.Code}}</mat-cell>\n      </ng-container>\n  \n      <ng-container matColumnDef=\"Name\">\n        <mat-header-cell *matHeaderCellDef>Açıklama</mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.Name}}</mat-cell>\n      </ng-container>\n  \n      \n      <!-- actions -->\n      <ng-container matColumnDef=\"Action\">\n        <mat-header-cell *matHeaderCellDef>\n          <button mat-mini-fab color=\"primary\" (click)=\"addNew()\">\n            <mat-icon aria-label=\"Add\">add</mat-icon>\n          </button>\n        </mat-header-cell>\n  \n        <mat-cell *matCellDef=\"let row;let i=index\">\n          <button mat-icon-button color=\"accent\" (click)=\"editItem(i,row)\">\n            <mat-icon aria-label=\"Edit\">edit</mat-icon>\n          </button>\n  \n          <button mat-icon-button color=\"accent\" (click)=\"deleteItem(i,row)\">\n            <mat-icon aria-label=\"Delete\">delete</mat-icon>\n          </button>\n        </mat-cell>\n      </ng-container>\n  \n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\" class=\"rowheigth\"></mat-row>\n    </mat-table>\n  </mat-card>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/observation.definition/observation.definition.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ObservationDefinitionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services__ = __webpack_require__("../../../../../src/app/_services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers__ = __webpack_require__("../../../../../src/app/_helpers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__observation_definition_dialog_observation_definition_dialog_component__ = __webpack_require__("../../../../../src/app/observation.definition/observation-definition-dialog/observation-definition-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__directives__ = __webpack_require__("../../../../../src/app/_directives/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_ObservationHeadModel__ = __webpack_require__("../../../../../src/app/_models/ObservationHeadModel.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ObservationDefinitionComponent = /** @class */ (function () {
    function ObservationDefinitionComponent(obsHeadService, dialog, snackBar) {
        var _this = this;
        this.obsHeadService = obsHeadService;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.obsHeads = [];
        this.displayedColumns = ['Action', 'Code', 'Name'];
        obsHeadService.url = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].URLRestFullApi + "/observationheads";
        obsHeadService.getAll()
            .subscribe(function (response) {
            console.log(response);
            _this.obsHeads = response;
            _this.dataSource = new __WEBPACK_IMPORTED_MODULE_2__helpers__["a" /* GenericDataSource */](_this.obsHeads);
        });
    }
    ObservationDefinitionComponent.prototype.ngOnInit = function () {
    };
    ObservationDefinitionComponent.prototype.onSubmit = function () {
        this.obsHeadService.url = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].URLRestFullApi + "/observationhead";
        this.obsHeadService.insert(this.obsHead)
            .subscribe(function (response) {
            console.log(response);
        });
    };
    ObservationDefinitionComponent.prototype.addNew = function () {
        var _this = this;
        var obervationhead = new __WEBPACK_IMPORTED_MODULE_7__models_ObservationHeadModel__["a" /* ObservationHead */]();
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__observation_definition_dialog_observation_definition_dialog_component__["a" /* ObservationDefinitionDialogComponent */], {
            minWidth: '650px',
            minHeight: '400px',
            data: obervationhead,
            disableClose: true
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log(result);
            if (result == "1") {
                _this.obsHeads.push(obervationhead);
                _this.dataSource.update(_this.obsHeads);
            }
        });
    };
    ObservationDefinitionComponent.prototype.editItem = function (index, data) {
        var _this = this;
        var obsHead = Object.assign({}, data); /// clone object
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__observation_definition_dialog_observation_definition_dialog_component__["a" /* ObservationDefinitionDialogComponent */], {
            minWidth: '650px',
            minHeight: '400px',
            data: obsHead, disableClose: true
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result == "1") {
                _this.obsHeads[index] = obsHead;
                _this.dataSource.update(_this.obsHeads);
            }
        });
    };
    ObservationDefinitionComponent.prototype.deleteItem = function (index, data) {
        var _this = this;
        console.log(data);
        var deleteData = { "Title": data.Code + ' ' + data.Name, "Message": "Dikkat Kayıt silinecektir!!!", "Type": __WEBPACK_IMPORTED_MODULE_6__directives__["c" /* ConfirmType */].Delete };
        var type = __WEBPACK_IMPORTED_MODULE_6__directives__["c" /* ConfirmType */].Delete;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__directives__["a" /* ConfirmDialogComponent */], { data: deleteData });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log(result);
            if (result == "1") {
                console.log(data.Name + ' silindi.');
                _this.obsHeadService.url = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].URLRestFullApi + "/observationhead/" + data._id;
                _this.obsHeadService.delete()
                    .subscribe(function (result) {
                    _this.obsHeads.splice(index, 1);
                    _this.dataSource.update(_this.obsHeads);
                });
            }
        });
    };
    ObservationDefinitionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-observation.definition',
            template: __webpack_require__("../../../../../src/app/observation.definition/observation.definition.component.html"),
            styles: [__webpack_require__("../../../../../src/app/observation.definition/observation.definition.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services__["c" /* GenericService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services__["c" /* GenericService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["m" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["G" /* MatSnackBar */]])
    ], ObservationDefinitionComponent);
    return ObservationDefinitionComponent;
}());



/***/ }),

/***/ "../../../../../src/app/observation/observation.component.html":
/***/ (function(module, exports) {

module.exports = "\n<cdk-table [dataSource]=\"dataSource\">\n  <ng-container cdkColumnDef=\"Responsible\">\n    <cdk-header-cell *cdkHeaderCellDef class=\"table-header-cell\">Deneme Sorumlusu </cdk-header-cell>\n    <cdk-cell *cdkCellDef=\"let element\" class=\"table-cell\">\n      {{element.Responsible}}\n    </cdk-cell>\n  </ng-container>\n  <ng-container cdkColumnDef=\"CategoryTitle\">\n    <cdk-header-cell *cdkHeaderCellDef class=\"table-header-cell\"> Ana Segment </cdk-header-cell>\n    <cdk-cell *cdkCellDef=\"let element\" class=\"table-cell\">\n      {{element.CategoryTitle}}\n    </cdk-cell>\n  </ng-container>\n  <ng-container cdkColumnDef=\"ProductTitle\">\n    <cdk-header-cell *cdkHeaderCellDef class=\"table-header-cell\"> Alt Segment </cdk-header-cell>\n    <cdk-cell *cdkCellDef=\"let element\" class=\"table-cell\">\n      {{element.ProductTitle}}\n    </cdk-cell>\n  </ng-container>\n  <ng-container cdkColumnDef=\"VariantTitle\">\n    <cdk-header-cell *cdkHeaderCellDef class=\"table-header-cell\"> Çeşit </cdk-header-cell>\n    <cdk-cell *cdkCellDef=\"let element\" class=\"table-cell\">\n      {{element.VariantTitle}}\n    </cdk-cell>\n  </ng-container>\n  <ng-container cdkColumnDef=\"Region\">\n    <cdk-header-cell *cdkHeaderCellDef class=\"table-header-cell\"> Bölge </cdk-header-cell>\n    <cdk-cell *cdkCellDef=\"let element\" class=\"table-cell\">\n      {{element.Region}}\n    </cdk-cell>\n  </ng-container>\n  <ng-container cdkColumnDef=\"TrialSeason\">\n    <cdk-header-cell *cdkHeaderCellDef class=\"table-header-cell\"> Sezon </cdk-header-cell>\n    <cdk-cell *cdkCellDef=\"let element\" class=\"table-cell\">\n      {{element.TrialSeason}}\n    </cdk-cell>\n  </ng-container>\n\n  <ng-container cdkColumnDef=\"ResultDate\">\n    <cdk-header-cell *cdkHeaderCellDef class=\"table-header-cell\"> ÜGS Sonuç Tarihi </cdk-header-cell>\n    <cdk-cell *cdkCellDef=\"let element\" class=\"table-cell\">\n      {{element.ResultDate| date:'dd.MM.yyyy'}}\n    </cdk-cell>\n  </ng-container>\n\n  <ng-container cdkColumnDef=\"Status\">\n    <cdk-header-cell *cdkHeaderCellDef class=\"table-header-cell\"> Statü </cdk-header-cell>\n    <cdk-cell *cdkCellDef=\"let element\" class=\"table-cell\">\n      {{element.Status}}\n    </cdk-cell>\n  </ng-container>\n  <ng-container cdkColumnDef=\"Action\">\n    <cdk-header-cell *cdkHeaderCellDef>İşlemler</cdk-header-cell>\n    <cdk-cell *cdkCellDef=\"let element;let rindex=index\">\n      <button mat-icon-button [matMenuTriggerFor]=\"menu\">\n        <mat-icon>more_vert</mat-icon>\n      </button>\n      <mat-menu #menu=\"matMenu\">\n          <a mat-menu-item\n          [routerLink]=\"['/seedObservation', element]\">\n          <mat-icon>visibility</mat-icon>\n          <span>Gözlem Girişi</span>\n        </a>\n        <a mat-menu-item\n        [routerLink]=\"['/productmarketprofile', element]\">\n          <mat-icon>bar_chart</mat-icon>\n          <span>Ürün Pazar Profili</span>\n      </a>\n      </mat-menu>\n    </cdk-cell>\n  </ng-container>\n\n  <cdk-header-row *cdkHeaderRowDef=\"displayedColumns\" class=\"table-header-row\"></cdk-header-row>\n  <cdk-row *cdkRowDef=\"let row;let rindex=index; columns: displayedColumns;\" [ngClass]=\"{'highlight': selectedRowIndex == row._id}\"\n    class=\"table-row\" ></cdk-row>\n</cdk-table>\n"

/***/ }),

/***/ "../../../../../src/app/observation/observation.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".right {\n  padding-right: 1em; }\n\n.table-input,\n.table-select {\n  border: none; }\n\n.table-input:hover,\n.table-select:hover,\n.table-input:focus,\n.table-select:focus {\n  border: 1px inset lightblue;\n  border-radius: 5px; }\n\ncdk-table {\n  display: block;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  min-width: 300px;\n  width: 100%;\n  max-height: calc(100vh - 220px);\n  height: 100%;\n  overflow: auto;\n  border-bottom: 1px solid #7c7c7c; }\n\n.table-row:hover {\n  background-color: #ebebeb; }\n\n.table-header-row, .table-row {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 32px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 1px 8px; }\n\n.table-cell, .table-header-cell {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  padding-left: 1px;\n  padding-right: 1px; }\n\n.cdk-header-cell {\n  font-size: 10px;\n  font-weight: bolder; }\n\n.cdk-cell {\n  font-size: 11px; }\n\n.cdk-column-Action {\n  min-width: 30px;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start; }\n\n.cdk-column-TrialYear,\n.cdk-column-Status {\n  min-width: 40px;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start; }\n\n.cdk-column-CategoryTitle {\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start; }\n\n.cdk-column-TrialSeason,\n.cdk-column-ProductTitle,\n.cdk-column-VariantTitle,\n.cdk-column-Result {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row; }\n\n.cdk-column-Region {\n  min-width: 40px; }\n\n.cdk-column-Region .mat-select-value-text {\n    white-space: pre-wrap !important;\n    overflow: hidden;\n    text-overflow: ellipsis; }\n\n.cdk-column-ENumber,\n.cdk-column-AGCode {\n  min-width: 80px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row; }\n\n.cdk-column-TotalAmount,\n.cdk-column-Amount,\n.cdk-column-Pack,\n.cdk-column-MainUnit,\n.cdk-column-SecondUnit,\n.cdk-column-Responsible,\n.cdk-column-Deliverer {\n  min-width: 50px;\n  text-align: left; }\n\n.cdk-column-TotalAmount {\n  padding-right: 10px;\n  text-align: right; }\n\n.cdk-column-ResponsibleNotes, .cdk-column-Notes {\n  min-width: 200px; }\n\n.cdk-column-Date, .cdk-column-ResultDate {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  min-width: 90px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row; }\n\n.table-header-cell {\n  text-align: left; }\n\n.mat-chip {\n  font-size: 11px;\n  line-height: 15px;\n  margin-bottom: 2px; }\n\nmat-form-field {\n  width: 100%; }\n\n.highlight {\n  background: #42A948;\n  /* green */ }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/observation/observation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ObservationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models__ = __webpack_require__("../../../../../src/app/_models/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__("../../../../../src/app/_services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helpers__ = __webpack_require__("../../../../../src/app/_helpers/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ObservationComponent = /** @class */ (function () {
    function ObservationComponent(trialService, enumsMock, personService) {
        var _this = this;
        this.trialService = trialService;
        this.enumsMock = enumsMock;
        this.personService = personService;
        this.region = "";
        this.season = "";
        this.person = new __WEBPACK_IMPORTED_MODULE_1__models__["i" /* PersonModel */]();
        this.displayedColumns = ['Responsible', 'CategoryTitle', 'ProductTitle', 'VariantTitle', 'Region', 'TrialSeason', 'ResultDate', 'Status', 'Action'];
        this.selectedRowIndex = -1;
        this.regions = enumsMock.getRegion();
        this.seasons = enumsMock.getTrialSeason();
        personService.url = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].URLRestFullApi + "/personsByUser/" + localStorage.getItem('username');
        personService.getAll()
            .subscribe(function (response) {
            _this.persons = response;
            trialService.url = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].URLRestFullApi + "/trialFilter?Responsible=" + _this.persons.map(function (p) { return p.Code; }).join(',');
            trialService.getAll()
                .subscribe(function (response) {
                _this.dataSource = new __WEBPACK_IMPORTED_MODULE_4__helpers__["a" /* GenericDataSource */](response);
            });
        });
    }
    ObservationComponent.prototype.ngOnInit = function () {
    };
    ObservationComponent.prototype.highlight = function (row) {
        this.selectedRowIndex = row.id;
    };
    ObservationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-observation',
            template: __webpack_require__("../../../../../src/app/observation/observation.component.html"),
            styles: [__webpack_require__("../../../../../src/app/observation/observation.component.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services__["c" /* GenericService */], __WEBPACK_IMPORTED_MODULE_2__services__["b" /* EnumsMock */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services__["c" /* GenericService */],
            __WEBPACK_IMPORTED_MODULE_2__services__["b" /* EnumsMock */],
            __WEBPACK_IMPORTED_MODULE_2__services__["c" /* GenericService */]])
    ], ObservationComponent);
    return ObservationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/person/person.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/person/person.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n  <div>\r\n    <mat-card  fxLayout=\"column\" fxLayoutAlign=\"end stretch\" >\r\n      <h3> Ürün Sorumlusu / Temsilci Tanımları </h3>\r\n  \r\n\r\n\r\n    <mat-table #table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\r\n  \r\n  \r\n      <ng-container matColumnDef=\"FirstName\">\r\n        <mat-header-cell *matHeaderCellDef>Adı</mat-header-cell>\r\n        <mat-cell *matCellDef=\"let row\"> {{row.FirstName}}</mat-cell>\r\n      </ng-container>\r\n  \r\n      <ng-container matColumnDef=\"LastName\">\r\n        <mat-header-cell *matHeaderCellDef>Soyadı</mat-header-cell>\r\n        <mat-cell *matCellDef=\"let row\"> {{row.LastName}}</mat-cell>\r\n      </ng-container>\r\n  \r\n      <ng-container matColumnDef=\"GsmNr\">\r\n        <mat-header-cell *matHeaderCellDef>Telefon No</mat-header-cell>\r\n        <mat-cell *matCellDef=\"let row\"> {{row.GsmNr}}</mat-cell>\r\n      </ng-container>\r\n  \r\n      <ng-container matColumnDef=\"EMail\">\r\n        <mat-header-cell *matHeaderCellDef>E-Posta</mat-header-cell>\r\n        <mat-cell *matCellDef=\"let row\"> {{row.EMail}}</mat-cell>\r\n      </ng-container>\r\n  \r\n\r\n      <!-- actions -->\r\n      <ng-container matColumnDef=\"actions\">\r\n        <mat-header-cell *matHeaderCellDef>\r\n          <button mat-mini-fab color=\"primary\" (click)=\"addNew()\">\r\n            <mat-icon aria-label=\"Add\">add</mat-icon>\r\n          </button>\r\n        </mat-header-cell>\r\n  \r\n        <mat-cell *matCellDef=\"let row;let i=index\">\r\n          <button mat-icon-button color=\"accent\" (click)=\"editItem(i,row)\">\r\n            <mat-icon aria-label=\"Edit\">edit</mat-icon>\r\n          </button>\r\n  \r\n          <button mat-icon-button color=\"accent\" (click)=\"deleteItem(i,row)\">\r\n            <mat-icon aria-label=\"Delete\">delete</mat-icon>\r\n          </button>\r\n        </mat-cell>\r\n      </ng-container>\r\n  \r\n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\" class=\"rowheigth\"></mat-row>\r\n    </mat-table>\r\n  </mat-card>\r\n  </div>"

/***/ }),

/***/ "../../../../../src/app/person/person.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_PersonModel__ = __webpack_require__("../../../../../src/app/_models/PersonModel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_generic_service__ = __webpack_require__("../../../../../src/app/_services/generic.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__person_persondialog_persondialog_component__ = __webpack_require__("../../../../../src/app/person/persondialog/persondialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__directives_confirm_dialog_confirm_dialog_component__ = __webpack_require__("../../../../../src/app/_directives/confirm.dialog/confirm.dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__helpers__ = __webpack_require__("../../../../../src/app/_helpers/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var PersonComponent = /** @class */ (function () {
    function PersonComponent(personService, dialog) {
        var _this = this;
        this.personService = personService;
        this.dialog = dialog;
        this.displayedColumns = ['FirstName', 'LastName', 'GsmNr', 'EMail', 'actions'];
        this.personModel = new __WEBPACK_IMPORTED_MODULE_1__models_PersonModel__["a" /* PersonModel */]();
        this.personService.url = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].URLRestFullApi + "/persons";
        this.personService.getAll()
            .subscribe(function (response) {
            _this.persons = response;
            _this.dataSource = new __WEBPACK_IMPORTED_MODULE_7__helpers__["a" /* GenericDataSource */](_this.persons);
        });
    }
    PersonComponent.prototype.ngOnInit = function () {
    };
    PersonComponent.prototype.onSubmit = function () {
        this.personService.url = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].URLRestFullApi + "/person";
        this.personService.insert(this.personModel)
            .subscribe(function (response) {
            console.log(response);
        });
    };
    PersonComponent.prototype.addNew = function () {
        var _this = this;
        var person = new __WEBPACK_IMPORTED_MODULE_1__models_PersonModel__["a" /* PersonModel */]();
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__person_persondialog_persondialog_component__["a" /* PersonDialogComponent */], { data: person, disableClose: true });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log(result);
            if (result == "1") {
                _this.persons.push(person);
                _this.dataSource.update(_this.persons);
            }
        });
    };
    PersonComponent.prototype.editItem = function (index, data) {
        var _this = this;
        var person = Object.assign({}, data); /// clone object
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__person_persondialog_persondialog_component__["a" /* PersonDialogComponent */], { minWidth: '450px', data: person, disableClose: true });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result == "1") {
                _this.persons[index] = person;
                _this.dataSource.update(_this.persons);
            }
        });
    };
    PersonComponent.prototype.deleteItem = function (index, data) {
        var _this = this;
        console.log(data);
        var deleteData = { "Title": data.FirstName + ' ' + data.LastName, "Message": "Dikkat Kayıt silinecektir!!!", "Type": __WEBPACK_IMPORTED_MODULE_6__directives_confirm_dialog_confirm_dialog_component__["c" /* ConfirmType */].Delete };
        var type = __WEBPACK_IMPORTED_MODULE_6__directives_confirm_dialog_confirm_dialog_component__["c" /* ConfirmType */].Delete;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__directives_confirm_dialog_confirm_dialog_component__["a" /* ConfirmDialogComponent */], { data: deleteData });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log(result);
            if (result == "1") {
                console.log(data.FirstName + ' silindi.');
                _this.personService.url = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].URLRestFullApi + "/person/" + data._id;
                _this.personService.delete()
                    .subscribe(function (result) {
                    _this.persons.splice(index, 1);
                    _this.dataSource.update(_this.persons);
                });
            }
        });
    };
    PersonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-person',
            template: __webpack_require__("../../../../../src/app/person/person.component.html"),
            styles: [__webpack_require__("../../../../../src/app/person/person.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_generic_service__["a" /* GenericService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_generic_service__["a" /* GenericService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["m" /* MatDialog */]])
    ], PersonComponent);
    return PersonComponent;
}());



/***/ }),

/***/ "../../../../../src/app/person/persondialog/persondialog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*  */", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/person/persondialog/persondialog.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n  <mat-card-header>\r\n    <mat-card-subtitle>Personel Tanımı</mat-card-subtitle>\r\n  </mat-card-header>\r\n\r\n  <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"end stretch\">\r\n\r\n\r\n    <!-- <form class=\"mat-dialog-content\" (ngSubmit)=\"submit\" #formControl=\"ngForm\"> -->\r\n    <div fxLayout=\"row\" fxLayoutGap=\"20px\">\r\n      <mat-form-field color=\"accent\">\r\n        <input matInput required class=\"form-control\" #FirstName placeholder=\"Etiket\" name=\"code\" [(ngModel)]=\"data.Code\">\r\n      </mat-form-field>\r\n      <mat-form-field>\r\n        <mat-select placeholder=\"Tip\" disableRipple [(ngModel)]=\"data.TrCode\">\r\n          <mat-option *ngFor=\"let item of trCodes\" [value]=\"item\">\r\n            {{item}}\r\n          </mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n    </div>\r\n    <mat-form-field color=\"accent\">\r\n      <input matInput required class=\"form-control\" #FirstName placeholder=\"Adı\" name=\"firstname\" [(ngModel)]=\"data.FirstName\">\r\n    </mat-form-field>\r\n    <mat-form-field color=\"accent\">\r\n      <input matInput required class=\"form-control\" placeholder=\"Soyadı\" name=\"lastname\" [(ngModel)]=\"data.LastName\">\r\n    </mat-form-field>\r\n    <mat-form-field color=\"accent\">\r\n      <input matInput [textMask]=\"{mask: telNoMask}\" class=\"form-control\" placeholder=\"Gsm No\" name=\"gsmnr\" [(ngModel)]=\"data.GsmNr\">\r\n    </mat-form-field>\r\n    <mat-form-field color=\"accent\">\r\n      <input matInput class=\"form-control\" placeholder=\"E-Posta\" name=\"email\" [(ngModel)]=\"data.EMail\">\r\n    </mat-form-field>\r\n  </mat-card-content>\r\n  <mat-card-actions>\r\n\r\n\r\n    <button mat-raised-button (click)=\"confirmAdd()\" color=\"warn\">Kaydet</button>\r\n    <button mat-raised-button (click)=\"onNoClick()\" tabindex=\"-1\">Vazgeç</button>\r\n    <!-- </form> -->\r\n  </mat-card-actions>\r\n</mat-card>"

/***/ }),

/***/ "../../../../../src/app/person/persondialog/persondialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_PersonModel__ = __webpack_require__("../../../../../src/app/_models/PersonModel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_generic_service__ = __webpack_require__("../../../../../src/app/_services/generic.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services__ = __webpack_require__("../../../../../src/app/_services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var PersonDialogComponent = /** @class */ (function () {
    function PersonDialogComponent(dialogRef, data, dataService, enumsMock) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.dataService = dataService;
        this.enumsMock = enumsMock;
        this.person = new __WEBPACK_IMPORTED_MODULE_2__models_PersonModel__["a" /* PersonModel */]();
        this.users = [];
        this.removable = true; // kullanıcı silinebilsin (chip)
        this.telNoMask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
        this.trCodes = enumsMock.getPersonTrCode();
    }
    PersonDialogComponent.prototype.ngOnInit = function () { };
    PersonDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    PersonDialogComponent.prototype.submit = function () {
    };
    PersonDialogComponent.prototype.confirmAdd = function () {
        var _this = this;
        this.dataService.url = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].URLRestFullApi + "/person";
        if (this.data._id == undefined) {
            this.dataService.insert(this.data)
                .subscribe(function (response) {
                _this.data._id = response._id;
                _this.dialogRef.close("1");
            });
        }
        else {
            this.dataService.update(this.data)
                .subscribe(function (Response) {
                console.log("person change");
                _this.dialogRef.close("1");
            });
        }
    };
    PersonDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-persondialog',
            template: __webpack_require__("../../../../../src/app/person/persondialog/persondialog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/person/persondialog/persondialog.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_3__services_generic_service__["a" /* GenericService */], __WEBPACK_IMPORTED_MODULE_5__services__["b" /* EnumsMock */]]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MatDialogRef */],
            __WEBPACK_IMPORTED_MODULE_2__models_PersonModel__["a" /* PersonModel */],
            __WEBPACK_IMPORTED_MODULE_3__services_generic_service__["a" /* GenericService */],
            __WEBPACK_IMPORTED_MODULE_5__services__["b" /* EnumsMock */]])
    ], PersonDialogComponent);
    return PersonDialogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/piechart/piechart.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"{{elementId}}\" style=\"width: 400px; height: 400px;\"></div>"

/***/ }),

/***/ "../../../../../src/app/piechart/piechart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PieChartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers__ = __webpack_require__("../../../../../src/app/_helpers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__("../../../../../src/app/_services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PieChartComponent = /** @class */ (function () {
    function PieChartComponent(_pieChartService) {
        this._pieChartService = _pieChartService;
    }
    PieChartComponent.prototype.ngOnInit = function () {
        this._pieChartService.BuildPieChart(this.elementId, this.data, this.config);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], PieChartComponent.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__helpers__["d" /* PieChartConfig */])
    ], PieChartComponent.prototype, "config", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], PieChartComponent.prototype, "elementId", void 0);
    PieChartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pie-chart',
            template: __webpack_require__("../../../../../src/app/piechart/piechart.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_2__services__["d" /* GooglePieChartService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services__["d" /* GooglePieChartService */]])
    ], PieChartComponent);
    return PieChartComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pmp/pmp.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"container\">\n  <mat-card-header>\n    <mat-card-title>\n\n      <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutGap=\"20px\">\n\n        <mat-form-field>\n          <input matInput type=\"text\" placeholder=\"Ürün\" aria-label=\"category\" [(ngModel)]=\"seed.Title\">\n          <button mat-icon-button matSuffix color=\"basic\" (click)=\"categorySelect()\">\n            <mat-icon aria-label=\"Search\">search</mat-icon>\n          </button>\n        </mat-form-field>\n        <mat-form-field>\n          <input matInput type=\"text\" placeholder=\"Alt Segment\" aria-label=\"product\" [(ngModel)]=\"product.Title\">\n          <button mat-icon-button matSuffix color=\"basic\" (click)=\"productSelect()\">\n            <mat-icon aria-label=\"Search\">search</mat-icon>\n          </button>\n        </mat-form-field>\n      </div>\n    </mat-card-title>\n  </mat-card-header>\n  <mat-card-content>\n\n    <mat-accordion>\n      <mat-expansion-panel *ngFor=\"let trial of pmps;let pIndex=index\" (opened)=\"expPanelOpened(trial)\">\n        <mat-expansion-panel-header>\n          <mat-panel-title>\n            {{trial.TrialSeason}}\n          </mat-panel-title>\n          <mat-panel-description>\n            {{trial.Region}}\n          </mat-panel-description>\n        </mat-expansion-panel-header>\n\n        <div fxLayout=\"column\" fxLayoutGap=\"5px\">\n          <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutGap=\"5px\">\n            <mat-card fxFlex=\"34\">\n              <mat-card-header>\n                <mat-card-subtitle>\n                  Screening/Üretici Deneme\n                </mat-card-subtitle>\n              </mat-card-header>\n              <mat-card-content>\n                <cdk-table [dataSource]=\"screeningDataSource\">\n                  <ng-container cdkColumnDef=\"Action\">\n                    <cdk-header-cell *cdkHeaderCellDef>Sil</cdk-header-cell>\n                    <cdk-cell *cdkCellDef=\"let element;let rindex=index\">\n                      <button mat-icon-button (click)=\"deleteItem(rindex,element)\" tabindex=\"-1\">\n                        <mat-icon aria-label=\"Delete\" color=\"warn\">delete</mat-icon>\n                      </button>\n                    </cdk-cell>\n                  </ng-container>\n                  <ng-container cdkColumnDef=\"VariantTitle\">\n                    <cdk-header-cell *cdkHeaderCellDef class=\"table-header-cell\"> Çeşitler </cdk-header-cell>\n                    <cdk-cell *cdkCellDef=\"let element;let rindex=index\" class=\"table-cell\">\n                      <mat-form-field>\n                        <input matInput placeholder=\"Çeşit\" [(ngModel)]=\"element.VariantTitle\" id=\"ScreeningVariantTitle-{{pIndex}}-{{rindex}}\" (keydown)=\"keydown($event,'screening','ScreeningVariantTitle',rindex,pIndex)\"\n                          class=\"table-input\">\n                        <button mat-icon-button matSuffix color=\"basic\" (click)=\"variantSelect(element)\">\n                          <mat-icon aria-label=\"Search\">search</mat-icon>\n                        </button>\n                      </mat-form-field>\n                    </cdk-cell>\n                  </ng-container>\n\n                  <ng-container cdkColumnDef=\"Status\">\n                    <cdk-header-cell *cdkHeaderCellDef class=\"table-header-cell\"> Statüsü </cdk-header-cell>\n                    <cdk-cell *cdkCellDef=\"let element\" class=\"table-cell\">\n                      <mat-form-field>\n                        <mat-select placeholder=\"Statüsü\" disableRipple [(ngModel)]=\"element.Status\" class=\"table-select\" (ngModelChange)=\"onModelChange(element,'Status')\">\n                          <mat-option *ngFor=\"let item of statusScrening\" [value]=\"item\">\n                            {{item}}\n                          </mat-option>\n                        </mat-select>\n                      </mat-form-field>\n                    </cdk-cell>\n                  </ng-container>\n\n                  <ng-container cdkColumnDef=\"Result\">\n                    <cdk-header-cell *cdkHeaderCellDef class=\"table-header-cell\">\n                      Sonuç\n                    </cdk-header-cell>\n                    <cdk-cell *cdkCellDef=\"let element;let rindex=index\" class=\"table-cell\">\n                      <mat-form-field>\n                        <input matInput placeholder=\"Sonuç\" [(ngModel)]=\"element.Result\" id=\"ScreeningResult-{{pIndex}}-{{rindex}}\" (keydown)=\"keydown($event,'screening','ScreeningResult',rindex,pIndex)\"\n                          class=\"table-input\">\n                      </mat-form-field>\n                    </cdk-cell>\n                  </ng-container>\n\n                  <ng-container cdkColumnDef=\"SeedOrder\">\n                    <cdk-header-cell *cdkHeaderCellDef class=\"table-header-cell\">\n                      Tohum Talebi\n                    </cdk-header-cell>\n                    <cdk-cell *cdkCellDef=\"let element;let rindex=index\" class=\"table-cell\">\n                      <mat-form-field>\n                        <input matInput [textMask]=\"{mask: numberMask}\" placeholder=\"Tohum Talebi\" [(ngModel)]=\"element.SeedOrder\" id=\"ScreeningSeedOrder-{{pIndex}}-{{rindex}}\"\n                          (keydown)=\"keydown($event,'screening','ScreeningSeedOrder',rindex,pIndex)\" class=\"table-input\">\n                      </mat-form-field>\n                    </cdk-cell>\n                  </ng-container>\n                  <cdk-header-row *cdkHeaderRowDef=\"screeningDisplayedColumns\" class=\"table-header-row\"></cdk-header-row>\n                  <cdk-row *cdkRowDef=\"let row;let rindex=index; columns: screeningDisplayedColumns;\" class=\"table-row\">\n                  </cdk-row>\n                </cdk-table>\n\n\n              </mat-card-content>\n            </mat-card>\n\n            <mat-card fxFlex=\"42\">\n              <mat-card-header>\n                <mat-card-subtitle>\n                  Intro\n                </mat-card-subtitle>\n              </mat-card-header>\n              <mat-card-content>\n                <cdk-table #introtable [dataSource]=\"introDataSource\">\n                  <ng-container cdkColumnDef=\"Action\">\n                    <cdk-header-cell *cdkHeaderCellDef>Sil</cdk-header-cell>\n                    <cdk-cell *cdkCellDef=\"let element;let rindex=index\">\n                      <button mat-icon-button (click)=\"deleteItem(rindex,element)\" tabindex=\"-1\">\n                        <mat-icon aria-label=\"Delete\" color=\"warn\">delete</mat-icon>\n                      </button>\n                    </cdk-cell>\n                  </ng-container>\n                  <ng-container cdkColumnDef=\"VariantTitle\">\n                    <cdk-header-cell *cdkHeaderCellDef class=\"table-header-cell\"> Çeşitler </cdk-header-cell>\n                    <cdk-cell *cdkCellDef=\"let element;let rindex=index\" class=\"table-cell\">\n                      <mat-form-field>\n                        <input matInput placeholder=\"Çeşit\" [(ngModel)]=\"element.VariantTitle\" id=\"IntroVariantTitle-{{pIndex}}-{{rindex}}\" (keydown)=\"keydown($event,'intro','IntroVariantTitle',rindex,pIndex)\"\n                          class=\"table-input\">\n                        <button mat-icon-button matSuffix color=\"basic\" (click)=\"variantSelect(element)\">\n                          <mat-icon aria-label=\"Search\">search</mat-icon>\n                        </button>\n                      </mat-form-field>\n                    </cdk-cell>\n                  </ng-container>\n\n                  <ng-container cdkColumnDef=\"Status\">\n                    <cdk-header-cell *cdkHeaderCellDef class=\"table-header-cell\">\n                      Statü\n                    </cdk-header-cell>\n                    <cdk-cell *cdkCellDef=\"let element;let rindex=index\" class=\"table-cell\">\n                      <mat-form-field>\n                        <mat-select placeholder=\"Statüsü\" disableRipple [(ngModel)]=\"element.Status\" class=\"table-select\" (ngModelChange)=\"onModelChange(element,'Status')\">\n                          <mat-option *ngFor=\"let item of statusIntro\" [value]=\"item\" >\n                            {{item}}\n                          </mat-option>\n                        </mat-select>\n                      </mat-form-field>\n                    </cdk-cell>\n                  </ng-container>\n                  <ng-container cdkColumnDef=\"Result\">\n                    <cdk-header-cell *cdkHeaderCellDef class=\"table-header-cell\">\n                      Sonuç\n                    </cdk-header-cell>\n                    <cdk-cell *cdkCellDef=\"let element;let rindex=index\" class=\"table-cell\">\n                      <mat-form-field>\n                        <input matInput placeholder=\"Sonuç\" [(ngModel)]=\"element.Result\" id=\"IntroResult-{{pIndex}}-{{rindex}}\" (keydown)=\"keydown($event,'intro','IntroResult',rindex,pIndex)\"\n                          class=\"table-input\">\n                      </mat-form-field>\n                    </cdk-cell>\n                  </ng-container>\n                  <ng-container cdkColumnDef=\"SeedOrder\">\n                    <cdk-header-cell *cdkHeaderCellDef class=\"table-header-cell\">\n                      Tohum Talebi\n                    </cdk-header-cell>\n                    <cdk-cell *cdkCellDef=\"let element;let rindex=index\" class=\"table-cell\">\n                      <mat-form-field>\n                        <input matInput [textMask]=\"{mask: numberMask}\" placeholder=\"Tohum Talebi\" [(ngModel)]=\"element.SeedOrder\" id=\"IntroSeedOrder-{{pIndex}}-{{rindex}}\"\n                          (keydown)=\"keydown($event,'intro','IntroSeedOrder',rindex,pIndex)\" (ngModelChange)=\"onModelChange(element,'SeedOrder','IntroTable',pIndex,$event)\"\n                          class=\"table-input\">\n                      </mat-form-field>\n                    </cdk-cell>\n                  </ng-container>\n                  <ng-container cdkColumnDef=\"ProposedForNextSeason\">\n                    <cdk-header-cell *cdkHeaderCellDef class=\"table-header-cell\">\n                      Gelecek Sezon İçin Önerilen Çeşitler\n                    </cdk-header-cell>\n                    <cdk-cell *cdkCellDef=\"let element;let rindex=index\" class=\"table-cell\">\n                      <mat-form-field>\n                        <input matInput placeholder=\"Gelecek Sezon İçin Önerilen Çeşitler\" [(ngModel)]=\"element.ProposedForNextSeason\" id=\"IntroProposedForNextSeason-{{pIndex}}-{{rindex}}\"\n                          (keydown)=\"keydown($event,'intro','IntroProposedForNextSeason',rindex,pIndex)\" class=\"table-input\">\n                      </mat-form-field>\n                    </cdk-cell>\n                  </ng-container>\n                  <cdk-header-row *cdkHeaderRowDef=\"introDisplayedColumns\" class=\"table-header-row\"></cdk-header-row>\n                  <cdk-row *cdkRowDef=\"let row;let rindex=index; columns: introDisplayedColumns;\" class=\"table-row\"></cdk-row>\n                </cdk-table>\n\n              </mat-card-content>\n            </mat-card>\n\n            <mat-card fxFlex=\"24\">\n             <google-chart #cchart id='pieChart' [data]=\"pieChartData\"></google-chart> \n            </mat-card>\n\n          </div>\n          <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutGap=\"5px\">\n            <mat-card fxFlex=\"28\">\n              <mat-card-header>\n                <mat-card-subtitle>\n                  Ticari / Commerical\n                </mat-card-subtitle>\n              </mat-card-header>\n              <mat-card-content>\n                <cdk-table #commericaltable [dataSource]=\"commericalDataSource\">\n                  <ng-container cdkColumnDef=\"Action\">\n                    <cdk-header-cell *cdkHeaderCellDef>Sil</cdk-header-cell>\n                    <cdk-cell *cdkCellDef=\"let element;let rindex=index\">\n                      <button mat-icon-button (click)=\"deleteItem(rindex,element)\" tabindex=\"-1\">\n                        <mat-icon aria-label=\"Delete\" color=\"warn\">delete</mat-icon>\n                      </button>\n                    </cdk-cell>\n                  </ng-container>\n                  <ng-container cdkColumnDef=\"VariantTitle\">\n                    <cdk-header-cell *cdkHeaderCellDef class=\"table-header-cell\"> Çeşitler </cdk-header-cell>\n                    <cdk-cell *cdkCellDef=\"let element;let rindex=index\" class=\"table-cell\">\n                      <mat-form-field>\n                        <input matInput placeholder=\"Çeşit\" [(ngModel)]=\"element.VariantTitle\" id=\"CommericalVariantTitle-{{pIndex}}-{{rindex}}\"\n                          (keydown)=\"keydown($event,'commerical','CommericalVariantTitle',rindex,pIndex)\" class=\"table-input\" (ngModelChange)=\"onModelChange('Commerical')\">\n                        <button mat-icon-button matSuffix color=\"basic\" (click)=\"variantSelect(element)\">\n                          <mat-icon aria-label=\"Search\">search</mat-icon>\n                        </button>\n                      </mat-form-field>\n                    </cdk-cell>\n                  </ng-container>\n\n                  <ng-container cdkColumnDef=\"Rate\">\n                    <cdk-header-cell *cdkHeaderCellDef class=\"table-header-cell\">\n                      %\n                    </cdk-header-cell>\n                    <cdk-cell *cdkCellDef=\"let element;let rindex=index\" class=\"table-cell\">\n                      <mat-form-field>\n                        <input matInput [textMask]=\"{mask: numberMask}\" placeholder=\"%\" [(ngModel)]=\"element.Rate\" id=\"CommericalRate-{{pIndex}}-{{rindex}}\"\n                          (keydown)=\"keydown($event,'commerical','CommericalRate',rindex,pIndex)\" class=\"table-input\" (keyup)=\"percentControl($event)\" (ngModelChange)=\"onModelChange('Commerical')\">\n                      </mat-form-field>\n                    </cdk-cell>\n                  </ng-container>\n                  <ng-container cdkColumnDef=\"Trend\">\n                    <cdk-header-cell *cdkHeaderCellDef class=\"table-header-cell\">\n                      Trend\n                    </cdk-header-cell>\n                    <cdk-cell *cdkCellDef=\"let element;let rindex=index\" class=\"table-cell\">\n\n                      <mat-select style=\"width: 100%\" disableRipple [(ngModel)]=\"element.Trend\" (ngModelChange)=\"onModelChange('Commerical')\">\n                        <mat-select-trigger>\n                          <span [ngSwitch]=\"element.Trend\">\n                            <mat-icon *ngSwitchCase=\"'-1'\" style=\"font-size:24px !important; color: red\">trending_down</mat-icon>\n                            <mat-icon *ngSwitchCase=\"'0'\" style=\"font-size:24px !important; color: gray\">trending_flat</mat-icon>\n                            <mat-icon *ngSwitchCase=\"'1'\" style=\"font-size:24px !important; color: rgb(2, 158, 41)\">trending_up</mat-icon>\n                          </span>\n                        </mat-select-trigger>\n                        <mat-option [value]=\"-1\">\n                          <mat-icon style=\"color: red\">trending_down</mat-icon>\n                        </mat-option>\n                        <mat-option [value]=\"0\">\n                          <mat-icon style=\"color: gray\">trending_flat</mat-icon>\n                        </mat-option>\n                        <mat-option [value]=\"1\">\n                          <mat-icon style=\"color: rgb(2, 158, 41)\">trending_up</mat-icon>\n                        </mat-option>\n                      </mat-select>\n                    </cdk-cell>\n                  </ng-container>\n                  <cdk-header-row *cdkHeaderRowDef=\"comericalDisplayedColumns\" class=\"table-header-row\"></cdk-header-row>\n                  <cdk-row *cdkRowDef=\"let row;let rindex=index; columns: comericalDisplayedColumns;\" class=\"table-row\"></cdk-row>\n                </cdk-table>\n\n              </mat-card-content>\n            </mat-card>\n\n            <mat-card fxFlex=\"36\">\n              <mat-card-header>\n                <mat-card-subtitle>\n                  Rakip / Competitor\n                </mat-card-subtitle>\n              </mat-card-header>\n              <mat-card-content>\n\n                <cdk-table #commericaltable [dataSource]=\"competitorDataSource\">\n                  <ng-container cdkColumnDef=\"Action\">\n                    <cdk-header-cell *cdkHeaderCellDef>Sil</cdk-header-cell>\n                    <cdk-cell *cdkCellDef=\"let element;let rindex=index\">\n                      <button mat-icon-button (click)=\"deleteItem(rindex,element)\" tabindex=\"-1\">\n                        <mat-icon aria-label=\"Delete\" color=\"warn\">delete</mat-icon>\n                      </button>\n                    </cdk-cell>\n                  </ng-container>\n                  <ng-container cdkColumnDef=\"Title\">\n                    <cdk-header-cell *cdkHeaderCellDef class=\"table-header-cell\"> Firma </cdk-header-cell>\n                    <cdk-cell *cdkCellDef=\"let element;let rindex=index\" class=\"table-cell\">\n                      <mat-form-field>\n                        <input matInput placeholder=\"Firma\" [(ngModel)]=\"element.CompetitorTitle\" id=\"CompetitorTitle-{{pIndex}}-{{rindex}}\" (keydown)=\"keydown($event,'competitor','CompetitorTitle',rindex,pIndex)\" (blur)=\"competitorControl(element,rindex)\"\n                          class=\"table-input\" >\n                        <button mat-icon-button matSuffix color=\"basic\" (click)=\"competitorSelect(rindex)\">\n                          <mat-icon aria-label=\"Search\">search</mat-icon>\n                        </button>\n                      </mat-form-field>\n                    </cdk-cell>\n                  </ng-container>\n                  <ng-container cdkColumnDef=\"ProductTitle\">\n                    <cdk-header-cell *cdkHeaderCellDef class=\"table-header-cell\"> Çeşitler </cdk-header-cell>\n                    <cdk-cell *cdkCellDef=\"let element;let rindex=index\" class=\"table-cell\">\n                      <mat-form-field>\n                        <input matInput placeholder=\"Çeşit\" [(ngModel)]=\"element.CompetitorProductTitle\" id=\"CompetitorProductTitle-{{pIndex}}-{{rindex}}\" name=\"CompetitorProductTitle-{{pIndex}}-{{rindex}}\"  (blur)=\"competitorProductControl(element)\"\n                          (keydown)=\"keydown($event,'competitor','CompetitorProductTitle',rindex,pIndex)\" class=\"table-input\">\n                        <button mat-icon-button matSuffix color=\"basic\" (click)=\"competitorProductSelect(element)\">\n                          <mat-icon aria-label=\"Search\">search</mat-icon>\n                        </button>\n                      </mat-form-field>\n                    </cdk-cell>\n                  </ng-container>\n\n                  <ng-container cdkColumnDef=\"Rate\">\n                    <cdk-header-cell *cdkHeaderCellDef class=\"table-header-cell\">\n                      %\n                    </cdk-header-cell>\n                    <cdk-cell *cdkCellDef=\"let element;let rindex=index\" class=\"table-cell\">\n                      <mat-form-field>\n                        <input matInput [textMask]=\"{mask: numberMask}\" placeholder=\"%\" [(ngModel)]=\"element.Rate\" id=\"CompetitorRate-{{pIndex}}-{{rindex}}\"\n                          (keydown)=\"keydown($event,'competitor','CompetitorRate',rindex,pIndex)\" (keyup)=\"percentControl($event)\" class=\"table-input\"\n                          (ngModelChange)=\"onModelChange('Competitor')\">\n                      </mat-form-field>\n                    </cdk-cell>\n                  </ng-container>\n                  <ng-container cdkColumnDef=\"Trend\">\n                    <cdk-header-cell *cdkHeaderCellDef class=\"table-header-cell\">\n                      Trend\n                    </cdk-header-cell>\n                    <cdk-cell *cdkCellDef=\"let element;let rindex=index\" class=\"table-cell\">\n                      <mat-select style=\"width: 100%\" disableRipple [(ngModel)]=\"element.Trend\" (ngModelChange)=\"onModelChange('Competitor')\">\n                        <mat-select-trigger>\n                          <span [ngSwitch]=\"element.Trend\">\n                            <mat-icon *ngSwitchCase=\"'-1'\" style=\"font-size:24px !important; color: red\">trending_down</mat-icon>\n                            <mat-icon *ngSwitchCase=\"'0'\" style=\"font-size:24px !important; color: gray\">trending_flat</mat-icon>\n                            <mat-icon *ngSwitchCase=\"'1'\" style=\"font-size:24px !important; color: rgb(2, 158, 41)\">trending_up</mat-icon>\n                          </span>\n                        </mat-select-trigger>\n                        <mat-option [value]=\"-1\">\n                          <mat-icon style=\"color: red\">trending_down</mat-icon>\n                        </mat-option>\n                        <mat-option [value]=\"0\">\n                          <mat-icon style=\"color: gray\">trending_flat</mat-icon>\n                        </mat-option>\n                        <mat-option [value]=\"1\">\n                          <mat-icon style=\"color: rgb(2, 158, 41)\">trending_up</mat-icon>\n                        </mat-option>\n                      </mat-select>\n                    </cdk-cell>\n                  </ng-container>\n                  <cdk-header-row *cdkHeaderRowDef=\"competitorDisplayedColumns\" class=\"table-header-row\" ></cdk-header-row>\n                  <cdk-row *cdkRowDef=\"let row;let rindex=index; columns: competitorDisplayedColumns;\" class=\"table-row\"\n                    (click)=\"rowClick(rindex,'Competitor')\"></cdk-row>\n                </cdk-table>\n              </mat-card-content>\n            </mat-card>\n\n            <mat-card fxFlex=\"36\">\n              <mat-card-header>\n                <mat-card-subtitle>\n                  Pazar Bilgileri\n                </mat-card-subtitle>\n              </mat-card-header>\n              <mat-card-content>\n                <cdk-table [dataSource]=\"informationDataSource\">\n\n                  <ng-container cdkColumnDef=\"MarketSize\">\n                    <cdk-header-cell *cdkHeaderCellDef class=\"table-header-cell\"> Toplam Pazar </cdk-header-cell>\n                    <cdk-cell *cdkCellDef=\"let element;let rindex=index\" class=\"table-cell\">\n                      <mat-form-field>\n                        <input matInput placeholder=\"Toplam Pazar\" [(ngModel)]=\"element.MarketSize\" id=\"InformationMarketSize-{{pIndex}}-{{rindex}}\"\n                          (keydown)=\"keydown($event,'MarketSize',rindex,pIndex)\" class=\"table-input\">\n                      </mat-form-field>\n                    </cdk-cell>\n                  </ng-container>\n\n                  <ng-container cdkColumnDef=\"Baf\">\n                    <cdk-header-cell *cdkHeaderCellDef class=\"table-header-cell\">\n                      BAF\n                    </cdk-header-cell>\n                    <cdk-cell *cdkCellDef=\"let element;let rindex=index\" class=\"table-cell\">\n                      <mat-form-field>\n                        <input matInput placeholder=\"BAF\" [(ngModel)]=\"element.Baf\" id=\"InformationBaf-{{pIndex}}-{{rindex}}\" (keydown)=\"keydown($event,'Baf',rindex,pIndex)\"\n                          class=\"table-input\">\n                      </mat-form-field>\n                    </cdk-cell>\n                  </ng-container>\n                  <ng-container cdkColumnDef=\"Pack\">\n                    <cdk-header-cell *cdkHeaderCellDef class=\"table-header-cell\">\n                      Paket Ebat\n                    </cdk-header-cell>\n                    <cdk-cell *cdkCellDef=\"let element;let rindex=index\" class=\"table-cell\">\n                      <mat-form-field>\n                        <input matInput placeholder=\"Trend\" [(ngModel)]=\"element.Pack\" id=\"InformationPack-{{pIndex}}-{{rindex}}\" (keydown)=\"keydown($event,'Pack',rindex,pIndex)\"\n                          class=\"table-input\">\n                      </mat-form-field>\n                    </cdk-cell>\n                  </ng-container>\n                  <ng-container cdkColumnDef=\"MarketValue\">\n                    <cdk-header-cell *cdkHeaderCellDef class=\"table-header-cell\">\n                      Net Pazar Değeri\n                    </cdk-header-cell>\n                    <cdk-cell *cdkCellDef=\"let element;let rindex=index\" class=\"table-cell\">\n                      <mat-form-field>\n                        <input matInput placeholder=\"Pazar Değeri\" [(ngModel)]=\"element.MarketValue\" id=\"InformationMarketValue-{{pIndex}}-{{rindex}}\"\n                          (keydown)=\"keydown($event,'MarketValue',rindex,pIndex)\" class=\"table-input\">\n                      </mat-form-field>\n                    </cdk-cell>\n                  </ng-container>\n                  <cdk-header-row *cdkHeaderRowDef=\"informationColumns\" class=\"table-header-row\"></cdk-header-row>\n                  <cdk-row *cdkRowDef=\"let row;let rindex=index; columns: informationColumns;\" [ngClass]=\"{'highlight': selectedRowIndex == row._id}\"\n                    class=\"table-row\" (click)=\"rowClick(row,rindex)\"></cdk-row>\n                </cdk-table>\n\n              </mat-card-content>\n            </mat-card>\n          </div>\n        </div>\n      </mat-expansion-panel>\n\n    </mat-accordion>\n  </mat-card-content>\n  <mat-card-actions>\n    <button mat-raised-button (click)=\"save()\" color=\"warn\">Kaydet</button>\n  </mat-card-actions>\n</mat-card>"

/***/ }),

/***/ "../../../../../src/app/pmp/pmp.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\n  height: calc(100vh - 110px);\n  overflow-y: auto;\n  overflow-x: auto; }\n\n.cardContainer {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  padding: 5px; }\n\n.cardContainerLine {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  margin-top: 2px;\n  margin-bottom: 2px;\n  width: 100%; }\n\n.sticky-header {\n  position: -webkit-sticky;\n  position: sticky;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  top: 0;\n  background: white;\n  height: 32px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 1px 8px; }\n\n.table-input,\n.table-select {\n  border: none; }\n\n.table-input:hover,\n.table-select:hover,\n.table-input:focus,\n.table-select:focus {\n  border: 1px inset lightblue;\n  border-radius: 5px; }\n\ncdk-table {\n  display: block;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  min-width: 200px;\n  width: 100%;\n  height: 170px;\n  overflow: auto;\n  border-bottom: 1px solid #7c7c7c; }\n\n.table-header-row, .table-row {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 32px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 1px 8px; }\n\n.table-header-cell,\n.table-cell {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  padding-left: 1px;\n  padding-right: 1px; }\n\n.cdk-header-cell {\n  font-size: 12px;\n  font-weight: bolder; }\n\n.cdk-cell {\n  font-size: 12px; }\n\n.cdk-column-VariantTitle,\n.cdk-column-Title,\n.cdk-column-ProductTitle,\n.cdk-column-ProposedForNextSeason {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  min-width: 120px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row; }\n\n.cdk-column-Status,\n.cdk-column-Result,\n.cdk-column-SeedOrder,\n.cdk-column-Pack,\n.cdk-column-Baf,\n.cdk-column-MarketSize,\n.cdk-column-MarketValue {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  min-width: 50px; }\n\n.cdk-column-Trend,\n.cdk-column-Rate {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  max-width: 50px; }\n\n.cdk-column-Action {\n  min-width: 30px;\n  -webkit-box-pack: left;\n      -ms-flex-pack: left;\n          justify-content: left; }\n\nmat-form-field {\n  width: 100%; }\n\n.mat-select-arrow-wrapper {\n  visibility: hidden; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pmp/pmp.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PmpComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers__ = __webpack_require__("../../../../../src/app/_helpers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models__ = __webpack_require__("../../../../../src/app/_models/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_text_mask_addons_dist_createNumberMask__ = __webpack_require__("../../../../text-mask-addons/dist/createNumberMask.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_text_mask_addons_dist_createNumberMask___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_text_mask_addons_dist_createNumberMask__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__directives__ = __webpack_require__("../../../../../src/app/_directives/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services__ = __webpack_require__("../../../../../src/app/_services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__competitor_competitor_dialog_competitor_dialog_component__ = __webpack_require__("../../../../../src/app/competitor/competitor-dialog/competitor-dialog.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var PmpComponent = /** @class */ (function () {
    function PmpComponent(route, renderer, dialog, snackBar, enumsMock, seedModelService, 
        //private trialService: GenericService<SeedTrialModel>,
        pmpService, competitorservice) {
        var _this = this;
        this.route = route;
        this.renderer = renderer;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.enumsMock = enumsMock;
        this.seedModelService = seedModelService;
        this.pmpService = pmpService;
        this.competitorservice = competitorservice;
        this.rows = [];
        this.screeningDisplayedColumns = ['VariantTitle', 'Status', 'Result', 'SeedOrder', 'Action'];
        this.introDisplayedColumns = ['VariantTitle', 'Status', 'Result', 'SeedOrder', 'ProposedForNextSeason', 'Action'];
        this.comericalDisplayedColumns = ['VariantTitle', 'Rate', 'Trend', 'Action'];
        this.competitorDisplayedColumns = ['Title', 'ProductTitle', 'Rate', 'Trend', 'Action'];
        this.informationColumns = ['MarketSize', 'Baf', 'Pack', 'MarketValue'];
        this.seeds = [];
        this.productDetails = [];
        this.seed = new __WEBPACK_IMPORTED_MODULE_2__models__["n" /* SeedModel */]();
        this.product = new __WEBPACK_IMPORTED_MODULE_2__models__["j" /* ProductDetail */]();
        this.seedTrial = new __WEBPACK_IMPORTED_MODULE_2__models__["o" /* SeedTrialModel */]();
        this.pmps = [];
        this.pmp = new __WEBPACK_IMPORTED_MODULE_2__models__["k" /* ProductMarketProfileModel */]();
        this.statusScrening = [];
        this.statusIntro = [];
        this.numberMask = __WEBPACK_IMPORTED_MODULE_3_text_mask_addons_dist_createNumberMask___default()({
            prefix: '',
            suffix: '',
            allowDecimal: true,
            integerLimit: 9,
            includeThousandsSeparator: false
        });
        this.percentMask = __WEBPACK_IMPORTED_MODULE_3_text_mask_addons_dist_createNumberMask___default()({
            prefix: '',
            suffix: '%',
            allowDecimal: true,
            integerLimit: 3
        });
        this.pieChartData = {
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
        this.screeningDataSource = new __WEBPACK_IMPORTED_MODULE_1__helpers__["a" /* GenericDataSource */](this.screenings);
        this.introDataSource = new __WEBPACK_IMPORTED_MODULE_1__helpers__["a" /* GenericDataSource */](this.intros);
        this.commericalOnes = [];
        this.commericalOnes.push(new __WEBPACK_IMPORTED_MODULE_2__models__["b" /* ComericalDetail */]());
        this.commericalDataSource = new __WEBPACK_IMPORTED_MODULE_1__helpers__["a" /* GenericDataSource */](this.commericalOnes);
        this.competitors = [];
        this.competitors.push(new __WEBPACK_IMPORTED_MODULE_2__models__["c" /* CompetitorDetail */]());
        this.competitorDataSource = new __WEBPACK_IMPORTED_MODULE_1__helpers__["a" /* GenericDataSource */](this.competitors);
        this.informations = [];
        this.informations.push(new __WEBPACK_IMPORTED_MODULE_2__models__["h" /* MarketInformation */]());
        this.informationDataSource = new __WEBPACK_IMPORTED_MODULE_1__helpers__["a" /* GenericDataSource */](this.informations);
        this.queryString = this.route.params.subscribe(function (params) {
            if (params.CategoryId == undefined)
                return;
            _this.seedTrial = params;
            _this.getPmpParameters(_this.seedTrial);
            _this.seedModelService.url = __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].URLRestFullApi + "/seed";
            _this.seedModelService.getAll()
                .subscribe(function (response) {
                _this.seeds = response;
                _this.seed = _this.seeds.find(function (s) { return s._id == params.CategoryId; });
                _this.productDetails = _this.seed.ProductDetail;
                _this.product = _this.seed.ProductDetail.find(function (p) { return p._id == params.ProductId; });
            });
        });
    }
    PmpComponent.prototype.changeData2 = function () {
        var dataTable = this.cchart.wrapper.getDataTable();
        for (var i = 0; i < 6; i++) {
            dataTable.setValue(i, 1, Math.round(Math.random() * 1000));
            dataTable.setValue(i, 2, Math.round(Math.random() * 1000));
        }
        this.cchart.redraw();
    };
    PmpComponent.prototype.changeData = function () {
        // forces a reference update (otherwise angular won't detect the change
        this.pieChartData = Object.create(this.pieChartData);
        console.log(this.pieChartData.dataTable[2][1]);
        console.log(this.pieChartData.dataTable[1][2]);
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
    };
    PmpComponent.prototype.onModelChange = function (tag) {
        switch (tag) {
            case 'Commerical':
                this.pmp.Comerical = this.commericalDataSource.data().slice();
                this.pmp.Comerical.forEach(function (c) {
                    if (c.Rate != undefined) {
                        c.Rate = parseFloat(c.Rate.toString().replace("%", ""));
                    }
                });
                break;
            case 'Competitor':
                this.pmp.Competitor = this.competitorDataSource.data().slice();
                this.pmp.Competitor.forEach(function (c) {
                    if (c.Rate != undefined) {
                        c.Rate = parseFloat(c.Rate.toString().replace("%", ""));
                    }
                });
                break;
        }
        this.pmpService.url = __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].URLRestFullApi + "/pmp";
        this.pmpService.update(this.pmp)
            .subscribe(function (response) {
            console.log(response);
        });
        this.chartData();
        var newdata = new google.visualization.DataTable({
            cols: [{ id: 'Variates', label: 'Variates', type: 'string' },
                { id: 'Percentage', label: 'Percentage', type: 'number' }],
            rows: this.rows
        });
        this.pieChartData = Object.create(this.pieChartData);
        this.pieChartData.dataTable = newdata;
        // this.pieChartData.redraw();
    };
    PmpComponent.prototype.chartData = function () {
        var _this = this;
        this.rows = [];
        this.pmp.Comerical.forEach(function (r) {
            if (r.Rate > 0)
                _this.rows.push({ c: [{ v: r.VariantTitle }, { v: r.Rate }] });
        });
        this.pmp.Competitor.forEach(function (r) {
            _this.rows.push({ c: [{ v: r.CompetitorProductTitle }, { v: r.Rate }] });
        });
        // return {
        //   cols: [{ id: 'Variates', label: 'Variates', type: 'string' },
        //   { id: 'Percentage', label: 'Percentage', type: 'number' }],
        //   rows: this.rows
        // }
    };
    PmpComponent.prototype.rowClick = function (index, tag) {
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
    };
    PmpComponent.prototype.ngOnInit = function () {
        this.statusScrening = this.enumsMock.getStatus().filter(function (s) { return ['1ST', '2ND'].indexOf(s) !== -1; });
        this.statusIntro = this.enumsMock.getStatus().filter(function (s) { return ['Intro', 'GT'].indexOf(s) !== -1; });
    };
    PmpComponent.prototype.percentControl = function (event) {
        if (parseInt(event.target.value) > 100) {
            event.target.value = event.target.value.substring(0, event.target.value.length - 1);
        }
        console.log(event.target.value);
        if (parseInt(event.target.value) == undefined || event.target.value == 'NaN') {
            event.target.value = '0';
        }
    };
    PmpComponent.prototype.keydown = function (event, colection, tag, index, pIndex) {
        switch (colection) {
            case 'screening':
                if (index == this.screeningDataSource.data().slice().length - 1) {
                    var newRow = new __WEBPACK_IMPORTED_MODULE_2__models__["q" /* VariantDetail */]();
                    newRow.VariantId = "";
                    newRow.VariantTitle = "";
                    this.screenings.push(newRow);
                    this.screeningDataSource.update(this.screenings);
                }
                this.keyControl(this.screenings, tag + "-" + pIndex, event.key, index);
                break;
            case 'intro':
                if (index == this.introDataSource.data().slice().length - 1) {
                    var newRow = new __WEBPACK_IMPORTED_MODULE_2__models__["q" /* VariantDetail */]();
                    newRow.VariantId = "";
                    newRow.VariantTitle = "";
                    this.intros.push(newRow);
                    this.introDataSource.update(this.intros);
                }
                this.keyControl(this.intros, tag + "-" + pIndex, event.key, index);
                break;
            case 'commerical':
                if (index == this.commericalDataSource.data().slice().length - 1) {
                    var newRow = new __WEBPACK_IMPORTED_MODULE_2__models__["b" /* ComericalDetail */]();
                    newRow.VariantId = "";
                    newRow.VariantTitle = "";
                    this.commericalOnes.push(newRow);
                    this.commericalDataSource.update(this.commericalOnes);
                }
                this.keyControl(this.commericalOnes, tag + "-" + pIndex, event.key, index);
                break;
            case 'competitor':
                if (index == this.competitorDataSource.data().slice().length - 1) {
                    var newRow = new __WEBPACK_IMPORTED_MODULE_2__models__["c" /* CompetitorDetail */]();
                    newRow.CompetitorProductTitle = "";
                    newRow.CompetitorTitle = "";
                    this.competitors.push(newRow);
                    this.competitorDataSource.update(this.competitors);
                }
                this.keyControl(this.competitors, tag + "-" + pIndex, event.key, index);
                break;
        }
    };
    PmpComponent.prototype.keyControl = function (collections, tag, key, index) {
        if (key == 'ArrowDown') {
            if (collections.length - 1 > index) {
                var element = '#' + tag + '-' + (index + 1);
                var onElement = this.renderer.selectRootElement(element);
                onElement.focus();
            }
        }
        if (key == 'ArrowUp') {
            if (index > 0) {
                var element = '#' + tag + '-' + (index - 1);
                var onElement = this.renderer.selectRootElement(element);
                onElement.focus();
            }
        }
    };
    PmpComponent.prototype.categorySelect = function () {
        var _this = this;
        this.seedModelService.url = __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].URLRestFullApi + "/seed";
        this.seedModelService.getAll()
            .subscribe(function (response) {
            _this.seeds = response;
            var data = {
                rows: _this.seeds,
                columns: [
                    { name: 'Ürün', prop: 'Title' }
                ],
                filterText: 'Filtre edeceğiniz ürün adını giriniz...'
            };
            var dialogRef = _this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__directives__["d" /* SeedInputDialogComponent */], { data: data, hasBackdrop: false, autoFocus: true, maxHeight: '600px' });
            dialogRef.afterClosed().subscribe(function (result) {
                if (result === "-1")
                    return;
                _this.seed = result;
                _this.product = new __WEBPACK_IMPORTED_MODULE_2__models__["j" /* ProductDetail */]();
            }, function (error) {
                _this.snackBar.open(error.message, '', { duration: 3000 });
            });
        });
    };
    PmpComponent.prototype.productSelect = function () {
        var _this = this;
        if (this.seed._id == undefined)
            return;
        var data = {
            rows: this.seed.ProductDetail,
            columns: [
                { name: 'Cins', prop: 'Title' }
            ],
            filterText: 'Filtre edeceğiniz tür adını giriniz...'
        };
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__directives__["d" /* SeedInputDialogComponent */], { data: data, hasBackdrop: false, autoFocus: true, height: '600px' });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result === "-1")
                return;
            _this.product = result;
            _this.getPmp();
        }, function (error) {
            _this.snackBar.open(error.message, '', { duration: 3000 });
        });
    };
    PmpComponent.prototype.getPmp = function () {
        var _this = this;
        this.pmpService.url = __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].URLRestFullApi + "/Pmp?ProductId=" + this.product._id;
        this.pmpService.getAll()
            .subscribe(function (response) {
            _this.pmps = response;
        });
    };
    PmpComponent.prototype.getPmpParameters = function (parameter) {
        var _this = this;
        this.pmpService.url =
            __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].URLRestFullApi + "/pmp?ProductId=" + parameter.ProductId + "&TrialSeason=" + parameter.TrialSeason + "&Region=" + parameter.Region;
        this.pmpService.getAll()
            .subscribe(function (response) {
            _this.pmps = response;
        });
    };
    //   /// Trials distinct
    //   for (var i = 0, l = trials.length; i < l; i++)
    //     if (this.Trials.filter(x => trials[i].TrialSeason == x.TrialSeason && x.Region == trials[i].Region).length == 0) {
    //       this.Trials.push(trials[i]);
    //     }
    PmpComponent.prototype.expPanelOpened = function (pmp) {
        var _this = this;
        this.pmp = pmp;
        this.screenings = [];
        this.intros = [];
        var intro;
        var screening;
        this.pmp.VariantDetail.forEach(function (t) {
            screening = new __WEBPACK_IMPORTED_MODULE_2__models__["q" /* VariantDetail */]();
            intro = new __WEBPACK_IMPORTED_MODULE_2__models__["q" /* VariantDetail */]();
            switch (t.Status) {
                case '1ST':
                case '2ND':
                    screening.VariantId = t.VariantId;
                    screening.VariantTitle = t.VariantTitle;
                    screening.Status = t.Status;
                    screening.Result = t.Result;
                    _this.screenings.push(screening);
                    break;
                case 'Intro':
                case 'GT':
                    intro.VariantId = t.VariantId;
                    intro.VariantTitle = t.VariantTitle;
                    intro.Status = t.Status;
                    intro.Result = t.Result;
                    _this.intros.push(intro);
                    break;
            }
        });
        if (this.screenings.length == 0)
            this.screenings.push(new __WEBPACK_IMPORTED_MODULE_2__models__["q" /* VariantDetail */]());
        if (this.intros.length == 0)
            this.intros.push(new __WEBPACK_IMPORTED_MODULE_2__models__["q" /* VariantDetail */]());
        if (pmp.Comerical.length == 0)
            pmp.Comerical.push(new __WEBPACK_IMPORTED_MODULE_2__models__["b" /* ComericalDetail */]());
        if (pmp.Competitor.length == 0)
            pmp.Competitor.push(new __WEBPACK_IMPORTED_MODULE_2__models__["c" /* CompetitorDetail */]());
        this.screeningDataSource.update(this.screenings);
        this.introDataSource.update(this.intros);
        this.commericalDataSource.update(pmp.Comerical);
        this.competitorDataSource.update(pmp.Competitor);
        //TODO: Grafik Verileri Dinamik Yapılacak
        this.chartData();
        var newdata = new google.visualization.DataTable({
            cols: [{ id: 'Variates', label: 'Variates', type: 'string' },
                { id: 'Percentage', label: 'Percentage', type: 'number' }],
            rows: this.rows
        });
        this.pieChartData = Object.create(this.pieChartData);
        this.pieChartData.dataTable = newdata;
    };
    PmpComponent.prototype.variantSelect = function (element) {
        if (element.VariantTitle == undefined || this.product == undefined)
            element.VariantTitle = '';
        var data = {
            rows: this.product.Variant,
            columns: [
                { name: 'Çeşit', prop: 'Title' }
            ],
            filterText: 'Filtre edeceğiniz cins adını giriniz...'
        };
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__directives__["d" /* SeedInputDialogComponent */], { data: data, hasBackdrop: false, autoFocus: true });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result == undefined)
                return;
            element.VariantId = result._id;
            element.VariantTitle = result.Title;
        }, function (error) {
            console.log(error);
        });
    };
    PmpComponent.prototype.addCompetitorProduct = function (element, competitor) {
        var _this = this;
        var firmData = { "Title": element.CompetitorProductTitle, "Message": "Ürünü Bulunamadı. Eklensin mi?", "Type": __WEBPACK_IMPORTED_MODULE_5__directives__["c" /* ConfirmType */].Add };
        //    const type = ConfirmType.Delete;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__directives__["a" /* ConfirmDialogComponent */], { data: firmData });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result == "1") {
                var dialogRef_1 = _this.dialog.open(__WEBPACK_IMPORTED_MODULE_9__competitor_competitor_dialog_competitor_dialog_component__["a" /* CompetitorDialogComponent */], { data: competitor, disableClose: true });
                dialogRef_1.afterClosed().subscribe(function (result) {
                    if (result == "1") {
                        var competitorProduct = new __WEBPACK_IMPORTED_MODULE_2__models__["e" /* CompetitorProduct */]();
                        competitorProduct.SeedId = _this.seed._id;
                        competitorProduct.CategoryTitle = _this.seed.Title;
                        competitorProduct.ProductId = _this.product._id;
                        competitorProduct.ProductTitle = _this.product.Title;
                        competitor.Products.push(competitorProduct);
                        _this.competitorservice.url = __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].URLRestFullApi + "/competitor";
                        _this.competitorservice.update(competitor)
                            .subscribe(function (response) {
                            console.log(response);
                        });
                        _this.snackBar.open('Kayıt Eklendi', '', { duration: 3000 });
                    }
                });
            }
        });
    };
    PmpComponent.prototype.competitorProductControl = function (element) {
        var _this = this;
        console.log(element);
        if (element.CompetitorId == undefined)
            return;
        if (element.Products == undefined) {
            this.competitorservice.url = __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].URLRestFullApi + "/competitorById/" + element.CompetitorId;
            this.competitorservice.getOne()
                .subscribe(function (response) {
                element.Products = response.Products.filter(function (x) { return x.ProductId == _this.product._id; });
            });
        }
        //let products: CompetitorProduct[]=[];
        if (element.CompetitorProductTitle.length > 0)
            element.Products = element.Products.filter(function (p) { return p.Title.toLowerCase().indexOf(element.CompetitorProductTitle.toLowerCase()) !== -1; });
        if (element.Products.length == 1) {
            element.CompetitorProductTitle = element.Products[0].Title;
            element.CompetitorProductId = element.Products[0]._id;
        }
        else if (element.Products.length > 1) {
            this.getCompetitorProduct(element.Products, element);
        }
        else {
            ////////////////////////////
            var productData = { "Title": element.CompetitorProductTitle, "Message": "Bulunamadı. Eklensin mi?", "Type": __WEBPACK_IMPORTED_MODULE_5__directives__["c" /* ConfirmType */].Add };
            //    const type = ConfirmType.Delete;
            var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__directives__["a" /* ConfirmDialogComponent */], { data: productData });
            dialogRef.afterClosed().subscribe(function (result) {
                if (result == "1") {
                    var competitor_1;
                    _this.competitorservice.url = __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].URLRestFullApi + "/competitorById/" + element.CompetitorId;
                    _this.competitorservice.getOne()
                        .subscribe(function (response) {
                        competitor_1 = response;
                        var prd = new __WEBPACK_IMPORTED_MODULE_2__models__["e" /* CompetitorProduct */]();
                        prd.SeedId = _this.seed._id;
                        prd.CategoryTitle = _this.seed.Title;
                        prd.ProductId = _this.product._id;
                        prd.ProductTitle = _this.product.Title;
                        prd.Title = element.CompetitorProductTitle;
                        competitor_1.Products.push(prd);
                        _this.competitorservice.url = __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].URLRestFullApi + "/competitor";
                        _this.competitorservice.update(competitor_1)
                            .subscribe(function (resp) {
                            _this.snackBar.open(resp.Title + " Firmasına Çeşit Eklendi", '', { duration: 3000 });
                            element.CompetitorProductId = resp.Products.find(function (p) { return p.Title == element.CompetitorProductTitle; })._id;
                        }, function (error) {
                            _this.snackBar.open(error.error.message, '', { duration: 3000 });
                        });
                    });
                }
            });
            /////////////////////////////////////
        }
    };
    PmpComponent.prototype.competitorProductSelect = function (element) {
        var _this = this;
        if (element.CompetitorId == undefined)
            return;
        if (element.Products == undefined) {
            this.competitorservice.url = __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].URLRestFullApi + "/competitorById/" + element.CompetitorId;
            this.competitorservice.getOne()
                .subscribe(function (response) {
                element.Products = response.Products.filter(function (x) { return x.ProductId == _this.product._id; });
                _this.getCompetitorProduct(element.Products, element);
            });
        }
        else {
            element.Products = element.Products.filter(function (x) { return x.ProductId == _this.product._id; });
            this.getCompetitorProduct(element.Products, element);
        }
    };
    PmpComponent.prototype.getCompetitorProduct = function (pdata, element) {
        var _this = this;
        var data = {
            rows: pdata,
            columns: [
                { name: 'Çeşit', prop: 'Title' }
            ],
            filterText: 'Filtre edeceğiniz çeşit adını giriniz...'
        };
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__directives__["d" /* SeedInputDialogComponent */], { data: data, hasBackdrop: false, autoFocus: true, maxHeight: '600px' });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result === "-1")
                return;
            element.CompetitorProductTitle = result.Title;
            element.CompetitorProductId = result._id;
        }, function (error) {
            _this.snackBar.open(error.message, '', { duration: 3000 });
        });
    };
    PmpComponent.prototype.competitorControl = function (arg0, index) {
        var _this = this;
        if (arg0.CompetitorTitle.length == 0)
            return;
        this.competitorservice.url = __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].URLRestFullApi + "/competitorByTitle/" + arg0.CompetitorTitle;
        this.competitorservice.getAll()
            .subscribe(function (response) {
            if (response.length == 0) {
                var firmData = { "Title": arg0.CompetitorTitle, "Message": "Firması Bulunamadı. Eklensin mi?", "Type": __WEBPACK_IMPORTED_MODULE_5__directives__["c" /* ConfirmType */].Add };
                var dialogRef = _this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__directives__["a" /* ConfirmDialogComponent */], { data: firmData });
                dialogRef.afterClosed().subscribe(function (result) {
                    if (result == "1") {
                        var competitor_2 = new __WEBPACK_IMPORTED_MODULE_2__models__["d" /* CompetitorModel */]();
                        competitor_2.Title = arg0.CompetitorTitle;
                        var dialogRef_2 = _this.dialog.open(__WEBPACK_IMPORTED_MODULE_9__competitor_competitor_dialog_competitor_dialog_component__["a" /* CompetitorDialogComponent */], { data: competitor_2, disableClose: true });
                        dialogRef_2.afterClosed().subscribe(function (result) {
                            if (result == "1") {
                                arg0.CompetitorId = competitor_2._id;
                                arg0.CompetitorTitle = competitor_2.Title;
                                arg0.Products = competitor_2.Products.filter(function (x) { return x.ProductId == _this.product._id; });
                                _this.snackBar.open('Kayıt Eklendi', '', { duration: 3000 });
                            }
                        });
                    }
                });
            }
            else if (response.length > 1) {
                _this.getCompetitor(response, index);
            }
            else {
                arg0.CompetitorId = response[0]._id;
                arg0.CompetitorTitle = response[0].Title;
                arg0.Products = response[0].Products.filter(function (x) { return x.ProductId == _this.product._id; });
            }
        });
    };
    PmpComponent.prototype.competitorSelect = function (index) {
        var _this = this;
        var competitors = [];
        this.competitorservice.url = __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].URLRestFullApi + "/competitors";
        this.competitorservice.getAll()
            .subscribe(function (response) {
            console.log(response);
            competitors = response;
            _this.getCompetitor(competitors, index);
        });
    };
    PmpComponent.prototype.getCompetitor = function (cdata, index) {
        var _this = this;
        var data = {
            rows: cdata,
            columns: [
                { name: 'Ünvan', prop: 'Title' }
            ],
            filterText: 'Filtre edeceğiniz Firma adını giriniz...'
        };
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__directives__["d" /* SeedInputDialogComponent */], { data: data, hasBackdrop: false, autoFocus: true, maxHeight: '600px' });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result === "-1")
                return;
            _this.competitors[index].CompetitorTitle = result.Title;
            _this.competitors[index].CompetitorId = result._id;
            _this.competitors[index].Products = result.Products.filter(function (x) { return x.ProductId == _this.product._id; });
            _this.competitorDataSource.update(_this.competitors);
        }, function (error) {
            _this.snackBar.open(error.message, '', { duration: 3000 });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('cchart'),
        __metadata("design:type", Object)
    ], PmpComponent.prototype, "cchart", void 0);
    PmpComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-pmp',
            template: __webpack_require__("../../../../../src/app/pmp/pmp.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pmp/pmp.component.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_6__services__["c" /* GenericService */], __WEBPACK_IMPORTED_MODULE_6__services__["b" /* EnumsMock */]],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["m" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["G" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_6__services__["b" /* EnumsMock */],
            __WEBPACK_IMPORTED_MODULE_6__services__["c" /* GenericService */],
            __WEBPACK_IMPORTED_MODULE_6__services__["c" /* GenericService */],
            __WEBPACK_IMPORTED_MODULE_6__services__["c" /* GenericService */]])
    ], PmpComponent);
    return PmpComponent;
}());



/***/ }),

/***/ "../../../../../src/app/seed.card/season-dialog/season-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"detail-card\">\n\n    <mat-card-header>\n        <mat-card-title>Sezon Tanımları</mat-card-title>\n        <mat-card-subtitle>{{data.Title}}</mat-card-subtitle>\n    </mat-card-header>\n\n    <mat-card-content>\n        <cdk-table #variantTable [dataSource]=\"seasonDataSource\" class=\"VariantTable\">\n            <ng-container cdkColumnDef=\"Season\">\n                <cdk-header-cell *cdkHeaderCellDef class=\"table-header-cell\"> Sezon </cdk-header-cell>\n                <cdk-cell *cdkCellDef=\"let row;let rindex=index\" class=\"table-cell\">\n                    <input matInput type=\"text\" placeholder=\"Sezon\" [(ngModel)]=\"row.Season\" (ngModelChange)=\"modelChanged($event,rindex)\" id=\"Season-{{rindex}}\"\n                        (keydown)=\"keydownSeason($event,'Season',rindex)\" class=\"table-input\">\n                </cdk-cell>\n            </ng-container>\n            <ng-container cdkColumnDef=\"Action\">\n                <cdk-header-cell *cdkHeaderCellDef class=\"table-header-cell\"> </cdk-header-cell>\n                <cdk-cell *cdkCellDef=\"let row;let rindex=index\">\n                    <button mat-icon-button (click)=\"deleteItem(rindex,row)\" tabindex=\"-1\">\n                        <mat-icon aria-label=\"Delete\">delete</mat-icon>\n                    </button>\n                </cdk-cell>\n            </ng-container>\n            <cdk-header-row *cdkHeaderRowDef=\"displayColumns\" class=\"table-header-row\"></cdk-header-row>\n            <cdk-row *matRowDef=\"let row;let rindex=index; columns: displayColumns;\" class=\"table-row\" (click)=rowClick(row,rindex)>\n            </cdk-row>\n        </cdk-table>\n    </mat-card-content>\n    <mat-card-actions>\n        <button mat-raised-button (click)=\"confirmAdd()\" color=\"warn\">Kaydet</button>\n        <button mat-raised-button (click)=\"onNoClick()\" tabindex=\"-1\">Vazgeç</button>\n    </mat-card-actions>\n</mat-card>"

/***/ }),

/***/ "../../../../../src/app/seed.card/season-dialog/season-dialog.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".detail-card {\n  max-width: 650px; }\n\n.table-input,\n.table-select {\n  border: none; }\n\n.table-select:hover,\n.table-input:focus,\n.table-select:focus {\n  border: 1px inset lightblue;\n  border-radius: 5px; }\n\ncdk-table {\n  max-height: 200px;\n  max-width: 335px;\n  display: block;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  width: 100%;\n  height: 200px;\n  overflow-y: auto;\n  overflow-x: hidden;\n  border-bottom: 1px solid #7c7c7c; }\n\n.table-header-row, .table-row {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 32px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 1px 8px; }\n\n.table-cell, .table-header-cell {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  padding-left: 1px;\n  padding-right: 1px; }\n\n.cdk-header-cell {\n  font-size: 10px;\n  font-weight: bolder; }\n\n.cdk-cell {\n  font-size: 12px; }\n\n.cdk-TrialSeason {\n  min-width: 100px; }\n\n.cdk-column-Action {\n  min-width: 30px; }\n\n.cdk-column-ENumber,\n.cdk-column-AGCode {\n  min-width: 100px; }\n\n.table-header-cell {\n  text-align: left; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/seed.card/season-dialog/season-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SeasonDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers__ = __webpack_require__("../../../../../src/app/_helpers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models__ = __webpack_require__("../../../../../src/app/_models/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directives__ = __webpack_require__("../../../../../src/app/_directives/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var SeasonDialogComponent = /** @class */ (function () {
    function SeasonDialogComponent(dialogRef, data, dialog, renderer) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.dialog = dialog;
        this.renderer = renderer;
        this.displayColumns = ['Season', 'Action'];
        this.isChanged = false;
        if (this.data.Seasons == undefined)
            data.Seasons = [];
        data.Seasons.push(new __WEBPACK_IMPORTED_MODULE_3__models__["l" /* Season */]());
        this.seasonDataSource = new __WEBPACK_IMPORTED_MODULE_1__helpers__["a" /* GenericDataSource */](data.ProductDetail[0].Seasons);
    }
    SeasonDialogComponent.prototype.ngOnInit = function () {
    };
    SeasonDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    SeasonDialogComponent.prototype.submit = function () {
    };
    SeasonDialogComponent.prototype.modelChanged = function (event, index) {
        this.isChanged = true;
        if (this.data.Seasons.length - 1 == index) {
            this.data.Seasons.push(new __WEBPACK_IMPORTED_MODULE_3__models__["l" /* Season */]());
            this.seasonDataSource.update(this.data.Seasons);
        }
    };
    SeasonDialogComponent.prototype.confirmAdd = function () {
        this.data.Seasons = this.data.Seasons.filter(function (s) { return s.Season != ""; });
        console.log(this.data.Seasons);
        this.dialogRef.close("1");
    };
    SeasonDialogComponent.prototype.keydownSeason = function (event, tag, index) {
        if (event.key == 'ArrowDown') {
            if (this.data.Seasons.length - 1 > index) {
                var element = '#' + tag + '-' + (index + 1);
                var onElement = this.renderer.selectRootElement(element);
                onElement.focus();
                this.rowClick(this.data.Seasons[index + 1], index + 1);
            }
        }
        if (event.key == 'ArrowUp') {
            if (index > 0) {
                var element = '#' + tag + '-' + (index - 1);
                var onElement = this.renderer.selectRootElement(element);
                onElement.focus();
                this.rowClick(this.data.Seasons[index - 1], index - 1);
            }
        }
    };
    SeasonDialogComponent.prototype.rowClick = function (row, index) {
        this.selectedRowIndex = row._id;
        if (this.seasonDataSource.data().slice().length - 1 == index) {
            this.data.Seasons.push(new __WEBPACK_IMPORTED_MODULE_3__models__["l" /* Season */]());
            this.seasonDataSource.update(this.data.Seasons);
        }
    };
    SeasonDialogComponent.prototype.deleteItem = function (index, data) {
        var _this = this;
        var deleteData = new __WEBPACK_IMPORTED_MODULE_4__directives__["b" /* ConfirmModel */]();
        deleteData.Title = data.Title;
        deleteData.Type = __WEBPACK_IMPORTED_MODULE_4__directives__["c" /* ConfirmType */].Delete;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__directives__["a" /* ConfirmDialogComponent */], { data: deleteData });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.data.Seasons.splice(index, 1);
            _this.seasonDataSource.update(_this.data.Seasons);
        });
    };
    SeasonDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-season-dialog',
            template: __webpack_require__("../../../../../src/app/seed.card/season-dialog/season-dialog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/seed.card/season-dialog/season-dialog.component.scss")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_material__["o" /* MatDialogRef */],
            __WEBPACK_IMPORTED_MODULE_3__models__["n" /* SeedModel */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["m" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]])
    ], SeasonDialogComponent);
    return SeasonDialogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/seed.card/seed.card.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <mat-card fxLayout=\"column\" fxLayoutAlign=\"end stretch\">\n\n    <h3> Tohum Tanımları </h3>\n    <mat-table #table [dataSource]=\"detailDataSource\" class=\"mat-elevation-z8\">\n      <ng-container matColumnDef=\"Code\" fxFlexLayout=\"column\">\n        <mat-header-cell *matHeaderCellDef fxFlex=\"30\"> Grup Kodu </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\" fxFlex=\"30\">\n          {{row.GroupCode}}\n        </mat-cell>\n      </ng-container>\n      <ng-container matColumnDef=\"Title\" fxFlexLayout=\"column\">\n        <mat-header-cell *matHeaderCellDef fxFlex> Açıklama </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\" fxFlex>\n          {{row.Title}}\n        </mat-cell>\n      </ng-container>\n      <ng-container matColumnDef=\"actions\">\n        <mat-header-cell *matHeaderCellDef>\n          <button mat-mini-fab color=\"primary\" (click)=\"addNew()\">\n            <mat-icon aria-label=\"Add\">add</mat-icon>\n          </button>\n        </mat-header-cell>\n\n        <mat-cell *matCellDef=\"let row;let i=index\">\n          <button mat-icon-button color=\"accent\" (click)=\"editItem(i,row)\">\n            <mat-icon aria-label=\"Edit\">edit</mat-icon>\n          </button>\n\n          <button mat-icon-button color=\"accent\" (click)=\"deleteItem(i,row)\">\n            <mat-icon aria-label=\"Delete\">delete</mat-icon>\n          </button>\n        </mat-cell>\n      </ng-container>\n\n      <!-- Detail Column -->\n      <ng-container matColumnDef=\"details\">\n        <mat-cell *matCellDef=\"let row\">\n          <ng-container *ngIf=\"wasExpanded.has(row.data)\">\n            <div style=\"overflow:auto\">\n\n\n              <mat-accordion>\n                <mat-expansion-panel *ngFor='let item of row.data.ProductDetail'>\n                  <mat-expansion-panel-header>\n                    <mat-panel-title>\n                      {{item.Title}}\n                    </mat-panel-title>\n                    <mat-panel-description>\n\n                    </mat-panel-description>\n                  </mat-expansion-panel-header>\n                  <table style=\"width:450px ;\">\n                    <thead>\n                      <th style=\"width: 35%;\">Cins</th>\n                      <th>ENumber</th>\n                      <th>AG Kodu</th>\n                      <th style=\"width: 15%\">Detay</th>\n                    </thead>\n                    <tbody>\n                      <tr *ngFor='let variant of item.Variant'>\n\n                        <td>{{variant.Title}}</td>\n                        <td>\n                            {{variant.ENumber}}\n                        </td>\n                        <td>\n                            {{variant.AGCode}}\n                        </td>\n                        <td>\n                          <button mat-icon-button (click)=\"variantDetail(item,variant)\" >\n                            <mat-icon aria-label=\"ENumber\">subtitles</mat-icon>\n                          </button>\n                        </td>\n                      </tr>\n                    </tbody>\n                  </table>\n<!-- \n                  <mat-chip-list *ngFor='let variant of item.Variant' >\n                      <mat-chip>{{variant.Title}}</mat-chip>\n                    </mat-chip-list>\n                  </mat-card> -->\n\n                  <!-- <div class=\"divTable detailTable\">\n                    <div class=\"divTableHeading\">\n                      <div class=\"divTableRow\">\n                        <div class=\"divTableHead\">Cins</div>\n                        <div class=\"divTableHead\">E-Numarası</div>\n                        <div class=\"divTableHead\">AG Kodu</div>\n                        <div class=\"divTableHead\">Detaylar</div>\n                      </div>\n                    </div>\n                    <div class=\"divTableBody\">\n                      <div class=\"divTableRow\" >\n                        <div class=\"divTableCell\">cell1_1</div>\n                        <div class=\"divTableCell\">cell2_1</div>\n                        <div class=\"divTableCell\">cell3_1</div>\n                        <div class=\"divTableCell\">cell4_1</div>\n                      </div>\n                    </div>\n                  </div> -->\n\n\n\n\n\n\n                </mat-expansion-panel>\n              </mat-accordion>\n            </div>\n          </ng-container>\n        </mat-cell>\n      </ng-container>\n\n      <mat-header-row *matHeaderRowDef=\"seedColumns\" class=\"example-header-row\"></mat-header-row>\n\n      <mat-row *matRowDef=\"let row; columns: seedColumns;\" matRipple class=\"user-row\" [style.borderBottomColor]=\"expandedSeed == row ? 'transparent' : ''\"\n        (click)=\"expandedSeed = row; wasExpanded.add(row);\"></mat-row>\n      <mat-row *matRowDef=\"let row; columns: ['details']; when: isDetailRow\" [@detailExpand]=\"row.data == expandedSeed ? 'expanded' : 'collapsed'\"\n        style=\"overflow: hidden\">\n      </mat-row>\n    </mat-table>\n  </mat-card>\n</div>"

/***/ }),

/***/ "../../../../../src/app/seed.card/seed.card.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".user-row {\n  cursor: pointer;\n  position: relative; }\n  .user-row:hover {\n    background: #ebebeb; }\n  .user-row:active {\n    background: #42A948; }\n  /* \r\nGeneric Styling, for Desktops/Laptops \r\n*/\n  .mat-table {\n  max-height: 600px;\n  overflow: auto; }\n  .mat-expansion-panel-header {\n  max-height: 24px;\n  font-size: 12px; }\n  table {\n  width: 100%;\n  border-collapse: collapse;\n  vertical-align: middle;\n  max-height: calc(100vh - 220px);\n  height: 100%; }\n  /* Zebra striping */\n  th {\n  background: #ebebeb;\n  color: #5c5c5c;\n  font-weight: bold; }\n  td, th {\n  text-align: left;\n  font-size: 10px; }\n  tr {\n  border-bottom: gray 1px solid;\n  height: auto; }\n  tr:hover {\n  background-color: #ebebeb; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/seed.card/seed.card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SeedCardComponent; });
/* unused harmony export DetailDataSource */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__("../../../../../src/app/_services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_cdk_collections__ = __webpack_require__("../../../cdk/esm5/collections.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operators_map__ = __webpack_require__("../../../../rxjs/_esm5/operators/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__helpers_datasource__ = __webpack_require__("../../../../../src/app/_helpers/datasource.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_SeedModel__ = __webpack_require__("../../../../../src/app/_models/SeedModel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__seedcarddialog_seedcarddialog_component__ = __webpack_require__("../../../../../src/app/seed.card/seedcarddialog/seedcarddialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__directives_confirm_dialog_confirm_dialog_component__ = __webpack_require__("../../../../../src/app/_directives/confirm.dialog/confirm.dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__variant_detail_variant_detail_component__ = __webpack_require__("../../../../../src/app/seed.card/variant-detail/variant-detail.component.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var SeedCardComponent = /** @class */ (function () {
    function SeedCardComponent(seedService, producDetailService, snackBar, dialog) {
        var _this = this;
        this.seedService = seedService;
        this.producDetailService = producDetailService;
        this.snackBar = snackBar;
        this.dialog = dialog;
        this.seedColumns = ['Code', 'Title', 'actions'];
        this.seedModel = new __WEBPACK_IMPORTED_MODULE_8__models_SeedModel__["c" /* SeedModel */]();
        this.seeds = [];
        this.wasExpanded = new Set();
        this.isDetailRow = function (_index, row) { return row.hasOwnProperty('detailRow'); };
        this.seedService.url = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].URLRestFullApi + '/seed';
        this.seedService.getAll()
            .subscribe(function (response) {
            _this.seeds = response;
            _this.seeds.forEach(function (prd) {
                prd.ProductDetail = prd.ProductDetail.filter(function (p) { return p.IsDeleted == false; });
            });
            _this.dataSource = new __WEBPACK_IMPORTED_MODULE_7__helpers_datasource__["a" /* GenericDataSource */](_this.seeds);
            _this.detailDataSource = new DetailDataSource(_this.dataSource);
        }, function (error) {
            console.log(error);
            _this.snackBar.open(error.message, '', { duration: 3000, });
        });
    }
    SeedCardComponent.prototype.ngOnInit = function () {
    };
    SeedCardComponent.prototype.addNew = function () {
        var _this = this;
        var seed = new __WEBPACK_IMPORTED_MODULE_8__models_SeedModel__["c" /* SeedModel */]();
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_9__seedcarddialog_seedcarddialog_component__["a" /* SeedCardDialogComponent */], { data: seed, disableClose: true });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log(result);
            if (result == "1") {
                _this.seeds.push(seed);
                _this.dataSource.update(_this.seeds);
            }
        });
    };
    SeedCardComponent.prototype.variantDetail = function (item, variant) {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_11__variant_detail_variant_detail_component__["a" /* VariantDetailComponent */], { data: variant, disableClose: true });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log(result);
            if (result == "1") {
                variant.Seasons = variant.Seasons.filter(function (v) { return v.Season != "" && v.Status != ""; });
                _this.producDetailService.url = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].URLRestFullApi + "/seed/product";
                _this.producDetailService.update(item)
                    .subscribe(function (result) {
                    console.log(result);
                });
                console.log("kayıt edilecek");
            }
        });
    };
    SeedCardComponent.prototype.editItem = function (index, data) {
        var _this = this;
        var seed = Object.assign({}, data); /// clone object
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_9__seedcarddialog_seedcarddialog_component__["a" /* SeedCardDialogComponent */], { data: seed, disableClose: true });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result == "1") {
                _this.seeds[index] = seed;
                _this.dataSource.update(_this.seeds);
            }
        });
    };
    SeedCardComponent.prototype.deleteItem = function (index, data) {
        var _this = this;
        var deleteData = { "Title": data.Title, "Message": "Dikkat Kayıt silinecektir!!! ", "Type": __WEBPACK_IMPORTED_MODULE_10__directives_confirm_dialog_confirm_dialog_component__["c" /* ConfirmType */].Delete };
        var type = __WEBPACK_IMPORTED_MODULE_10__directives_confirm_dialog_confirm_dialog_component__["c" /* ConfirmType */].Delete;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_10__directives_confirm_dialog_confirm_dialog_component__["a" /* ConfirmDialogComponent */], { data: deleteData });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log(result);
            if (result == "1") {
                _this.seedService.url = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].URLRestFullApi + "/seed/" + data._id;
                _this.seedService.delete()
                    .subscribe(function (result) {
                    //this.seeds.splice(index, 1);
                    _this.seeds = _this.seeds.filter(function (s) { return s._id != data._id; });
                    _this.dataSource.update(_this.seeds);
                });
            }
        });
    };
    SeedCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-seedcard',
            template: __webpack_require__("../../../../../src/app/seed.card/seed.card.component.html"),
            styles: [__webpack_require__("../../../../../src/app/seed.card/seed.card.component.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services__["c" /* GenericService */]],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["m" /* trigger */])('detailExpand', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* state */])('collapsed', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* style */])({ height: '0px', minHeight: '0', visibility: 'hidden' })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* state */])('expanded', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* style */])({ height: '*', visibility: 'visible' })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["l" /* transition */])('expanded <=> collapsed', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
                ]),
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services__["c" /* GenericService */],
            __WEBPACK_IMPORTED_MODULE_2__services__["c" /* GenericService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["G" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["m" /* MatDialog */]])
    ], SeedCardComponent);
    return SeedCardComponent;
}());

var DetailDataSource = /** @class */ (function (_super) {
    __extends(DetailDataSource, _super);
    function DetailDataSource(_seedDataSource) {
        var _this = _super.call(this) || this;
        _this._seedDataSource = _seedDataSource;
        return _this;
    }
    DetailDataSource.prototype.connect = function () {
        return this._seedDataSource.connect().pipe(Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators_map__["a" /* map */])(function (data) {
            var rows = [];
            data.forEach(function (seed) { return rows.push(seed, { detailRow: true, data: seed }); });
            return rows;
        }));
    };
    DetailDataSource.prototype.disconnect = function () {
        // No-op
    };
    return DetailDataSource;
}(__WEBPACK_IMPORTED_MODULE_5__angular_cdk_collections__["a" /* DataSource */]));



/***/ }),

/***/ "../../../../../src/app/seed.card/seedcarddialog/seedcarddialog.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card>\n    <mat-card-header>\n        <mat-card-subtitle>{{data.Title}}</mat-card-subtitle>\n    </mat-card-header>\n\n    <mat-card-content>\n\n        <!-- <form class=\"mat-dialog-content\" (ngSubmit)=\"submit\" #formControl=\"ngForm\"> -->\n        <div fxLayout=\"column\" fxLayoutAlign=\"end stretch\">\n            <div flexLayout=\"row\" fxLayoutGap=\"20px\">\n                <mat-form-field fxFlex>\n                    <input matInput required class=\"form-control\" placeholder=\"Grup Kodu\" name=\"categoryCode\" [(ngModel)]=\"data.GroupCode\">\n                </mat-form-field>\n\n                <mat-form-field fxFlex>\n                    <input matInput required class=\"form-control\" placeholder=\"Tür\" name=\"categoryTitle\" [(ngModel)]=\"data.Title\">\n                </mat-form-field>\n                <mat-form-field fxFlex>\n                    <mat-select placeholder=\"Gözlem Formu\" disableRipple [(ngModel)]=\"data.FormObservationHeadId\" (ngModelChange)=\"onModelChange($event,'form')\">\n                        <mat-option *ngFor=\"let item of obsHeadsForm\" [value]=\"item._id\">\n                            {{item.Name}}\n                        </mat-option>\n                    </mat-select>\n                </mat-form-field>\n\n                <mat-form-field fxFlex>\n                    <mat-select placeholder=\"Gözlem Tablosu\" disableRipple [(ngModel)]=\"data.TableObservationHeadId\" (ngModelChange)=\"onModelChange($event,'table')\">\n                        <mat-option *ngFor=\"let item of obsHeadsTable\" [value]=\"item._id\">\n                            {{item.Name}}\n                        </mat-option>\n                    </mat-select>\n                </mat-form-field>\n                <button mat-icon-button (click)=\"seasonDialog()\" matTooltip=\"Sezon Tanımları\" class=\"right\">\n                    <mat-icon aria-label=\"Sezonlar\">subtitles</mat-icon>\n                </button>\n            </div>\n            <div class=\"TableContainer\">\n                <mat-tab-group>\n                    <mat-tab label=\"{{productDetail.Title}}\">\n                        <cdk-table #productTable [dataSource]=\"productDataSource\" class=\"ProductTable\">\n                            <ng-container cdkColumnDef=\"Product\">\n                                <cdk-header-cell *cdkHeaderCellDef class=\"table-header-cell\"> Alt Segment </cdk-header-cell>\n                                <cdk-cell *cdkCellDef=\"let productRow;let rindex=index\" class=\"table-cell\">\n                                    <input matInput type=\"text\" placeholder=\"Alt Segment\" [(ngModel)]=\"productRow.Title\" id=\"Product-{{rindex}}\" (keydown)=\"keydownProductDetail($event,'Product',rindex)\"\n                                        class=\"table-input\">\n                                </cdk-cell>\n                            </ng-container>\n\n                            <ng-container cdkColumnDef=\"TableObservationHead\" flexLayout=\"column\" class=\"table-header-cell\">\n                                <cdk-header-cell *cdkHeaderCellDef class=\"table-cell\"> Gözlem Tablosu </cdk-header-cell>\n                                <cdk-cell *cdkCellDef=\"let element\">\n                                    <mat-select placeholder=\"Gözlem Tablosu\" disableRipple [(ngModel)]=\"element.TableObservationHeadId\" class=\"table-select\">\n                                        <mat-option *ngFor=\"let item of obsHeadsTable\" [value]=\"item._id\">\n                                            {{item.Name}}\n                                        </mat-option>\n                                    </mat-select>\n                                </cdk-cell>\n                            </ng-container>\n                            <ng-container cdkColumnDef=\"FormObservationHead\" flexLayout=\"column\" class=\"table-header-cell\">\n                                <cdk-header-cell *cdkHeaderCellDef class=\"table-cell\"> Gözlem Formu </cdk-header-cell>\n                                <cdk-cell *cdkCellDef=\"let element\">\n                                    <mat-select placeholder=\"Gözlem Formu\" disableRipple [(ngModel)]=\"element.FormObservationHeadId\" class=\"table-select\">\n                                        <mat-option *ngFor=\"let item of obsHeadsForm\" [value]=\"item._id\">\n                                            {{item.Name}}\n                                        </mat-option>\n                                    </mat-select>\n                                </cdk-cell>\n                            </ng-container>\n\n                            <ng-container cdkColumnDef=\"Action\">\n                                <cdk-header-cell *cdkHeaderCellDef> Kullanımda </cdk-header-cell>\n                                <cdk-cell *cdkCellDef=\"let productRow;let rindex=index\">\n                                    <mat-checkbox [checked]=\"productRow.IsActive\" [(ngModel)]=\"productRow.IsActive\">\n                                    </mat-checkbox>\n                                    <button mat-icon-button (click)=\"deleteItem(rindex,productRow)\">\n                                        <mat-icon aria-label=\"Delete\">delete</mat-icon>\n                                    </button>\n                                </cdk-cell>\n                            </ng-container>\n\n                            <cdk-header-row *cdkHeaderRowDef=\"['Product','FormObservationHead','TableObservationHead','Action']\" class=\"table-header-row\"></cdk-header-row>\n                            <cdk-row *matRowDef=\"let productRow;let rindex=index; columns:['Product','FormObservationHead','TableObservationHead','Action'];\"\n                                class=\"table-row\" (click)=rowClickProductDetail(productRow,rindex)>\n                            </cdk-row>\n                        </cdk-table>\n                    </mat-tab>\n                </mat-tab-group>\n                <!-- Variant Table -->\n                <mat-tab-group>\n                    <mat-tab label=\"Çeşit Tanımları\">\n                        <cdk-table #variantTable [dataSource]=\"variantDataSource\" class=\"VariantTable\">\n                            <ng-container cdkColumnDef=\"Variant\">\n                                <cdk-header-cell *cdkHeaderCellDef class=\"table-header-cell\"> Çeşit </cdk-header-cell>\n                                <cdk-cell *cdkCellDef=\"let variantRow;let rindex=index\" class=\"table-cell\">\n                                    <input matInput type=\"text\" placeholder=\"Çeşit\" [(ngModel)]=\"variantRow.Title\" (ngModelChange)=\"modelChanged($event)\" id=\"Variant-{{rindex}}\"\n                                        (keydown)=\"keydownVariantDetail($event,'Variant',rindex)\" class=\"table-input\">\n                                </cdk-cell>\n                            </ng-container>\n\n                            <ng-container cdkColumnDef=\"ENumber\">\n                                <cdk-header-cell *cdkHeaderCellDef class=\"table-header-cell\"> E-Numarası </cdk-header-cell>\n                                <cdk-cell *cdkCellDef=\"let variantRow;let rindex=index\" class=\"table-cell\">\n                                    <input matInput type=\"text\" placeholder=\"E-Numarası\" [(ngModel)]=\"variantRow.ENumber\" (ngModelChange)=\"modelChanged($event)\"\n                                        id=\"ENumber-{{rindex}}\" (keydown)=\"keydownVariantDetail($event,'ENumber',rindex)\" class=\"table-input\">\n                                </cdk-cell>\n                            </ng-container>\n                            <ng-container cdkColumnDef=\"AGCode\">\n                                <cdk-header-cell *cdkHeaderCellDef class=\"table-header-cell\"> AG Kodu </cdk-header-cell>\n                                <cdk-cell *cdkCellDef=\"let variantRow;let rindex=index\" class=\"table-cell\">\n                                    <input matInput type=\"text\" placeholder=\"AG Kodu\" [(ngModel)]=\"variantRow.AGCode\" (ngModelChange)=\"modelChanged($event)\"\n                                        id=\"AGCode-{{rindex}}\" (keydown)=\"keydownVariantDetail($event,'AGCode',rindex)\" class=\"table-input\">\n                                </cdk-cell>\n                            </ng-container>\n                            <ng-container cdkColumnDef=\"Action\">\n\n                                <cdk-header-cell *cdkHeaderCellDef class=\"table-header-cell\"> Kullanımda </cdk-header-cell>\n                                <cdk-cell *cdkCellDef=\"let variantRow;let rindex=index\">\n                                    <button mat-icon-button (click)=\"variantDetailDialog(rindex,variantRow)\"  matTooltip=\"Çeşit Detayları\">\n                                        <mat-icon aria-label=\"Detail\">subtitles</mat-icon>\n                                    </button>\n                                    <mat-checkbox [checked]=\"variantRow.IsActive\" [(ngModel)]=\"variantRow.IsActive\">\n                                    </mat-checkbox>\n                                    <button mat-icon-button (click)=\"deleteVariant(rindex,variantRow)\">\n                                        <mat-icon aria-label=\"Delete\">delete</mat-icon>\n                                    </button>\n                                </cdk-cell>\n                            </ng-container>\n                            <cdk-header-row *cdkHeaderRowDef=\"displayColumns\" class=\"table-header-row\"></cdk-header-row>\n                            <cdk-row *matRowDef=\"let variantRow;let rindex=index; columns: displayColumns;\" class=\"table-row\" (click)=rowClickVariant(variantRow,rindex)>\n                            </cdk-row>\n                        </cdk-table>\n                    </mat-tab>\n\n\n                    <mat-tab label=\"Segment Tanımları\">\n                        <cdk-table  [dataSource]=\"seasonDataSource\" class=\"VariantTable\">\n                            <ng-container cdkColumnDef=\"Season\">\n                                <cdk-header-cell *cdkHeaderCellDef class=\"table-header-cell\"> Sezon </cdk-header-cell>\n                                <cdk-cell *cdkCellDef=\"let row;let rindex=index\" class=\"table-cell\">\n                                    <input matInput type=\"text\" placeholder=\"Sezon\" [(ngModel)]=\"row.Season\"  (ngModelChange)=\"modelChangedSeason($event)\"\n                                        id=\"Season-{{rindex}}\" (keydown)=\"keydownSeason($event,'Season',rindex)\" class=\"table-input\">\n                                </cdk-cell>\n                            </ng-container>\n\n                            <ng-container cdkColumnDef=\"Action\">\n                                <cdk-header-cell *cdkHeaderCellDef class=\"table-header-cell\"> </cdk-header-cell>\n                                <cdk-cell *cdkCellDef=\"let row;let rindex=index\">\n                                    <button mat-icon-button (click)=\"deleteSeasonItem(rindex,row)\" tabindex=\"-1\">\n                                        <mat-icon aria-label=\"Delete\">delete</mat-icon>\n                                    </button>\n                                </cdk-cell>\n                            </ng-container>\n                            <cdk-header-row *cdkHeaderRowDef=\"['Season', 'Action']\" class=\"table-header-row\"></cdk-header-row>\n                            <cdk-row *matRowDef=\"let row;let rindex=index; columns: ['Season', 'Action'];\" class=\"table-row\" (click)=rowClickSeason(row,rindex)>\n                            </cdk-row>\n                        </cdk-table>\n                    </mat-tab>\n                </mat-tab-group>\n            </div>\n\n        </div>\n    </mat-card-content>\n    <mat-card-actions class=\"buttonRows\">\n        <button mat-raised-button (click)=\"confirmAdd()\" color=\"warn\">Kaydet</button>\n        <button mat-raised-button (click)=\"onNoClick()\" tabindex=\"-1\">Vazgeç</button>\n    </mat-card-actions>\n</mat-card>"

/***/ }),

/***/ "../../../../../src/app/seed.card/seedcarddialog/seedcarddialog.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Structure */\n.TableContainer {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row; }\n.table-input,\n.table-select {\n  border: none; }\n.table-select:hover,\n.table-input:focus,\n.table-select:focus {\n  border: 1px inset lightblue;\n  border-radius: 5px; }\n.buttonRows {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row; }\n.right {\n  padding-right: 1em; }\ncdk-table {\n  max-height: 200px;\n  display: block;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  width: 100%;\n  height: 200px;\n  overflow-y: scroll;\n  overflow-x: hidden;\n  border-bottom: 1px solid #7c7c7c; }\n.ProductTable {\n  max-width: 420px; }\n.VariantTable {\n  max-width: 420px; }\n.table-header-row, .table-row {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 32px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 1px 8px; }\n.table-cell, .table-header-cell {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  padding-left: 1px;\n  padding-right: 1px; }\n.cdk-header-cell {\n  font-size: 10px;\n  font-weight: bolder; }\n.cdk-cell {\n  font-size: 12px; }\n.cdk-column-Action {\n  min-width: 110px; }\n.cdk-column-Variant,\n.cdk-column-Product {\n  min-width: 110px; }\n.cdk-column-FormObservationHead,\n.cdk-column-TableObservationHead {\n  min-width: 110px; }\n.cdk-column-MainUnit,\n.cdk-column-SecondUnit {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  min-width: 30px; }\n.cdk-column-ENumber,\n.cdk-column-AGCode {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  min-width: 40px; }\n.table-header-cell {\n  text-align: left; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/seed.card/seedcarddialog/seedcarddialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SeedCardDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_SeedModel__ = __webpack_require__("../../../../../src/app/_models/SeedModel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services__ = __webpack_require__("../../../../../src/app/_services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__helpers_datasource__ = __webpack_require__("../../../../../src/app/_helpers/datasource.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__directives_confirm_dialog_confirm_dialog_component__ = __webpack_require__("../../../../../src/app/_directives/confirm.dialog/confirm.dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_text_mask_addons_dist_createNumberMask__ = __webpack_require__("../../../../text-mask-addons/dist/createNumberMask.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_text_mask_addons_dist_createNumberMask___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_text_mask_addons_dist_createNumberMask__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__variant_detail_variant_detail_component__ = __webpack_require__("../../../../../src/app/seed.card/variant-detail/variant-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__season_dialog_season_dialog_component__ = __webpack_require__("../../../../../src/app/seed.card/season-dialog/season-dialog.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};










var SeedCardDialogComponent = /** @class */ (function () {
    function SeedCardDialogComponent(dialogRef, data, seedService, obsHeadService, dialog, renderer) {
        var _this = this;
        this.dialogRef = dialogRef;
        this.data = data;
        this.seedService = seedService;
        this.obsHeadService = obsHeadService;
        this.dialog = dialog;
        this.renderer = renderer;
        this.numberMask = __WEBPACK_IMPORTED_MODULE_7_text_mask_addons_dist_createNumberMask___default()({
            prefix: '',
            suffix: '',
            integerLimit: 6,
            includeThousandsSeparator: false
        });
        this.productDetail = new __WEBPACK_IMPORTED_MODULE_2__models_SeedModel__["a" /* ProductDetail */]();
        this.variant = new __WEBPACK_IMPORTED_MODULE_2__models_SeedModel__["d" /* Variant */]();
        this.seasons = [];
        this.displayColumns = ['Variant', 'ENumber', 'AGCode', 'Action'];
        this.isChanged = false;
        if (data._id == undefined) {
            data.Seasons = [];
            data.Seasons.push(new __WEBPACK_IMPORTED_MODULE_2__models_SeedModel__["b" /* Season */]());
        }
        if (this.data.ProductDetail.length == 0) {
            this.data.ProductDetail = Array();
            var newProductDetail = new __WEBPACK_IMPORTED_MODULE_2__models_SeedModel__["a" /* ProductDetail */]();
            newProductDetail.Variant = new Array();
            newProductDetail.Variant.push(new __WEBPACK_IMPORTED_MODULE_2__models_SeedModel__["d" /* Variant */]());
            (_a = newProductDetail.Seasons).push.apply(_a, data.Seasons);
            data.ProductDetail.push(newProductDetail);
        }
        this.productDetail = data.ProductDetail[0];
        this.variant = this.productDetail.Variant[0];
        this.productDataSource = new __WEBPACK_IMPORTED_MODULE_5__helpers_datasource__["a" /* GenericDataSource */](data.ProductDetail);
        this.variantDataSource = new __WEBPACK_IMPORTED_MODULE_5__helpers_datasource__["a" /* GenericDataSource */](data.ProductDetail[0].Variant);
        this.seasonDataSource = new __WEBPACK_IMPORTED_MODULE_5__helpers_datasource__["a" /* GenericDataSource */](data.ProductDetail[0].Seasons);
        this.obsHeadService.url = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].URLRestFullApi + "/observationheads";
        this.obsHeadService.getAll()
            .subscribe(function (response) {
            _this.obsHeadsForm = response.filter(function (obs) { return obs.Place == "form"; });
            _this.obsHeadsTable = response.filter(function (obs) { return obs.Place == "table"; });
        });
        var _a;
    }
    SeedCardDialogComponent.prototype.ngOnInit = function () {
    };
    SeedCardDialogComponent.prototype.onNoClick = function () {
        this.data.ProductDetail = this.data.ProductDetail.filter(function (prd) { return prd.Title != "" || prd.Title != undefined; });
        this.data.ProductDetail.forEach(function (p) {
            p.Variant = p.Variant.filter(function (v) { return v.Title != undefined; }).filter(function (v) { return v.Title != ""; });
            p.Seasons = p.Seasons.filter(function (s) { return s.Season != undefined; }).filter(function (s) { return s.Season != ""; });
        });
        this.dialogRef.close();
    };
    SeedCardDialogComponent.prototype.submit = function () {
    };
    SeedCardDialogComponent.prototype.modelChanged = function (event) {
        this.isChanged = true;
    };
    SeedCardDialogComponent.prototype.modelChangedSeason = function (event) {
        var _this = this;
        this.productDetail.Variant.forEach(function (v) {
            v.Seasons = [];
            (_a = v.Seasons).push.apply(_a, _this.productDetail.Seasons);
            var _a;
        });
    };
    SeedCardDialogComponent.prototype.confirmAdd = function () {
        var _this = this;
        this.data.ProductDetail = this.data.ProductDetail.filter(function (prd) { return prd.Title != ""; });
        this.data.ProductDetail.forEach(function (p) {
            p.Variant = p.Variant.filter(function (v) { return v.Title != undefined; }).filter(function (v) { return v.Title != ""; });
            p.Seasons = p.Seasons.filter(function (s) { return s.Season != undefined; }).filter(function (s) { return s.Season != ""; });
        });
        this.seedService.url = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].URLRestFullApi + "/seed";
        if (this.data._id == undefined) {
            this.seedService.insert(this.data)
                .subscribe(function (response) {
                _this.data._id = response._id;
                _this.dialogRef.close("1");
            });
        }
        else {
            this.seedService.update(this.data)
                .subscribe(function (response) {
                console.log("Seed Change");
                _this.dialogRef.close("1");
            });
        }
    };
    SeedCardDialogComponent.prototype.keydownProductDetail = function (event, tag, index) {
        console.log(event.key);
        if (event.key == 'ArrowDown') {
            if (this.productDataSource.data().slice()[index].Title == "")
                return;
            if (this.data.ProductDetail.length - 1 > index) {
                var element = '#' + tag + '-' + (index + 1);
                var onElement = this.renderer.selectRootElement(element);
                onElement.focus();
                this.rowClickProductDetail(this.data.ProductDetail[index + 1], index + 1);
            }
        }
        if (event.key == 'ArrowUp') {
            if (index > 0) {
                var element = '#' + tag + '-' + (index - 1);
                var onElement = this.renderer.selectRootElement(element);
                onElement.focus();
                this.rowClickProductDetail(this.data.ProductDetail[index - 1], index - 1);
            }
        }
    };
    SeedCardDialogComponent.prototype.productLine = function (row) {
        if (row.Variant.length == 0) {
            var v = new __WEBPACK_IMPORTED_MODULE_2__models_SeedModel__["d" /* Variant */]();
            if (row.Seasons.length > 0)
                (_a = v.Seasons).push.apply(_a, row.Seasons);
            else if (this.data.Seasons.length > 0)
                (_b = v.Seasons).push.apply(_b, this.data.Seasons);
            row.Variant.push(v);
        }
        if (row.Seasons.length == 0) {
            row.Seasons = [];
            if (this.data.Seasons.length > 0)
                (_c = this.seasons).push.apply(_c, this.data.Seasons);
            else
                this.seasons.push(new __WEBPACK_IMPORTED_MODULE_2__models_SeedModel__["b" /* Season */]);
            (_d = row.Seasons).push.apply(_d, this.seasons);
        }
        this.seasonDataSource.update(row.Seasons);
        this.variantDataSource.update(row.Variant);
        this.variant = this.productDetail.Variant[0];
        var _a, _b, _c, _d;
    };
    SeedCardDialogComponent.prototype.rowClickProductDetail = function (row, index) {
        this.productLine(row);
        this.productDetail = row;
        if (this.productDataSource.data().slice().length - 1 == index) {
            var prdDetail = new __WEBPACK_IMPORTED_MODULE_2__models_SeedModel__["a" /* ProductDetail */]();
            this.productLine(prdDetail);
            prdDetail.TableObservationHeadId = this.data.TableObservationHeadId;
            prdDetail.FormObservationHeadId = this.data.FormObservationHeadId;
            this.data.ProductDetail.push(prdDetail);
            this.productDataSource.update(this.data.ProductDetail);
        }
    };
    SeedCardDialogComponent.prototype.keydownVariantDetail = function (event, tag, index) {
        console.log(event.key);
        if (event.key == 'ArrowDown') {
            if (this.variantDataSource.data().slice()[index].Title == "" || this.variantDataSource.data().slice()[index].Title == undefined)
                return;
            if (this.productDetail.Variant.length - 1 > index) {
                var element = '#' + tag + '-' + (index + 1);
                var onElement = this.renderer.selectRootElement(element);
                onElement.focus();
                this.rowClickVariant(this.productDetail.Variant[index + 1], index + 1);
            }
        }
        if (event.key == 'ArrowUp') {
            if (index > 0) {
                var element = '#' + tag + '-' + (index - 1);
                var onElement = this.renderer.selectRootElement(element);
                onElement.focus();
                this.rowClickVariant(this.productDetail.Variant[index - 1], index - 1);
            }
        }
    };
    SeedCardDialogComponent.prototype.keydownSeason = function (event, tag, index) {
        if (event.key == 'ArrowDown') {
            if (this.seasonDataSource.data().slice().length - 1 > index) {
                var element = '#' + tag + '-' + (index + 1);
                var onElement = this.renderer.selectRootElement(element);
                onElement.focus();
                this.rowClickSeason(this.seasonDataSource.data().slice()[index + 1], index + 1);
            }
        }
        if (event.key == 'ArrowUp') {
            if (index > 0) {
                var element = '#' + tag + '-' + (index - 1);
                var onElement = this.renderer.selectRootElement(element);
                onElement.focus();
                this.rowClickSeason(this.seasonDataSource.data().slice()[index - 1], index - 1);
            }
        }
    };
    SeedCardDialogComponent.prototype.rowClickSeason = function (row, index) {
        this.selectedRowIndex = row._id;
        console.log(this.productDetail.Seasons);
        if (this.seasonDataSource.data().slice().length - 1 == index) {
            this.productDetail.Seasons.push(new __WEBPACK_IMPORTED_MODULE_2__models_SeedModel__["b" /* Season */]());
            this.seasonDataSource.update(this.productDetail.Seasons);
        }
    };
    SeedCardDialogComponent.prototype.rowClickVariant = function (row, index) {
        this.variant = row;
        console.log(row._id, this.selectedVariantRowIndex);
        this.selectedVariantRowIndex = row._id;
        if (this.variantDataSource.data().slice().length - 1 == index) {
            var variant = new __WEBPACK_IMPORTED_MODULE_2__models_SeedModel__["d" /* Variant */]();
            variant.Seasons = this.productDetail.Seasons;
            this.productDetail.Variant.push(variant);
            this.variantDataSource.update(this.productDetail.Variant);
        }
    };
    SeedCardDialogComponent.prototype.updateRow = function (row, index) {
        // console.log(this.productDataSource);
        // console.log(this.data.ProductDetail);
    };
    SeedCardDialogComponent.prototype.deleteItem = function (index, data) {
        var _this = this;
        var deleteData = new __WEBPACK_IMPORTED_MODULE_6__directives_confirm_dialog_confirm_dialog_component__["b" /* ConfirmModel */]();
        deleteData.Title = data.Title;
        deleteData.Type = __WEBPACK_IMPORTED_MODULE_6__directives_confirm_dialog_confirm_dialog_component__["c" /* ConfirmType */].Delete;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__directives_confirm_dialog_confirm_dialog_component__["a" /* ConfirmDialogComponent */], { data: deleteData });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.data.ProductDetail.splice(index, 1);
            _this.productDataSource.update(_this.data.ProductDetail);
        });
    };
    SeedCardDialogComponent.prototype.deleteVariant = function (index, data) {
        var _this = this;
        var deleteData = new __WEBPACK_IMPORTED_MODULE_6__directives_confirm_dialog_confirm_dialog_component__["b" /* ConfirmModel */]();
        deleteData.Title = data.Title;
        deleteData.Type = __WEBPACK_IMPORTED_MODULE_6__directives_confirm_dialog_confirm_dialog_component__["c" /* ConfirmType */].Delete;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__directives_confirm_dialog_confirm_dialog_component__["a" /* ConfirmDialogComponent */], { data: deleteData });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.productDetail.Variant.splice(index, 1);
            _this.variantDataSource.update(_this.productDetail.Variant);
        });
    };
    SeedCardDialogComponent.prototype.deleteSeasonItem = function (index, data) {
        var _this = this;
        var deleteData = new __WEBPACK_IMPORTED_MODULE_6__directives_confirm_dialog_confirm_dialog_component__["b" /* ConfirmModel */]();
        deleteData.Title = data.Season;
        deleteData.Type = __WEBPACK_IMPORTED_MODULE_6__directives_confirm_dialog_confirm_dialog_component__["c" /* ConfirmType */].Delete;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__directives_confirm_dialog_confirm_dialog_component__["a" /* ConfirmDialogComponent */], { data: deleteData });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.productDetail.Seasons.splice(index, 1);
            _this.seasonDataSource.update(_this.productDetail.Seasons);
            _this.productDetail.Variant.forEach(function (v) {
                v.Seasons = [];
                (_a = v.Seasons).push.apply(_a, _this.productDetail.Seasons);
                var _a;
            });
        });
    };
    SeedCardDialogComponent.prototype.variantDetailDialog = function (index, data) {
        var _this = this;
        var variant = Object.assign({}, data);
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_8__variant_detail_variant_detail_component__["a" /* VariantDetailComponent */], { data: variant, disableClose: true });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log(result);
            if (result == "1") {
                _this.productDetail.Variant[index] = variant;
            }
            _this.productDetail.Variant[index].Seasons.filter(function (s) { return s.Season != undefined; }).filter(function (s) { return s.Season != ""; });
            _this.variantDataSource.update(_this.productDetail.Variant);
        });
    };
    SeedCardDialogComponent.prototype.seasonDialog = function (season) {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_9__season_dialog_season_dialog_component__["a" /* SeasonDialogComponent */], { data: this.data, disableClose: true });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log(result);
            if (result == "1") {
                _this.data.ProductDetail.forEach(function (p) {
                    p.Seasons = [];
                    (_a = p.Seasons).push.apply(_a, _this.data.Seasons);
                    p.Variant.forEach(function (v) {
                        v.Seasons = [];
                        (_a = v.Seasons).push.apply(_a, _this.data.Seasons);
                        var _a;
                    });
                    var _a;
                });
            }
        });
    };
    SeedCardDialogComponent.prototype.onModelChange = function (event, place) {
        if (place == "table")
            this.data.ProductDetail.forEach(function (p) {
                p.TableObservationHeadId = event;
            });
        else
            this.data.ProductDetail.forEach(function (p) {
                p.FormObservationHeadId = event;
            });
    };
    SeedCardDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-seedcarddialog',
            template: __webpack_require__("../../../../../src/app/seed.card/seedcarddialog/seedcarddialog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/seed.card/seedcarddialog/seedcarddialog.component.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_3__services__["c" /* GenericService */]]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MatDialogRef */],
            __WEBPACK_IMPORTED_MODULE_2__models_SeedModel__["c" /* SeedModel */],
            __WEBPACK_IMPORTED_MODULE_3__services__["c" /* GenericService */],
            __WEBPACK_IMPORTED_MODULE_3__services__["c" /* GenericService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]])
    ], SeedCardDialogComponent);
    return SeedCardDialogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/seed.card/variant-detail/variant-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"detail-card\">\n\n    <mat-card-header>\n        <mat-card-title>Detaylar</mat-card-title>\n        <mat-card-subtitle>{{variant.Title}}</mat-card-subtitle>\n    </mat-card-header>\n\n    <mat-card-content>\n        <mat-form-field>\n            <input matInput type=\"text\" placeholder=\"Deneme Yılı\" [textMask]=\"{mask: trialYearMask}\" [(ngModel)]=\"data.TrialYear\" id=\"TrialYear\">\n        </mat-form-field>\n        <div fxLayout=\"row\">\n            <mat-form-field>\n                <input matInput type=\"text\" placeholder=\"Miktar\" [textMask]=\"{mask: numberMask}\" [(ngModel)]=\"data.ConvFact1\" id=\"ConvFact1\">\n            </mat-form-field>\n            <mat-form-field>\n                <input matInput type=\"text\" placeholder=\"Birim\" [(ngModel)]=\"data.MainUnit\" id=\"MainUnit\">\n            </mat-form-field>\n        </div>\n        <div fxLayout=\"row\">\n            <mat-form-field>\n                <input matInput type=\"text\" placeholder=\"Ambalaj\" [textMask]=\"{mask: numberMask}\" [(ngModel)]=\"data.ConvFact2\" id=\"ConvFact2\">\n            </mat-form-field>\n            <mat-form-field>\n                <input matInput type=\"text\" placeholder=\"İkinci Birim\" [(ngModel)]=\"data.SecondUnit\" id=\"SecondUnit\">\n            </mat-form-field>\n        </div>\n        <cdk-table #variantTable [dataSource]=\"seasonDataSource\" class=\"VariantTable\">\n            <ng-container cdkColumnDef=\"Season\">\n                <cdk-header-cell *cdkHeaderCellDef class=\"table-header-cell\"> Sezon </cdk-header-cell>\n                <cdk-cell *cdkCellDef=\"let row;let rindex=index\" class=\"table-cell\">\n                    <input matInput type=\"text\" placeholder=\"Sezon\" [(ngModel)]=\"row.Season\" (ngModelChange)=\"modelChanged($event,rindex)\" id=\"Season-{{rindex}}\"\n                        (keydown)=\"keydownSeason($event,'Season',rindex)\" class=\"table-input\">\n                </cdk-cell>\n            </ng-container>\n\n            <ng-container cdkColumnDef=\"Status\">\n                <cdk-header-cell *cdkHeaderCellDef class=\"table-header-cell\"> Durum </cdk-header-cell>\n                <cdk-cell *cdkCellDef=\"let row;let rindex=index\" class=\"table-cell\">\n                    <input matInput type=\"text\" placeholder=\"Durum\" [(ngModel)]=\"row.Status\" (ngModelChange)=\"modelChanged($event,rindex)\" id=\"Status-{{rindex}}\"\n                        (keydown)=\"keydownSeason($event,'Status',rindex)\" class=\"table-input\">\n                </cdk-cell>\n            </ng-container>\n            <ng-container cdkColumnDef=\"Action\">\n                <cdk-header-cell *cdkHeaderCellDef class=\"table-header-cell\"> \n                    \n                        \n                </cdk-header-cell>\n                <cdk-cell *cdkCellDef=\"let row;let rindex=index\">\n                    <button mat-icon-button (click)=\"deleteItem(rindex,row)\" tabindex=\"-1\">\n                        <mat-icon aria-label=\"Delete\">delete</mat-icon>\n                    </button>\n                </cdk-cell>\n            </ng-container>\n            <cdk-header-row *cdkHeaderRowDef=\"displayColumns\" class=\"table-header-row\"></cdk-header-row>\n            <cdk-row *matRowDef=\"let row;let rindex=index; columns: displayColumns;\" class=\"table-row\" (click)=rowClick(row,rindex)>\n            </cdk-row>\n        </cdk-table>\n    </mat-card-content>\n    <mat-card-actions>\n        <button mat-raised-button (click)=\"confirmAdd()\" color=\"warn\">Kaydet</button>\n        <button mat-raised-button (click)=\"onNoClick()\" tabindex=\"-1\">Vazgeç</button>\n    </mat-card-actions>\n</mat-card>"

/***/ }),

/***/ "../../../../../src/app/seed.card/variant-detail/variant-detail.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".detail-card {\n  max-width: 650px; }\n\n.table-input,\n.table-select {\n  border: none; }\n\n.table-select:hover,\n.table-input:focus,\n.table-select:focus {\n  border: 1px inset lightblue;\n  border-radius: 5px; }\n\ncdk-table {\n  max-height: 200px;\n  max-width: 335px;\n  display: block;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  width: 100%;\n  height: 200px;\n  overflow-y: auto;\n  overflow-x: hidden;\n  border-bottom: 1px solid #7c7c7c; }\n\n.table-header-row, .table-row {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 32px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 1px 8px; }\n\n.table-cell, .table-header-cell {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  padding-left: 1px;\n  padding-right: 1px; }\n\n.cdk-header-cell {\n  font-size: 10px;\n  font-weight: bolder; }\n\n.cdk-cell {\n  font-size: 12px; }\n\n.cdk-TrialSeason {\n  min-width: 100px; }\n\n.cdk-column-Action {\n  min-width: 30px; }\n\n.cdk-column-ENumber,\n.cdk-column-AGCode {\n  min-width: 100px; }\n\n.table-header-cell {\n  text-align: left; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/seed.card/variant-detail/variant-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VariantDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models__ = __webpack_require__("../../../../../src/app/_models/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services__ = __webpack_require__("../../../../../src/app/_services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helpers__ = __webpack_require__("../../../../../src/app/_helpers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__directives__ = __webpack_require__("../../../../../src/app/_directives/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_text_mask_addons_dist_createNumberMask__ = __webpack_require__("../../../../text-mask-addons/dist/createNumberMask.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_text_mask_addons_dist_createNumberMask___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_text_mask_addons_dist_createNumberMask__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var VariantDetailComponent = /** @class */ (function () {
    function VariantDetailComponent(dialogRef, data, seedService, dialog, renderer) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.seedService = seedService;
        this.dialog = dialog;
        this.renderer = renderer;
        this.displayColumns = ['Season', 'Status', 'Action'];
        this.trialYearMask = [/[2]/, /[0]/, /[1-2]/, /\d/, '-', /[2]/, /[0]/, /[1-2]/, /\d/];
        this.numberMask = __WEBPACK_IMPORTED_MODULE_6_text_mask_addons_dist_createNumberMask___default()({
            prefix: '',
            suffix: '',
            integerLimit: 6,
            includeThousandsSeparator: false
        });
        this.isChanged = false;
        this.variant = data;
        if (data.Seasons == undefined) {
            data.Seasons = Array();
            data.Seasons.push(new __WEBPACK_IMPORTED_MODULE_2__models__["l" /* Season */]());
        }
        console.log(this.data.Seasons.length);
        this.seasonDataSource = new __WEBPACK_IMPORTED_MODULE_4__helpers__["a" /* GenericDataSource */](data.Seasons);
    }
    VariantDetailComponent.prototype.ngOnInit = function () {
    };
    VariantDetailComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    VariantDetailComponent.prototype.submit = function () {
    };
    VariantDetailComponent.prototype.modelChanged = function (event, index) {
        this.isChanged = true;
        console.log(this.data.Seasons.length - 1, index);
        if (this.data.Seasons.length - 1 == index) {
            this.data.Seasons.push(new __WEBPACK_IMPORTED_MODULE_2__models__["l" /* Season */]());
            this.seasonDataSource.update(this.data.Seasons);
        }
    };
    VariantDetailComponent.prototype.confirmAdd = function () {
        console.log("confirm");
        this.dialogRef.close("1");
    };
    VariantDetailComponent.prototype.keydownSeason = function (event, tag, index) {
        if (event.key == 'ArrowDown') {
            if (this.data.Seasons.length - 1 > index) {
                var element = '#' + tag + '-' + (index + 1);
                var onElement = this.renderer.selectRootElement(element);
                onElement.focus();
                this.rowClick(this.data.Seasons[index + 1], index + 1);
            }
        }
        if (event.key == 'ArrowUp') {
            if (index > 0) {
                var element = '#' + tag + '-' + (index - 1);
                var onElement = this.renderer.selectRootElement(element);
                onElement.focus();
                this.rowClick(this.data.Seasons[index - 1], index - 1);
            }
        }
    };
    VariantDetailComponent.prototype.rowClick = function (row, index) {
        this.selectedRowIndex = row._id;
        if (this.seasonDataSource.data().slice().length - 1 == index) {
            this.data.Seasons.push(new __WEBPACK_IMPORTED_MODULE_2__models__["l" /* Season */]());
            this.seasonDataSource.update(this.data.Seasons);
        }
    };
    VariantDetailComponent.prototype.seasonRenew = function () {
        this.data.Seasons;
    };
    VariantDetailComponent.prototype.deleteItem = function (index, data) {
        var _this = this;
        var deleteData = new __WEBPACK_IMPORTED_MODULE_5__directives__["b" /* ConfirmModel */]();
        deleteData.Title = data.Title;
        deleteData.Type = __WEBPACK_IMPORTED_MODULE_5__directives__["c" /* ConfirmType */].Delete;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__directives__["a" /* ConfirmDialogComponent */], { data: deleteData });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.data.Seasons.splice(index, 1);
            _this.seasonDataSource.update(_this.data.Seasons);
        });
    };
    VariantDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-variant-detail',
            template: __webpack_require__("../../../../../src/app/seed.card/variant-detail/variant-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/seed.card/variant-detail/variant-detail.component.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_3__services__["c" /* GenericService */]]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MatDialogRef */],
            __WEBPACK_IMPORTED_MODULE_2__models__["p" /* Variant */],
            __WEBPACK_IMPORTED_MODULE_3__services__["c" /* GenericService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]])
    ], VariantDetailComponent);
    return VariantDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/seed.input/seed.input.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n  <div class=\"left\">\n    <h3 mat-dialog-title [ngSwitch]=\"trCode\">Deneme Tohum Listesi&nbsp;&nbsp;-&nbsp;\n      <span *ngSwitchCase=\"0\">Giriş</span>\n      <span *ngSwitchCase=\"1\">Çıkış</span>\n    </h3>\n  </div>\n  <div class=\"right\">\n    <mat-button-toggle-group #group=\"matButtonToggleGroup\" [(ngModel)]=\"trCode\" (change)=\"onValChange(group.value)\">\n      <mat-button-toggle checked=\"true\" value=\"0\">\n        Giriş\n      </mat-button-toggle>\n      <mat-button-toggle value=\"1\">\n        Çıkış\n      </mat-button-toggle>\n    </mat-button-toggle-group>\n  </div>\n</div>\n\n<mat-card class=\"mat-elevation-z8\">\n  <mat-card-header>\n    <mat-chip-list>\n      <mat-chip (click)=\"selectedSeed(chip)\" *ngFor=\"let chip of seeds\" selected=\"true\" color=\"basic\">\n        <!--[color]=\"chipColor\"-->\n        {{chip.Title}}\n      </mat-chip>\n    </mat-chip-list>\n  </mat-card-header>\n  <mat-card-content>\n    <cdk-table #table [dataSource]=\"seedInputDataSource\" class=\"category-table\">\n\n      <ng-container cdkColumnDef=\"Action\">\n        <cdk-header-cell *cdkHeaderCellDef>Sil</cdk-header-cell>\n        <cdk-cell *cdkCellDef=\"let element;let rindex=index\">\n          <button mat-icon-button (click)=\"deleteItem(rindex,element)\" tabindex=\"-1\">\n            <mat-icon aria-label=\"Delete\" color=\"warn\">delete</mat-icon>\n          </button>\n        </cdk-cell>\n      </ng-container>\n\n      <ng-container cdkColumnDef=\"TrCode\">\n        <cdk-header-cell *cdkHeaderCellDef class=\"table-header-cell\"> G/Ç </cdk-header-cell>\n        <cdk-cell *cdkCellDef=\"let element\" class=\"table-cell\">\n          <mat-form-field>\n            <mat-select [(ngModel)]=\"element.TrCode\" [(value)]=\"selected\" (ngModelChange)=\"onModelChange(element,'TrCode')\" class=\"table-select\">\n              <mat-select-trigger>\n                <span>\n                  {{element.TrCode}}\n                </span>\n              </mat-select-trigger>\n              <mat-option value=\"G\">Giriş</mat-option>\n              <mat-option value=\"Ç\">Çıkış</mat-option>\n            </mat-select>\n          </mat-form-field>\n        </cdk-cell>\n      </ng-container>\n\n      <ng-container cdkColumnDef=\"BoxNo\">\n        <cdk-header-cell *cdkHeaderCellDef class=\"table-header-cell\"> Kutu </cdk-header-cell>\n        <cdk-cell *cdkCellDef=\"let element;let rindex=index\" class=\"table-cell\">\n          <mat-form-field>\n            <input matInput id=\"BoxNo-{{rindex}}\" type=\"text\" [(ngModel)]=\"element.BoxNo\" (ngModelChange)=\"onModelChange(element,'BoxNo')\" placeholder=\"Kutu\"\n              (keydown)=\"keydown($event,'BoxNo',rindex)\" class=\"table-input\">\n          </mat-form-field>\n        </cdk-cell>\n      </ng-container>\n\n      <ng-container cdkColumnDef=\"CategoryTitle\">\n        <cdk-header-cell *cdkHeaderCellDef class=\"table-header-cell\"> Ana Segment </cdk-header-cell>\n        <cdk-cell *cdkCellDef=\"let element;let rindex=index\" class=\"table-cell\">\n          <mat-form-field>\n            <input matInput id=\"CategoryTitle-{{rindex}}\" type=\"text\" [(ngModel)]=\"element.CategoryTitle\" readonly=true (keydown)=\"keydown($event,'CategoryTitle',rindex)\"\n              class=\"table-input\" />\n          </mat-form-field>\n        </cdk-cell>\n      </ng-container>\n\n      <ng-container cdkColumnDef=\"ProductTitle\">\n        <cdk-header-cell *cdkHeaderCellDef class=\"table-header-cell\">\n          <div>\n            Alt Segment\n            <button mat-icon-button tabindex=\"-1\">\n              <mat-icon aria-label=\"Filter\">filter_list</mat-icon>\n            </button>\n          </div>\n        </cdk-header-cell>\n        <cdk-cell *cdkCellDef=\"let element;let rindex=index\" class=\"table-cell\">\n          <mat-form-field>\n            <input matInput placeholder=\"Alt Segment\" [(ngModel)]=\"element.ProductTitle\" (keydown.f10)=\"productSelect(element)\" (ngModelChange)=\"onModelChange(element,'ProductTitle')\"\n              id=\"ProductTitle-{{rindex}}\" (keydown)=\"keydown($event,'ProductTitle',rindex)\" class=\"table-input\">\n            <button mat-icon-button matSuffix color=\"basic\" (click)=\"productSelect(element)\">\n              <mat-icon aria-label=\"Search\">search</mat-icon>\n            </button>\n          </mat-form-field>\n        </cdk-cell>\n      </ng-container>\n\n      <ng-container cdkColumnDef=\"Region\">\n        <cdk-header-cell *cdkHeaderCellDef class=\"table-header-cell\"> Bölge </cdk-header-cell>\n        <cdk-cell *cdkCellDef=\"let element;let rindex=index\" class=\"table-cell\">\n          <mat-form-field>\n            <mat-select placeholder=\"Bölge\" disableRipple [(ngModel)]=\"element.Region\" (ngModelChange)=\"onModelChange(element,'Region')\"\n              class=\"table-select\">\n              <mat-option *ngFor=\"let item of region\" [value]=\"item\">\n                {{item}}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n        </cdk-cell>\n      </ng-container>\n\n\n\n      <ng-container cdkColumnDef=\"VariantTitle\">\n        <cdk-header-cell *cdkHeaderCellDef class=\"table-header-cell\"> Çeşit </cdk-header-cell>\n        <cdk-cell *cdkCellDef=\"let element;let rindex=index\" class=\"table-cell\">\n          <mat-form-field>\n            <input matInput placeholder=\"Çeşit\" [(ngModel)]=\"element.VariantTitle\" (keydown.f10)=\"variantSelect(element)\" (ngModelChange)=\"onModelChange(element,'VariantTitle')\"\n              id=\"VarianTitle-{{rindex}}\" (keydown)=\"keydown($event,'VarianTitle',rindex)\" class=\"table-input\">\n            <button mat-icon-button matSuffix color=\"basic\" (click)=\"variantSelect(element)\">\n              <mat-icon aria-label=\"Search\">search</mat-icon>\n            </button>\n          </mat-form-field>\n        </cdk-cell>\n      </ng-container>\n\n      <ng-container cdkColumnDef=\"ENumber\">\n        <cdk-header-cell *cdkHeaderCellDef class=\"table-header-cell\">\n          E-Numarası\n        </cdk-header-cell>\n        <cdk-cell *cdkCellDef=\"let element;let rindex=index\" class=\"table-cell\">\n          <mat-form-field>\n            <input matInput type=\"text\" [(ngModel)]=\"element.ENumber\" placeholder=\"e-numarası\" (ngModelChange)=\"onModelChange(element,'ENumber')\"\n              id=\"ENumber-{{rindex}}\" (keydown)=\"keydown($event,'ENumber',rindex)\" class=\"table-input\">\n          </mat-form-field>\n        </cdk-cell>\n      </ng-container>\n\n      <ng-container cdkColumnDef=\"AGCode\">\n        <cdk-header-cell *cdkHeaderCellDef class=\"table-header-cell\"> AG Kodu </cdk-header-cell>\n        <cdk-cell *cdkCellDef=\"let element;let rindex=index\" class=\"table-cell\">\n          <mat-form-field>\n            <input matInput type=\"text\" [(ngModel)]=\"element.AGCode\" placeholder=\"AG Kodu\" (ngModelChange)=\"onModelChange(element,'AGCode')\"\n              id=\"AGCode-{{rindex}}\" (keydown)=\"keydown($event,'AGCode',rindex)\" class=\"table-input\">\n          </mat-form-field>\n        </cdk-cell>\n      </ng-container>\n\n      <ng-container cdkColumnDef=\"LotNo\">\n        <cdk-header-cell *cdkHeaderCellDef class=\"table-header-cell\"> Lot No </cdk-header-cell>\n        <cdk-cell *cdkCellDef=\"let element;let rindex=index\" class=\"table-cell\">\n          <mat-form-field>\n            <input matInput type=\"text\" [(ngModel)]=\"element.LotNo\" placeholder=\"Lot No\" (ngModelChange)=\"onModelChange(element,'LotNo')\"\n              id=\"LotNo-{{rindex}}\" (keydown)=\"keydown($event,'LotNo',rindex)\" class=\"table-input\">\n          </mat-form-field>\n        </cdk-cell>\n      </ng-container>\n\n      <ng-container cdkColumnDef=\"Pack\">\n        <cdk-header-cell *cdkHeaderCellDef class=\"table-header-cell\"> Ambalaj </cdk-header-cell>\n        <cdk-cell *cdkCellDef=\"let element;let rindex=index\" class=\"table-cell\">\n          <mat-form-field>\n            <input matInput type=\"text\" [textMask]=\"{mask: numberMask}\" [(ngModel)]=\"element.Pack\" placeholder=\"Ambalaj\" (ngModelChange)=\"onModelChange(element,'Pack')\"\n              id=\"Pack-{{rindex}}\" (keydown)=\"keydown($event,'Pack',rindex)\" class=\"table-input\">\n          </mat-form-field>\n        </cdk-cell>\n      </ng-container>\n\n      <ng-container cdkColumnDef=\"Amount\">\n        <cdk-header-cell *cdkHeaderCellDef class=\"table-header-cell\"> Miktar </cdk-header-cell>\n        <cdk-cell *cdkCellDef=\"let element;let rindex=index\" class=\"table-cell\">\n          <mat-form-field>\n            <input matInput type=\"text\" [textMask]=\"{mask: numberMask}\" [(ngModel)]=\"element.Amount\" placeholder=\"Miktar\" (ngModelChange)=\"onModelChange(element,'Amount')\"\n              id=\"Amount-{{rindex}}\" (keydown)=\"keydown($event,'Amount',rindex)\" class=\"table-input\">\n          </mat-form-field>\n        </cdk-cell>\n      </ng-container>\n\n      <ng-container cdkColumnDef=\"MainUnit\">\n        <cdk-header-cell *cdkHeaderCellDef class=\"table-header-cell\"> Ana Birim </cdk-header-cell>\n        <cdk-cell *cdkCellDef=\"let element;let rindex=index\" class=\"table-cell\">\n          <mat-form-field>\n            <input matInput id=\"MainUnit-{{rindex}}\" type=\"text\" [(ngModel)]=\"element.MainUnit\" readonly=true (keydown)=\"keydown($event,'MainUnit',rindex)\"\n              class=\"table-input\" />\n          </mat-form-field>\n        </cdk-cell>\n      </ng-container>\n\n      <ng-container cdkColumnDef=\"SecondUnit\">\n        <cdk-header-cell *cdkHeaderCellDef class=\"table-header-cell\"> İkinci Birim </cdk-header-cell>\n        <cdk-cell *cdkCellDef=\"let element;let rindex=index\" class=\"table-cell\">\n            <mat-form-field>\n              <input matInput id=\"SecondUnit-{{rindex}}\" type=\"text\" [(ngModel)]=\"element.SecondUnit\" readonly=true (keydown)=\"keydown($event,'SecondUnit',rindex)\"\n                class=\"table-input\" />\n            </mat-form-field>\n        </cdk-cell>\n      </ng-container>\n\n      <ng-container cdkColumnDef=\"TotalAmount\">\n        <cdk-header-cell *cdkHeaderCellDef class=\"table-header-cell\"> Toplam Miktar </cdk-header-cell>\n        <cdk-cell *cdkCellDef=\"let element;let rindex=index\" class=\"table-cell\">\n            <mat-form-field>\n              <input matInput id=\"TotalAmount-{{rindex}}\" type=\"text\" [(ngModel)]=\"element.TotalAmount\" readonly=true (keydown)=\"keydown($event,'TotalAmount',rindex)\"\n                class=\"table-input\" />\n            </mat-form-field>\n        </cdk-cell>\n      </ng-container>\n\n      <ng-container cdkColumnDef=\"Producer\">\n        <cdk-header-cell *cdkHeaderCellDef class=\"table-header-cell\"> Üretici </cdk-header-cell>\n        <cdk-cell *cdkCellDef=\"let element;let rindex=index\" class=\"table-cell\">\n          <mat-form-field>\n            <input matInput type=\"text\" [(ngModel)]=\"element.Producer\" placeholder=\"Üretici\" (ngModelChange)=\"onModelChange(element,'Producer')\"\n              id=\"Producer-{{rindex}}\" (keydown)=\"keydown($event,'Producer',rindex)\" class=\"table-input\">\n          </mat-form-field>\n        </cdk-cell>\n      </ng-container>\n\n      <ng-container cdkColumnDef=\"ShipmentNumber\">\n        <cdk-header-cell *cdkHeaderCellDef class=\"table-header-cell\"> Kargo No </cdk-header-cell>\n        <cdk-cell *cdkCellDef=\"let element;let rindex=index\" class=\"table-cell\">\n          <mat-form-field>\n            <input matInput type=\"text\" [(ngModel)]=\"element.ShipmentNumber\" placeholder=\"Kargo No\" (ngModelChange)=\"onModelChange(element,'ShipmentNumber')\"\n              id=\"ShipmentNumber-{{rindex}}\" (keydown)=\"keydown($event,'ShipmentNumber',rindex)\" class=\"table-input\">\n          </mat-form-field>\n        </cdk-cell>\n      </ng-container>\n\n      <ng-container cdkColumnDef=\"Responsible\">\n        <cdk-header-cell *cdkHeaderCellDef class=\"table-header-cell\"> Verilen Kişi </cdk-header-cell>\n        <cdk-cell *cdkCellDef=\"let element\" class=\"table-cell\">\n          <mat-form-field>\n            <mat-select placeholder=\"Sorumlu\" [(ngModel)]=\"element.Responsible\" (ngModelChange)=\"onModelChange(element,'Responsible')\"\n              class=\"table-select\">\n              <mat-select-trigger>\n                <span>\n                  {{element.Responsible}}\n                </span>\n              </mat-select-trigger>\n              <mat-option *ngFor=\"let item of persons\" [value]=\"item.Code\">\n                {{item.FirstName}} {{item.LastName}}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n        </cdk-cell>\n      </ng-container>\n\n      <ng-container cdkColumnDef=\"Date\">\n        <cdk-header-cell *cdkHeaderCellDef class=\"table-header-cell\"> Tarih </cdk-header-cell>\n        <cdk-cell *cdkCellDef=\"let element;let rindex=index\" class=\"table-cell\">\n          <mat-form-field>\n            <input matInput type=\"text\" [matDatepicker]=\"dp\" [(ngModel)]=\"element.Date\" (ngModelChange)=\"onModelChange(element,'Date')\"\n              id=\"Date-{{rindex}}\" (keydown)=\"keydown($event,'Date',rindex)\" class=\"table-input\">\n            <mat-datepicker-toggle matSuffix [for]=\"dp\"></mat-datepicker-toggle>\n            <mat-datepicker #dp></mat-datepicker>\n          </mat-form-field>\n        </cdk-cell>\n      </ng-container>\n\n      <ng-container cdkColumnDef=\"Deliverer\">\n        <cdk-header-cell *cdkHeaderCellDef class=\"table-header-cell\"> Tohumu Veren </cdk-header-cell>\n        <cdk-cell *cdkCellDef=\"let element\" class=\"table-cell\">\n          <mat-form-field>\n            <mat-select placeholder=\"Temsilci\" disableRipple [(ngModel)]=\"element.Deliverer\" (ngModelChange)=\"onModelChange(element,'Deliverer')\"\n              class=\"table-select\">\n              <mat-select-trigger>\n                <span>\n                  {{element.Deliverer}}\n                </span>\n              </mat-select-trigger>\n              <mat-option *ngFor=\"let item of persons\" [value]=\"item.Code\">\n                {{item.FirstName}} {{item.LastName}}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n        </cdk-cell>\n      </ng-container>\n\n      <ng-container cdkColumnDef=\"Address\">\n        <cdk-header-cell *cdkHeaderCellDef class=\"table-header-cell\"> Adres / Tel </cdk-header-cell>\n        <cdk-cell *cdkCellDef=\"let element;let rindex=index\" class=\"table-cell\">\n          <mat-form-field>\n            <textarea matAutosizeMinRows=\"2\" matAutosizeMaxRows=\"5\" matInput type=\"text\" [(ngModel)]=\"element.Address\" placeholder=\"Adres / Tel\"\n              (ngModelChange)=\"onModelChange(element,'Address')\" id=\"Address-{{rindex}}\" (keydown)=\"keydown($event,'Address',rindex)\"\n              class=\"table-input\"></textarea>\n          </mat-form-field>\n        </cdk-cell>\n      </ng-container>\n\n      <ng-container cdkColumnDef=\"Notes\">\n        <cdk-header-cell *cdkHeaderCellDef class=\"table-header-cell\"> Notlar </cdk-header-cell>\n        <cdk-cell *cdkCellDef=\"let element;let rindex=index\" class=\"table-cell\">\n          <mat-form-field>\n            <textarea textarea matAutosizeMinRows=\"2\" matAutosizeMaxRows=\"5\" matInput type=\"text\" [(ngModel)]=\"element.Notes\" placeholder=\"Notlar\"\n              (ngModelChange)=\"onModelChange(element,'Notes')\" id=\"Notes-{{rindex}}\" (keydown)=\"keydown($event,'Notes',rindex)\"\n              class=\"table-input\"></textarea>\n          </mat-form-field>\n        </cdk-cell>\n      </ng-container>\n\n      <cdk-header-row *cdkHeaderRowDef=\"displayedColumns\" class=\"table-header-row\"></cdk-header-row>\n      <cdk-row *cdkRowDef=\"let row;let rindex=index; columns: displayedColumns;\" [ngClass]=\"{'highlight': selectedRowIndex == row._id}\"\n        class=\"table-row\" (click)=\"rowClick(row,rindex)\"></cdk-row>\n    </cdk-table>\n\n  </mat-card-content>\n</mat-card>"

/***/ }),

/***/ "../../../../../src/app/seed.input/seed.input.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  overflow: hidden;\n  margin: 1px 0;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n\n.left {\n  padding-left: 1em; }\n\n.right {\n  padding-right: 1em; }\n\n.table-input,\n.table-select {\n  border: none; }\n\n.table-input:hover,\n.table-select:hover,\n.table-input:focus,\n.table-select:focus {\n  border: 1px inset lightblue;\n  border-radius: 5px; }\n\n.container {\n  display: block;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  min-width: 300px; }\n\ncdk-table {\n  display: block;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  min-width: 300px;\n  width: 100%;\n  max-height: calc(100vh - 220px);\n  height: 100%;\n  overflow: auto;\n  border-bottom: 1px solid #7c7c7c; }\n\n.table-header-row, .table-row {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 32px;\n  padding: 1px 8px; }\n\n.table-cell, .table-header-cell {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  padding-left: 1px;\n  padding-right: 1px; }\n\n.cdk-header-cell {\n  font-size: 10px;\n  font-weight: lighter; }\n\n.cdk-cell {\n  font-size: 11px; }\n\n.cdk-column-Action,\n.cdk-column-TrCode {\n  min-width: 30px;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start; }\n\n.cdk-column-BoxNo {\n  min-width: 50px;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start; }\n\n.cdk-column-CategoryTitle {\n  min-width: 120px;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start; }\n\n.cdk-column-ProductTitle,\n.cdk-column-VariantTitle {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  min-width: 120px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row; }\n\n.cdk-column-Region {\n  min-width: 80px; }\n\n.cdk-column-Region .mat-select-value-text {\n    white-space: pre-wrap !important;\n    overflow: hidden;\n    text-overflow: ellipsis; }\n\n.cdk-column-ENumber,\n.cdk-column-AGCode,\n.cdk-column-LotNo,\n.cdk-column-Producer,\n.cdk-column-ShipmentNumber {\n  min-width: 80px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row; }\n\n.cdk-column-TotalAmount,\n.cdk-column-Amount,\n.cdk-column-Pack,\n.cdk-column-MainUnit,\n.cdk-column-SecondUnit,\n.cdk-column-Responsible, .cdk-column-Deliverer {\n  min-width: 50px;\n  text-align: right; }\n\n.cdk-column-Address, .cdk-column-Notes {\n  min-width: 200px; }\n\n.cdk-column-Date {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  min-width: 100px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row; }\n\n.table-header-cell {\n  text-align: left; }\n\n.mat-chip {\n  font-size: 11px;\n  line-height: 15px;\n  margin-bottom: 2px; }\n\nmat-form-field {\n  width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/seed.input/seed.input.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SeedInputComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material_moment_adapter__ = __webpack_require__("../../../material-moment-adapter/esm5/material-moment-adapter.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material_core__ = __webpack_require__("../../../material/esm5/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_text_mask_addons_dist_createNumberMask__ = __webpack_require__("../../../../text-mask-addons/dist/createNumberMask.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_text_mask_addons_dist_createNumberMask___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_text_mask_addons_dist_createNumberMask__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_text_mask_addons_dist_createAutoCorrectedDatePipe__ = __webpack_require__("../../../../text-mask-addons/dist/createAutoCorrectedDatePipe.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_text_mask_addons_dist_createAutoCorrectedDatePipe___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_text_mask_addons_dist_createAutoCorrectedDatePipe__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services__ = __webpack_require__("../../../../../src/app/_services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__models__ = __webpack_require__("../../../../../src/app/_models/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__helpers_datasource__ = __webpack_require__("../../../../../src/app/_helpers/datasource.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__directives__ = __webpack_require__("../../../../../src/app/_directives/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var SeedInputComponent = /** @class */ (function () {
    function SeedInputComponent(seedInputService, seedModelService, personService, enumsMock, dialog, renderer, snackBar) {
        var _this = this;
        this.seedInputService = seedInputService;
        this.seedModelService = seedModelService;
        this.personService = personService;
        this.enumsMock = enumsMock;
        this.dialog = dialog;
        this.renderer = renderer;
        this.snackBar = snackBar;
        this.seedInputs = [];
        this.seedInputModel = new __WEBPACK_IMPORTED_MODULE_9__models__["m" /* SeedInputModel */]();
        this.seedModel = new __WEBPACK_IMPORTED_MODULE_9__models__["n" /* SeedModel */]();
        this.seeds = [];
        this.persons = [];
        this.productDetailModel = new __WEBPACK_IMPORTED_MODULE_9__models__["j" /* ProductDetail */]();
        this.trCode = "0";
        this.chipColor = "primary";
        this.numberMask = __WEBPACK_IMPORTED_MODULE_5_text_mask_addons_dist_createNumberMask___default()({
            prefix: '',
            suffix: '',
            integerLimit: 6,
            includeThousandsSeparator: false
        });
        this.autoCorrectedDatePipe = __WEBPACK_IMPORTED_MODULE_6_text_mask_addons_dist_createAutoCorrectedDatePipe___default()('dd.mm.yyyy');
        this.dateMask = [/\d/, /\d/, '.', /\d/, /\d/, '.', /\d/, /\d/, /\d/, /\d/];
        this.displayedColumns = ['Action', 'TrCode', 'BoxNo', 'CategoryTitle', 'ProductTitle', 'Region', 'VariantTitle',
            'ENumber', 'AGCode', 'LotNo', 'Pack', 'MainUnit', 'Amount', 'SecondUnit', 'TotalAmount',
            'Producer', 'ShipmentNumber', 'Responsible', 'Date', 'Deliverer', 'Address', 'Notes'];
        this.status = [];
        this.region = [];
        this.trialSeason = [];
        this.categoryFormControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]();
        this.selectedRowIndex = "";
        this.seedModelService.url = __WEBPACK_IMPORTED_MODULE_8__environments_environment__["a" /* environment */].URLRestFullApi + "/seed";
        this.seedModelService.getAll()
            .subscribe(function (response) {
            _this.seeds = response;
        }, function (error) {
            console.log(error);
        });
    }
    SeedInputComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.status = this.enumsMock.getStatus();
        this.region = this.enumsMock.getRegion();
        this.personService.url = __WEBPACK_IMPORTED_MODULE_8__environments_environment__["a" /* environment */].URLRestFullApi + "/persons";
        this.personService.getAll()
            .subscribe(function (response) {
            _this.persons = response;
        });
    };
    SeedInputComponent.prototype.onValChange = function (value) {
        this.chipColor = value == "0" ? "primary" : "warn";
        console.log(this.chipColor);
    };
    SeedInputComponent.prototype.ngOnDestroy = function () {
        // alert("bye bye")
    };
    SeedInputComponent.prototype.selectedSeed = function (selected) {
        var _this = this;
        this.seedModel = selected;
        this.products = this.seedModel.ProductDetail.filter(function (pd) { return pd.IsActive && !pd.IsDeleted; });
        var trcode = this.trCode == "0" ? "G" : "Ç";
        this.seedInputService.url = __WEBPACK_IMPORTED_MODULE_8__environments_environment__["a" /* environment */].URLRestFullApi + "/seedinput/" + this.seedModel._id + "/" + trcode;
        this.seedInputService.getAll()
            .subscribe(function (response) {
            _this.seedInputs = response;
            if (_this.seedInputs.length == 0) {
                var trial = new __WEBPACK_IMPORTED_MODULE_9__models__["m" /* SeedInputModel */]();
                trial.CategoryId = _this.seedModel._id;
                trial.CategoryTitle = _this.seedModel.Title;
                trial.TrCode = trcode;
                _this.seedInputs.push(trial);
            }
            _this.seedInputDataSource = new __WEBPACK_IMPORTED_MODULE_10__helpers_datasource__["a" /* GenericDataSource */](_this.seedInputs);
        }, function (error) {
            console.log(error);
        });
    };
    SeedInputComponent.prototype.rowClick = function (row, index) {
        this.selectedRowIndex = row._id;
        if (index == this.seedInputDataSource.data().slice().length - 1) {
            var newRow = new __WEBPACK_IMPORTED_MODULE_9__models__["m" /* SeedInputModel */]();
            newRow.CategoryId = this.seedModel._id;
            newRow.TrCode = this.trCode == "0" ? "G" : "Ç";
            newRow.CategoryTitle = this.seedModel.Title;
            newRow.ProductId = "";
            newRow.ProductTitle = "";
            this.seedInputs.push(newRow);
            this.seedInputDataSource.update(this.seedInputs);
        }
    };
    SeedInputComponent.prototype.keydown = function (event, tag, index) {
        if (event.key == 'ArrowDown') {
            if (this.seedInputs.length - 1 > index) {
                if (tag == 'Region') {
                    console.log(event);
                }
                var element = '#' + tag + '-' + (index + 1);
                var onElement = this.renderer.selectRootElement(element);
                onElement.focus();
                this.rowClick(this.seedInputs[index + 1], index + 1);
            }
        }
        if (event.key == 'ArrowUp') {
            if (index > 0) {
                var element = '#' + tag + '-' + (index - 1);
                var onElement = this.renderer.selectRootElement(element);
                onElement.focus();
                this.rowClick(this.seedInputs[index - 1], index - 1);
            }
        }
    };
    SeedInputComponent.prototype.productSelect = function (element) {
        var _this = this;
        if (element.ProductTitle == undefined || element.ProductTitle.length == 0)
            element.ProductTitle = '';
        var data = {
            rows: this.products,
            columns: [
                { name: 'Cins', prop: 'Title' }
            ],
            filterText: 'Filtre edeceğiniz alt segment adını giriniz...'
        };
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_11__directives__["d" /* SeedInputDialogComponent */], { data: data, hasBackdrop: false, autoFocus: true });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result == undefined)
                return;
            element.ProductId = result._id;
            element.ProductTitle = result.Title;
            _this.productDetailModel = result;
            element.Variants = _this.productDetailModel.Variant;
            element.VariantId = "";
            element.VariantTitle = "";
            element.MainUnit = "";
            element.SecondUnit = "";
            element.Pack = 0;
            element.ConvFact2 = 0;
            element.ENumber = "";
            element.AGCode = "";
        }, function (error) {
            console.log(error);
        });
    };
    SeedInputComponent.prototype.variantSelect = function (element) {
        var _this = this;
        console.log(element.Variants);
        if (element.Variants == undefined) {
            if (element.ProductTitle.length == 0)
                return;
            element.Variants = this.seeds.find(function (s) { return s._id == element.CategoryId; }).ProductDetail.find(function (p) { return p._id == element.ProductId; }).Variant;
        }
        if (element.VariantTitle == undefined || element.ProductTitle.length == 0)
            element.VariantTitle = '';
        var data = {
            rows: element.Variants,
            columns: [
                { name: 'Cins', prop: 'Title' }
            ],
            filterText: 'Filtre edeceğiniz cins adını giriniz...'
        };
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_11__directives__["d" /* SeedInputDialogComponent */], { data: data, hasBackdrop: false, autoFocus: true });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result == undefined)
                return;
            element.VariantId = result._id;
            element.VariantTitle = result.Title;
            element.MainUnit = result.MainUnit;
            element.SecondUnit = result.SecondUnit;
            element.Pack = result.ConvFact1;
            element.ConvFact2 = result.ConvFact2;
            element.ENumber = result.ENumber;
            element.AGCode = result.AGCode;
            _this.trialSeason = result.Season;
            _this.onModelChange(element, 'Category');
        }, function (error) {
            console.log(error);
        });
    };
    SeedInputComponent.prototype.onModelChange = function (element, tag) {
        if (tag == 'Pack' || tag == 'Amount') {
            console.log(tag, Number(element.Amount));
            element.TotalAmount = element.Amount * element.Pack;
        }
        if (this.validateRow(element)) {
            if (element._id == undefined) {
                this.seedInputService.url = __WEBPACK_IMPORTED_MODULE_8__environments_environment__["a" /* environment */].URLRestFullApi + "/seedinput";
                this.seedInputService.insert(element)
                    .subscribe(function (response) {
                    console.log("SeedInput insert", response);
                    element._id = response._id;
                });
            }
            else {
                this.seedInputService.url = __WEBPACK_IMPORTED_MODULE_8__environments_environment__["a" /* environment */].URLRestFullApi + "/seedinput";
                this.seedInputService.update(element)
                    .subscribe(function (response) {
                    console.log("SeedInput insert", response);
                });
            }
        }
    };
    SeedInputComponent.prototype.validateRow = function (element) {
        if (element.CategoryId != undefined && element.ProductId != undefined && element.Pack > 0 && element.Amount > 0)
            return true;
        else
            return false;
    };
    SeedInputComponent.prototype.deleteItem = function (index, data) {
        var _this = this;
        var deleteData = { "Title": data.CategoryTitle + ' - ' + data.ProductTitle + ' - ' + data.VariantTitle, "Message": "Dikkat Kayıt silinecektir!!!", "Type": __WEBPACK_IMPORTED_MODULE_11__directives__["c" /* ConfirmType */].Delete };
        var type = __WEBPACK_IMPORTED_MODULE_11__directives__["c" /* ConfirmType */].Delete;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_11__directives__["a" /* ConfirmDialogComponent */], { data: deleteData });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log(result);
            if (result == "1") {
                _this.seedInputService.url = __WEBPACK_IMPORTED_MODULE_8__environments_environment__["a" /* environment */].URLRestFullApi + "/seedinput/" + data._id;
                _this.seedInputService.delete()
                    .subscribe(function (result) {
                    _this.snackBar.open('Kayıt Silindi...', '', { duration: 3000, });
                    _this.seedInputs.splice(index, 1);
                    _this.seedInputDataSource.update(_this.seedInputs);
                });
            }
        });
    };
    SeedInputComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-seedinput',
            template: __webpack_require__("../../../../../src/app/seed.input/seed.input.component.html"),
            styles: [__webpack_require__("../../../../../src/app/seed.input/seed.input.component.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_7__services__["c" /* GenericService */], __WEBPACK_IMPORTED_MODULE_7__services__["b" /* EnumsMock */],
                { provide: __WEBPACK_IMPORTED_MODULE_4__angular_material_core__["g" /* MAT_DATE_LOCALE */], useValue: 'tr-TR' },
                { provide: __WEBPACK_IMPORTED_MODULE_4__angular_material_core__["c" /* DateAdapter */], useClass: __WEBPACK_IMPORTED_MODULE_3__angular_material_moment_adapter__["c" /* MomentDateAdapter */], deps: [__WEBPACK_IMPORTED_MODULE_4__angular_material_core__["g" /* MAT_DATE_LOCALE */]] },
                { provide: __WEBPACK_IMPORTED_MODULE_4__angular_material_core__["f" /* MAT_DATE_FORMATS */], useValue: __WEBPACK_IMPORTED_MODULE_3__angular_material_moment_adapter__["a" /* MAT_MOMENT_DATE_FORMATS */] }],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__services__["c" /* GenericService */],
            __WEBPACK_IMPORTED_MODULE_7__services__["c" /* GenericService */],
            __WEBPACK_IMPORTED_MODULE_7__services__["c" /* GenericService */],
            __WEBPACK_IMPORTED_MODULE_7__services__["b" /* EnumsMock */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["m" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["G" /* MatSnackBar */]])
    ], SeedInputComponent);
    return SeedInputComponent;
}());



/***/ }),

/***/ "../../../../../src/app/seed.observation/seed.observation.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <div *ngIf=\"seeds!=undefined\" fxLayout=\"row\" fxLayoutGap=\"20px\">\n\n    <mat-form-field>\n      <input matInput type=\"text\" placeholder=\"Ürün\" aria-label=\"category\" [(ngModel)]=\"seed.Title\">\n      <button mat-icon-button matSuffix color=\"basic\" (click)=\"categorySelect()\">\n        <mat-icon aria-label=\"Search\">search</mat-icon>\n      </button>\n    </mat-form-field>\n    <mat-form-field>\n      <input matInput type=\"text\" placeholder=\"Alt Segment\" aria-label=\"product\" [(ngModel)]=\"product.Title\">\n      <button mat-icon-button matSuffix  color=\"basic\" (click)=\"productSelect()\">\n        <mat-icon aria-label=\"Search\">search</mat-icon>\n      </button>\n    </mat-form-field>\n    <mat-form-field>\n      <input matInput type=\"text\" placeholder=\"Çeşit\" aria-label=\"variant\" [(ngModel)]=\"variant.Title\">\n      <button mat-icon-button matSuffix color=\"basic\" (click)=\"variantSelect()\">\n        <mat-icon aria-label=\"Search\">search</mat-icon>\n      </button>\n    </mat-form-field>\n    <mat-form-field>\n      <mat-select placeholder=\"Bölge\" [(ngModel)]=\"region\">\n        <mat-option *ngFor=\"let option of regions\" [value]=\"option\">\n          {{option}}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n    <mat-form-field>\n      <mat-select placeholder=\"Düzenleyen\" [(ngModel)]=\"person._id\">\n        <mat-option *ngFor=\"let option of persons\" [value]=\"option._id\">\n          {{option.FirstName}} {{option.LastName}}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n    <mat-form-field>\n      <mat-select placeholder=\"Üretici\" [(ngModel)]=\"grower._id\">\n        <mat-option *ngFor=\"let option of growers\" [value]=\"option._id\">\n          {{option.FirstName}} {{option.LastName}}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n  </div>\n\n  <mat-grid-list cols=\"24\" rowHeight=\"90px\" *ngIf=\"formFields!=undefined\">\n    <mat-grid-tile [colspan]=\"field.Type==='Slide-Toggle'||field.Type==='CheckBox'?1:field.Type==='TextArea'?4:field.Type==='Text'?3:2\" *ngFor=\"let field of formFields; let rindex= index \">\n      <mat-grid-tile-header style=\"font-size:12px\">{{field.Caption}} </mat-grid-tile-header>\n      <generic-field [fieldInfo]=\"field\" [row]=\"rindex\" [col]=\"form\" style=\"font-size:12px;width: 98%\" (valueChange)=\"onFormChange($event,'form',rindex)\" ></generic-field>\n    </mat-grid-tile>\n  </mat-grid-list>\n\n  <div *ngIf=\"fields!=undefined\" class=\"table-container mat-elevation-z8\">\n\n    <cdk-table #table [dataSource]=\"dataSource\">\n        <ng-container cdkColumnDef=\"Action\">\n            <cdk-header-cell *cdkHeaderCellDef>Sil</cdk-header-cell>\n            <cdk-cell *cdkCellDef=\"let row;let rindex=index\">\n              <button mat-icon-button (click)=\"deleteItem(rindex)\" tabindex=\"-1\">\n                <mat-icon aria-label=\"Delete\" color=\"warn\">delete</mat-icon>\n              </button>\n            </cdk-cell>\n          </ng-container>\n      <ng-container *ngFor=\"let column of columns; let colIndex = index\" [cdkColumnDef]=\"column.columnDef\">\n        <cdk-header-cell *cdkHeaderCellDef class=\"table-header-cell\">{{ column.header }}</cdk-header-cell>\n        <cdk-cell *cdkCellDef=\"let row;let rowIndex=index\" class=\"table-cell\">\n          <generic-field [row]=\"rowIndex\" [col]=\"colIndex\" [fieldInfo]=\"row[column.columnDef]\" (valueChange)=\"onModelChange($event,colIndex,rowIndex)\"\n            (keypress)=\"keydown($event)\"></generic-field>\n        </cdk-cell>\n      </ng-container>\n      <cdk-header-row *cdkHeaderRowDef=\"displayedColumns\" class=\"table-header-row\"></cdk-header-row>\n      <cdk-row *cdkRowDef=\"let row;let rindex=index; columns: displayedColumns;\"\n        class=\"table-row\" (click)=\"rowClick(row,rindex)\"></cdk-row>\n\n    </cdk-table>\n    <div >\n      <button mat-raised-button (click)=\"save()\" color=\"warn\">Kaydet</button>\n  </div>\n\n\n\n\n  </div>\n</mat-card>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/seed.observation/seed.observation.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "cdk-table {\n  max-height: 450px;\n  display: block;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  min-width: 300px;\n  width: 100%;\n  height: calc(100vh - 30px);\n  overflow: auto;\n  border-bottom: 1px solid #7c7c7c; }\n\n.table-header-row, .table-row {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 32px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 1px 8px; }\n\n.table-cell, .table-header-cell {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  padding-left: 1px;\n  padding-right: 1px; }\n\n.table-header-row {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0; }\n\n.cdk-header-cell {\n  font-size: 11px;\n  font-weight: bolder; }\n\n.cdk-cell {\n  font-size: 12px; }\n\n.mat-grid-tile .mat-grid-tile-header {\n  top: 0;\n  height: 20px; }\n\n.right {\n  padding-right: 1em; }\n\n.cdk-column-Action {\n  min-width: 30px;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/seed.observation/seed.observation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SeedObservationComponent; });
/* unused harmony export tableDataSource */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__directives_generic_field_FieldInfo__ = __webpack_require__("../../../../../src/app/_directives/generic-field/FieldInfo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__directives__ = __webpack_require__("../../../../../src/app/_directives/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services__ = __webpack_require__("../../../../../src/app/_services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models__ = __webpack_require__("../../../../../src/app/_models/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_SeedObservationModel__ = __webpack_require__("../../../../../src/app/_models/SeedObservationModel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_cdk_collections__ = __webpack_require__("../../../cdk/esm5/collections.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { GenericDataSource, DynClass, Utils } from '../_helpers';







var SeedObservationComponent = /** @class */ (function () {
    //@ViewChild(SeedObservationTableComponent) obsTable: SeedObservationTableComponent;
    function SeedObservationComponent(route, gfService, seedModelService, obsHeadService, personService, growerService, observationService, userService, dialog, snackBar, enumsMock, renderer) {
        var _this = this;
        this.route = route;
        this.gfService = gfService;
        this.seedModelService = seedModelService;
        this.obsHeadService = obsHeadService;
        this.personService = personService;
        this.growerService = growerService;
        this.observationService = observationService;
        this.userService = userService;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.enumsMock = enumsMock;
        this.renderer = renderer;
        this.seeds = [];
        this.productDetails = [];
        this.variants = [];
        this.seed = new __WEBPACK_IMPORTED_MODULE_4__models__["n" /* SeedModel */]();
        this.product = new __WEBPACK_IMPORTED_MODULE_4__models__["j" /* ProductDetail */]();
        this.variant = new __WEBPACK_IMPORTED_MODULE_4__models__["p" /* Variant */]();
        this.region = "";
        this.season = "";
        this.person = new __WEBPACK_IMPORTED_MODULE_4__models__["i" /* PersonModel */]();
        this.grower = new __WEBPACK_IMPORTED_MODULE_4__models__["f" /* GrowerModel */]();
        this._dataSubject = new __WEBPACK_IMPORTED_MODULE_8_rxjs__["BehaviorSubject"]([]);
        this.displayedColumns = [];
        this.columns = [];
        this.tableData = new Array();
        this.dynClass = Object();
        this.dynArray = [];
        this.dataSource = new tableDataSource(this._dataSubject);
        this.regions = enumsMock.getRegion();
        this.seasons = enumsMock.getTrialSeason();
        personService.url = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].URLRestFullApi + "/personsByUser/" + localStorage.getItem('username');
        personService.getAll()
            .subscribe(function (response) {
            _this.persons = response;
        });
        growerService.url = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].URLRestFullApi + "/growers";
        growerService.getAll()
            .subscribe(function (response) { return _this.growers = response; });
        obsHeadService.url = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].URLRestFullApi + "/observationheads";
        obsHeadService.getAll()
            .subscribe(function (response) {
            _this.obsHeads = response;
            console.log(_this.obsHeads);
        });
        // this.seedModelService.url = `${environment.URLRestFullApi}/seed`
        // this.seedModelService.getAll()
        //   .subscribe(response => {
        //     this.seeds = response;
        //   })
    }
    SeedObservationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.seedTrial = this.route.params.subscribe(function (params) {
            console.log("Kontrol" + params.CategoryId);
            _this.seedModelService.url = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].URLRestFullApi + "/seed";
            _this.seedModelService.getAll()
                .subscribe(function (response) {
                _this.seeds = response;
                if (params.CategoryId == undefined)
                    return;
                _this.seed = _this.seeds.find(function (s) { return s._id == params.CategoryId; });
                _this.productDetails = _this.seed.ProductDetail;
                _this.product = _this.seed.ProductDetail.find(function (p) { return p._id == params.ProductId; });
                _this.variants = _this.product.Variant;
                _this.variant = _this.product.Variant.find(function (v) { return v._id == params.VariantId; });
                _this.isVariantSelected();
            });
        });
    };
    SeedObservationComponent.prototype.ngOnDestroy = function () {
        this.seedTrial.unsubscribe();
    };
    SeedObservationComponent.prototype.createTable = function () {
        var _this = this;
        this.observationService.url = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].URLRestFullApi + "/observationBySeed/" + this.seed._id + "/" + this.product._id + "/" + this.variant._id;
        this.observationService.getAll()
            .subscribe(function (response) {
            _this.seedObservations = response;
            _this.seedObservation = response[0];
            // this.grower._id=this.seedObservation.GrowerId;
            // this.person._id=this.seedObservation.PersonId;
            // this.region=this.seedObservation.Region;
            if (_this.product.TableObservationHeadId != undefined)
                _this.updateTableData();
            if (_this.product.FormObservationHeadId != undefined)
                _this.updateFormData();
        });
    };
    SeedObservationComponent.prototype.updateFormData = function () {
        var _this = this;
        console.log(this.seedObservation);
        if (this.seedObservation == undefined) {
            this.seedObservation = new __WEBPACK_IMPORTED_MODULE_6__models_SeedObservationModel__["a" /* SeedObservationModel */]();
            this.seedObservation.Form = [];
        }
        this.formFields.forEach(function (f) {
            f.Value = _this.seedObservation.Form[f._id];
        });
    };
    SeedObservationComponent.prototype.updateTableData = function () {
        this.displayedColumns = this.fields.map(function (x) { return x._id; });
        this.displayedColumns.unshift('Action');
        this.columns = this.generateColumns();
        this.tableData = this.generateData();
        this._dataSubject.next(this.tableData);
    };
    SeedObservationComponent.prototype.generateColumns = function () {
        var columnObj;
        var columns = [];
        this.fields.forEach(function (x) {
            columnObj = new function () {
                this.columnDef = x._id;
                this.header = x.Caption;
                this.cell = [];
            };
            columns.push(columnObj);
        });
        return columns;
    };
    SeedObservationComponent.prototype.generateData = function () {
        var _this = this;
        var tableData = new Array();
        var tableRow = Object();
        if (this.seedObservations.length > 0) {
            this.seedObservations[0].ObservationLine.forEach(function (o) {
                _this.fields.forEach(function (f) {
                    tableRow[f._id] = new __WEBPACK_IMPORTED_MODULE_1__directives_generic_field_FieldInfo__["a" /* FieldInfo */](f._id, f.Type, f.Caption, o[f._id], f.Options);
                });
                tableData.push(tableRow);
                tableRow = [];
            });
            this.fields.forEach(function (f) {
                tableRow[f._id] = new __WEBPACK_IMPORTED_MODULE_1__directives_generic_field_FieldInfo__["a" /* FieldInfo */](f._id, f.Type, f.Caption, f.Value, f.Options);
            });
            tableData.push(tableRow);
            tableRow = [];
        }
        else {
            this.fields.forEach(function (f) {
                tableRow[f._id] = new __WEBPACK_IMPORTED_MODULE_1__directives_generic_field_FieldInfo__["a" /* FieldInfo */](f._id, f.Type, f.Caption, f.Value, f.Options);
            });
            tableData.push(tableRow);
            this.seedObservations.push(new __WEBPACK_IMPORTED_MODULE_6__models_SeedObservationModel__["a" /* SeedObservationModel */]());
            this.seedObservations[0].ObservationLine = [[]];
        }
        return tableData;
    };
    SeedObservationComponent.prototype.categorySelect = function () {
        var _this = this;
        var data = {
            rows: this.seeds,
            columns: [
                { name: 'Cins', prop: 'Title' }
            ],
            filterText: 'Filtre edeceğiniz ürün adını giriniz...'
        };
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__directives__["d" /* SeedInputDialogComponent */], { data: data, hasBackdrop: false, autoFocus: true });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result === "-1")
                return;
            _this.seed = result;
            _this.fields = undefined;
            _this.formFields = undefined;
            _this.product = new __WEBPACK_IMPORTED_MODULE_4__models__["j" /* ProductDetail */]();
            _this.variant = new __WEBPACK_IMPORTED_MODULE_4__models__["p" /* Variant */]();
        }, function (error) {
            console.log(error);
        });
    };
    SeedObservationComponent.prototype.productSelect = function () {
        var _this = this;
        if (this.seed._id == undefined)
            return;
        var data = {
            rows: this.seed.ProductDetail,
            columns: [
                { name: 'Cins', prop: 'Title' }
            ],
            filterText: 'Filtre edeceğiniz tür adını giriniz...'
        };
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__directives__["d" /* SeedInputDialogComponent */], { data: data, hasBackdrop: false, autoFocus: true });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result === "-1")
                return;
            _this.product = result;
            _this.fields = undefined;
            _this.formFields = undefined;
            _this.variant = new __WEBPACK_IMPORTED_MODULE_4__models__["p" /* Variant */]();
        }, function (error) {
            console.log(error);
        });
    };
    SeedObservationComponent.prototype.variantSelect = function () {
        var _this = this;
        if (this.product._id == undefined)
            return;
        var data = {
            rows: this.product.Variant,
            columns: [
                { name: 'Cins', prop: 'Title' }
            ],
            filterText: 'Filtre edeceğiniz çeşit adını giriniz...'
        };
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__directives__["d" /* SeedInputDialogComponent */], { data: data, hasBackdrop: false, autoFocus: true });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result === "-1")
                return;
            _this.variant = result;
            console.log(_this.obsHeads);
            console.log(_this.product.TableObservationHeadId);
            _this.isVariantSelected();
        }, function (error) {
            _this.errorMessage(error.message);
        });
    };
    SeedObservationComponent.prototype.isVariantSelected = function () {
        var _this = this;
        if (this.product.TableObservationHeadId != undefined)
            this.fields = this.obsHeads.find(function (x) { return x._id == _this.product.TableObservationHeadId; }).GenericFields;
        if (this.product.FormObservationHeadId != undefined)
            this.formFields = this.obsHeads.find(function (x) { return x._id == _this.product.FormObservationHeadId; }).GenericFields;
        var f = this.obsHeads.find(function (o) { return o._id == _this.product.TableObservationHeadId; });
        this.fields = f.GenericFields;
        this.createTable();
    };
    SeedObservationComponent.prototype.errorMessage = function (message) {
        console.log(message);
        this.snackBar.open(message, '', { duration: 3000, });
    };
    SeedObservationComponent.prototype.onRowChange = function (event) {
        console.log(event);
        var list = this.dataSource.data().slice();
    };
    SeedObservationComponent.prototype.onModelChange = function (event, colIndex, rowIndex) {
        console.log(this.dataSource.data().slice());
    };
    SeedObservationComponent.prototype.onFormChange = function (event, colIndex, rowIndex) {
        console.log(this.formFields);
    };
    SeedObservationComponent.prototype.buttonClick = function () {
    };
    SeedObservationComponent.prototype.rowClick = function (row, index) {
        if (index == this.dataSource.data().slice().length - 1) {
            console.log(row, index);
            var tableRow_1 = Object();
            this.fields.forEach(function (f) {
                tableRow_1[f._id] = new __WEBPACK_IMPORTED_MODULE_1__directives_generic_field_FieldInfo__["a" /* FieldInfo */](f._id, f.Type, f.Caption, f.Value, f.Options);
            });
            this.tableData.push(tableRow_1);
            this._dataSubject.next(this.tableData);
        }
    };
    SeedObservationComponent.prototype.keydown = function (event) {
        console.log(event);
        var index = event.rowIndex;
        var tag = event.tag;
        if (event.event.key == 'ArrowDown') {
            if (this.dataSource.data().slice().length - 1 > index) {
                var element = '#' + tag + '-' + (index + 1);
                var onElement = this.renderer.selectRootElement(element);
                onElement.focus();
                this.rowClick(this.dataSource.data().slice()[index + 1], index + 1);
            }
        }
        if (event.event.key == 'ArrowUp') {
            if (index > 0) {
                var element = '#' + tag + '-' + (index - 1);
                var onElement = this.renderer.selectRootElement(element);
                onElement.focus();
                this.rowClick(this.dataSource.data().slice()[index - 1], index - 1);
            }
        }
    };
    SeedObservationComponent.prototype.save = function () {
        var _this = this;
        var form = Object();
        var line = Object();
        var lines = [];
        if (this.product.FormObservationHeadId != undefined)
            this.formFields.forEach(function (f) {
                if (f.Type == 'Datepicker') {
                    form[f._id] = f.Value;
                }
                else
                    form[f._id] = f.Value;
            });
        var obsline = this.dataSource.data().slice();
        var index = 0;
        obsline.forEach(function (l) {
            if (index < obsline.length - 1) {
                _this.fields.forEach(function (f) {
                    line[f._id] = l[f._id].Value;
                });
                index++;
                lines.push(line);
                line = Object();
            }
        });
        if (this.seedObservation == undefined)
            this.seedObservation = new __WEBPACK_IMPORTED_MODULE_6__models_SeedObservationModel__["a" /* SeedObservationModel */]();
        if (this.product.FormObservationHeadId != undefined)
            this.seedObservation.Form = form;
        this.seedObservation.ObservationLine = lines;
        this.seedObservation.ProductDetailId = this.product._id;
        this.seedObservation.SeedId = this.seed._id;
        this.seedObservation.VariantId = this.variant._id;
        this.seedObservation.PersonId = this.person._id;
        this.seedObservation.Region = this.region;
        this.seedObservation.GrowerId = this.grower._id;
        this.observationService.url = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].URLRestFullApi + "/observation";
        if (this.seedObservation._id == undefined)
            this.observationService.insert(this.seedObservation)
                .subscribe(function (resp) {
                _this.seedObservation = resp;
                _this.snackBar.open('Gözlem kaydı eklendi.', '', { duration: 3000 });
            }, function (error) {
                _this.snackBar.open(error.message, '', { duration: 3000 });
            });
        else
            this.observationService.update(this.seedObservation)
                .subscribe(function (resp) {
                _this.seedObservation = resp;
                _this.snackBar.open('Gözlem kaydı güncellendi.', '', { duration: 3000 });
            }, function (error) {
                _this.snackBar.open(error.message, '', { duration: 3000 });
            });
        ;
    };
    SeedObservationComponent.prototype.deleteItem = function (rindex) {
        this.tableData.splice(rindex, 1);
        this._dataSubject.next(this.tableData);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], SeedObservationComponent.prototype, "CategoryId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], SeedObservationComponent.prototype, "ProductId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], SeedObservationComponent.prototype, "VariantId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], SeedObservationComponent.prototype, "Region", void 0);
    SeedObservationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-seed.observation',
            template: __webpack_require__("../../../../../src/app/seed.observation/seed.observation.component.html"),
            styles: [__webpack_require__("../../../../../src/app/seed.observation/seed.observation.component.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_3__services__["c" /* GenericService */], __WEBPACK_IMPORTED_MODULE_3__services__["b" /* EnumsMock */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_10__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__services__["c" /* GenericService */],
            __WEBPACK_IMPORTED_MODULE_3__services__["c" /* GenericService */],
            __WEBPACK_IMPORTED_MODULE_3__services__["c" /* GenericService */],
            __WEBPACK_IMPORTED_MODULE_3__services__["c" /* GenericService */],
            __WEBPACK_IMPORTED_MODULE_3__services__["c" /* GenericService */],
            __WEBPACK_IMPORTED_MODULE_3__services__["c" /* GenericService */],
            __WEBPACK_IMPORTED_MODULE_3__services__["c" /* GenericService */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["m" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["G" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_3__services__["b" /* EnumsMock */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]])
    ], SeedObservationComponent);
    return SeedObservationComponent;
}());

var tableDataSource = /** @class */ (function (_super) {
    __extends(tableDataSource, _super);
    function tableDataSource(_data) {
        var _this = _super.call(this) || this;
        _this._data = _data;
        return _this;
    }
    tableDataSource.prototype.connect = function () {
        return this._data.asObservable();
    };
    tableDataSource.prototype.data = function () {
        return this._data.value;
    };
    tableDataSource.prototype.update = function (data) {
        this._data.next(data);
    };
    tableDataSource.prototype.disconnect = function () { };
    return tableDataSource;
}(__WEBPACK_IMPORTED_MODULE_9__angular_cdk_collections__["a" /* DataSource */]));



/***/ }),

/***/ "../../../../../src/app/seed.trial/seed.trial.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n  <div class=\"left\">\n    <h3 mat-dialog-title>Yıllık Deneme Planı Girişi</h3>\n  </div>\n</div>\n\n<mat-card class=\"mat-elevation-z8\">\n  <mat-card-header>\n    <mat-chip-list>\n      <mat-chip (click)=\"selectedSeed(chip)\" *ngFor=\"let chip of seeds\" selected=\"true\" color=\"basic\">\n        {{chip.Title}}\n      </mat-chip>\n    </mat-chip-list>\n  </mat-card-header>\n  <mat-card-content>\n    <cdk-table #table [dataSource]=\"seedTrialDataSource\">\n\n      <ng-container cdkColumnDef=\"Action\">\n        <cdk-header-cell *cdkHeaderCellDef>Sil</cdk-header-cell>\n        <cdk-cell *cdkCellDef=\"let element;let rindex=index\">\n          <button mat-icon-button (click)=\"deleteItem(rindex,element)\" tabindex=\"-1\">\n            <mat-icon aria-label=\"Delete\" color=\"warn\">delete</mat-icon>\n          </button>\n        </cdk-cell>\n      </ng-container>\n\n      <ng-container cdkColumnDef=\"CategoryTitle\">\n        <cdk-header-cell *cdkHeaderCellDef class=\"table-header-cell\"> Ana Segment </cdk-header-cell>\n        <cdk-cell *cdkCellDef=\"let element;let rindex=index\" class=\"table-cell\">\n          <mat-form-field>\n            <input matInput id=\"CategoryTitle-{{rindex}}\" placeholder=\"Ana Segment\" type=\"text\" [(ngModel)]=\"element.CategoryTitle\" readonly=true\n              (keydown)=\"keydown($event,'CategoryTitle',rindex)\" class=\"table-input\" />\n          </mat-form-field>\n        </cdk-cell>\n      </ng-container>\n\n      <ng-container cdkColumnDef=\"ProductTitle\">\n        <cdk-header-cell *cdkHeaderCellDef class=\"table-header-cell\">\n          <div>\n            Alt Segment\n            <button mat-icon-button tabindex=\"-1\">\n              <mat-icon aria-label=\"Filter\">filter_list</mat-icon>\n            </button>\n          </div>\n        </cdk-header-cell>\n        <cdk-cell *cdkCellDef=\"let element;let rindex=index\" class=\"table-cell\">\n          <mat-form-field>\n            <input matInput placeholder=\"Alt Segment\" [(ngModel)]=\"element.ProductTitle\" (ngModelChange)=\"onModelChange(element,'ProductTitle')\"\n              id=\"ProductTitle-{{rindex}}\" (keydown)=\"keydown($event,'ProductTitle',rindex)\" class=\"table-input\">\n            <button mat-icon-button matSuffix color=\"basic\" (click)=\"productSelect(element)\">\n              <mat-icon aria-label=\"Search\">search</mat-icon>\n            </button>\n          </mat-form-field>\n        </cdk-cell>\n      </ng-container>\n\n      <ng-container cdkColumnDef=\"VariantTitle\">\n        <cdk-header-cell *cdkHeaderCellDef class=\"table-header-cell\"> Çeşit </cdk-header-cell>\n        <cdk-cell *cdkCellDef=\"let element;let rindex=index\" class=\"table-cell\">\n          <mat-form-field>\n            <input matInput placeholder=\"Çeşit\" [(ngModel)]=\"element.VariantTitle\" (keydown.f10)=\"variantSelect(element)\" (ngModelChange)=\"onModelChange(element,'VariantTitle')\"\n              id=\"VarianTitle-{{rindex}}\" (keydown)=\"keydown($event,'VarianTitle',rindex)\" class=\"table-input\">\n            <button mat-icon-button matSuffix color=\"basic\" (click)=\"variantSelect(element)\">\n              <mat-icon aria-label=\"Search\">search</mat-icon>\n            </button>\n          </mat-form-field>\n        </cdk-cell>\n      </ng-container>\n\n      <ng-container cdkColumnDef=\"ENumber\">\n        <cdk-header-cell *cdkHeaderCellDef class=\"table-header-cell\">\n          E-Numarası\n        </cdk-header-cell>\n        <cdk-cell *cdkCellDef=\"let element;let rindex=index\" class=\"table-cell\">\n          <mat-form-field>\n            <input matInput type=\"text\" [(ngModel)]=\"element.ENumber\" placeholder=\"e-numarası\" (ngModelChange)=\"onModelChange(element,'ENumber')\"\n              id=\"ENumber-{{rindex}}\" (keydown)=\"keydown($event,'ENumber',rindex)\" class=\"table-input\">\n          </mat-form-field>\n        </cdk-cell>\n      </ng-container>\n\n      <ng-container cdkColumnDef=\"AGCode\">\n        <cdk-header-cell *cdkHeaderCellDef class=\"table-header-cell\"> AG Kodu </cdk-header-cell>\n        <cdk-cell *cdkCellDef=\"let element;let rindex=index\" class=\"table-cell\">\n          <mat-form-field>\n            <input matInput type=\"text\" [(ngModel)]=\"element.AGCode\" placeholder=\"AG Kodu\" (ngModelChange)=\"onModelChange(element,'AGCode')\"\n              id=\"AGCode-{{rindex}}\" (keydown)=\"keydown($event,'AGCode',rindex)\" class=\"table-input\">\n          </mat-form-field>\n        </cdk-cell>\n      </ng-container>\n\n      <ng-container cdkColumnDef=\"Status\" flexLayout=\"column\">\n        <cdk-header-cell *cdkHeaderCellDef fxFlex> Statüsü </cdk-header-cell>\n        <cdk-cell *cdkCellDef=\"let element\" fxFlex>\n          <mat-form-field>\n            <mat-select placeholder=\"Statüsü\" disableRipple [(ngModel)]=\"element.Status\" class=\"table-select\" \n              (ngModelChange)=\"onModelChange(element,'Status')\">\n              <mat-option *ngFor=\"let item of status\" [value]=\"item\">\n                {{item}}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n        </cdk-cell>\n      </ng-container>\n\n      <ng-container cdkColumnDef=\"TrialSeason\" flexLayout=\"column\">\n        <cdk-header-cell *cdkHeaderCellDef fxFlex> Sezon </cdk-header-cell>\n        <cdk-cell *cdkCellDef=\"let element;let rindex=index\">\n          <mat-form-field>\n            <input matInput placeholder=\"Sezon\" [(ngModel)]=\"element.TrialSeason\" (keydown.f10)=\"trialSeasonSelect(element)\" \n              (ngModelChange)=\"onModelChange(element,'TrialSeason')\"\n              id=\"TrialSeason-{{rindex}}\" (keydown)=\"keydown($event,'TrialSeason',rindex)\" class=\"table-input\">\n            <button mat-icon-button matSuffix color=\"basic\" (click)=\"trialSeasonSelect(element)\">\n              <mat-icon aria-label=\"Search\">search</mat-icon>\n            </button>\n          </mat-form-field>\n        </cdk-cell>\n      </ng-container>\n      <ng-container cdkColumnDef=\"TrialYear\" flexLayout=\"column\">\n        <cdk-header-cell *cdkHeaderCellDef fxFlex> Deneneceği Yıl </cdk-header-cell>\n        <cdk-cell *cdkCellDef=\"let element;let rindex=index\" fxFlex>\n          <mat-form-field>\n            <input matInput [textMask]=\"{mask: trialYearMask}\" type=\"text\" [(ngModel)]=\"element.TrialYear\" placeholder=\"Deneme Yılı\"  (ngModelChange)=\"onModelChange(element,'TrialYear')\"\n              id=\"TrialYear-{{rindex}}\" (keydown)=\"keydown($event,'TrialYear',rindex)\" class=\"table-input\">\n          </mat-form-field>\n        </cdk-cell>\n      </ng-container>\n\n\n      <ng-container cdkColumnDef=\"Region\">\n        <cdk-header-cell *cdkHeaderCellDef class=\"table-header-cell\"> Bölge </cdk-header-cell>\n        <cdk-cell *cdkCellDef=\"let element\" class=\"table-cell\">\n          <mat-form-field>\n            <mat-select disableRipple [(ngModel)]=\"element.Region\" (ngModelChange)=\"onModelChange(element,'Region')\"\n              class=\"table-select\">\n              <mat-option *ngFor=\"let item of region\" [value]=\"item\"  >\n                {{item}}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n        </cdk-cell>\n      </ng-container>\n\n      <ng-container cdkColumnDef=\"Pack\">\n        <cdk-header-cell *cdkHeaderCellDef class=\"table-header-cell\"> Ambalaj </cdk-header-cell>\n        <cdk-cell *cdkCellDef=\"let element;let rindex=index\" class=\"table-cell\">\n          <mat-form-field>\n            <input matInput type=\"text\" [textMask]=\"{mask: numberMask}\" [(ngModel)]=\"element.Pack\" placeholder=\"Ambalaj\" (ngModelChange)=\"onModelChange(element,'Pack')\"\n              id=\"Pack-{{rindex}}\" (keydown)=\"keydown($event,'Pack',rindex)\" class=\"table-input\">\n          </mat-form-field>\n        </cdk-cell>\n      </ng-container>\n\n      <ng-container cdkColumnDef=\"Amount\">\n        <cdk-header-cell *cdkHeaderCellDef class=\"table-header-cell\"> Miktar </cdk-header-cell>\n        <cdk-cell *cdkCellDef=\"let element;let rindex=index\" class=\"table-cell\">\n          <mat-form-field>\n            <input matInput type=\"text\" [textMask]=\"{mask: numberMask}\" [(ngModel)]=\"element.Amount\" placeholder=\"Miktar\" (ngModelChange)=\"onModelChange(element,'Amount')\"\n              id=\"Amount-{{rindex}}\" (keydown)=\"keydown($event,'Amount',rindex)\" class=\"table-input\">\n          </mat-form-field>\n        </cdk-cell>\n      </ng-container>\n\n      <ng-container cdkColumnDef=\"MainUnit\">\n        <cdk-header-cell *cdkHeaderCellDef class=\"table-header-cell\"> Ana Birim </cdk-header-cell>\n        <cdk-cell *cdkCellDef=\"let element;let rindex=index\" class=\"table-cell\">\n          <mat-form-field>\n            <input matInput id=\"MainUnit-{{rindex}}\" type=\"text\" [(ngModel)]=\"element.MainUnit\" readonly=true (keydown)=\"keydown($event,'MainUnit',rindex)\"\n              class=\"table-input\" />\n          </mat-form-field>\n        </cdk-cell>\n      </ng-container>\n\n      <ng-container cdkColumnDef=\"SecondUnit\">\n        <cdk-header-cell *cdkHeaderCellDef class=\"table-header-cell\"> İkinci Birim </cdk-header-cell>\n        <cdk-cell *cdkCellDef=\"let element;let rindex=index\" class=\"table-cell\">\n          <mat-form-field>\n            <input matInput id=\"SecondUnit-{{rindex}}\" type=\"text\" [(ngModel)]=\"element.SecondUnit\" readonly=true (keydown)=\"keydown($event,'SecondUnit',rindex)\"\n              class=\"table-input\" />\n          </mat-form-field>\n        </cdk-cell>\n      </ng-container>\n\n      <ng-container cdkColumnDef=\"TotalAmount\">\n        <cdk-header-cell *cdkHeaderCellDef class=\"table-header-cell\"> Toplam Miktar </cdk-header-cell>\n        <cdk-cell *cdkCellDef=\"let element;let rindex=index\" class=\"table-cell\">\n          <mat-form-field>\n            <input matInput id=\"TotalAmount-{{rindex}}\" type=\"text\" [(ngModel)]=\"element.TotalAmount\" readonly=true (keydown)=\"keydown($event,'TotalAmount',rindex)\"\n              class=\"table-input\" />\n          </mat-form-field>\n        </cdk-cell>\n      </ng-container>\n\n      <ng-container cdkColumnDef=\"Responsible\">\n        <cdk-header-cell *cdkHeaderCellDef class=\"table-header-cell\"> Verilen Kişi </cdk-header-cell>\n        <cdk-cell *cdkCellDef=\"let element\" class=\"table-cell\">\n          <mat-form-field>\n          <mat-select placeholder=\"Sorumlu\" [(ngModel)]=\"element.Responsible\" (ngModelChange)=\"onModelChange(element,'Responsible')\"\n            class=\"table-select\">\n            <mat-select-trigger>\n              <span>\n                {{element.Responsible}}\n              </span>\n            </mat-select-trigger>\n            <mat-option *ngFor=\"let item of persons\" [value]=\"item.Code\">\n              {{item.FirstName}} {{item.LastName}}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n        </cdk-cell>\n      </ng-container>\n\n      <ng-container cdkColumnDef=\"Date\">\n        <cdk-header-cell *cdkHeaderCellDef class=\"table-header-cell\"> Tarih </cdk-header-cell>\n        <cdk-cell *cdkCellDef=\"let element;let rindex=index\" class=\"table-cell\">\n          <mat-form-field fxFlex=\"90px\">\n            <input matInput type=\"text\" [matDatepicker]=\"dp\" [(ngModel)]=\"element.Date\" (ngModelChange)=\"onModelChange(element,'Date')\"\n              id=\"Date-{{rindex}}\" (keydown)=\"keydown($event,'Date',rindex)\" class=\"table-input\">\n            <mat-datepicker-toggle matSuffix [for]=\"dp\"></mat-datepicker-toggle>\n            <mat-datepicker #dp></mat-datepicker>\n          </mat-form-field>\n        </cdk-cell>\n      </ng-container>\n\n      <ng-container cdkColumnDef=\"Deliverer\">\n        <cdk-header-cell *cdkHeaderCellDef class=\"table-header-cell\"> Tohumu Veren </cdk-header-cell>\n        <cdk-cell *cdkCellDef=\"let element\" class=\"table-cell\">\n          <mat-form-field>\n          <mat-select placeholder=\"Temsilci\" disableRipple [(ngModel)]=\"element.Deliverer\" (ngModelChange)=\"onModelChange(element,'Deliverer')\"\n            class=\"table-select\">\n            <mat-select-trigger>\n              <span>\n                {{element.Deliverer}}\n              </span>\n            </mat-select-trigger>\n            <mat-option *ngFor=\"let item of persons\" [value]=\"item.Code\">\n              {{item.FirstName}} {{item.LastName}}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n        </cdk-cell>\n      </ng-container>\n\n      <ng-container cdkColumnDef=\"ResponsibleNotes\">\n        <cdk-header-cell *cdkHeaderCellDef class=\"table-header-cell\"> Ürün Sorumlusu Açıklaması </cdk-header-cell>\n        <cdk-cell *cdkCellDef=\"let element;let rindex=index\" class=\"table-cell\">\n          <mat-form-field>\n          <textarea matAutosizeMinRows=\"2\" matAutosizeMaxRows=\"5\" matInput type=\"text\" [(ngModel)]=\"element.ResponsibleNotes\" placeholder=\"Ürün Sorumlusu Açıklaması\"\n            (ngModelChange)=\"onModelChange(element,'ResponsibleNotes')\" id=\"ResponsibleNotes-{{rindex}}\" (keydown)=\"keydown($event,'ResponsibleNotes',rindex)\"\n            class=\"table-input\"></textarea>\n          </mat-form-field>\n        </cdk-cell>\n      </ng-container>\n\n      <ng-container cdkColumnDef=\"Notes\">\n        <cdk-header-cell *cdkHeaderCellDef class=\"table-header-cell\"> Notlar </cdk-header-cell>\n        <cdk-cell *cdkCellDef=\"let element;let rindex=index\" class=\"table-cell\">\n          <mat-form-field>\n          <textarea textarea matAutosizeMinRows=\"2\" matAutosizeMaxRows=\"5\" matInput type=\"text\" [(ngModel)]=\"element.Notes\" placeholder=\"Notlar\"\n            (ngModelChange)=\"onModelChange(element,'Notes')\" id=\"Notes-{{rindex}}\" (keydown)=\"keydown($event,'Notes',rindex)\"\n            class=\"table-input\"></textarea>\n          </mat-form-field>\n        </cdk-cell>\n      </ng-container>\n\n      <ng-container cdkColumnDef=\"ResultDate\">\n        <cdk-header-cell *cdkHeaderCellDef class=\"table-header-cell\"> ÜGS Sonuç Tarihi </cdk-header-cell>\n        <cdk-cell *cdkCellDef=\"let element;let rindex=index\" class=\"table-cell\">\n          <mat-form-field fxFlex=\"90px\">\n            <input matInput type=\"text\" [matDatepicker]=\"dpResultDate\" [(ngModel)]=\"element.ResultDate\" (ngModelChange)=\"onModelChange(element,'ResultDate')\"\n              id=\"ResultDate-{{rindex}}\" (keydown)=\"keydown($event,'ResultDate',rindex)\" class=\"table-input\">\n            <mat-datepicker-toggle matSuffix [for]=\"dpResultDate\"></mat-datepicker-toggle>\n            <mat-datepicker #dpResultDate></mat-datepicker>\n          </mat-form-field>\n        </cdk-cell>\n      </ng-container>\n\n\n      <ng-container cdkColumnDef=\"Result\">\n        <cdk-header-cell *cdkHeaderCellDef class=\"table-header-cell\"> Sonuç </cdk-header-cell>\n        <cdk-cell *cdkCellDef=\"let element;let rindex=index\" class=\"table-cell\">\n          <mat-form-field>\n          <input matInput type=\"text\" [(ngModel)]=\"element.Result\" placeholder=\"Sonuç\" (ngModelChange)=\"onModelChange(element,'Result')\"\n            id=\"Result-{{rindex}}\" (keydown)=\"keydown($event,'Result',rindex)\" class=\"table-input\">\n          </mat-form-field>\n        </cdk-cell>\n      </ng-container>\n\n      <cdk-header-row *cdkHeaderRowDef=\"displayedColumns\" class=\"table-header-row\"></cdk-header-row>\n      <cdk-row *cdkRowDef=\"let row;let rindex=index; columns: displayedColumns;\" [ngClass]=\"{'highlight': selectedRowIndex == row._id}\"\n        class=\"table-row\" (click)=\"rowClick(row,rindex)\"></cdk-row>\n    </cdk-table>\n\n  </mat-card-content>\n</mat-card>\n\n\n\n\n\n<!-- <div flexLayout=\"column\">\n  <div flexLayout=\"row\">\n    <mat-form-field fxFlex=\"200px\">\n      <input type=\"text\" placeholder=\"Tür\" matInput required [formControl]=\"categoryFormControl\" [matAutocomplete]=\"category\" [(ngModel)]=\"category.Title\">\n      <mat-autocomplete autoActiveFirstOption=true #category=\"matAutocomplete\">\n        <mat-option *ngFor=\"let item of filteredCategory | async\" [value]=\"item.Title\" (onSelectionChange)=\"selectedCategory(item)\">\n          {{item.Code}} {{ item.Title }}\n        </mat-option>\n      </mat-autocomplete>\n    </mat-form-field>\n    <button mat-icon-button color=\"warn\">\n      <mat-icon aria-label=\"Search\">search</mat-icon>\n    </button>\n  </div>\n  <div class=\"mat-elevation-z8\">\n\n\n    <cdk-table #table [dataSource]=\"seedTrialDataSource\" >\n\n      <ng-container cdkColumnDef=\"Category\" flexLayout=\"column\">\n        <cdk-header-cell *cdkHeaderCellDef fxFlex> Ana Segment </cdk-header-cell>\n        <cdk-cell *cdkCellDef=\"let element\" fxFlex>\n          {{element.CategoryTitle}}\n        </cdk-cell>\n      </ng-container>\n      <ng-container cdkColumnDef=\"TrCode\" flexLayout=\"column\">\n          <cdk-header-cell *cdkHeaderCellDef fxFlex=\"30px\"> G/Ç </cdk-header-cell>\n          <cdk-cell *cdkCellDef=\"let element\" fxFlex=\"30px\">\n            <mat-select [(ngModel)]=\"element.TrCode\">\n              <mat-option value=\"0\">G</mat-option>\n              <mat-option value=\"1\">Ç</mat-option>\n            </mat-select>\n          </cdk-cell>\n        </ng-container>\n      <ng-container cdkColumnDef=\"Product\" flexLayout=\"column\">\n        <cdk-header-cell *cdkHeaderCellDef fxFlex> Alt Segment </cdk-header-cell>\n        <cdk-cell *cdkCellDef=\"let element\" fxFlex>\n          <input matInput [(ngModel)]=\"element.ProductTitle\" (keydown.f10)=\"productSelect(element)\" (blur)=\"getProductByTitle(element)\">\n         <input type=\"text\" placeholder=\"Çeşit\" matInput [formControl]=\"productFormControl\" [matAutocomplete]=\"product\" [(ngModel)]=\"element.ProductTitle\">\n          <mat-autocomplete autoActiveFirstOption #product=\"matAutocomplete\">\n            <mat-option *ngFor=\"let item of filteredProduct | async\" [value]=\"item.Title\" (onSelectionChange)=\"selectedProduct(item,element)\">\n              {{item.Code}} {{ item.Title }}\n            </mat-option>\n          </mat-autocomplete> \n        </cdk-cell>\n      </ng-container>\n      <ng-container cdkColumnDef=\"ProductCode\" flexLayout=\"column\">\n        <cdk-header-cell *cdkHeaderCellDef fxFlex> E-Numarası </cdk-header-cell>\n        <cdk-cell *cdkCellDef=\"let element\" fxFlex>\n          <input matInput type=\"text\" [(ngModel)]=\"element.ProductCode\" placeholder=\"e-numarası\">\n        </cdk-cell>\n      </ng-container>\n      <ng-container cdkColumnDef=\"Variant\" flexLayout=\"column\">\n        <cdk-header-cell *cdkHeaderCellDef fxFlex> Cins </cdk-header-cell>\n        <cdk-cell *cdkCellDef=\"let element;let rindex=index\" fxFlex>\n          <input matInput [(ngModel)]=\"element.VariantTitle\" (keydown.f10)=\"variantSelect(element)\" (blur)=\"getVariantByTitle(element)\">\n\n           <input type=\"text\" placeholder=\"Cins\" matInput [formControl]=\"variantFormControl\" [matAutocomplete]=\"variant\" [(ngModel)]=\"element.VariantTitle\">\n          <mat-autocomplete autoActiveFirstOption #variant=\"matAutocomplete\">\n            <mat-option *ngFor=\"let item of filteredVariant | async\" [value]=\"item.Title\" (onSelectionChange)=\"selectedVariant(item,element)\">\n              {{item.Code}} {{ item.Title }}\n            </mat-option>\n          </mat-autocomplete> \n        </cdk-cell>\n      </ng-container>\n      <ng-container cdkColumnDef=\"VariantCode\" flexLayout=\"column\">\n        <cdk-header-cell *cdkHeaderCellDef fxFlex> AG Kodu </cdk-header-cell>\n        <cdk-cell *cdkCellDef=\"let element\" fxFlex>\n          <input matInput type=\"text\" [(ngModel)]=\"element.VariantCode\" placeholder=\"AG Kodu\">\n        </cdk-cell>\n      </ng-container>\n      <ng-container cdkColumnDef=\"Status\" flexLayout=\"column\">\n        <cdk-header-cell *cdkHeaderCellDef fxFlex> Statüsü </cdk-header-cell>\n        <cdk-cell *cdkCellDef=\"let element\" fxFlex>\n          <mat-select placeholder=\"Statüsü\" disableRipple [(ngModel)]=\"element.Status\">\n            <mat-option *ngFor=\"let item of status\" [value]=\"item\">\n              {{item}}\n            </mat-option>\n          </mat-select>\n        </cdk-cell>\n      </ng-container>\n\n      <ng-container cdkColumnDef=\"Region\" flexLayout=\"column\">\n        <cdk-header-cell *cdkHeaderCellDef fxFlex> Bölge </cdk-header-cell>\n        <cdk-cell *cdkCellDef=\"let element\" fxFlex>\n          <mat-select placeholder=\"Bölge\" disableRipple [(ngModel)]=\"element.Region\">\n            <mat-option *ngFor=\"let item of region\" [value]=\"item\">\n              {{item}}\n            </mat-option>\n          </mat-select>\n        </cdk-cell>\n      </ng-container>\n\n      <ng-container cdkColumnDef=\"TrialSeason\" flexLayout=\"column\">\n        <cdk-header-cell *cdkHeaderCellDef fxFlex> Sezon </cdk-header-cell>\n        <cdk-cell *cdkCellDef=\"let element\" fxFlex>\n          <mat-select placeholder=\"Sezon\" disableRipple [(ngModel)]=\"element.TrialSeason\">\n            <mat-option *ngFor=\"let item of trialSeason\" [value]=\"item\">\n              {{item}}\n            </mat-option>\n          </mat-select>\n        </cdk-cell>\n      </ng-container>\n      <ng-container cdkColumnDef=\"TrialYear\" flexLayout=\"column\">\n        <cdk-header-cell *cdkHeaderCellDef fxFlex> Deneneceği Yıl </cdk-header-cell>\n        <cdk-cell *cdkCellDef=\"let element\" fxFlex>\n          <input matInput type=\"text\" [(ngModel)]=\"element.TrialYear\" placeholder=\"Deneme Yılı\">\n        </cdk-cell>\n      </ng-container>\n\n\n\n      <ng-container cdkColumnDef=\"Deliverer\" flexLayout=\"column\">\n        <cdk-header-cell *cdkHeaderCellDef fxFlex> Tohumu Verilen </cdk-header-cell>\n        <cdk-cell *cdkCellDef=\"let element\" fxFlex>\n          <mat-select placeholder=\"Temsilci\" disableRipple [(ngModel)]=\"element.Deliverer\">\n            <mat-option *ngFor=\"let item of persons\" [value]=\"item.Code\">\n              {{item.FirstName}} {{item.LastName}}\n            </mat-option>\n          </mat-select>\n        </cdk-cell>\n      </ng-container>\n\n      <ng-container cdkColumnDef=\"Date\" flexLayout=\"column\">\n        <cdk-header-cell *cdkHeaderCellDef fxFlex=\"90px\"> Tarih </cdk-header-cell>\n        <cdk-cell *cdkCellDef=\"let element\" fxFlex=\"90px\">\n          <mat-form-field fxFlex=\"90px\">\n            <input matInput  [matDatepicker]=\"dp\" [(ngModel)]=\"element.Date\">\n            <mat-datepicker-toggle matSuffix [for]=\"dp\"></mat-datepicker-toggle>\n            <mat-datepicker #dp></mat-datepicker>\n          </mat-form-field>\n        </cdk-cell>\n      </ng-container>\n\n      <ng-container cdkColumnDef=\"Responsible\" flexLayout=\"column\">\n        <cdk-header-cell *cdkHeaderCellDef fxFlex> Tohumu Veren </cdk-header-cell>\n        <cdk-cell *cdkCellDef=\"let element\" fxFlex>\n          <mat-select placeholder=\"Sorumlu\" [(ngModel)]=\"element.Responsible\">\n            <mat-option *ngFor=\"let item of persons\" [value]=\"item.Code\">\n              {{item.FirstName}} {{item.LastName}}\n            </mat-option>\n          </mat-select>\n        </cdk-cell>\n      </ng-container>\n\n      <ng-container cdkColumnDef=\"Pack\" flexLayout=\"column\">\n        <cdk-header-cell *cdkHeaderCellDef fxFlex> Ambalaj </cdk-header-cell>\n        <cdk-cell *cdkCellDef=\"let element\" fxFlex>\n          <input matInput type=\"number\" [(ngModel)]=\"element.Pack\" placeholder=\"Ambalaj\">\n        </cdk-cell>\n      </ng-container>\n\n      <ng-container cdkColumnDef=\"MainUnit\" flexLayout=\"column\">\n        <cdk-header-cell *cdkHeaderCellDef fxFlex> Ana Birim </cdk-header-cell>\n        <cdk-cell *cdkCellDef=\"let element\" fxFlex>\n          {{element.MainUnit}}\n        </cdk-cell>\n      </ng-container>\n\n      <ng-container cdkColumnDef=\"Amount\" flexLayout=\"column\">\n        <cdk-header-cell *cdkHeaderCellDef fxFlex> Miktar </cdk-header-cell>\n        <cdk-cell *cdkCellDef=\"let element\" fxFlex>\n          <input matInput type=\"number\" [(ngModel)]=\"element.Amount\" placeholder=\"Miktar\" (ngModelChange)=\"onModelChange(element)\">\n        </cdk-cell>\n      </ng-container>\n\n      <ng-container cdkColumnDef=\"SecondUnit\" flexLayout=\"column\">\n        <cdk-header-cell *cdkHeaderCellDef fxFlex> İkinci Birim </cdk-header-cell>\n        <cdk-cell *cdkCellDef=\"let element\" fxFlex>\n          {{element.SecondUnit}}\n        </cdk-cell>\n      </ng-container>\n\n      <ng-container cdkColumnDef=\"TotalAmount\" flexLayout=\"column\">\n        <cdk-header-cell *cdkHeaderCellDef fxFlex> Toplam Miktar </cdk-header-cell>\n        <cdk-cell *cdkCellDef=\"let element\" fxFlex>\n          {{element.TotalAmount}}\n        </cdk-cell>\n      </ng-container>\n\n\n      <ng-container cdkColumnDef=\"Action\">\n        <cdk-header-cell *cdkHeaderCellDef fxFlex=\"65px\">Sil</cdk-header-cell>\n        <cdk-cell *cdkCellDef=\"let element;let rindex=index\" fxFlex=\"65px\">\n          <button mat-icon-button color=\"accent\">\n            <mat-icon aria-label=\"Delete\">delete</mat-icon>\n          </button>\n        </cdk-cell>\n      </ng-container>\n\n      <cdk-header-row *cdkHeaderRowDef=\"displayedColumns\" class=\"example-header-row\"></cdk-header-row>\n      <cdk-row *cdkRowDef=\"let row;let rindex=index; columns: displayedColumns;\" [ngClass]=\"{'highlight': selectedRowIndex == row._id}\"\n        class=\"example-row\" (click)=\"rowClick(row,rindex)\"></cdk-row>\n    </cdk-table>\n  </div>\n</div> -->\n\n<!--\n    <div>\n    <table>\n      <thead>\n        <th>Ana Segment</th>\n        <th>Alt Segment</th>\n        <th>E-Numarası</th>\n        <th>Cins</th>\n        <th>AG Kodu</th>\n        <th>Statüsü</th>\n        <th>Bölge</th>\n        <th>Sezon</th>\n        <th>Deneneceği Yıl</th>\n        <th>Tarih</th>\n        <th>Sil</th>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let element of seedTrials\">\n          <td>{{element.CategoryTitle}}</td>\n          <td>\n            <input type=\"text\" placeholder=\"Çeşit\" matInput [formControl]=\"productFormControl\" [matAutocomplete]=\"product\" [(ngModel)]=\"element.ProductTitle\">\n            <mat-autocomplete autoActiveFirstOption #product=\"matAutocomplete\">\n              <mat-option *ngFor=\"let item of filteredProduct | async\" [value]=\"item.Title\" (onSelectionChange)=\"selectedProduct(item,element)\">\n                {{item.Code}} {{ item.Title }}\n              </mat-option>\n            </mat-autocomplete>\n          </td>\n          <td>\n            <input matInput type=\"text\" [(ngModel)]=\"element.ProductCode\" placeholder=\"e-numarası\">\n          </td>\n          <td>\n            <input type=\"text\" placeholder=\"Cins\" matInput [formControl]=\"variantFormControl\" [matAutocomplete]=\"variant\" [(ngModel)]=\"element.VariantTitle\">\n            <mat-autocomplete autoActiveFirstOption #variant=\"matAutocomplete\">\n              <mat-option *ngFor=\"let item of filteredVariant | async\" [value]=\"item.Title\" (onSelectionChange)=\"selectedVariant(item,element)\">\n                {{item.Code}} {{ item.Title }}\n              </mat-option>\n            </mat-autocomplete>\n          </td>\n          <td>\n            <input matInput type=\"text\" [(ngModel)]=\"element.VariantCode\" placeholder=\"AG Kodu\">\n          </td>\n          <td>\n            <mat-select placeholder=\"Statüsü\" disableRipple [(ngModel)]=\"element.Status\">\n              <mat-option *ngFor=\"let item of status\" [value]=\"item\">\n                {{item}}\n              </mat-option>\n            </mat-select>\n          </td>\n          <td>\n            <input type=\"text\" placeholder=\"Bölge\" matInput [formControl]=\"regionFormControl\" [matAutocomplete]=\"region\" [(ngModel)]=\"element.Region\">\n            <mat-autocomplete autoActiveFirstOption #region=\"matAutocomplete\">\n              <mat-option *ngFor=\"let option of filteredRegions| async\" [value]=\"option\">\n                {{ option }}\n              </mat-option>\n            </mat-autocomplete>\n          </td>\n          <td>\n            <mat-select placeholder=\"Sezon\" disableRipple [(ngModel)]=\"element.TrialSeason\">\n              <mat-option *ngFor=\"let item of trialSeason\" [value]=\"item\">\n                {{item}}\n              </mat-option>\n            </mat-select>\n          </td>\n          <td>\n            <input matInput type=\"text\" [(ngModel)]=\"element.TrialYear\" placeholder=\"Deneme Yılı\">\n          </td>\n          <td>\n            <mat-form-field fxFlex=\"90px\">\n              <input matInput [matDatepicker]=\"dp\">\n              <mat-datepicker-toggle matSuffix [for]=\"dp\"></mat-datepicker-toggle>\n              <mat-datepicker #dp></mat-datepicker>\n            </mat-form-field>\n          </td>\n          <td>\n            <button mat-icon-button color=\"accent\">\n              <mat-icon aria-label=\"Delete\">delete</mat-icon>\n            </button>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>-->"

/***/ }),

/***/ "../../../../../src/app/seed.trial/seed.trial.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".right {\n  padding-right: 1em; }\n\n.table-input,\n.table-select {\n  border: none; }\n\n.table-input:hover,\n.table-select:hover,\n.table-input:focus,\n.table-select:focus {\n  border: 1px inset lightblue;\n  border-radius: 5px; }\n\ncdk-table {\n  display: block;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  min-width: 300px;\n  width: 100%;\n  max-height: calc(100vh - 220px);\n  height: 100%;\n  overflow: auto;\n  border-bottom: 1px solid #7c7c7c; }\n\n.table-header-row, .table-row {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 32px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 1px 8px; }\n\n.table-cell, .table-header-cell {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  padding-left: 1px;\n  padding-right: 1px; }\n\n.cdk-header-cell {\n  font-size: 10px;\n  font-weight: bolder; }\n\n.cdk-cell {\n  font-size: 11px; }\n\n.cdk-column-Action {\n  min-width: 30px;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start; }\n\n.cdk-column-TrialYear,\n.cdk-column-Status {\n  min-width: 60px;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start; }\n\n.cdk-column-CategoryTitle {\n  min-width: 120px;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start; }\n\n.cdk-column-TrialSeason,\n.cdk-column-ProductTitle,\n.cdk-column-VariantTitle,\n.cdk-column-Result {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  min-width: 120px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row; }\n\n.cdk-column-Region {\n  min-width: 60px; }\n\n.cdk-column-Region .mat-select-value-text {\n    white-space: pre-wrap !important;\n    overflow: hidden;\n    text-overflow: ellipsis; }\n\n.cdk-column-ENumber,\n.cdk-column-AGCode {\n  min-width: 80px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row; }\n\n.cdk-column-TotalAmount,\n.cdk-column-Amount,\n.cdk-column-Pack,\n.cdk-column-MainUnit,\n.cdk-column-SecondUnit,\n.cdk-column-Responsible, .cdk-column-Deliverer {\n  min-width: 50px; }\n\n.cdk-column-TotalAmount {\n  padding-right: 10px;\n  text-align: right; }\n\n.cdk-column-ResponsibleNotes, .cdk-column-Notes {\n  min-width: 200px; }\n\n.cdk-column-Date, .cdk-column-ResultDate {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  min-width: 90px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row; }\n\n.table-header-cell {\n  text-align: left; }\n\n.mat-chip {\n  font-size: 11px;\n  line-height: 15px;\n  margin-bottom: 2px; }\n\nmat-form-field {\n  width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/seed.trial/seed.trial.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SeedTrialComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material_moment_adapter__ = __webpack_require__("../../../material-moment-adapter/esm5/material-moment-adapter.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material_core__ = __webpack_require__("../../../material/esm5/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_text_mask_addons_dist_createNumberMask__ = __webpack_require__("../../../../text-mask-addons/dist/createNumberMask.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_text_mask_addons_dist_createNumberMask___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_text_mask_addons_dist_createNumberMask__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services__ = __webpack_require__("../../../../../src/app/_services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models__ = __webpack_require__("../../../../../src/app/_models/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__helpers_datasource__ = __webpack_require__("../../../../../src/app/_helpers/datasource.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__directives__ = __webpack_require__("../../../../../src/app/_directives/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var SeedTrialComponent = /** @class */ (function () {
    function SeedTrialComponent(seedTrialService, seedModelService, personService, pmpService, enumsMock, dialog, renderer, snackBar) {
        var _this = this;
        this.seedTrialService = seedTrialService;
        this.seedModelService = seedModelService;
        this.personService = personService;
        this.pmpService = pmpService;
        this.enumsMock = enumsMock;
        this.dialog = dialog;
        this.renderer = renderer;
        this.snackBar = snackBar;
        this.seedTrials = [];
        this.oldRow = new __WEBPACK_IMPORTED_MODULE_8__models__["o" /* SeedTrialModel */](); //new BehaviorSubject<SeedTrialModel>(new SeedTrialModel()); 
        this.seedTrialModel = new __WEBPACK_IMPORTED_MODULE_8__models__["o" /* SeedTrialModel */]();
        this.seedModel = new __WEBPACK_IMPORTED_MODULE_8__models__["n" /* SeedModel */]();
        this.seedModels = [];
        this.seeds = [];
        this.persons = [];
        this.productDetails = [];
        this.productDetailModel = new __WEBPACK_IMPORTED_MODULE_8__models__["j" /* ProductDetail */]();
        this.trCode = "0";
        this.pmps = [];
        this.pmp = new __WEBPACK_IMPORTED_MODULE_8__models__["k" /* ProductMarketProfileModel */]();
        this.numberMask = __WEBPACK_IMPORTED_MODULE_5_text_mask_addons_dist_createNumberMask___default()({
            prefix: '',
            suffix: '',
            integerLimit: 6,
            includeThousandsSeparator: false
        });
        this.trialYearMask = [/[2]/, /[0]/, /[1-2]/, /\d/, '-', /[2]/, /[0]/, /[1-2]/, /\d/];
        this.displayedColumns = ['Action', 'CategoryTitle', 'ProductTitle', 'VariantTitle',
            'ENumber', 'AGCode', 'Status', 'Region', 'TrialSeason',
            'TrialYear', 'Pack', 'MainUnit', 'Amount', 'SecondUnit', 'TotalAmount',
            'Responsible', 'Date', 'Deliverer', 'ResponsibleNotes', 'Notes', 'ResultDate', 'Result'];
        this.status = [];
        this.region = [];
        this.trialSeason = [];
        this.categoryFormControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]();
        this.selectedRowIndex = "";
        this.seedModelService.url = __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].URLRestFullApi + "/seed";
        this.seedModelService.getAll()
            .subscribe(function (response) {
            _this.seeds = response;
        }, function (error) {
            console.log(error);
        });
    }
    SeedTrialComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.status = this.enumsMock.getStatus();
        this.region = this.enumsMock.getRegion();
        this.personService.url = __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].URLRestFullApi + "/persons";
        this.personService.getAll()
            .subscribe(function (response) {
            _this.persons = response;
        });
    };
    SeedTrialComponent.prototype.selectedSeed = function (selected) {
        var _this = this;
        this.seedModel = selected;
        this.productDetails = this.seedModel.ProductDetail.filter(function (pd) { return pd.IsActive && !pd.IsDeleted; });
        this.seedTrialService.url = __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].URLRestFullApi + "/trial/" + this.seedModel._id;
        this.seedTrialService.getAll()
            .subscribe(function (response) {
            _this.seedTrials = response;
            if (_this.seedTrials.length == 0) {
                var trial = new __WEBPACK_IMPORTED_MODULE_8__models__["o" /* SeedTrialModel */]();
                trial.CategoryId = _this.seedModel._id;
                trial.CategoryTitle = _this.seedModel.Title;
                _this.seedTrials.push(trial);
            }
            _this.seedTrialDataSource = new __WEBPACK_IMPORTED_MODULE_9__helpers_datasource__["a" /* GenericDataSource */](_this.seedTrials);
        }, function (error) {
            console.log(error);
        });
    };
    SeedTrialComponent.prototype.rowClick = function (row, index) {
        if (this.oldRow._id != row._id)
            this.oldRow = Object.assign({}, row);
        this.selectedRowIndex = row._id;
        if (index == this.seedTrialDataSource.data().slice().length - 1) {
            var newRow = new __WEBPACK_IMPORTED_MODULE_8__models__["o" /* SeedTrialModel */]();
            newRow.CategoryId = this.seedModel._id;
            newRow.CategoryTitle = this.seedModel.Title;
            this.seedTrials.push(newRow);
            this.seedTrialDataSource.update(this.seedTrials);
        }
    };
    SeedTrialComponent.prototype.keydown = function (event, tag, index) {
        console.log(event.key);
        if (event.key == 'ArrowDown') {
            if (this.seedTrials.length - 1 > index) {
                var element = '#' + tag + '-' + (index + 1);
                var onElement = this.renderer.selectRootElement(element);
                onElement.focus();
                this.rowClick(this.seedTrials[index + 1], index + 1);
            }
        }
        if (event.key == 'ArrowUp') {
            if (index > 0) {
                var element = '#' + tag + '-' + (index - 1);
                var onElement = this.renderer.selectRootElement(element);
                onElement.focus();
                this.rowClick(this.seedTrials[index - 1], index - 1);
            }
        }
    };
    SeedTrialComponent.prototype.productSelect = function (element) {
        var _this = this;
        if (element.ProductTitle == undefined || element.ProductTitle.length == 0)
            element.ProductTitle = '';
        var data = {
            rows: this.productDetails,
            columns: [
                { name: 'Cins', prop: 'Title' }
            ],
            filterText: 'Filtre edeceğiniz alt segment adını giriniz...'
        };
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_10__directives__["d" /* SeedInputDialogComponent */], { data: data, hasBackdrop: false, autoFocus: true });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result == undefined)
                return;
            element.ProductId = result._id;
            element.ProductTitle = result.Title;
            _this.productDetailModel = result;
            element.Variants = _this.productDetailModel.Variant;
            element.VariantId = "";
            element.VariantTitle = "";
            element.MainUnit = "";
            element.SecondUnit = "";
            element.Pack = 0;
            element.ConvFact2 = 0;
            element.ENumber = "";
            element.AGCode = "";
        }, function (error) {
            console.log(error);
        });
    };
    SeedTrialComponent.prototype.variantSelect = function (element) {
        var _this = this;
        console.log(element.Variants);
        if (element.Variants == undefined) {
            if (element.ProductTitle.length == 0)
                return;
            element.Variants = this.seeds.find(function (s) { return s._id == element.CategoryId; }).ProductDetail.find(function (p) { return p._id == element.ProductId; }).Variant;
        }
        if (element.VariantTitle == undefined || element.ProductTitle.length == 0)
            element.VariantTitle = '';
        var data = {
            rows: element.Variants,
            columns: [
                { name: 'Çeşit', prop: 'Title' }
            ],
            filterText: 'Filtre edeceğiniz cins adını giriniz...'
        };
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_10__directives__["d" /* SeedInputDialogComponent */], { data: data, hasBackdrop: false, autoFocus: true });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result == undefined)
                return;
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
            _this.onModelChange(element, 'Category');
        }, function (error) {
            console.log(error);
        });
    };
    SeedTrialComponent.prototype.trialSeasonSelect = function (element) {
        var _this = this;
        if (element.TrialSeasons == undefined || element.TrialSeason.length == 0) {
            element.TrialSeasons = this.seeds.find(function (s) { return s._id == element.CategoryId; }).ProductDetail.find(function (p) { return p._id == element.ProductId; }).Seasons;
        }
        if (element.VariantTitle == undefined || element.ProductTitle.length == 0)
            element.TrialSeason = '';
        var data = {
            rows: element.TrialSeasons,
            columns: [
                { name: 'Segment', prop: 'Season' }
            ],
            filterText: 'Filtre edeceğiniz segment adını giriniz...'
        };
        console.log(element);
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_10__directives__["d" /* SeedInputDialogComponent */], { data: data, hasBackdrop: false, autoFocus: true });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result == undefined)
                return;
            element.TrialSeason = result.Season;
            _this.onModelChange(element, 'Season');
        }, function (error) {
            console.log(error);
        });
    };
    SeedTrialComponent.prototype.onModelChange = function (element, tag) {
        var _this = this;
        console.log(this.oldRow.Region, element.Region);
        if (tag == 'Pack' || tag == 'Amount') {
            element.TotalAmount = element.Amount * element.Pack;
        }
        if (this.validateRow(element)) {
            if (element._id == undefined) {
                this.seedTrialService.url = __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].URLRestFullApi + "/trial";
                this.seedTrialService.insert(element)
                    .subscribe(function (response) {
                    console.log("SeedTrial insert", response);
                    element._id = response._id;
                    _this.pmp = new __WEBPACK_IMPORTED_MODULE_8__models__["k" /* ProductMarketProfileModel */]();
                    _this.insertPmp(response);
                    _this.oldRow = Object.assign({}, element);
                }, function (error) {
                    if (error.code = '11000')
                        _this.snackBar.open('HATA: Aynı sezon ve bölgede planlama yapılmış!', '', { duration: 3000 });
                    else
                        _this.snackBar.open(error.error.message, '', { duration: 3000 });
                });
            }
            else {
                this.seedTrialService.url = __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].URLRestFullApi + "/trial";
                this.seedTrialService.update(element)
                    .subscribe(function (response) {
                    console.log("SeedTrial updated", response);
                    _this.updatePmp(response);
                    _this.oldRow = Object.assign({}, element);
                }, function (error) {
                    if (error.code = '11000')
                        _this.snackBar.open('HATA: Aynı sezon ve bölgede planlama yapılmış!', '', { duration: 3000 });
                    else
                        _this.snackBar.open(error.error.message, '', { duration: 3000 });
                });
            }
        }
    };
    SeedTrialComponent.prototype.validateRow = function (element) {
        if (element.CategoryId != undefined &&
            element.ProductId != undefined &&
            element.VariantId != undefined &&
            element.TrialSeason != undefined &&
            element.TrialYear != undefined &&
            element.Pack > 0 && element.Amount > 0)
            return true;
        else
            return false;
    };
    SeedTrialComponent.prototype.deleteItem = function (index, data) {
        var _this = this;
        var deleteData = { "Title": data.CategoryTitle + ' - ' + data.ProductTitle + ' - ' + data.VariantTitle, "Message": "Dikkat Kayıt silinecektir!!!", "Type": __WEBPACK_IMPORTED_MODULE_10__directives__["c" /* ConfirmType */].Delete };
        //    const type = ConfirmType.Delete;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_10__directives__["a" /* ConfirmDialogComponent */], { data: deleteData });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log(result);
            if (result == "1") {
                _this.seedTrialService.url = __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].URLRestFullApi + "/trial/" + data._id;
                _this.seedTrialService.delete()
                    .subscribe(function (result) {
                    _this.snackBar.open('Kayıt Silindi...', '', { duration: 3000, });
                    _this.seedTrials.splice(index, 1);
                    _this.seedTrialDataSource.update(_this.seedTrials);
                    _this.deletePmp(data);
                });
            }
        });
    };
    SeedTrialComponent.prototype.deletePmp = function (arg0) {
        var _this = this;
        this.pmpService.url = __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].URLRestFullApi + "/pmp?CategoryId=" + arg0.CategoryId + "&ProductId=" + arg0.ProductId + "&TrialSeason=" + arg0.TrialSeason + "&TrialYear=" + arg0.TrialYear + "&Region=" + arg0.Region;
        this.pmpService.getAll()
            .subscribe(function (response) {
            _this.pmp = response[0];
            if (_this.pmp.VariantDetail.length == 1) {
                _this.pmpService.url = __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].URLRestFullApi + "/pmp/" + _this.pmp._id;
                _this.pmpService.delete()
                    .subscribe(function (response) {
                    console.log(response);
                });
                return;
            }
            _this.pmp.VariantDetail = _this.pmp.VariantDetail.filter(function (x) { return x.VariantId != arg0.VariantId; });
            _this.pmpService.url = __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].URLRestFullApi + "/pmp";
            _this.pmpService.update(_this.pmp)
                .subscribe(function (resp) {
                console.log(resp);
            });
        });
    };
    SeedTrialComponent.prototype.updatePmp = function (arg0) {
        var _this = this;
        if (this.oldRow.VariantId === arg0.VariantId &&
            this.oldRow.Region === arg0.Region &&
            this.oldRow.TrialSeason === arg0.TrialSeason &&
            this.oldRow.TrialYear === arg0.TrialYear) {
            this.insertPmp(arg0);
        }
        else {
            //`${environment.URLRestFullApi}/Pmp?ProductId=${this.product._id}`;
            this.pmpService.url = __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].URLRestFullApi + "/pmp?CategoryId=" + this.oldRow.CategoryId + "&ProductId=" + this.oldRow.ProductId + "&TrialSeason=" + this.oldRow.TrialSeason + "&TrialYear=" + this.oldRow.TrialYear + "&Region=" + this.oldRow.Region;
            this.pmpService.getAll()
                .subscribe(function (response) {
                _this.pmp = response[0];
                _this.pmp.VariantDetail = _this.pmp.VariantDetail.filter(function (x) { return x.VariantId != _this.oldRow.VariantId; });
                _this.pmpService.url = __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].URLRestFullApi + "/pmp";
                _this.pmpService.update(_this.pmp)
                    .subscribe(function (resp) {
                    console.log(resp);
                });
            });
            this.insertPmp(arg0);
        }
    };
    SeedTrialComponent.prototype.insertPmp = function (arg0) {
        var _this = this;
        this.pmpService.url = __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].URLRestFullApi + "/pmp?CategoryId=" + arg0.CategoryId + "&ProductId=" + arg0.ProductId + "&TrialSeason=" + arg0.TrialSeason + "&TrialYear=" + arg0.TrialYear + "&Region=" + arg0.Region;
        this.pmpService.getAll()
            .subscribe(function (response) {
            _this.pmp.SeedId = arg0.CategoryId;
            _this.pmp.CategoryTitle = arg0.CategoryTitle;
            _this.pmp.ProductId = arg0.ProductId;
            _this.pmp.ProductTitle = arg0.ProductTitle;
            _this.pmp.Region = arg0.Region;
            _this.pmp.TrialSeason = arg0.TrialSeason;
            _this.pmp.TrialYear = arg0.TrialYear;
            var variantDetail = new __WEBPACK_IMPORTED_MODULE_8__models__["q" /* VariantDetail */]();
            variantDetail.VariantId = arg0.VariantId;
            variantDetail.VariantTitle = arg0.VariantTitle;
            variantDetail.Status = arg0.Status;
            if (response.length == 0) {
                _this.pmp.VariantDetail = [];
                _this.pmp.VariantDetail.push(variantDetail);
                _this.pmpService.url = __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].URLRestFullApi + "/pmp";
                _this.pmpService.insert(_this.pmp)
                    .subscribe(function (resp) {
                    console.log(resp);
                });
            }
            else {
                _this.pmp = response[0];
                var vdControl = _this.pmp.VariantDetail.find(function (x) { return x.VariantId == variantDetail.VariantId; });
                if (!vdControl) {
                    _this.pmp.VariantDetail.push(variantDetail);
                    _this.pmpService.url = __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].URLRestFullApi + "/pmp";
                    _this.pmpService.update(_this.pmp)
                        .subscribe(function (resp) {
                        console.log(resp);
                    });
                }
                else {
                    _this.pmp.VariantDetail.find(function (x) { return x.VariantId == variantDetail.VariantId; }).Status = variantDetail.Status;
                    _this.pmpService.url = __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].URLRestFullApi + "/pmp";
                    _this.pmpService.update(_this.pmp)
                        .subscribe(function (resp) {
                        console.log(resp);
                    });
                }
            }
        });
    };
    SeedTrialComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-seed.trial',
            template: __webpack_require__("../../../../../src/app/seed.trial/seed.trial.component.html"),
            styles: [__webpack_require__("../../../../../src/app/seed.trial/seed.trial.component.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_6__services__["c" /* GenericService */], __WEBPACK_IMPORTED_MODULE_6__services__["b" /* EnumsMock */],
                { provide: __WEBPACK_IMPORTED_MODULE_4__angular_material_core__["g" /* MAT_DATE_LOCALE */], useValue: 'tr-TR' },
                { provide: __WEBPACK_IMPORTED_MODULE_4__angular_material_core__["c" /* DateAdapter */], useClass: __WEBPACK_IMPORTED_MODULE_3__angular_material_moment_adapter__["c" /* MomentDateAdapter */], deps: [__WEBPACK_IMPORTED_MODULE_4__angular_material_core__["g" /* MAT_DATE_LOCALE */]] },
                { provide: __WEBPACK_IMPORTED_MODULE_4__angular_material_core__["f" /* MAT_DATE_FORMATS */], useValue: __WEBPACK_IMPORTED_MODULE_3__angular_material_moment_adapter__["a" /* MAT_MOMENT_DATE_FORMATS */] }],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__services__["c" /* GenericService */],
            __WEBPACK_IMPORTED_MODULE_6__services__["c" /* GenericService */],
            __WEBPACK_IMPORTED_MODULE_6__services__["c" /* GenericService */],
            __WEBPACK_IMPORTED_MODULE_6__services__["c" /* GenericService */],
            __WEBPACK_IMPORTED_MODULE_6__services__["b" /* EnumsMock */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["m" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["G" /* MatSnackBar */]])
    ], SeedTrialComponent);
    return SeedTrialComponent;
}());



/***/ }),

/***/ "../../../../../src/app/sidenavmenu/menu-item/menu-item.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sidenavmenu/menu-item/menu-item.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-menu #childMenu=\"matMenu\" [overlapTrigger]=\"false\">\n    <span *ngFor=\"let child of items\">\n      <!-- Handle branch node menu items -->\n      <span *ngIf=\"child.subitms\">\n        <button mat-menu-item color=\"primary\" [matMenuTriggerFor]=\"menu.childMenu\">\n          <mat-icon>{{child.imageurl}}</mat-icon>\n          <span>{{child.definition}}</span>\n        </button>\n        <app-menu-item #menu [items]=\"child.subitms\"></app-menu-item>\n      </span>\n      <!-- Handle leaf node menu items -->\n      <span *ngIf=\"!child.subitms \">\n        <button mat-menu-item [routerLink]=\"child.routeurl\" (click)=\"navOpen()\">\n            <mat-icon>{{child.imageurl}}</mat-icon>\n            <span>{{child.definition}}</span>\n        </button>\n      </span>\n    </span>\n  </mat-menu>"

/***/ }),

/***/ "../../../../../src/app/sidenavmenu/menu-item/menu-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MenuItemComponent = /** @class */ (function () {
    function MenuItemComponent(router) {
        this.router = router;
        this.navToggle = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    MenuItemComponent.prototype.ngOnInit = function () {
    };
    MenuItemComponent.prototype.navOpen = function () {
        this.navToggle.emit(true);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], MenuItemComponent.prototype, "items", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], MenuItemComponent.prototype, "navToggle", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('childMenu'),
        __metadata("design:type", Object)
    ], MenuItemComponent.prototype, "childMenu", void 0);
    MenuItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-menu-item',
            template: __webpack_require__("../../../../../src/app/sidenavmenu/menu-item/menu-item.component.html"),
            styles: [__webpack_require__("../../../../../src/app/sidenavmenu/menu-item/menu-item.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], MenuItemComponent);
    return MenuItemComponent;
}());



/***/ }),

/***/ "../../../../../src/app/sidenavmenu/sidenavmenu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "mat-sidenav-container {\n    position: fixed;\n    height: 100%;\n    min-height: 100%;\n    width: 100%;\n    min-width: 100%;\n }\n.logo{\n    text-decoration: none;\n    color:#FFFFFF;\n}\n.example-spacer{\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 auto;\n            flex: 1 1 auto;\n}\n.side-items{\n    width: 248px;\n    padding-left: 12px;\n    text-align: left;\n    \n}\nmd-sidenav{\n    background-color: #FFFFFF;\n    color: #313131;\n    width: 250px;\n    \n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sidenavmenu/sidenavmenu.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n  <button mat-icon-button (click)=\"sidenav.toggle()\">\n    <mat-icon>menu</mat-icon>\n  </button>￼\n  <span>\n    <a class=\"logo\" routerLink=\"/dashboard\" (click)=\"sidenav.close()\">\n      AGX Seed Process Management\n    </a>\n  </span>\n  <span class=\"example-spacer\"></span>\n  <button mat-button (click)=\"logout()\">\n    <mat-icon>exit_to_app</mat-icon> Çıkış</button>\n</mat-toolbar>\n<mat-sidenav-container color=\"primary\">\n  <mat-sidenav #sidenav mode=\"over\">\n    <mat-nav-list *ngFor=\"let item of sidenavItems\">\n      <div>\n        <span *ngIf=\"item.subitms\">\n          <button mat-button class=\"side-items\"  [matMenuTriggerFor]=\"menu.childMenu\">\n            <mat-icon>{{item.imageurl}}</mat-icon> {{item.definition}}\n            <mat-icon>expand_more</mat-icon>\n          </button>\n           <app-menu-item #menu [items]=\"item.subitms\"  (navToggle)=\"sidenav.close()\"></app-menu-item> \n        </span>\n\n        <span *ngIf=\"!item.subitms\">\n          <button mat-button class=\"side-items\" routerLink={{item.routeurl}} (click)=\"sidenav.close()\">\n            <mat-icon>{{item.imageurl}}</mat-icon> {{item.definition}}\n          </button>\n        </span>\n      </div>\n    </mat-nav-list>\n    <!-- <mat-nav-list>\n      <div>\n        <button mat-button class=\"side-items\" routerLink='/seed.card' (click)=\"sidenav.close()\">\n          <mat-icon>playlist_add</mat-icon> Tohum Tanımları\n        </button>\n      </div>\n      <div>\n        <button mat-button class=\"side-items\" routerLink='/person' (click)=\"sidenav.close()\">\n          <mat-icon>perm_identity</mat-icon> Ürün Sorumluları\n        </button>\n      </div>\n      <div>\n        <button mat-button class=\"side-items\" routerLink='/grow' (click)=\"sidenav.close()\">\n          <mat-icon>nature_people</mat-icon> Üreticiler\n        </button>\n      </div>\n      <div>\n        <button mat-button class=\"side-items\" routerLink='/seed.input' (click)=\"sidenav.close()\">\n          <mat-icon>swap_horiz</mat-icon> Deneme Tohum Listesi\n        </button>\n      </div>\n      <div>\n        <button mat-button class=\"side-items\" routerLink='/setting' (click)=\"sidenav.close()\">\n          <mat-icon>settings</mat-icon> Ayarlar\n        </button>\n      </div>\n    </mat-nav-list>-->\n  </mat-sidenav> \n    <div class=\"my-content\">\n      <router-outlet></router-outlet>\n    </div>\n</mat-sidenav-container>"

/***/ }),

/***/ "../../../../../src/app/sidenavmenu/sidenavmenu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidenavmenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__ = __webpack_require__("../../../../../src/app/_services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services__ = __webpack_require__("../../../../../src/app/_services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SidenavmenuComponent = /** @class */ (function () {
    function SidenavmenuComponent(auth, route, userService) {
        var _this = this;
        this.auth = auth;
        this.route = route;
        this.userService = userService;
        this.sidenavItems = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].Sidenav;
        userService.url = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].URLRestFullApi + "/users";
        userService.getAll()
            .subscribe(function (response) {
            var user = response.find(function (usr) { return usr.username == localStorage.getItem('username'); });
            if (user.Roll == "admin")
                return;
            _this.modules = user.Authority.Modules;
            _this.sidenavItems = _this.sidenavItems.filter(function (menu) { return _this.modules.indexOf(menu.id) !== -1; });
        });
    }
    SidenavmenuComponent.prototype.ngOnInit = function () { };
    SidenavmenuComponent.prototype.logout = function () {
        this.auth.logout();
        this.route.navigate(['/login']);
    };
    SidenavmenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sidenavmenu',
            template: __webpack_require__("../../../../../src/app/sidenavmenu/sidenavmenu.component.html"),
            styles: [__webpack_require__("../../../../../src/app/sidenavmenu/sidenavmenu.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_3__services__["c" /* GenericService */], __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3__services__["c" /* GenericService */]])
    ], SidenavmenuComponent);
    return SidenavmenuComponent;
}());



/***/ }),

/***/ "../../../../../src/app/user/user-dialog/user-dialog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* .container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 450px;\r\n  }\r\n  \r\n  */\r\n  .container {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    min-width: 300px;\r\n    max-height: 450px;\r\n  }\r\n  .container > * {\r\n    width: 100%;\r\n  }\r\n  /* .form {\r\n    display: flex;\r\n    padding-top: 2px;\r\n  }\r\n  \r\n  .form-control {\r\n    display: flex;\r\n    padding: 0px;\r\n    width: 100%;\r\n  }\r\n   \r\n  \r\n  .mat-form-field {\r\n    font-size: 12px;\r\n    width: 100%;\r\n    padding: 0 2px;\r\n    flex-grow: 1;\r\n  } */\r\n  .category-table {\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1 1 auto;\r\n            flex: 1 1 auto;\r\n    overflow: auto;\r\n    max-height: 400px;\r\n    min-width: 300px; \r\n  }\r\n  .example-header-row, .example-row {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    border-bottom: 1px solid rgb(124, 124, 124);\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    height: 32px;\r\n    padding: 0 8px;\r\n  }\r\n  .example-cell, .example-header-cell {\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1;\r\n            flex: 1;\r\n  }\r\n  .example-header-cell {\r\n    font-size: 12px;\r\n    font-weight: bold;\r\n  \r\n  }\r\n  .example-cell {\r\n    font-size: 13px;\r\n  }\r\n  /*   \r\n  \r\n  input:hover{\r\n    color: #fff;\r\n    background-color: #707070\r\n  }\r\n  input:focus mat-row{\r\n    background-color:#42A948;\r\n  }\r\n   */\r\n  .highlight{\r\n      background-color:#42A948;\r\n      \r\n    }\r\n  ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/user-dialog/user-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-card-header>\n    <mat-card-subtitle>Kullanıcı Tanımı</mat-card-subtitle>\n  </mat-card-header>\n\n  <mat-card-content>\n    <!-- <form class=\"mat-dialog-content\" (ngSubmit)=\"submit\" #formControl=\"ngForm\"> -->\n    <mat-tab-group>\n      <mat-tab label=\"Genel Bilgiler\">\n        <div fxLayout=\"column\" fxLayoutAlign=\"end stretch\">\n          <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" fxLayoutGap=\"5px\">\n            <mat-form-field fxFlex>\n              <input matInput required class=\"form-control\" placeholder=\"Kullanıcı Adı\" name=\"username\" [(ngModel)]=\"data.username\">\n            </mat-form-field>\n            <mat-form-field fxFlex>\n              <mat-select [(ngModel)]=\"data.Roll\" placeholder=\"Kullanıcı Tipi\">\n                <mat-option value=\"user\">Standart Kullanıcı</mat-option>\n                <mat-option value=\"admin\">Yönetici</mat-option>\n              </mat-select>\n            </mat-form-field>\n          </div>\n          <mat-form-field>\n            <input matInput type=\"password\" required class=\"form-control\" placeholder=\"Şifre\" name=\"password\" [(ngModel)]=\"data.password\"\n              (ngModelChange)=\"onModelChange()\">\n          </mat-form-field>\n          <!--<mat-form-field>\n        <input matInput type=\"password\" required class=\"form-control\" placeholder=\"Şifre Tekrar\" name=\"passAgain\" [(ngModel)]=\"PasswordAgain\">\n        </mat-form-field> -->\n\n          <mat-form-field>\n            <input matInput required class=\"form-control\" #FirstName placeholder=\"Adı\" name=\"firstname\" [(ngModel)]=\"data.FirstName\">\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput required class=\"form-control\" placeholder=\"Soyadı\" name=\"lastname\" [(ngModel)]=\"data.LastName\">\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput [textMask]=\"{mask: telNoMask}\" class=\"form-control\" placeholder=\"Gsm No\" name=\"gsmnr\" [(ngModel)]=\"data.GsmNr\">\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput class=\"form-control\" placeholder=\"E-Posta\" name=\"email\" [(ngModel)]=\"data.Email\">\n          </mat-form-field>\n        </div>\n\n      </mat-tab>\n      <mat-tab label=\"Detaylar\" *ngIf=\"data.Roll=='user'\">\n        <div fxLayout=\"column\" fxLayoutAlign=\"end stretch\" class=\"container\">\n          <div fxLayout=\"row\">\n            <mat-form-field class=\"input_3_Col\">\n              <mat-select #personSelect placeholder=\"Personel Adı\">\n                <mat-option *ngFor=\"let item of persons\" [value]=\"item\">{{item.FirstName}} {{item.LastName}}</mat-option>\n              </mat-select>\n            </mat-form-field>\n            <button mat-button (click)=\"addPerson(personSelect.value)\">Ekle</button>\n          </div>\n          <mat-form-field class=\"chip-list\">\n            <mat-chip-list #chipList>\n              <mat-chip *ngFor=\"let item of selectedPersons\" [selectable]=\"true\" [removable]=\"true\" (remove)=\"removePerson(item)\">\n                {{item.FirstName}} {{item.LastName}}\n                <mat-icon matChipRemove>cancel</mat-icon>\n              </mat-chip>\n            </mat-chip-list>\n          </mat-form-field>\n        </div>\n      </mat-tab>\n      <mat-tab label=\"Yetkiler\" *ngIf=\"data.Roll=='user'\">\n\n        <div class=\"container\">\n          <cdk-table #menuTable [dataSource]=\"menuDataSource\">\n            <!-- Checkbox Column -->\n            <ng-container cdkColumnDef=\"select\">\n              <cdk-header-cell *cdkHeaderCellDef class=\"example-header-cell\">\n                <mat-checkbox (change)=\"$event ? masterToggleMenu() : null\" [checked]=\"selectionMenu.hasValue() && isMenuAllSelected()\" [indeterminate]=\"selectionMenu.hasValue() && !isMenuAllSelected()\">\n                </mat-checkbox>\n              </cdk-header-cell>\n              <cdk-cell *cdkCellDef=\"let row\">\n                <mat-checkbox (click)=\"$event.stopPropagation()\" (change)=\"$event ? selectionMenu.toggle(row) : null\" [checked]=\"selectionMenu.isSelected(row)\">\n                </mat-checkbox>\n              </cdk-cell>\n            </ng-container>\n            <ng-container cdkColumnDef=\"definition\">\n              <cdk-header-cell *cdkHeaderCellDef class=\"example-header-cell\"> Menü Seçenekleri </cdk-header-cell>\n              <cdk-cell *cdkCellDef=\"let row;let rindex=index\" class=\"example-cell\">\n                {{row.definition}}\n              </cdk-cell>\n            </ng-container>\n\n            <cdk-header-row *cdkHeaderRowDef=\"menuColumns\" class=\"example-header-row\"></cdk-header-row>\n            <cdk-row *matRowDef=\"let row; columns: menuColumns;\" [ngClass]=\"{'highlight': selectedRowIndex == row.id}\" class=\"example-row\"\n              (click)=\"selectionMenu.toggle(row)\">\n            </cdk-row>\n          </cdk-table>\n        </div>\n\n\n      </mat-tab>\n    </mat-tab-group>\n  </mat-card-content>\n  <mat-card-actions>\n    <button mat-raised-button (click)=\"confirmAdd()\" color=\"warn\">Kaydet</button>\n    <button mat-raised-button (click)=\"onNoClick()\" tabindex=\"-1\">Vazgeç</button>\n    <!-- </form> -->\n  </mat-card-actions>\n</mat-card>"

/***/ }),

/***/ "../../../../../src/app/user/user-dialog/user-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models__ = __webpack_require__("../../../../../src/app/_models/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services__ = __webpack_require__("../../../../../src/app/_services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__helpers__ = __webpack_require__("../../../../../src/app/_helpers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_cdk_collections__ = __webpack_require__("../../../cdk/esm5/collections.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var UserDialogComponent = /** @class */ (function () {
    function UserDialogComponent(dialogRef, data, dataService, personService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.dataService = dataService;
        this.personService = personService;
        this.telNoMask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
        this.persons = [];
        this.selectedPersons = [];
        this.passwordChange = false;
        /////// Menu Yetkileri İle ilgili alanlar ve metodlar
        this.selectionMenu = new __WEBPACK_IMPORTED_MODULE_6__angular_cdk_collections__["b" /* SelectionModel */](true, []);
        this.menuColumns = ['select', 'definition'];
        this.sidenavItems = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].Sidenav;
        this.menuDataSource = new __WEBPACK_IMPORTED_MODULE_5__helpers__["a" /* GenericDataSource */](this.sidenavItems);
        if (this.data._id != undefined) {
            this.menuSelect();
        }
        else
            this.data.Roll = "user";
    }
    UserDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.personService.url = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].URLRestFullApi + "/persons";
        this.personService.getAll()
            .subscribe(function (rest) {
            _this.persons = rest.filter(function (p) { return _this.data.Authority.Persons.indexOf(p._id) === -1; });
            _this.selectedPersons = rest.filter(function (p) { return _this.data.Authority.Persons.indexOf(p._id) !== -1; });
        });
    };
    UserDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    UserDialogComponent.prototype.onModelChange = function () {
        this.passwordChange = true;
    };
    UserDialogComponent.prototype.addPerson = function (select) {
        this.selectedPersons.push(select);
        this.persons = this.persons.filter(function (p) { return p._id != select._id; });
        this.data.Authority.Persons.push(select._id);
    };
    UserDialogComponent.prototype.removePerson = function (person) {
        this.persons.push(person);
        this.selectedPersons = this.selectedPersons.filter(function (p) { return p._id != person._id; });
        this.data.Authority.Persons = this.data.Authority.Persons.filter(function (p) { return p != person._id; });
        console.log(this.data);
    };
    UserDialogComponent.prototype.confirmAdd = function () {
        var _this = this;
        this.data.Authority.Modules = [];
        this.selectionMenu.selected
            .forEach(function (row) {
            console.log(row);
            _this.data.Authority.Modules.push(row.id);
        });
        this.dataService.url = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].URLRestFullApi + "/user";
        if (this.data._id == undefined) {
            this.dataService.insert(this.data)
                .subscribe(function (response) {
                _this.data._id = response._id;
                _this.dialogRef.close("1");
            });
        }
        else {
            if (this.passwordChange)
                this.dataService.url = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].URLRestFullApi + "/userAndPassword";
            this.dataService.update(this.data)
                .subscribe(function (Response) {
                console.log("user change");
                _this.dialogRef.close("1");
            });
        }
    };
    UserDialogComponent.prototype.menuSelect = function () {
        var _this = this;
        console.log('Menu');
        console.log(this.data.Authority);
        this.data.Authority.Modules.forEach(function (row) {
            console.log('SelectPerson:', _this.sidenavItems.find(function (p) { return p.id == row; }));
            _this.selectionMenu.select(_this.sidenavItems.find(function (p) { return p.id == row; }));
        });
    };
    UserDialogComponent.prototype.isMenuAllSelected = function () {
        var numSelected = this.selectionMenu.selected.length;
        var numRows = this.sidenavItems.length;
        return numSelected === numRows;
    };
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    UserDialogComponent.prototype.masterToggleMenu = function () {
        var _this = this;
        this.isMenuAllSelected() ?
            this.selectionMenu.clear() :
            this.menuDataSource.data().forEach(function (row) {
                _this.selectionMenu.select(row);
            });
    };
    UserDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-user-dialog',
            template: __webpack_require__("../../../../../src/app/user/user-dialog/user-dialog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user/user-dialog/user-dialog.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_3__services__["c" /* GenericService */]]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MatDialogRef */],
            __WEBPACK_IMPORTED_MODULE_2__models__["g" /* LoginViewModel */],
            __WEBPACK_IMPORTED_MODULE_3__services__["c" /* GenericService */],
            __WEBPACK_IMPORTED_MODULE_3__services__["c" /* GenericService */]])
    ], UserDialogComponent);
    return UserDialogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/user/user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "\n  <div>\n    <mat-card  fxLayout=\"column\" fxLayoutAlign=\"end stretch\" >\n      <h3> Kullanıcı Tanımları </h3>\n  \n\n\n    <mat-table #table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n  \n  \n      <ng-container matColumnDef=\"FirstName\">\n        <mat-header-cell *matHeaderCellDef>Adı</mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.FirstName}}</mat-cell>\n      </ng-container>\n  \n      <ng-container matColumnDef=\"LastName\">\n        <mat-header-cell *matHeaderCellDef>Soyadı</mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.LastName}}</mat-cell>\n      </ng-container>\n  \n      <ng-container matColumnDef=\"GsmNr\">\n        <mat-header-cell *matHeaderCellDef>Telefon No</mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.GsmNr}}</mat-cell>\n      </ng-container>\n  \n      <ng-container matColumnDef=\"EMail\">\n        <mat-header-cell *matHeaderCellDef>E-Posta</mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.Email}}</mat-cell>\n      </ng-container>\n  \n\n      <!-- actions -->\n      <ng-container matColumnDef=\"actions\">\n        <mat-header-cell *matHeaderCellDef>\n          <button mat-mini-fab color=\"primary\" (click)=\"addNew()\">\n            <mat-icon aria-label=\"Add\">add</mat-icon>\n          </button>\n        </mat-header-cell>\n  \n        <mat-cell *matCellDef=\"let row;let i=index\">\n          <button mat-icon-button color=\"accent\" (click)=\"editItem(i,row)\">\n            <mat-icon aria-label=\"Edit\">edit</mat-icon>\n          </button>\n  \n          <button mat-icon-button color=\"accent\" (click)=\"deleteItem(i,row)\">\n            <mat-icon aria-label=\"Delete\">delete</mat-icon>\n          </button>\n        </mat-cell>\n      </ng-container>\n  \n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\" class=\"rowheigth\"></mat-row>\n    </mat-table>\n  </mat-card>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers__ = __webpack_require__("../../../../../src/app/_helpers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models__ = __webpack_require__("../../../../../src/app/_models/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__directives__ = __webpack_require__("../../../../../src/app/_directives/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services__ = __webpack_require__("../../../../../src/app/_services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__user_dialog_user_dialog_component__ = __webpack_require__("../../../../../src/app/user/user-dialog/user-dialog.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var UserComponent = /** @class */ (function () {
    function UserComponent(userService, dialog, snackBar) {
        var _this = this;
        this.userService = userService;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.displayedColumns = ['FirstName', 'LastName', 'GsmNr', 'EMail', 'actions'];
        this.userModel = new __WEBPACK_IMPORTED_MODULE_2__models__["g" /* LoginViewModel */]();
        this.userService.url = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].URLRestFullApi + "/users";
        this.userService.getAll()
            .subscribe(function (response) {
            _this.users = response;
            _this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__helpers__["a" /* GenericDataSource */](_this.users);
        });
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent.prototype.onSubmit = function () {
        this.userService.url = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].URLRestFullApi + "/user";
        this.userService.insert(this.userModel)
            .subscribe(function (response) {
            console.log(response);
        });
    };
    UserComponent.prototype.addNew = function () {
        var _this = this;
        var user = new __WEBPACK_IMPORTED_MODULE_2__models__["g" /* LoginViewModel */]();
        user.Authority = new __WEBPACK_IMPORTED_MODULE_2__models__["a" /* Authority */]();
        user.Authority.Modules = [];
        user.Authority.Persons = [];
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_7__user_dialog_user_dialog_component__["a" /* UserDialogComponent */], {
            data: user,
            disableClose: true
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log(result);
            if (result == "1") {
                _this.users.push(user);
                _this.dataSource.update(_this.users);
            }
        });
    };
    UserComponent.prototype.editItem = function (index, data) {
        var _this = this;
        var user = Object.assign({}, data); /// clone object
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_7__user_dialog_user_dialog_component__["a" /* UserDialogComponent */], { data: user, disableClose: true });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result == "1") {
                _this.users[index] = user;
                _this.dataSource.update(_this.users);
            }
        });
    };
    UserComponent.prototype.deleteItem = function (index, data) {
        var _this = this;
        console.log(data);
        var deleteData = { "Title": data.FirstName + ' ' + data.LastName, "Message": "Dikkat Kayıt silinecektir!!!", "Type": __WEBPACK_IMPORTED_MODULE_3__directives__["c" /* ConfirmType */].Delete };
        var type = __WEBPACK_IMPORTED_MODULE_3__directives__["c" /* ConfirmType */].Delete;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__directives__["a" /* ConfirmDialogComponent */], { data: deleteData });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log(result);
            if (result == "1") {
                _this.userService.url = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].URLRestFullApi + "/user/" + data._id;
                _this.userService.delete()
                    .subscribe(function (result) {
                    console.log(data.FirstName + ' silindi.');
                    _this.snackBar.open('Kayıt Silindi...', '', { duration: 3000, });
                    _this.users.splice(index, 1);
                    _this.dataSource.update(_this.users);
                });
            }
        });
    };
    UserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-user',
            template: __webpack_require__("../../../../../src/app/user/user.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user/user.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_5__services__["c" /* GenericService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__services__["c" /* GenericService */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["m" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["G" /* MatSnackBar */]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    URLRestFullApi: "/api",
    Sidenav: [
        { id: "1", definition: "Tohum Tanımları", imageurl: "local_florist", routeurl: '/seed.card' },
        { id: "2", definition: "Ürün Sorumluları", imageurl: "people_outline", routeurl: '/person' },
        { id: "3", definition: "Üreticiler", imageurl: "nature_people", routeurl: '/grow' },
        { id: "4", definition: "Deneme Tohum Listesi", imageurl: "swap_horiz", routeurl: '/seed.input' },
        { id: "6", definition: "Yıllık Deneme Planı Girişi", imageurl: "playlist_add", routeurl: '/seed.trial' },
        { id: "7", definition: "Gözlem Tablosu", imageurl: "visibility", routeurl: "/seedObservation" },
        { id: "8", definition: "Ürün Pazar Profil Tablosu", imageurl: "bar_chart", routeurl: "/productmarketprofile" },
        { id: "9", definition: "Rakip Firmalar", imageurl: "business", routeurl: "/competitor" },
        {
            id: "5", definition: "Ayarlar", imageurl: "settings",
            subitms: [
                { id: "51", definition: "Çalışma Dönemi", imageurl: "perm_data_setting", routeurl: "" },
                { id: "52", definition: "Kullanıcı Tanımları", imageurl: "account_box", routeurl: "/user" },
                { id: "54", definition: "Gözlem Tanımları", imageurl: "settings_input_component", routeurl: "/observationDefinition" }
            ]
        }
    ]
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bm": "../../../../moment/locale/bm.js",
	"./bm.js": "../../../../moment/locale/bm.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-il": "../../../../moment/locale/en-il.js",
	"./en-il.js": "../../../../moment/locale/en-il.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es-us": "../../../../moment/locale/es-us.js",
	"./es-us.js": "../../../../moment/locale/es-us.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./gu": "../../../../moment/locale/gu.js",
	"./gu.js": "../../../../moment/locale/gu.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./mt": "../../../../moment/locale/mt.js",
	"./mt.js": "../../../../moment/locale/mt.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./tg": "../../../../moment/locale/tg.js",
	"./tg.js": "../../../../moment/locale/tg.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./ug-cn": "../../../../moment/locale/ug-cn.js",
	"./ug-cn.js": "../../../../moment/locale/ug-cn.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map