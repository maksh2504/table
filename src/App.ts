import {Table} from "./components/Table";

const table1 = new Table (document.getElementById("table"));

let a : number = 0

export const getUsers = fetch('https://jsonplaceholder.typicode.com/users/')
    .then(response => response.json())
    .then(data => data)
    // .then(users => {
    //     a = users.length;
    //     console.log(a);
    //     table1.addUsers(users);
    // })
    // .then(() => {
    //     for(let i = 1; i <= a; i++){
    //         fetch('https://jsonplaceholder.typicode.com/users/' + i + '/posts/')
    //             .then(response => response.json())
    //             .then(posts => {
    //                 table1.addPosts(posts)
    //             });
    //     }
    // })
    // .then(table1.tablePrint)
;