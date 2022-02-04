import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { authData } from '../../helpers/authData'
import { authentication } from '../../store/reducers/authSlice'
import styles from './LoginModal.module.scss'

export const LoginModal = ({ closeModal }) => {
  const dispatch = useDispatch()
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [isError, setIsError] = useState(false)

  const onSubmit = (event) => {
    const found = authData.users.find(
      (user) => user.password === password && user.login === login
    )
    event.preventDefault()
    if (found) {
      dispatch(authentication({ role: found.role, username: found.login }))
      closeModal()
    } else {
      setIsError(true)
    }
  }

  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <p>Вход</p>

      <label htmlFor="login">Login:</label>
      <input
        required
        value={login}
        onChange={(event) => setLogin(event.target.value)}
        id="login"
        type="text"
      />

      <label htmlFor="password">Пароль:</label>
      <input
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        required
        id="password"
        type="password"
      />

      <div className="center-text">
        <button type="submit">Войти</button>
      </div>

      {isError && <p className={styles.error}>Неправильный логин или пароль</p>}
    </form>
  )
}
