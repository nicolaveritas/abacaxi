import * as D from 'io-ts/Decoder'

export const UserInfo = D.type({
    id: D.string,
    email: D.string,
    verified_email: D.boolean,
    given_name: D.string,
    family_name: D.string,
    picture: D.string,
    locale: D.string,
})

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type UserInfo = D.TypeOf<typeof UserInfo>