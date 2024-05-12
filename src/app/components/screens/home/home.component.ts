import { Component, OnInit, Input } from '@angular/core';
import { IFood } from '../../../services/food/food.interface';
import { FoodService } from '../../../services/food/food.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass'
})
export class HomeComponent implements OnInit {
  foods: IFood[] = [];
  filteredFoods: IFood[] = [];
  constructor(private foodService: FoodService) {

  }
  ngOnInit(): void {
    this.foodService.getAll().subscribe(data => {
      this.foods = data
      this.filteredFoods = data
    })
  }
  onSearch = (eventData: {search: string}) => {
    this.filteredFoods = this.foods.filter(food => food.title.toLowerCase().includes(eventData.search.toLowerCase()))
  }
  onFilter = (type: string) => {
    this.filteredFoods = this.foods.filter(food => food.type.toLowerCase().includes(type.toLowerCase()))
  }
}
