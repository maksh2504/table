import {IUser} from "../types/user";
import {IPosts} from "../types/posts";

const BASE_URL = 'https://jsonplaceholder.typicode.com'

export const getUsers: Promise<IUser> = fetch(`${BASE_URL}/users`)
    .then(response => response.json())
    .then(data => data)

// export const getPosts: Promise<IPosts> = new Promise(`${BASE_URL}/users`)
//     .then(() => {
//     for(let i = 1; i <= 10; i++){
//         fetch('https://jsonplaceholder.typicode.com/users/' + i + '/posts/')
//             .then(response => response.json())
//             .then(data => data)
//         }
//     });