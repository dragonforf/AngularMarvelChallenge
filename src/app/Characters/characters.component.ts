import { Component, OnInit } from '@angular/core';
import { CharactersService } from './characters.service';
import { Character } from './character';
import { Observable } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
    selector: 'characters',
    templateUrl: './characters.component.html',
    providers: [CharactersService]
})
export class CharactersComponent{
    currentPage: number=1;
    characters: Observable<any>;
    lowerLimitReached: boolean=true;
    nameStartsWith: string="";
    numberOfPages: number;
    itemsPerPage: number;


    constructor(private service: CharactersService, private spinner: NgxSpinnerService){}

    ngOnInit(){
        this.itemsPerPage=10;
        this.spinner.show();
        this.service.getCharacters(this.itemsPerPage, this.currentPage, this.nameStartsWith).subscribe(
            (characters)=>{
                console.log("this.itemsPerPage="+this.itemsPerPage);
                this.numberOfPages=Math.ceil(characters[0]/this.itemsPerPage);
                console.log("this.numberOfPages="+this.numberOfPages);
                this.characters=characters[1];
                this.characters.forEach(
                    (i)=>{
                        i.comics.items.splice(4, i.comics.items.length-4);
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

}