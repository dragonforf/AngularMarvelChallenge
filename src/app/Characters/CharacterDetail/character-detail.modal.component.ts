import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Character } from '../character';

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
}