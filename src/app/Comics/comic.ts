import { Thumbnail } from '../Common/thumbnail';

export class Comic{
    id: number;
    title: string;
    description: string;
    resourceURI: string;
    thumbnail: Thumbnail;

    constructor(id: number, title: string, description: string, resourceURI: string, thumbnail: Thumbnail){
        this.id=id;
        this.title=title;
        this.description=description;
        this.resourceURI=resourceURI;
        this.thumbnail=thumbnail;
    }
}