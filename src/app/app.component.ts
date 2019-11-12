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
    }

    filterByName(nameStartsWith: string){
        this.child.filterByName(nameStartsWith);
    }

    removeComicFromFavourite($event: Comic){
        this.comics.splice(this.comics.indexOf($event), 1);
    }
}
