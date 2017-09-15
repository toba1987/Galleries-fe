/*import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
*/

import { Component, OnInit } from '@angular/core';
import { Gallery } from '../../shared/models/gallery.model';
import { Router } from '@angular/router';
@Component({
    selector: 'app-search',
    templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

    private searchFilter: string = "";

    constructor(private router: Router) { }

    searchGalleries(gallery: string){
        this.router.navigate(['search', gallery]);

    }

    ngOnInit() {
    }

}
