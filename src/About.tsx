import { FC } from 'react'
import { useAppSelector } from './Redux/hooks/redux.hooks'


const About: FC = () => {
  const users = useAppSelector((state) => state.UserReducer.users)

  return (
    <div>
      <h1>About</h1>
      {users?.map((data) => {
        return (
          <li key={data.id}>{data.username}</li>
        )
      })}
    </div>
  )
}

export default About