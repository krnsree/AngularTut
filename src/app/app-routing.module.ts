import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipieDetailComponent } from './recipie/recipie-detail/recipie-detail.component';
import { RecipieEditComponent } from './recipie/recipie-edit/recipie-edit.component';
import { RecipieStartComponent } from './recipie/recipie-start/recipie-start.component';
import { RecipieComponent } from './recipie/recipie.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const routes: Routes = [
  {path: '', redirectTo:'/recipies', pathMatch: 'full'},
  {path: 'recipies', component: RecipieComponent, children:[
    {path:'',component:RecipieStartComponent},
    {path:'new', component:RecipieEditComponent},
    {path:':id', component:RecipieDetailComponent},
    {path:':id/edit', component:RecipieEditComponent},
  ]},
  {path: 'shoppinglist', component: ShoppingListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
