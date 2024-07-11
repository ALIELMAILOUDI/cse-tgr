import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserLoginComponent } from "./user-login/user-login.component";
import { UserMenuComponent } from './user-menu/user-menu.component';
import { UserSelectionComponent } from './user-selection/user-selection.component';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, UserLoginComponent,UserMenuComponent,UserSelectionComponent,NgIf]
})
export class AppComponent {
  title = 'my-app';
}
