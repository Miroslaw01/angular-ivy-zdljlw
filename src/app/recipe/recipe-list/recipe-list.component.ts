import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styles: [],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
    'mhmh',
    'mhmh',
    'https://i.kym-cdn.com/entries/icons/original/000/022/134/elmo.jpg'
  ),
  new Recipe(
    'mhmh2',
    'mhmh2',
    'https://c.tenor.com/3z4G6A1_vpwAAAAM/monty-python-black-knight.gif'
  ),
  new Recipe(
    'mhmh3',
    'mhmh3',
    'https://static.giga.de/wp-content/uploads/2018/01/y-tho-meme.jpg'
  ) 
];

  selectedRecipe: Recipe;

  constructor() {}

  ngOnInit() {}

  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }
}
