import {BoardInterface} from './board-interface';

export interface MembersInterface {
    photo?: string;
    name: string;
    surname?: string;
    role?: string;
    boardsAvailable?: BoardInterface[];
}
