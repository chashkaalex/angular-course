import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/igredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'Poached eggs',
      "HOW TO MAKE POACHED EGGS (PERFECTLY)",
      "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/06/poached-eggs-9.jpg",
      [
        new Ingredient('egg', 1),
        new Ingredient('salt', 1),
        new Ingredient('pepper', 1)
      ]),
      new Recipe(
        'Tasty Schnitzel',
        "A super tasty schnitzel - just awesome",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Breitenlesau_Krug_Br%C3%A4u_Schnitzel.JPG/1280px-Breitenlesau_Krug_Br%C3%A4u_Schnitzel.JPG",
        [
          new Ingredient('meat', 1),
          new Ingredient('french fries', 20)
        ])
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    // return [...this.recipes];
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIgredients(ingredients);
  }
}
