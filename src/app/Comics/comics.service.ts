import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({providedIn: "root"})
export class ComicsService{
    comicsUrl: string="https://gateway.marvel.com:443/v1/public/comics";
    offset="offset=0";
    ts="ts=1";
    apikey="apikey=59922ea72ad2ff2f1272b959d0e952c7";
    hash="hash=e6ed6b29550fb72176affe180eb7d90f";

    constructor(private http: HttpClient){}

    getComics(): Observable<any>{
        let requestUrl=this.comicsUrl+"?"+this.offset+"&"+this.ts+"&"+this.apikey+"&"+this.hash
        return this.http.get<any>(requestUrl).pipe(map((data) => data.data.results));
    }
}