import { Component } from "@angular/core";
import { AuthService } from "./auth.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  constructor(private authService: AuthService) {}

  loggedIn = false;

  onLogin() {
    this.authService.logging("in");
    this.loggedIn = true;
  }

  onLogout() {
    this.authService.logging("out");
    this.loggedIn = false;
  }
}
