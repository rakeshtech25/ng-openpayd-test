import { createReducer, on } from "@ngrx/store";
import {
  LaunchDetailsAction,
  resetLaunchDetails,
  loadLaunchDetails,
  loadLaunchDetailsFail,
  loadLaunchDetailsSuccess
} from "../actions";

export type LaunchDetailsState = any;

const initialState: LaunchDetailsState = {
  data: null,
  loaded: false,
  loading: false,
  error: null
};

const launchDetailsReducer = createReducer(
  initialState,

  on(resetLaunchDetails, () => ({
    ...initialState
  })),

  on(loadLaunchDetails, () => ({
    ...initialState,
    loading: true
  })),
  on(loadLaunchDetailsSuccess, (_, { payload }) => ({
    ...initialState,
    data: payload,
    loaded: true
  })),
  on(loadLaunchDetailsFail, (_, { payload }) => ({
    ...initialState,
    error: payload
  }))
);

export function reducer(
  state: LaunchDetailsState | undefined,
  action: LaunchDetailsAction
) {
  return launchDetailsReducer(state, action);
}
