import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { FoodItemComponent } from './food-item/food-item.component';
import { SearchComponent } from './search/search.component';
import { FoodService } from '../../../services/food/food.service';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FiltersComponent } from './filters/filters.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    
    HomeComponent,
    FoodItemComponent,
    SearchComponent,
    FiltersComponent
  ],
  imports: [
    MatIconModule,
    CommonModule,
    RouterModule,
    FormsModule
  ],
  
})
export class HomeModule { }
