import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './shopping-list/shopping-list-edit/shopping-list-edit.component';
import { RecipieListComponent } from './recipie/recipie-list/recipie-list.component';
import { RecipieItemComponent } from './recipie/recipie-item/recipie-item.component';
import { RecipieDetailComponent } from './recipie/recipie-detail/recipie-detail.component';
import { HeaderComponent } from './header/header.component';
import { RecipieComponent } from './recipie/recipie.component';
import { FormsModule } from '@angular/forms';
import { DropdownDirective } from './directives/dropdown.directive';
import { RecipeServiceService } from './services/recipe-service.service';
import { ShoppingListServiceService } from './services/shopping-list-service.service';
import { RecipieStartComponent } from './recipie/recipie-start/recipie-start.component';
import { RecipieEditComponent } from './recipie/recipie-edit/recipie-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    RecipieListComponent,
    RecipieItemComponent,
    RecipieDetailComponent,
    HeaderComponent,
    RecipieComponent,
    DropdownDirective,
    RecipieStartComponent,
    RecipieEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [RecipeServiceService,ShoppingListServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
