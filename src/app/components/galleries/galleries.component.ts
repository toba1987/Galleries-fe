import { Component, Injector } from '@angular/core';
import { GalleriesService } from '../../shared/services/galleries.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Gallery } from '../../shared/models/gallery.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-galleries',
  templateUrl: './galleries.component.html',
})
export class GalleriesComponent {

    private galleries: any[] = [];
   // private galleriesService: GalleriesService;

    constructor(private galleriesService: GalleriesService,
                private injector: Injector,
                private router: Router) {
        this.galleriesService = this.injector.get(GalleriesService);
        this.galleriesService.getGalleries().subscribe(
            data => {
                this.galleries = data;
            },
            (err: HttpErrorResponse) => {
                alert(`Backend returned code ${err.status} with message: ${err.error}`);
            }
        );
    }

    viewGallery(galleryId) {

        this.router.navigate(["gallery", galleryId]);
    }

    loadMore(){

    }

}
