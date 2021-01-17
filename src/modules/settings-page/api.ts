import { UserInfo } from './types';
import { isLeft } from 'fp-ts/Either'

export async function fetchUserInfo(accessToken: string): Promise<UserInfo> {
    // this info are already available at the login - fetching again for the sake of using accessToken
    const response = await fetch(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${accessToken}`
    ).then(res => res.json());

    const result = UserInfo.decode(response);
    if(isLeft(result)) {
        throw new Error('fetchUserInfo responded with unknown type');
    } else {
        return result.right;
    }
}