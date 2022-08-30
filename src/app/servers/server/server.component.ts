import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { ServersService } from "../servers.service";

@Component({
  selector: "app-server",
  templateUrl: "./server.component.html",
  styleUrls: ["./server.component.css"],
})
export class ServerComponent implements OnInit {
  server: { id: number; name: string; status: string };

  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const id: number = this.getTargetServerID(this.route);
    this.server = this.serversService.getServer(id);
  }

  getTargetServerID(route: ActivatedRoute): number {
    return +route.snapshot.params["id"];
  }
}
