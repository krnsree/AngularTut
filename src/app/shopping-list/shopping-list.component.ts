import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../Model/ingredient.model';
import { ShoppingListServiceService } from '../services/shopping-list-service.service';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients!: Ingredient[];

  constructor(private shplistser : ShoppingListServiceService) { }

  ngOnInit(): void {
    this.ingredients=this.shplistser.getIngredients();
  }
}
