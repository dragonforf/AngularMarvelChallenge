import {Component, Inject} from '@angular/core';
import { Comic } from './comic';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'comic-detail-modal',
  templateUrl: './comic-detail.modal.component.html'
})
export class ComicDetailModalComponent {
    constructor (public dialogRef: MatDialogRef<ComicDetailModalComponent>, ){}
}