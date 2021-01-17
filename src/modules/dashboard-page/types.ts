import * as D from 'io-ts/Decoder'

const Geo = D.type({
    lat: D.string,
    lng: D.string,
})

const Address = D.type({
    street: D.string,
    suite: D.string,
    city: D.string,
    zipcode: D.string,
    geo: Geo,
})

const Company = D.type({
    name: D.string,
    catchPhrase: D.string,
    bs: D.string,
})

export const User = D.type({
    id: D.number,
    name: D.string,
    username: D.string,
    address: Address,
    phone: D.string,
    website: D.string,
    company: Company,
})

export const Users = D.array(User);

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type User = D.TypeOf<typeof User>
// eslint-disable-next-line @typescript-eslint/no-redeclare
export type Users = D.TypeOf<typeof Users>