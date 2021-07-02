import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { NgxGalleryModule } from "ngx-gallery-9";
import { AppRoutingModule } from "./app-routing.module";
import { GraphQLModule } from "./graphql.module";
import { AppComponent } from "./app.component";
import { LaunchListComponent } from "./launch-list/launch-list.component";
import { LaunchDetailsComponent } from "./launch-details/launch-details.component";
import { LoaderComponent } from "./loader/loader.component";
import { RelativeTimePipe } from "./core/helpers/pipes/relative-time/relative-time.pipe";
import { launchReducers } from "./store/reducers/index";
import { launchEffects } from "./store/effects/index";

const COMPONENTS = [
  AppComponent,
  LaunchListComponent,
  LaunchDetailsComponent,
  LoaderComponent
];

const MATERIAL_MODULES = [
  MatCardModule,
  MatIconModule,
  MatProgressSpinnerModule
];

@NgModule({
  declarations: [...COMPONENTS, RelativeTimePipe],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ...MATERIAL_MODULES,
    NgxGalleryModule,
    StoreModule.forRoot(launchReducers),
    EffectsModule.forRoot(launchEffects),
    StoreDevtoolsModule.instrument()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
