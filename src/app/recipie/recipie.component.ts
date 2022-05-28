import { Component, Input, OnInit } from '@angular/core';
import { Recipie } from './recipie.model';

@Component({
  selector: 'app-recipie',
  templateUrl: './recipie.component.html',
  styleUrls: ['./recipie.component.css']
})
export class RecipieComponent implements OnInit {

  selectedRecipe!: Recipie;
  isRecipieSelected=false;
  constructor() { }

  ngOnInit(): void {
  }

  setRecipie(rec: Recipie){
    this.selectedRecipe=rec;
    this.isRecipieSelected=true;
  }
}
