import {NgModule} from '@angular/core';
import {MatButtonModule, MatIconModule, MatMenuModule} from '@angular/material';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {NavBarComponent} from "./navbar.component";

@NgModule({
    imports: [MatButtonModule, MatMenuModule, RouterModule, CommonModule, RouterModule, MatIconModule],
    exports: [NavBarComponent],
    declarations: [NavBarComponent],
})
export class NavBarModule {
}
