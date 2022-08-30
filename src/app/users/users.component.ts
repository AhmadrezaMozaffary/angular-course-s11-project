import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"],
})
export class UsersComponent {
  users = [
    {
      id: 1,
      name: "Max",
    },
    {
      id: 2,
      name: "Anna",
    },
    {
      id: 3,
      name: "Chris",
    },
    {
      id: 4,
      name: "Ahmad",
    },
  ];

  constructor(private route: ActivatedRoute, private router: Router) {}

  onNavigateToUser(user: { id: string; name: string }) {
    this.router.navigate([user.name, user.id], { relativeTo: this.route });
  }
}
