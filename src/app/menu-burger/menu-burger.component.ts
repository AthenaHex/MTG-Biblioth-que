import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-burger',
  templateUrl: './menu-burger.component.html',
  styleUrls: ['./menu-burger.component.css']
})
export class MenuBurgerComponent {
  //___ Variables
  menuIsOpen:boolean = false;

  toggleMenu():void{
    this.menuIsOpen = !this.menuIsOpen;
    console.log("menuIsOpen : ",this.menuIsOpen);
  }

}
