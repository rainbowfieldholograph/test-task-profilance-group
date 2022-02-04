import { useSelector } from 'react-redux'
import { roles } from '../../helpers/roles'

export const Home = () => {
  const userState = useSelector((state) => state.auth)
  console.log(userState.role)
  return <p>Привет, {userState.role === roles.unauthorized ? 'гость!' : userState.username}</p>
}
