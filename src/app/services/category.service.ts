import { Injectable } from '@angular/core';
import { Category } from '../models/category';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categories: Category[] = [];
  baseUrl: string = 'https://localhost:7079/api';
  constructor(private http: HttpClient) {}

  getCategories():Observable<Category[]>{
    return this.http.get<Category[]>(`${this.baseUrl}/categories`);
  }
}
