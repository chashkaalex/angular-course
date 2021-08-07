import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'Dummy Recipe',
      "This is just a dummy recipe",
      "https://p0.pxfuel.com/preview/995/747/603/recipe-dish-lunch-nutrition.jpg"),
      new Recipe(
        'Another dummy Recipe',
        "This is just another dummy recipe",
        "https://p0.pxfuel.com/preview/995/747/603/recipe-dish-lunch-nutrition.jpg")
  ];
  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe)
  }

}
