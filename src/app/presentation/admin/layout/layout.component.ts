import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'app-layout',
    templateUrl: 'layout.component.html',
    styleUrls: ['./layout.component.scss'],
})

export class LayoutComponent implements OnInit {

    menu: object[] = [];

    display: boolean
    items: MenuItem[] = []
    activeItem: MenuItem

    breadcrumbItems: MenuItem[] = []

    constructor() {}

    ngOnInit() {
        this.setTabMenu();
        this.setItemsMenu();
        this.activeItem = this.items[0];
    }

    setItemsMenu() {

        this.items = [
            {
                label: 'COURIER',
                url: 'courier'
            },
            {
                label: 'EXPO',
                url: 'expo'
            },
            {
                label: 'SOFTPAD',
                url: 'softpad'
            }
        ]
    }

    setTabMenu() {
        this.menu = [
            {label: 'HOME'},
            {label: 'COURIER'},
            {label: 'EXPO'},
            {label: 'SOFTPAD'}
        ];
    }
}