import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import {
  MatCardModule,
  MatIconModule,
  MatProgressSpinnerModule
} from "@angular/material";
import { RouterTestingModule } from "@angular/router/testing";
import { StoreModule } from "@ngrx/store";
import { Apollo } from "apollo-angular";
import { NgxGalleryModule } from "ngx-gallery-9";
import { LoaderComponent } from "../loader/loader.component";
import { launchReducers } from "../store";

import { LaunchDetailsComponent } from "./launch-details.component";

describe("LaunchDetailsComponent", () => {
  let component: LaunchDetailsComponent;
  let fixture: ComponentFixture<LaunchDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LaunchDetailsComponent, LoaderComponent],
      imports: [
        RouterTestingModule,
        MatCardModule,
        MatIconModule,
        MatProgressSpinnerModule,
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
