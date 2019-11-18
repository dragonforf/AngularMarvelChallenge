import { Component, Inject, Optional } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Comic } from './comic';
import { ComicsService } from './comics.service';

@Component({
  selector: 'comic-detail-modal',
  templateUrl: './comic-detail.modal.component.html'
})
export class ComicDetailModalComponent {
    theComic: Comic;
    isFavourite: boolean;
    favouritesButtonCaption: string;

    constructor (public dialogRef: MatDialogRef<ComicDetailModalComponent>, @Optional() @Inject(MAT_DIALOG_DATA) public data: any){}

    ngOnInit(){
        this.theComic=this.data.comic;
        this.isFavourite=this.data.isFavourite;
        this.favouritesButtonCaption=this.isFavourite?"REMOVE FROM FAVOURITES":"ADD TO FAVOURITES";
    }

    closeDialog(){
        this.dialogRef.close();
    }

    addFavourite(){
        this.dialogRef.close({event: !this.isFavourite?"Add":"Delete", data: this.theComic});
    }

    conditionalStylingForFavouritesButton(){
        let myStyle={
            'background-color': this.isFavourite?'rgb(50, 40, 39)':'rgb(240, 240, 240)',
            'color': this.isFavourite?'rgb(236, 29, 35)':'rgb(10, 10, 10)',
            'justify-content': 'center',
            'font-weight': '500'
        };
        return myStyle;
    }

    conditionalStylingForFavouritesIcon(){
        let myStyle={
            'background-image': this.isFavourite?'url("./assets/icons/btn-favourites-primary.png")':'url("./assets/icons/btn-favourites-default.png")',
            'display': 'inline-block',
            'width': '40px',
            'height': '40px'
        };
        return myStyle;
    }
}