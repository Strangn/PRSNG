import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, Observer } from "rxjs";

import { Vendor } from "./vendor.class";
import { JsonResponse } from "../util/json-response.class";

const url = "http://localhost:8080/Vendors/";

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  list(): Observable<JsonResponse> {
    return this.http.get(url + "List") as Observable<JsonResponse>
  }
  get(id): Observable<JsonResponse>  {
    return this.http.get(url + "Get/" + id) as Observable<JsonResponse>;
  }
  remove(vendor: Vendor): Observable<JsonResponse> {
    return this.http.post(url + "Remove", vendor) as Observable<JsonResponse>;
  }
  change(vendor: Vendor): Observable<JsonResponse> {
    return this.http.post(url + "Change", vendor) as Observable<JsonResponse>;
  }
  create(vendor: Vendor): Observable<JsonResponse> {
    return this.http.post(url + "Create", vendor) as Observable<JsonResponse>;
  }
 
  constructor(private http: HttpClient) {  }
}
