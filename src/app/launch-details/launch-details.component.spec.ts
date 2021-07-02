import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { MatCardModule, MatIconModule } from "@angular/material";
import { RouterTestingModule } from "@angular/router/testing";
import { StoreModule } from "@ngrx/store";
import { Apollo } from "apollo-angular";
import { launchReducers } from "../store";
import { NgxGalleryModule } from "ngx-gallery-9";

import { LaunchDetailsComponent } from "./launch-details.component";

describe("LaunchDetailsComponent", () => {
  let component: LaunchDetailsComponent;
  let fixture: ComponentFixture<LaunchDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LaunchDetailsComponent],
      imports: [
        RouterTestingModule,
        MatCardModule,
        MatIconModule,
        NgxGalleryModule,
        StoreModule.forRoot(launchReducers)
      ],
      providers: [Apollo]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
