import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { roles } from '../../helpers/roles'
import logoSvg from '../../img/logo.svg'
import { logout } from '../../store/reducers/authSlice'
import { LoginModal } from '../loginModal/LoginModal'
import { Modal } from '../modal/Modal'
import styles from './Header.module.scss'

export const Header = () => {
  const [loginModal, setLoginModal] = useState(false)
  const userRole = useSelector((state) => state.auth.role)
  const dispatch = useDispatch()

  return (
    <header className={styles.menu}>
      <Link to="/">
        <img src={logoSvg} alt="logo" />
      </Link>
      <Link to="/news">Новости</Link>
      {userRole === roles.unauthorized ? (
        <>
          <button onClick={() => setLoginModal(true)}>Вход</button>
          <Modal open={loginModal} onClose={() => setLoginModal(false)}>
            <LoginModal closeModal={() => setLoginModal(false)} />
          </Modal>
        </>
      ) : (
        <button onClick={() => dispatch(logout())}>Выход</button>
      )}
    </header>
  )
}
