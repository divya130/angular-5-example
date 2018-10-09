import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {environment} from './../../../environments/environment';
@Injectable()
export class GeneralService {
constructor(private http: HttpClient) {
}
getHeaders() {
  const header = {headers: new HttpHeaders().set('Authorization', '')};
  return header;
}
getMethod(url): Observable<any> {
  const headers = this.getHeaders()
    return this.http.get(environment.url + url);

  }
  postMethod(url, req): Observable<any> {
    return this.http.post(environment.url + url,  req);

  }
  putMethod(url, req): Observable<any> {
    return this.http.put(environment.url + url,  req);

  }
  deleteMethod(url): Observable<any> {
    return this.http.delete(environment.url + url);

  }
}
