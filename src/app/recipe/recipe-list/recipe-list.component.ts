import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styles: [],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeSelected = new EventEmitter<Recipe>();

  recipe = new Recipe(
    'Dummy',
    'Dummy',
    'https://cdn-icons-png.flaticon.com/512/1256/1256397.png'
  );

  selectedRecipe: Recipe;

  constructor() {}

  ngOnInit() {}

  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }
}
