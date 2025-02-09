import { Component, Input, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-category-thumbnail',
  templateUrl: './category-thumbnail.component.html',
  styleUrls: ['./category-thumbnail.component.css']
})
export class CategoryThumbnailComponent implements OnInit {
  @Input() category?: Category;
  //flipped: boolean = false;
  constructor() { }

  ngOnInit(): void {}

  flipCard(event: any){
    event.currentTarget.classList.toggle('flip');
    console.log(event.currentTarget)
  }
}
