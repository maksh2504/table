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

        const tbody = document.createElement("tbody");

        for(let i = 0; i < this.users.length - 1; i++) {
            const row = document.createElement("tr");

            const tdName = document.createElement("td");
            tdName.innerText = this.users[i].name;
            row.append(tdName);

            const tdUserName = document.createElement("td");
            tdUserName.innerText = this.users[i].username;
            row.append(tdUserName);

            const tdEmail = document.createElement("td");
            tdEmail.innerText = this.users[i].email;
            row.append(tdEmail);

            const tdAddress = document.createElement("td");
            tdAddress.innerText = this.users[i].address;
            row.append(tdAddress);

            const tdPosts = document.createElement("td");
            const ulPosts = document.createElement("ul");
            for (let j = 0; j < this.posts.length - 1; j++){
                console.log(this.users[i].id + " = " + this.posts[j].userId)
                if (this.users[i].id == this.posts[j].userId){
                    console.log(this.users[i].id + " = " + this.posts[j].userId)
                    const liPosts = document.createElement("li");
                    // liPosts.textContent = this.posts[j].title;

                    liPosts.appendChild(document.createTextNode(this.posts[j].title));
                    ulPosts.appendChild(liPosts);


                    // ulPosts.append(liPosts);
                }
            }
            tdPosts.append(ulPosts);
            row.append(tdPosts);

            tbody.append(row);
        }

        this.tableElement.append(tbody)
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