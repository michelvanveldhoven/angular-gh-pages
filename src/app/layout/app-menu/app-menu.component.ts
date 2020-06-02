import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { retry } from 'rxjs/operators';

@Component({
  selector: 'app-menu',
  templateUrl: './app-menu.component.html',
  styleUrls: ['./app-menu.component.scss']
})
export class AppMenuComponent implements OnInit {
  menu: any[];
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    const rc = this.router.config;
    this.menu = rc
      .filter(m => m.data && m.data.menu)
      .map((m: any) => this.convertToMenu(m));
  }

  showInfo(menuItem: any): void {

  }

  convertToMenu(dm: any): any {
    const d = dm.data && dm.data.menu;
    if (!d) { return; }
    return {icon: d.icon, title: d.title, path: dm.path} as any;
  }

}
