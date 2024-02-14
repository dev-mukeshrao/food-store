import { Component } from '@angular/core';
import { Food } from '../../../shared/models/Food';
import { FoodService } from '../../../services/food.service';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { SearchComponent } from '../../partials/search/search.component';
import { TagsComponent } from '../../partials/tags/tags.component';
import { CartPageComponent } from '../cart-page/cart-page.component';
import { NotFoundComponent } from '../../partials/not-found/not-found.component';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

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

  let foodsObservable:Observable<Food[]>;
  activatedRoute.params.subscribe((params) => {
    if(params.searchTerm){
      console.log('params-- ',params['searchTerm'])
      foodsObservable = this.foodService.getAllFoodsBySearchTerm(params.searchTerm);
    }
    else if(params.tag){
      foodsObservable = this.foodService.getAllFoodsByTag(params.tag)
    }
    else{
      foodsObservable = foodService.getAll();
    }

    foodsObservable.subscribe((serverFood) => {
      this.foods  =serverFood;
    })
  })
  
}

}
