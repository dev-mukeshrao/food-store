import { Component } from '@angular/core';
import { Food } from '../../../shared/models/Food';
import { FoodService } from '../../../services/food.service';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { SearchComponent } from '../../partials/search/search.component';
import { TagsComponent } from '../../partials/tags/tags.component';
import { CartPageComponent } from '../cart-page/cart-page.component';
import { NotFoundComponent } from '../../partials/not-found/not-found.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet,RouterLink,SearchComponent,TagsComponent,CartPageComponent,NotFoundComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
foods: Food[] = [];

constructor(private foodService:FoodService, activatedRoute: ActivatedRoute){
  activatedRoute.params.subscribe((params) => {
    if(params.searchTerm){
      console.log('params-- ',params['searchTerm'])
      this.foods = this.foodService.getAllFoodsBySearchTerm(params.searchTerm);
    }
    else if(params.tag){
      this.foods = this.foodService.getAllFoodsByTag(params.tag)
    }
    else{
      this.foods = foodService.getAll();
    }
  })
  
}

}
