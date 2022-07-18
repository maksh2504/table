import {getUsers, getPosts} from "../api/index";
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

        this.getTable();
    }

    tablePrint = () => {
        console.log(this.users)
        console.log(this.posts)

        // getUsers.then(data => this.addUsers(data))

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
        getUsers
            .then(data => this.addUsers(data))
            .then(() => new Promise<IPosts>(() => {
                for(let i = 1; i <= this.users.length; i++){
                    fetch('https://jsonplaceholder.typicode.com/users/' + i + '/posts/')
                        .then(response => response.json())
                        .then(data => this.addPosts(data))
                }
                this.tablePrint()
            }))
    }

    // getTable = () => {
    //     getUsers
    //         .then(data => this.addUsers(data))
    //         .then(() => {
    //             getPosts
    //                 .then(data => this.addPosts(data))
    //                 .then(() => this.tablePrint())
    //         })
    // }

    addUsers = (users: any) => {
        for(let field in users) {
            const { id, name, username, email } = users[field]

            const address = users[field].address.street + ", " + users[field].address.suite + ", " +
                users[field].address.city + ", " + users[field].address.zipcode;

            this.users.push ({
                id: id,
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