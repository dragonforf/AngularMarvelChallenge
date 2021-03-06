import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({providedIn: 'root'})
export class CharactersService{
    itemsPerPage=10;
    charactersUrl: string="https://gateway.marvel.com:443/v1/public/characters";
    limit="limit="+this.itemsPerPage;
    offset="offset=0";
    ts="ts=1";
    apikey="apikey=59922ea72ad2ff2f1272b959d0e952c7";
    hash="hash=e6ed6b29550fb72176affe180eb7d90f";
    
    constructor(private http: HttpClient){}

    getCharacters(itemsPerPage:number, page: number, nameStartsWith: string, sortBy: string): Observable<any>{
        this.offset="offset="+(page-1)*itemsPerPage;
        let requestUrl=this.charactersUrl+"?"+this.limit+"&"+this.offset;
        if(nameStartsWith!=null){
            if(nameStartsWith.length>0){
                requestUrl=requestUrl+"&nameStartsWith="+nameStartsWith;
            }
        }
        if(sortBy!=null){
            if(sortBy.length>0){
                requestUrl=requestUrl+"&orderBy="+sortBy;
            }
        }
        requestUrl=requestUrl+"&"+this.ts+"&"+this.apikey+"&"+this.hash;
        return this.http.get<any>(requestUrl).pipe(map((data) => [data.data.total, data.data.results]));
    }
}