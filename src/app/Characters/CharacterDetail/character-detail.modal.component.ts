import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Character } from '../character';
import { Comic } from 'src/app/Comics/comic';

@Component({
  selector: 'character-detail-modal',
  templateUrl: './character-detail.modal.component.html'
})
export class CharacterDetailModalComponent {
    theCharacter: Character;
    constructor (public dialogRef: MatDialogRef<CharacterDetailModalComponent>, @Inject(MAT_DIALOG_DATA) public data: any){}

    ngOnInit(){
        this.theCharacter=this.data;
    }

    openComicModal(theComic: Comic){
        this.dialogRef.close({event: "OpenComicModal", data: theComic.resourceURI});
    }
}