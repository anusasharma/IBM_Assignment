import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getProducts() {
    const url = 'https://random-data-api.com/api/coffee/random_coffee?size=50'
    return this.http.get<any>(url);
  }
}
