import {UserOptions} from './user-options';

export interface Teacher extends UserOptions {
    salary: Number;
    salaryType: string;
    EduCenter_id: Number;
    isActive: Number;
    Roles_id: Number;
}
