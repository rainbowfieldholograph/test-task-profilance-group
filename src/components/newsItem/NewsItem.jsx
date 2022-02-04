import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { roles } from '../../helpers/roles'
import { confirmNews, removeNews } from '../../store/reducers/newsSlice'
import styles from './NewsItem.module.scss'

export const NewsItem = ({ id, title, text, date, confirmed }) => {
  const dispatch = useDispatch()
  const userRole = useSelector((state) => state.auth.role)

  return (
    <div className={styles.wrapper}>
      <h2>{`${title}`}</h2>
      <p>{text}</p>
      <time>{date}</time>
      {userRole === roles.admin && (
        <>
          <button onClick={() => dispatch(removeNews({ id }))}>Удалить</button>
          {!confirmed && (
            <button onClick={() => dispatch(confirmNews({ id }))}>Подтвердить</button>
          )}
        </>
      )}
    </div>
  )
}
