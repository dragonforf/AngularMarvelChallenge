import { Component, ViewChild, OnInit } from '@angular/core';
import { Comic } from './Comics/comic';
import { CharactersComponent } from './Characters/characters.component';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
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
        this.service.getFeaturedComics().subscribe(result => this.featuredComics=result);
    }

    public config: SwiperConfigInterface = {
        direction: 'horizontal',
        slidesPerView: 3,
        keyboard: true,
        mousewheel: true,
        scrollbar: false,
        navigation: true,
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
            this.openComicModal($event[0]);
        }
    }

    openComicModal(comic: Comic){
        this.child.openComicModal(comic.resourceURI);
    }

    removeComicFromFavourite(comic: Comic) {
        this.comics.splice(this.comics.indexOf(comic), 1);
    }
}
