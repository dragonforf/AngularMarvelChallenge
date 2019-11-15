import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Comic } from './comic';
import { Thumbnail } from '../Common/thumbnail';

@Injectable({providedIn: "root"})
export class ComicsService{
    ts="ts=1";
    apikey="apikey=59922ea72ad2ff2f1272b959d0e952c7";
    hash="hash=e6ed6b29550fb72176affe180eb7d90f";

    constructor(private http: HttpClient){}
    
    getComic(resourceURI: string): Observable<Comic>{
        resourceURI=resourceURI+"?"+this.ts+"&"+this.apikey+"&"+this.hash;
        return this.http.get<any>(resourceURI).pipe(map((data) => {
            let theData=data.data.results[0];
            return new Comic(theData.id,
                             theData.title,
                             theData.description,
                             theData.resourceURI,
                             new Thumbnail(theData.thumbnail.path, theData.thumbnail.extension));                             
         } ));
    }

    getFeaturedComics(): Observable<Comic[]>{
        let resourceURI="https://gateway.marvel.com:443/v1/public/comics?limit=15&"+this.ts+"&"+this.apikey+"&"+this.hash;
        return this.http.get<any>(resourceURI).pipe(map((data) => {
            let theData: Comic[]=[];
            data.data.results.forEach(element => {
                theData.push(new Comic(element.id, element.title, element.description, element.resourceURI, new Thumbnail(element.thumbnail.path, element.thumbnail.extension)));
            });;
            return theData;
         } ));
    }
}