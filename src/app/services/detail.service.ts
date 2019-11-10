import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DetailService {

  constructor(
    private http: HttpClient
  ) { }
  getDetail() {
    const res: any = this.http.get('../../assets/json/detail.json').toPromise();
    return res;
  }
}
