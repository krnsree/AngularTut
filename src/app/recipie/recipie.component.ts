import { Component, Input, OnInit } from '@angular/core';
import { RecipeServiceService } from '../services/recipe-service.service';
import { Recipie } from '../Model/recipie.model';

@Component({
  selector: 'app-recipie',
  templateUrl: './recipie.component.html',
  styleUrls: ['./recipie.component.css']
})
export class RecipieComponent implements OnInit {

  constructor(private recipeService:RecipeServiceService) { }

  ngOnInit(): void {
  }
}
