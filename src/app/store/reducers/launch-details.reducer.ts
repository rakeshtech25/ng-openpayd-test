import { createReducer, on } from "@ngrx/store";
import * as a from "../actions/launch.details.action";

export type LaunchDetailsState = any;

const initialState: LaunchDetailsState = {
  data: null,
  loaded: false,
  loading: false,
  error: null
};

const launchDetailsReducer = createReducer(
  initialState,

  on(a.resetLaunchDetails, () => ({
    ...initialState
  })),

  on(a.loadLaunchDetails, () => ({
    ...initialState,
    loading: true
  })),
  on(a.loadLaunchDetailsSuccess, (_, { payload }) => ({
    ...initialState,
    data: payload,
    loaded: true
  })),
  on(a.loadLaunchDetailsFail, (_, { payload }) => ({
    ...initialState,
    error: payload
  }))
);

export function reducer(
  state: LaunchDetailsState | undefined,
  action: a.LaunchDetailsAction
) {
  return launchDetailsReducer(state, action);
}
