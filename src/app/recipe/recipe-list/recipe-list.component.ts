import { Component, OnInit } from '@angular/core';

import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
})
export class RecipeListComponent implements OnInit {
  recipe = new Recipe('Dummy', 'Dummy', 'https://row.boge.com/sites/default/files/BOGE-SLF-75-3.png');

  constructor() { }

  ngOnInit() {
  }

}