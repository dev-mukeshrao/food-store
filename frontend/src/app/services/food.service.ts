import { Injectable } from '@angular/core';
import { Food } from '../shared/models/Food';
import { sample_foods, sample_tags } from '../../data';
import { Tags } from '../shared/models/Tags';
import { HttpClient } from '@angular/common/http';
import { FOODS_URL, FOOD_BY_ID_URL, FOOD_SEARCH_URL, TAG_FILTER_URL, TAG_URL } from '../shared/constrants/urls';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
 
})
export class FoodService {

  constructor(private http:HttpClient) { }
  getAll():Observable<Food[]>{
    //return sample_foods;
    return this.http.get<Food[]>(FOODS_URL)
  }

  getAllFoodsBySearchTerm(searchTerm:string){
    //return this.getAll().filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase()))
    return this.http.get<Food[]>(FOOD_SEARCH_URL + searchTerm)
  }

  getAllTags():Observable<Tags[]>{
    return this.http.get<Tags[]>(TAG_URL)
  }

  

  getAllFoodsByTag(tag: string): Observable<Food[]> {
    return tag === "All" ?
      this.getAll() : this.http.get<Food[]>(TAG_FILTER_URL + tag)
  }

  getFoodById(foodId:string):Observable<Food>{
    return this.http.get<Food>(FOOD_BY_ID_URL + foodId)
  }
}

