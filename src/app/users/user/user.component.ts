import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { Subscription } from "rxjs";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"],
})
export class UserComponent implements OnInit, OnDestroy {
  user: { id: number; name: string };
  // routeParamsSubscription: Subscription;
  showUser: boolean = false;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.user = {
      id: this.route.snapshot.params["id"],
      name: this.route.snapshot.params["name"],
    };

    //? HELP If changing 'params' happens in th future
    // this.routeParamsSubscription = this.route.params.subscribe(
    //   (params: Params) => {
    //     this.user.name = params.name;
    //     this.user.id = params.id;
    //   }
    // );

    if (this.user.id && this.user.name) this.showUser = true;
  }

  onBack() {
    this.router.navigate(["../users"]);
  }

  ngOnDestroy() {
    // this.routeParamsSubscription.unsubscribe();
  }
}
