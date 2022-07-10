import { FC, useEffect, useMemo } from 'react'
import { User } from '../Types/User'
import useSWR from 'swr'
import { userFetcher } from '../fetcher/User-fetcher';
import { putUser } from '../Redux/reducers/UserSlice';
import { useAppDispatch } from '../Redux/hooks/redux.hooks';


const Users: FC = () => {
  const dispatch = useAppDispatch()
  const { data, error } = useSWR<User[]>('https://jsonplaceholder.typicode.com/users', userFetcher)
  useEffect(() => {
    if (data)
      dispatch(putUser(data))
  }, [data])

  if (error) return <div>ошибка загрузки</div>
  if (!data) return <div>загрузка...</div>
  return (
    <ul>
      {data.map((title) => {
        return (
          <li key={title.id}>{title.name}</li>
        )
      })}
    </ul>
  )
}

export default Users