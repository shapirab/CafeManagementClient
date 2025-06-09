import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { PurchaseOrderService } from 'src/app/services/purchase-order.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  totalCategories: number = 0;
  totalProducts: number = 0;
  totalOrders: number = 0;
  totalUsers: number = 0;

  constructor(private categoryService: CategoryService, private productService: ProductService,
    private purchaseOrderService: PurchaseOrderService, private userService: UserService) { }

  ngOnInit(): void {
    this.loadCategories();
    this.loadProducts();
    this.loadOrders();
    this.loadUsers();
  }

  loadCategories(){
    this.categoryService.getCategories().subscribe({
      next: categories => {
        if(categories.length > 0){
          this.totalCategories = categories.length;
        }
      },
      error: err => console.log(err)
    });
  }

  loadProducts(){
    this.productService.getProducts().subscribe({
      next: products => {
        if(products.length > 0){
          this.totalProducts = products.length;
        }
      },
      error: err => console.log(err)
    });
  }

  loadOrders(){
    this.purchaseOrderService.getPurchaseOrders().subscribe({
      next: po => {
        if(po.length > 0){
          this.totalOrders = po.length;
        }
      },
      error: err => console.log(err)
    });
  }

  loadUsers(){
    this.userService.getAllUsers().subscribe({
      next: users => {
        if(users.length > 0){
          this.totalUsers = users.length;
        }
      },
      error: err => console.log(err)
    });
  }
}

