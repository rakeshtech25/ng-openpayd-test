import { LaunchFacadeService } from "./../services/launch-facade.service";
import { Component, ChangeDetectionStrategy, OnInit } from "@angular/core";

@Component({
  selector: "app-launch-list",
  templateUrl: "./launch-list.component.html",
  styleUrls: ["./launch-list.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LaunchListComponent implements OnInit {
  constructor(private readonly launchFacade: LaunchFacadeService) {}

  readonly defaultImage = "assets/default-image.png";
  readonly pastLaunches$ = this.launchFacade.launchList$;

  ngOnInit() {
    this.launchFacade.loadLaunchList();
  }
}
