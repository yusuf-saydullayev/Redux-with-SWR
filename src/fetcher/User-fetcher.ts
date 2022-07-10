import { Fetcher } from 'swr'
import axios from 'axios'
import { User } from '../Types/User'

export const userFetcher: Fetcher<User[]> = (url: string) => axios.get(url).then(res => res.data)