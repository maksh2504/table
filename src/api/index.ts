import {IUser} from "../components/User";

const BASE_URL = 'https://jsonplaceholder.typicode.com'

export const getUsers: Promise<IUser> = fetch(`${BASE_URL}/users`)
    .then(response => response.json())
    .then(data => data)