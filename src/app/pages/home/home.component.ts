import { Component,OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MenuComponentComponent} from "../../landing/header/menu-component/menu-component.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent{

  // isMenuOpen: boolean = false;
  //
  //
  // constructor(public dialog: MatDialog) {}
  //
  //
  //
  // toggleMenu(): void {
  //   if (this.isMenuOpen) {
  //     this.dialog.closeAll();
  //     this.isMenuOpen = false;
  //   } else {
  //     const dialogRef = this.dialog.open(MenuComponentComponent, {
  //       width: '350px',
  //     });
  //
  //     dialogRef.afterClosed().subscribe(() => {
  //       this.isMenuOpen = false;
  //     });
  //
  //     this.isMenuOpen = true;
  //   }
  // }


}
