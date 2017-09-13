import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Gallery } from './../models/gallery.model';
import { Observable, Observer } from 'rxjs';

@Injectable()
export class GalleriesService {

    private galleries: Gallery[] = [];

  constructor( private http: HttpClient ) { }

    public getGalleries()
    {
        return new Observable((o: Observer<any>) => {

            this.http.get('http://localhost:8000/api/galleries')
                .subscribe((galleries: any) =>{
              //  console.log(galleries);
                    this.galleries = galleries.data.map((gallery) => {
                        return new Gallery(gallery);
                    });
                    o.next(this.galleries);
                    return o.complete();
                });
        });
    }

}
