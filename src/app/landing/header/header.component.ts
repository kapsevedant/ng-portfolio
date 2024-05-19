import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {MenuComponentComponent} from "./menu-component/menu-component.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isMenuOpen: boolean = false;


  constructor(public dialog: MatDialog) {}



  toggleMenu(): void {
    if (this.isMenuOpen) {
      this.dialog.closeAll();
      this.isMenuOpen = false;
    } else {
      const dialogRef = this.dialog.open(MenuComponentComponent, {
        width: '350px',
      });

      dialogRef.afterClosed().subscribe(() => {
        this.isMenuOpen = false;
      });

      this.isMenuOpen = true;
    }
  }


}
