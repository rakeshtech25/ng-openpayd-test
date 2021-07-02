import { LaunchListState } from "./../store/reducers/launch-list.reducer";
import { map } from "rxjs/operators";
import { PastLaunchesListGQL } from "./spacexGraphql.service";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import {
  loadLaunchList,
  loadLaunchDetails,
  resetLaunchDetails
} from "../store/actions";
import * as launchListQuery from "../store/selectors/launch-list.selector";
import * as launchDetailsQuery from "../store/selectors/launch-details.selector";

@Injectable({
  providedIn: "root"
})
export class LaunchFacadeService {
  // Launch List
  readonly launchListState$ = this.store.select(
    launchListQuery.getLaunchListState
  );
  readonly launchList$ = this.store.select(launchListQuery.getLaunchList);
  readonly launchListLoaded$ = this.store.select(
    launchListQuery.getLaunchListLoaded
  );
  readonly launchListLoading$ = this.store.select(
    launchListQuery.getLaunchListLoading
  );

  // Launch Details
  readonly launchDetails$ = this.store.select(
    launchDetailsQuery.getLaunchDetails
  );
  readonly launchDetailsLoaded$ = this.store.select(
    launchDetailsQuery.getLaunchDetailsLoaded
  );

  constructor(
    private readonly store: Store<LaunchListState>,
    private readonly pastLaunchesService: PastLaunchesListGQL
  ) {}

  pastLaunchListStoreCache() {
    this.store.dispatch(loadLaunchList());
    return this.launchList$;
  }

  pastLaunchListFacade() {
    return this.pastLaunchesService
      .fetch({ limit: 30 })
      .pipe(map(res => res.data.launchesPast));
  }

  pastLaunchDetailsStoreCache(id: string) {
    this.store.dispatch(loadLaunchDetails({ id }));
    return this.launchDetails$;
  }

  resetLaunchDetails() {
    this.store.dispatch(resetLaunchDetails());
  }
}
