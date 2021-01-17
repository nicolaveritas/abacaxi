import { Users } from './types';
import { isLeft } from 'fp-ts/Either'

export async function fetchUsers(): Promise<Users> {
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/`
    ).then(res => res.json());

    const result = Users.decode(response);
    if (isLeft(result)) {
        throw new Error('fetchUsers responded with unknown type');
    } else {
        return result.right;
    }
}