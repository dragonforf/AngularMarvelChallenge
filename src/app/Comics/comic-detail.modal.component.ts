import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Comic } from './comic';
import { ComicsService } from './comics.service';

@Component({
  selector: 'comic-detail-modal',
  templateUrl: './comic-detail.modal.component.html'
})
export class ComicDetailModalComponent {
    theComic: Comic;
    constructor (public dialogRef: MatDialogRef<ComicDetailModalComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private comicService: ComicsService){}

    ngOnInit(){
        this.theComic=this.data;
    }

    closeDialog(){
        this.dialogRef.close();
    }

    addFavourite(id: number){
        
    }

}