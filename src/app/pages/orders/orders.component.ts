import { Component } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl:'./orders.component.html',
   styleUrls:  ['./orders.component.scss']
})
export class OrdersComponent {
  collapsed: boolean = false;

  constructor() { }

  onToggleSideNav() {
    this.collapsed = !this.collapsed;
  }
}
