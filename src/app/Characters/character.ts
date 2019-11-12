import { Comic } from '../Comics/comic';
import { Thumbnail } from '../Common/thumbnail';

export class Character{
    id: number;
    name: string;
    description: string;
    modified: Date;
    comics: Comic[];
    thumbnail: Thumbnail;

    constructor(id: number, name: string, description: string, modified: Date, comics: Comic[], thumbnail: Thumbnail){
        this.id=id;
        this.name=name;
        this.description=description;
        this.modified=modified;
        this.comics=comics;
        this.thumbnail=thumbnail;
    }
}