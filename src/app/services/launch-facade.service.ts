import { LaunchListState } from "./../store/reducers/launch-list.reducer";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import {
  loadLaunchList,
  loadLaunchDetails,
  resetLaunchDetails
} from "../store/actions";
import { launchListQuery, launchDetailsQuery } from "../store/selectors";

@Injectable({
  providedIn: "root"
})
export class LaunchFacadeService {
  constructor(private readonly store: Store<LaunchListState>) {}

  // Launch List
  readonly launchList$ = this.store.select(launchListQuery.data);

  // Launch Details
  readonly launchDetails$ = this.store.select(launchDetailsQuery.data);
  readonly launchDetailsLoaded$ = this.store.select(launchDetailsQuery.loaded);

  loadLaunchList() {
    this.store.dispatch(loadLaunchList());
  }

  loadLaunchDetailsById(id: string) {
    this.store.dispatch(loadLaunchDetails({ id }));
  }

  resetLaunchDetails() {
    this.store.dispatch(resetLaunchDetails());
  }
}
