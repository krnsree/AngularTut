import { Component, Input, OnInit } from '@angular/core';
import { RecipeServiceService } from 'src/app/services/recipe-service.service';
import { Recipie } from '../../Model/recipie.model';

@Component({
  selector: 'app-recipie-item',
  templateUrl: './recipie-item.component.html',
  styleUrls: ['./recipie-item.component.css']
})
export class RecipieItemComponent implements OnInit {

  @Input()
  recipie!: Recipie;
  @Input()
  index!: number;

  ngOnInit(): void {
  }
}
