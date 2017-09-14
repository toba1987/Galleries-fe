import { Component, OnInit } from '@angular/core';
import { Gallery } from '../..//shared/models/gallery.model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
})
export class CreateComponent implements OnInit {

    private newGallery: Gallery = new Gallery();

  constructor() { }

  ngOnInit() {
  }

}
