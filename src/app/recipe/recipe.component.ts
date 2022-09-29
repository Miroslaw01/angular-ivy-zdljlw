import { Component, OnInit } from '@angular/core';
//import { RecipeDetailComponent } from '../recipe-detail/recipe-detail.component';
import { Recipe } from './recipe.model';

//@ngModule({
//  declarations: [RecipeDetailComponent],
//})
@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
})
export class RecipeComponent implements OnInit {
  selectedRecipe: Recipe;
  constructor() {}

  ngOnInit() {}
}
