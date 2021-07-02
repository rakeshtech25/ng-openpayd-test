import { LaunchDetailsGQL } from "../../services/spacexGraphql.service";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import {
  loadLaunchDetails,
  loadLaunchDetailsSuccess,
  loadLaunchDetailsFail
} from "../actions";
import { catchError, map, switchMap } from "rxjs/operators";
import { of } from "rxjs";

@Injectable()
export class LaunchDetailsEffects {
  constructor(
    private actions$: Actions,
    private readonly service: LaunchDetailsGQL
  ) {}

  readonly loadLaunchList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadLaunchDetails),
      switchMap(({ id }) =>
        this.service.fetch({ id }).pipe(
          map((response: any) =>
            loadLaunchDetailsSuccess({
              payload: response.data.launch as any
            })
          ),
          catchError(error => of(loadLaunchDetailsFail(error)))
        )
      )
    )
  );
}
