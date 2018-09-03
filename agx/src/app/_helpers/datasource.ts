import { DataSource } from "@angular/cdk/collections";
import { BehaviorSubject } from "rxjs";
import { Observable } from "rxjs/Observable";

export class GenericDataSource extends DataSource<any> {
    private dataSubject = new BehaviorSubject<any[]>([]);
  
    data() {
      return this.dataSubject.value;
    }
  
    update(data) {
      this.dataSubject.next(data);
    }
  
  
    constructor(data: any[]) {
      super();
      this.dataSubject.next(data);
    }
    connect(): Observable<any[]> {
  
      //return this.categoryService.getAll() ;
      return this.dataSubject;
    }
    disconnect() { }
  }
  