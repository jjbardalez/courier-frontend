import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';
@Component({
  selector: 'app-layout',
  templateUrl: 'layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {

  itemMenuIndex: number;

  tabMenu: MenuItem[] = [];

  display: boolean;
  panelMenu: MenuItem[] = [];
  activeItem: MenuItem;

  breadcrumbItems: MenuItem[] = [];

  constructor(private _router: Router) {}

  ngOnInit() {
    this.setTabMenu();
    this.setItemsPanelMenu();
    this.itemMenuIndex = 2
  }

  setItemsPanelMenu() {
    this.panelMenu = [
      {
        label: 'COURIER',
        items: []
      },
      {
        label: 'EXPO',
        items: [
          {
            label: 'Guía Courier',
            command: () => this._router.navigate(['admin/expo/guide-courier'])
          },
          {
            label: 'Manifiesto',
            command: () => this._router.navigate(['admin/expo/manifest']),
          },
          {
            label: 'Facturación',
            command: () => this._router.navigate(['admin/expo/billing']),
          },
          {
            label: 'Créditos',
            command: () => this._router.navigate(['admin/expo/credits']),
          },
        ],
      },
      {
        label: 'SOFTPAD',
        items: [],
      },
    ];
  }

  setTabMenu() {
    this.tabMenu = [
      { label: 'HOME' },
      { label: 'COURIER' },
      { label: 'EXPO' },
      { label: 'SOFTPAD' },
    ];
  }
}
