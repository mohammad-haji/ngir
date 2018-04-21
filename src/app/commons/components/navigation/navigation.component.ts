import {Component, OnInit} from "@angular/core";
import {SharedService} from "../../../config/shared.service";
import {Router} from "@angular/router";

declare var persianDate: any;
declare var $: any;
declare var window: any;

@Component({
    selector: "navigation",
    templateUrl: "navigation.component.html",
    styleUrls: ["navigation.component.css"]
})

export class NavigationComponent implements OnInit {
    menuList = [];
    date: Date = new Date();
    isAuthenticated: boolean = false;
    username: string = '';
    userConfig: any;

    constructor(private _userConfig: SharedService, private router: Router) {
    }

    ngOnInit() {
    }

    private setCurrentConfig(_config) {
    }

    logOut() {
    }

    goToProfile() {
    }

    public onMenuItemClick(menuItem: any): void {
    }
}
