import { createReducer, on } from "@ngrx/store";
import * as a from "../actions/launch.list.action";

export type LaunchListState = any;

const initialState: LaunchListState = {
  data: [],
  loaded: false,
  loading: false,
  error: null
};

const launchListReducer = createReducer(
  initialState,
  on(a.loadLaunchList, state => ({
    ...state,
    loading: true,
    loaded: false
  })),
  on(a.loadLaunchListSuccess, (state, { payload }) => {
    return {
      ...state,
      data: payload,
      loading: false,
      loaded: true
    };
  }),
  on(a.loadLaunchListFail, (_, { payload }) => ({
    ...initialState,
    error: payload
  }))
);

export function reducer(
  state: LaunchListState | undefined,
  action: a.LaunchListAction
) {
  return launchListReducer(state, action);
}
