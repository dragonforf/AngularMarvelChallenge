import { Comic } from '../Comics/comic';

export class Character{
    id: number;
    name: string;
    description: string;
    modified: Date;
    comics: Comic[];
}