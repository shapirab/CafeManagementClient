import { Injectable } from '@angular/core';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categories: Category[] = [];
  constructor() {
    this.loadCategories();
  }

  loadCategories(){
    this.categories = [
      { Id: 1, Name: 'Coffee', IsBestSeller: true},
      { Id: 2, Name: 'Pizza', IsBestSeller: true},
      { Id: 3, Name: 'Ice Cream', IsBestSeller: true},
      { Id: 4, Name: 'Asian', IsBestSeller: true}
    ];
  }
}
