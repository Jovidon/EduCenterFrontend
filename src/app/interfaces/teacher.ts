import {UserOptions} from './user-options';

export interface Teacher extends UserOptions {
    salery: Number;
    saleryType: string;
    subjects: string;
}
