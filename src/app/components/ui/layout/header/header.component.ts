import { Component } from '@angular/core';
import { IMenuItem } from './header.interface';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.sass'
})
export class HeaderComponent {
  menuItems: IMenuItem[] = [
    {
      path: '/',
      icon: 'home'
    },
    {
      path: '/sale',
      icon: 'percent'
    },
    {
      path: '/favorites',
      icon: 'favorite'
    },
    {
      path: '/profile',
      icon: 'person'
    }

  ]

  constructor() { }
}
