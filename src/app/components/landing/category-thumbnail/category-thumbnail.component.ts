import { Component, Input, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-category-thumbnail',
  templateUrl: './category-thumbnail.component.html',
  styleUrls: ['./category-thumbnail.component.css']
})
export class CategoryThumbnailComponent implements OnInit {
  @Input() category?: Category;
  categoryIcon?: string;
  //flipped: boolean = false;
  constructor() { }

  ngOnInit(): void {
    if(this.category){
      this.categoryIcon = '&#x' + this.category.iconCode;
    }
  }

  flipCard(event: any){
    event.currentTarget.classList.toggle('flip');
  }
}
