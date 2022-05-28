import { Component } from '@angular/core';
import { Recipie } from './recipie/recipie.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  recipe: boolean = true;
  shopping: boolean = false;

  onNavigate(feature: String){
    if(feature === 'r'){
      this.recipe=true;
      this.shopping=false
    }
    else{
      this.shopping=true;
      this.recipe=false;
    }
  }
  title = 'protut';
}
