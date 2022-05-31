import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../Model/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListServiceService {

  private ingredients: Ingredient[]=[
    new Ingredient('Apple',5),
    new Ingredient('Tomato',10),
  ];

  //addIng=new EventEmitter<Ingredient>();

  constructor() { }

  getIngredients(){
    return this.ingredients;
  }

  addIngridient(ingredient: Ingredient){
    this.ingredients.push(ingredient);
  }
}
