import { Component, OnInit } from '@angular/core';
import { GalleriesService } from '../../shared/services/galleries.service';
import { Gallery } from '../../shared/models/gallery.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gallery-review',
  templateUrl: './gallery-view.component.html',
})
export class GalleryViewComponent implements OnInit {

   private gallery: Gallery;
    private images;
  constructor(private galleriesService: GalleriesService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
     this.route.params.subscribe(() => {
          let id = parseInt(this.route.snapshot.paramMap.get('id'));
          this.galleriesService.getGalleryById(id).subscribe((gallery) => {
              this.gallery = gallery;
          });

      });
    }

}


