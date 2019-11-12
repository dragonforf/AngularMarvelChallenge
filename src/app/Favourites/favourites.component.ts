import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Comic } from '../Comics/comic';

@Component({
    selector: 'favourites',
    templateUrl: './favourites.component.html'})
export class FavouritesComponent implements OnInit{
    @Input() comics: Comic[];
    @Output() comicEmitter=new EventEmitter<Comic>();

    ngOnInit(){
    }

    removeFavourite(comic: Comic){
        this.comicEmitter.emit(comic);
    }
}