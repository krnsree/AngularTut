import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../Model/ingredient.model';
import { Recipie } from '../Model/recipie.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeServiceService {

  recipeSelected = new EventEmitter<Recipie>();

  private recipies: Recipie[] = [
    new Recipie('Tasty Schnitzel' , 'A super tasty Schnitzel' ,
     'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&webp=true&resize=375,341',
     [
       new Ingredient('Meat',1),
       new Ingredient('Potato', 5)
     ]),
     new Recipie('Big Fat Burger' , 'Test Recipie' ,
     'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&webp=true&resize=375,341',
     [
      new Ingredient('Buns',1),
      new Ingredient('Meat', 5)
    ])
    
  ];

  getRecipes(){
    return this.recipies.slice();
  }

  getRecipe(id: number){

    return this.recipies[id];

  }

  constructor() { }
}
