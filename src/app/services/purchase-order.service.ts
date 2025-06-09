import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PurchaseOrder } from '../models/purchaseOrder';

@Injectable({
  providedIn: 'root'
})
export class PurchaseOrderService {
  baseUrl: string = 'https://localhost:7079/api';
  constructor(private http: HttpClient) { }

  getPurchaseOrders(): Observable<PurchaseOrder[]>{
    return this.http.get<PurchaseOrder[]>(`${this.baseUrl}/purchaseOrders`);
  }
}
