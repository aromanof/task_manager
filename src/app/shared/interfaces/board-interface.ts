import {CardInterface} from './card-interface';
import {MembersInterface} from './members-interface';

export interface BoardInterface {
    name: string;
    cards: CardInterface[];
    members: MembersInterface[];
    id: number;
}

