import { createFeatureSelector, createSelector } from "@ngrx/store";
import { LaunchDetailsState } from "../reducers/launch-details.reducer";

const getLaunchDetailsState = createFeatureSelector<LaunchDetailsState>(
  "launchDetails"
);

const data = createSelector(
  getLaunchDetailsState,
  (state: any) => state.data
);

const loaded = createSelector(
  getLaunchDetailsState,
  (state: any) => state.loaded
);

const loading = createSelector(
  getLaunchDetailsState,
  (state: any) => state.loading
);

export const launchDetailsQuery = { data, loaded, loading };
