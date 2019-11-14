import { Component, ViewChild, OnInit } from '@angular/core';
import { Comic } from './Comics/comic';
import { CharactersComponent } from './Characters/characters.component';
import {
    SwiperComponent, SwiperDirective, SwiperConfigInterface,
    SwiperScrollbarInterface, SwiperPaginationInterface
} from 'ngx-swiper-wrapper';
import { ComicsService } from './Comics/comics.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'

})
export class AppComponent implements OnInit{
    @ViewChild(CharactersComponent, { static: false }) child: CharactersComponent;
    title = 'The Challenge';
    comics: Comic[] = [];
    featuredComics: Comic[]=[];

    constructor(private service: ComicsService){}

    ngOnInit(){

    }


    public config: SwiperConfigInterface = {
        direction: 'horizontal',
        slidesPerView: 1,
        keyboard: true,
        mousewheel: false,
        scrollbar: false,
        navigation: false,
        pagination: false
    };

    addComicToFavourites($event: Comic) {
        if (this.comics.find((x) => x.id == $event.id) == null) {
            this.comics.push($event);
        }
        else {
            this.removeComicFromFavourite($event);
        }
    }

    filterByName(nameStartsWith: string) {
        this.child.filterByName(nameStartsWith);
    }

    resolveComic($event) {
        if ($event[1] == "remove") {
            this.removeComicFromFavourite($event[0]);
        }
        else {
            this.child.openComicModal($event[0].resourceURI);
        }
    }

    removeComicFromFavourite(comic: Comic) {
        this.comics.splice(this.comics.indexOf(comic), 1);
    }
}
