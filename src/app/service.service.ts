import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  page = "home-page";
  baseURL: string = "https://beautyappadmin.stage02.obdemo.com/api/v2/";

  constructor(private http: HttpClient) { }


  getApi(){
		return this.http.get<any>(this.baseURL+this.page).pipe(map(res=>{

      return res;

		}));
	}
}
