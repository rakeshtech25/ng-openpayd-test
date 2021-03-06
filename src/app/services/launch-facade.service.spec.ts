import { TestBed } from "@angular/core/testing";
import { StoreModule } from "@ngrx/store";
import { Apollo } from "apollo-angular";
import { launchReducers } from "../store";

import { LaunchFacadeService } from "./launch-facade.service";

describe("LaunchFacadeService", () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot(launchReducers)],
      providers: [Apollo]
    })
  );

  it("should be created", () => {
    const service: LaunchFacadeService = TestBed.get(LaunchFacadeService);
    expect(service).toBeTruthy();
  });
});
