import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeServiceService } from 'src/app/services/recipe-service.service';
import { ShoppingListServiceService } from 'src/app/services/shopping-list-service.service';
import { Recipie } from '../../Model/recipie.model';

@Component({
  selector: 'app-recipie-detail',
  templateUrl: './recipie-detail.component.html',
  styleUrls: ['./recipie-detail.component.css']
})
export class RecipieDetailComponent implements OnInit {

  recipieSelected!:Recipie;
  id!:number;
  constructor(private shpListSer: ShoppingListServiceService, private recipie: RecipeServiceService,private router:Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      res =>{
        this.id=+res['id'];
        this.recipieSelected=this.recipie.getRecipe(this.id);
      }
    )
  }

  sendIng(){
    for(let ingredient of this.recipieSelected.ingredients){
    this.shpListSer.addIngridient(ingredient)    
  }
  }

  onEditRecipe(){
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

}
