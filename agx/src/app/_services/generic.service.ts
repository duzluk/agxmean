import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment'
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class GenericService<T> {
  constructor(private http: HttpClient) {}
  url:string;


  insert(data: T) {
    return this.http.post<T>(this.url,data);
  }

  update(data:T){
    return this.http.put<T>(this.url,data);
  }

  getAll(): Observable<T[]> {
    return this.http
    .get<Array<T>>(this.url)
    .map(response => response)
    .catch(this.handleError);
  }

  getOne():Observable<T>{
    return this.http
    .get<T>(this.url)
    .map(response=>response)
    .catch(this.handleError);
  }

  delete(){
    return this.http.delete<T>(this.url)
  }

  private handleError(res: HttpErrorResponse) {
    console.error(res.error);
    return Observable.throw(res.error || 'Server error');
  }
}
