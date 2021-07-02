import {
  Component,
  ChangeDetectionStrategy,
  OnDestroy,
  OnInit
} from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { filter, map, startWith, takeUntil } from "rxjs/operators";
import { Subject } from "rxjs";
import {
  NgxGalleryOptions,
  NgxGalleryImage,
  NgxGalleryAnimation
} from "ngx-gallery-9";
import { LaunchFacadeService } from "../services/launch-facade.service";

@Component({
  selector: "app-launch-details",
  templateUrl: "./launch-details.component.html",
  styleUrls: ["./launch-details.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LaunchDetailsComponent implements OnInit, OnDestroy {
  constructor(
    private readonly route: ActivatedRoute,
    private readonly facade: LaunchFacadeService
  ) {}

  readonly galleryOptions: NgxGalleryOptions[] = [
    {
      width: "500px",
      height: "425px",
      thumbnailsColumns: 3,
      imageAnimation: NgxGalleryAnimation.Slide
    },
    {
      breakpoint: 800,
      width: "500px",
      height: "425px",
      imagePercent: 50,
      thumbnailsPercent: 20,
      thumbnailsMargin: 20,
      thumbnailMargin: 20
    },
    {
      breakpoint: 400,
      width: "300px",
      preview: false
    }
  ];
  readonly defaultImage = "assets/default-image.png";
  readonly destroy$ = new Subject<boolean>();
  readonly launchDetails$ = this.facade.launchDetails$;
  readonly loaded$ = this.facade.launchDetailsLoaded$;
  readonly galleryImages$ = this.launchDetails$.pipe(
    startWith([]),
    takeUntil(this.destroy$),
    filter(result => result && result["links"]),
    map(result => result["links"].flickr_images.map(this.getImages))
  );

  ngOnInit() {
    this.facade.resetLaunchDetails();
    this.route.paramMap
      .pipe(map(params => params.get("id") as string))
      .subscribe(id => {
        this.facade.loadLaunchDetailsById(id);
      });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  private getImages(item: string): NgxGalleryImage {
    return {
      small: item,
      medium: item,
      big: item
    };
  }
}
