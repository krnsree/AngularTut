import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipie } from '../recipie.model';
@Component({
  selector: 'app-recipie-list',
  templateUrl: './recipie-list.component.html',
  styleUrls: ['./recipie-list.component.css']
})
export class RecipieListComponent implements OnInit {

  @Output()
  onRecipeSelected=new EventEmitter<Recipie>();

  recipies: Recipie[] = [
    new Recipie('A Test Recipie' , 'Test Recipie' ,
     'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&webp=true&resize=375,341'),
     new Recipie('A Another Test Recipie' , 'Test Recipie' ,
     'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&webp=true&resize=375,341')
    
  ];

  constructor() { }

  ngOnInit(): void {
  }

  getInfo(recipie: Recipie){
    this.onRecipeSelected.emit(recipie);
  }
}
