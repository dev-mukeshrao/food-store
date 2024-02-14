import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Tags } from '../../../shared/models/Tags';
import { FoodService } from '../../../services/food.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tags',
  standalone: true,
  imports: [RouterLink],
 
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.css'
})
export class TagsComponent {
  
  tags?:Tags[];

  constructor(foodService:FoodService){
    foodService.getAllTags().subscribe(serverTags => this.tags = serverTags);
  }

}
