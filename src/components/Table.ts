import {getUsers} from "../api/index";
import {IUser} from "../types/user";
import {IPosts} from "../types/posts";
import {ITable} from "../types/table";

export class Table implements ITable{
    users: IUser[];
    posts: IPosts[];
    tableElement: HTMLElement;

    constructor(table: HTMLElement) {
        this.users = [];
        this.posts = [];
        this.tableElement = table;

        this.tablePrint();
    }

    tablePrint = () => {
        getUsers.then(data => this.addUsers(data))

        // this.addUsers(getUsers.then(data => data))

        //getUsers.then(data => this.addUsers(data))
        //getUsers.then(() => console.log("this.users"));

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

    getTable = () => {
        getUsers.then(data => this.addUsers(data))
    }

    addUsers = (users: any) => {
        for(let field in users) {
            const { name, username, email } = users[field]

            const address = users[field].address.street + ", " + users[field].address.suite + ", " +
                users[field].address.city + ", " + users[field].address.zipcode;

            this.users.push ({
                name: name,
                username: username,
                email: email,
                address: address
            } as IUser);
        }
    }

    addPosts = (posts : any) => {
        for(let field in posts) {
            const { userId, id, title, body } = posts[field]

            this.posts.push({
                userId: userId,
                id: id,
                title: title,
                body: body
            } as IPosts);
        }

    }
}