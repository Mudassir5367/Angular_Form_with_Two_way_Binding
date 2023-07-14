import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  url: any  = 'https://jsonplaceholder.typicode.com/posts'

  constructor(private http: HttpClient) { }

  // getData(){
  //   return this.http.get<any>(this.url);
  // }

  // postData(data:any){
  //   return this.http.post<any>(this.url,data);
  // }
}
