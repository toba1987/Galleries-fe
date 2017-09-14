import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Observer } from "rxjs";
import { Router } from '@angular/router';
import { User } from './../models/user.model';

@Injectable()
export class AuthService {
    public isAuthenticated: boolean;

    private users: User[] = [];

    constructor(private http: HttpClient,
                private router: Router) {
        let token =  window.localStorage.getItem('token');
        this.isAuthenticated = !!token;
    }

    login(email: string, password: string){
        return new Observable((o: Observer<any>) => {
            this.http.post('http://localhost:8000/api/login', {
                email,
                password
            }).subscribe((data: { token: string }) => {
                window.localStorage.setItem('token', data.token);
                this.isAuthenticated = true;
                o.next(data.token);
                return o.complete();
            }, (err) => {
                return o.error(err);
            });

        });
    }

    logout(urlName = 'login'){
        window.localStorage.removeItem('token');
        this.isAuthenticated = false;
        this.router.navigateByUrl(urlName);
    }

    getRequestHeaders(){
        let token =  window.localStorage.getItem('token');
        return new HttpHeaders().set('Authorization', `Bearer ${token}`)
    }

    public register(user: User)
    {
        return new Observable((o: Observer<any>) => {

            this.http.post('http://localhost:8000/api/register', {
                first_name: user.firstName,
                last_name: user.lastName,
                email: user.email,
                password: user.password,
            })
                .subscribe((user: any) => {
                    let c = new User(user);
                    this.users.push(c);
                    o.next(c);
                    return o.complete();
                }, () => {
                    console.log('Error');
                });

        });
    }
}