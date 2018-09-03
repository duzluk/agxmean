import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FieldInfo } from './FieldInfo';
import { MAT_DATE_LOCALE, DateAdapter, MAT_DATE_FORMATS } from '@angular/material';
import { MomentDateAdapter, MAT_MOMENT_DATE_FORMATS } from '@angular/material-moment-adapter';
import createNumberMask from 'text-mask-addons/dist/createNumberMask'
import createAutoCorrectedDatePipe from 'text-mask-addons/dist/createAutoCorrectedDatePipe'

@Component({
  selector: 'generic-field',
  templateUrl: './generic-field.component.html',
  styleUrls: ['./generic-field.component.css'],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'tr-TR' },
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS }],
})
export class GenericFieldComponent implements OnInit  {
  @Input() fieldInfo: FieldInfo;
  @Input() row:string;
  @Input() col:string;
//  @Input() value:any;
  @Output() valueChange = new EventEmitter<FieldInfo>(); 
  @Output() keypress=new EventEmitter<KeydownValue>()
  ngOnInit(){
    // if(this.value!=undefined)
    // this.fieldInfo.Value=this.value;
  }
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
  onChangeValue(fieldInfo)
  {
    this.valueChange.emit(fieldInfo);
  }

  keydown(event,colIndex,rowIndex)
  {
    let tag="element"+colIndex;
    this.keypress.emit({event,tag,rowIndex})
  }

  public telNoMask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
  public numberMask = createNumberMask({
    prefix: '',
    suffix: '',
    includeThousandsSeparator :false // Binler Basamağı ayıracı.
  });
  autoCorrectedDatePipe: any = createAutoCorrectedDatePipe('dd.mm.yyyy');
  dateMask: any = [/\d/, /\d/, '.', /\d/, /\d/, '.', /\d/, /\d/, /\d/, /\d/];

}
interface KeydownValue
{
  event:any;
  tag:string;
  rowIndex:number
}