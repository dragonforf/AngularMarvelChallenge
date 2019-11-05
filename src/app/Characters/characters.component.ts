import { Component, OnInit } from '@angular/core';
import { CharactersService } from './characters.service';
import { Character } from './character';
import { Observable } from 'rxjs';

@Component({
    selector: 'characters',
    templateUrl: './characters.component.html',
    providers: [CharactersService]
})
export class CharactersComponent{
    currentPage: number=1;
    characters: Observable<any>;
    lowerLimitReached: boolean=true;
    loading: boolean=false;

    constructor(private service: CharactersService){}

    ngOnInit(){
        this.loading=true;
        this.service.getCharacters(this.currentPage).subscribe(
            (characters)=>{
                this.loading=false;
                this.characters=characters
            }
        );
        
    }

    changePage(page: number){
        if(page>=1){
            this.currentPage=page;
            this.lowerLimitReached=(this.currentPage<=1)?true:false;
            console.log("lowerLimitReached="+this.lowerLimitReached);
            this.ngOnInit();
        }
    }

    toggleLoading(){
        this.loading=!this.loading;
    }
}