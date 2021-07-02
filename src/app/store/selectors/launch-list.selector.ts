import { LaunchListState } from "../reducers";
import { createFeatureSelector, createSelector } from "@ngrx/store";

const getLaunchListState = createFeatureSelector<LaunchListState>("launchList");

const data = createSelector(
  getLaunchListState,
  (state: any) => state.data
);

const loaded = createSelector(
  getLaunchListState,
  (state: any) => state.loaded
);

const loading = createSelector(
  getLaunchListState,
  (state: any) => state.loading
);

export const launchListQuery = { data, loaded, loading };
