import {Component} from "@angular/core";
import {NAVIGATION_CONST} from "../../../config/navigation.const";


@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavBarComponent {
    constructor() {

    }

    get sections() {
        return NAVIGATION_CONST;
    }

    get sectionKeys() {
        return Object.keys(NAVIGATION_CONST);
    }

    onToggleMenuClick() {
        // this.sidemenuService.onToggle();
    }
}