import { createAction, props } from "@ngrx/store";

export const loadLaunchDetails = createAction(
  "[Launch Details] Load",
  props<{ readonly id: string }>()
);

export const loadLaunchDetailsSuccess = createAction(
  "[Launch Details] Load Success",
  props<{ readonly payload: any }>()
);

export const loadLaunchDetailsFail = createAction(
  "[Launch Details] Load Fail",
  props<{ readonly payload: any }>()
);

export const resetLaunchDetails = createAction("[Launch Details] Reset");

export type LaunchDetailsAction =
  | typeof loadLaunchDetails
  | typeof loadLaunchDetailsSuccess
  | typeof loadLaunchDetailsFail
  | typeof resetLaunchDetails;
