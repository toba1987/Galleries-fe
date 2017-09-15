import { Component, OnInit } from '@angular/core';
import { GalleriesService } from './../../../shared/services/galleries.service';
import { ActivatedRoute } from '@angular/router';
import { Gallery } from './../../../shared/models/gallery.model';

@Component({
    selector: 'app-search-page',
    templateUrl: './search-page.component.html',
})
export class SearchPageComponent implements OnInit {

    private galleries: Gallery[];

    constructor(private galleriesService: GalleriesService,
                private activatedRoute: ActivatedRoute) { }

    ngOnInit() {
        this.activatedRoute.paramMap.subscribe((params) => {
            let term = params.get('term');
            this.galleriesService.search(term).subscribe((galleries: Gallery[]) => {
                this.galleries = galleries;
            });
        });
    }
}