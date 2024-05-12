import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.scss'
})
export class FiltersComponent {
  @Output() selectFilter = new EventEmitter<string>();
  handleClick = (type: string) => {
    this.selectFilter.emit(type)
  }
  iconTaco = 'book'
  iconBurger = 'fastfood'
  iconDrink = 'liquor'
  iconBack = 'backspace'
}
