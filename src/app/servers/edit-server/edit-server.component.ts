import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { cpuUsage } from "process";

import { ServersService } from "../servers.service";

@Component({
  selector: "app-edit-server",
  templateUrl: "./edit-server.component.html",
  styleUrls: ["./edit-server.component.css"],
})
export class EditServerComponent implements OnInit {
  server: { id: number; name: string; status: string };
  serverName = "";
  serverStatus = "";
  allowEdit = false;

  constructor(
    private serversService: ServersService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const id: number = +this.route.snapshot.params["id"];
    //this.allowEdit = this.route.snapshot.queryParams["allowEditing"];

    this.route.queryParams.subscribe((qParams: Params) => {
      //! HELP qParams always has typeof string and if we use '!!' operator to change the type to boolean, it will convert to boolean but 'true' and 'false' during the conversion will be always true > !!'true' === !!'false' === true

      this.allowEdit = qParams["allowEditing"] === "true" ? true : false;
    });

    this.server = this.serversService.getServer(id);

    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {
      name: this.serverName,
      status: this.serverStatus,
    });
    this.onBackToServers();
  }

  onBackToServers() {
    this.router.navigate(["/servers"]);
  }
}
