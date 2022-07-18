import {IUser} from "../types/user";
import {IPosts} from "../types/posts"


export interface ITable {
    users: IUser[];
    posts: IPosts[];
    tableElement: HTMLElement
}