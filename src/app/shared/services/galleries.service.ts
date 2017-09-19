import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Gallery } from './../models/gallery.model';
import { Observable, Observer } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class GalleriesService {

    private galleries: Gallery[] = [];

  constructor( private http: HttpClient,
               private auth: AuthService) { }

    public getGalleries()
    {
        return new Observable((o: Observer<any>) => {

            this.http.get('http://localhost:8000/api/galleries', {
                headers: this.auth.getRequestHeaders()
            })
                .subscribe((galleries: any) =>{
                    this.galleries = galleries.data.map((gallery) => {
                        return new Gallery(gallery);
                    });
                    o.next(this.galleries);
                    return o.complete();
                });
        });
    }

    public getGalleryById(id: number){
        return new Observable((o: Observer<any>) => {
            this.http.get('http://localhost:8000/api/gallery/' + id, {
                headers: this.auth.getRequestHeaders()
            })
                .subscribe((galleries: any) => {
                    o.next(new Gallery(galleries));
                    return o.complete();
                });
        });
    }

    public search(term)
    {
        return new Observable((o: Observer<any>) => {
            this.http.get('http://localhost:8000/api/search/' + term, {
                headers: this.auth.getRequestHeaders(),
            })
                 .subscribe((galleries: any) =>{
                    this.galleries = galleries.map((gallery) => {
                    return new Gallery(gallery);
                });
                o.next(this.galleries);
                return o.complete();
            });
        });
    }

}
