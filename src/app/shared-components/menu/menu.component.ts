import { Component, OnInit, Input } from '@angular/core';

interface MenuItems {
    title: string,
    icon: string,
    path: string,
    role: string[]
} 

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent  implements OnInit {

  @Input() menuItems?: MenuItems[]

  constructor() { }

  ngOnInit() {}

}
