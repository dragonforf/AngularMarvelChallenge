import { Component, ViewChild } from '@angular/core';
import { Comic } from './Comics/comic';
import { CharactersComponent } from './Characters/characters.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
    
})
export class AppComponent {
    @ViewChild(CharactersComponent, {static: false}) child: CharactersComponent;
    title = 'The Challenge';
    comics: Comic[] = [];

    addComicToFavourites($event: Comic){
        if(this.comics.find((x)=> x.id==$event.id)==null){
            this.comics.push($event);
        }
        else{
            this.removeComicFromFavourite($event);
        }
    }

    filterByName(nameStartsWith: string){
        this.child.filterByName(nameStartsWith);
    }

    resolveComic($event){
        if($event[1]=="remove"){
            this.removeComicFromFavourite($event[0]);
        }
        else{
            this.child.openComicModal($event[0].resourceURI);
        }
    }

    removeComicFromFavourite(comic: Comic){
        this.comics.splice(this.comics.indexOf(comic), 1);
    }
}
