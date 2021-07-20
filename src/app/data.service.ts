import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

  export class DataService {
      constructor(private http: HttpClient) {}
      get(url: string): Observable<any> {
        return this.http.get(url).pipe(map(res => res))
      }
      post(url: string, body: any) {
        console.log('service Hit', url)  
        return this.http.post(url, body).pipe(map(res => res))
      }
      postTextResponse(url: string, body: any) {
        return this.http.post(url, body, { responseType: 'text' }).pipe(map(res => res))
      }
      getTextResponse(url: string): Observable<any> {
        return this.http.get(url, { responseType: 'text' }).pipe(map(res => res))
      }
    }