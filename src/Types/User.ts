export interface User {
  id: number
  name: string
  username: string
  email: string
  address: Addres
}

interface Addres {
  street: string
  suite: string
  city: string
  zipcode: string
  geo: Geo
}

interface Geo {
  lat: string
  lng: string
}