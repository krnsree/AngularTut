import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeServiceService } from 'src/app/services/recipe-service.service';
import { Recipie } from '../../Model/recipie.model';
@Component({
  selector: 'app-recipie-list',
  templateUrl: './recipie-list.component.html',
  styleUrls: ['./recipie-list.component.css']
})
export class RecipieListComponent implements OnInit {

  recipies!:Recipie[];

  constructor(private recipieService: RecipeServiceService, private router: Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.recipies = this.recipieService.getRecipes();
  }
  onNewRecipe(){
    this.router.navigate(['new'],{relativeTo: this.route});
  }
}
