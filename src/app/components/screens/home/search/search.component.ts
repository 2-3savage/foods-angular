import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IFood } from '../../../../services/food/food.interface';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.sass'
})
export class SearchComponent {
  search: string = ''
  @Output() findFoods = new EventEmitter<{search: string}>()
  constructor() {

  }
  
  handleSearch = (e: KeyboardEvent) => {
    if (e.key === 'Enter'){
      this.findFoods.emit({search: this.search})
    }
  }
}
