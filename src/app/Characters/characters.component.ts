import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { CharactersService } from './characters.service';
import { Character } from './character';
import { Observable } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ComicDetailModalComponent } from '../Comics/comic-detail.modal.component';
import { CharacterDetailModalComponent } from './CharacterDetail/character-detail.modal.component';
import { Thumbnail } from '../Common/thumbnail';
import { ComicsService } from '../Comics/comics.service';
import { Comic } from '../Comics/comic';

@Component({
    selector: 'characters',
    templateUrl: './characters.component.html',
    providers: [CharactersService]
})
export class CharactersComponent{
    currentPage: number=1;
    @Input() nameStartsWith: string;
    response: Observable<any>;
    characters: Character[];
    lowerLimitReached: boolean=true;
    numberOfPages: number;
    itemsPerPage: number;
    sortBy: string="name";
    @Output() theComic=new EventEmitter<Comic>();
    @Input() favouriteComics: Comic[];

    constructor(private service: CharactersService, private spinner: NgxSpinnerService, private dialogService: MatDialog, private comicService: ComicsService){}

    ngOnInit(){
        this.characters=[];
        this.itemsPerPage=10;
        this.spinner.show();
        this.service.getCharacters(this.itemsPerPage, this.currentPage, this.nameStartsWith, this.sortBy).subscribe(
            (characters)=>{
                this.numberOfPages=Math.ceil(characters[0]/this.itemsPerPage);
                this.response=characters[1];
                this.response.forEach(
                    (i)=>{
                        this.characters.push(
                            new Character(i.id,
                                          i.name,
                                          i.description,
                                          i.modified,
                                          i.comics.items,
                                          new Thumbnail(i.thumbnail.path, i.thumbnail.extension)
                            )
                        );
                    }
                )
                this.spinner.hide();
            }
        );
    }

    filterByName(nameStartsWith: string){
        this.nameStartsWith=nameStartsWith;
        this.changePage(1);
    }

    changePage(page: number){
        if(page>=1){
            this.currentPage=page;
            this.lowerLimitReached=(this.currentPage<=1)?true:false;
            this.ngOnInit();
            window.scrollTo(0, 0);
        }
    }

    changeSorting(sortBy: string){
        this.sortBy=sortBy.toLowerCase();
        if(this.sortBy.includes("(descending)")){
            this.sortBy="-"+this.sortBy.split(" ")[0];
        }
        this.changePage(1);
    }

    openCharacterModal(character: Character){
        const dialogRef=this.dialogService.open(CharacterDetailModalComponent, {
            width: '700px',
            height: '450px',
            data: character
        });
        dialogRef.afterClosed().subscribe(result => {
            if(result){
                if(result.event == 'OpenComicModal'){
                  this.openComicModal(result.data);
                }
            }
        });
    }

    openComicModal(resourceURI: string){
        this.spinner.show();
        this.comicService.getComic(resourceURI).subscribe((comic)=>{
            const dialogRef=this.dialogService.open(ComicDetailModalComponent, {
                width: '700px',
                height: '465px',
                data: {comic: comic, isFavourite: this.favouriteComics.find((x)=> x.id==comic.id)!=null}
            });
            dialogRef.afterClosed().subscribe(result => {
                if(result){
                    if(result.event == 'Add'){
                      this.addFavourite(result.data);
                    }else if(result.event == 'Delete'){
                      this.deleteFavourite(result.data);
                    }
                }
              });
            this.spinner.hide();
        });
    }

    addFavourite(comic: Comic){
        this.theComic.emit(comic);
    }

    deleteFavourite(idComic: number){

    }
}