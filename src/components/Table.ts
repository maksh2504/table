import {getUsers} from "../api/index";
import {IUser} from "./User";
import {IPosts} from "./Posts"


interface ITable {
    users: IUser[];
    posts: IPosts[];
    tableElement: HTMLElement
}

export class Table implements ITable{
    users: IUser[];
    posts: IPosts[];
    tableElement: HTMLElement;

    constructor(table: HTMLElement) {
        this.users = [];
        this.posts = [];
        this.tableElement = table;
    }

    tablePrint = () => {
        console.log(this.users);
        console.log(this.posts);
        getUsers.then()
        // const tbody = document.createElement("tbody")
        //
        // for(let field in this.users) {
        //     const row = document.createElement("tr")
        //     const tdName = document.createElement("td")
        //
        //
        //     // tdName.innerText = users[field].name
        //     // console.log(tdName.innerText)
        //     row.append(tdName)
        //
        //
        //
        //     tbody.append(row)
        // }
        //
        // this.tableElement.append(tbody)
    }

    addUsers = (users: any) => {
        for(let field in users) {
            const { id, name, username, email } = users[field]

            const address = users[field].address.street + ", " + users[field].address.suite + ", " +
                users[field].address.city + ", " + users[field].address.zipcode;

            this.users[id] = {
                name: name,
                username: username,
                email: email,
                address: address
            };
        }
    }

    addPosts = (posts : any) => {
        for(let field in posts) {
            const { userId, id, title, body } = posts[field]

            this.posts[id] = {
                userId: userId,
                id: id,
                title: title,
                body: body
            };
        }

    }
}