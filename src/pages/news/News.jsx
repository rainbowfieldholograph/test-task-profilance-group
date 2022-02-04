import { useState } from 'react'
import { AddNews } from '../../components/addNews/AddNews'
import { Modal } from '../../components/modal/Modal'
import { NewsItem } from '../../components/newsItem/NewsItem'
import { useSelector } from 'react-redux'
import styles from './News.module.scss'
import { roles } from '../../helpers/roles'

export const News = () => {
  const news = useSelector((state) => state.news.news)
  const [search, setSearch] = useState('')
  const [addNewsModal, setAddNewsModal] = useState(false)
  const userRole = useSelector((state) => state.auth.role)
  console.log(userRole)

  const filteredData = (data) =>
    data.filter((item) => item.title.toUpperCase().includes(search.toUpperCase()))

  return (
    <div className={styles.news}>
      <h1>Новости</h1>
      <div className={styles.box}>
        <span>
          <label htmlFor="search">Поиск:</label>
          <input
            type="search"
            id="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </span>
        {userRole !== roles.unauthorized && (
          <button onClick={() => setAddNewsModal(true)}>Добавить новость</button>
        )}
        <Modal open={addNewsModal} onClose={() => setAddNewsModal(false)}>
          <AddNews closeModal={() => setAddNewsModal(false)} />
        </Modal>
      </div>
      <ul>
        {filteredData(news).map((newsItem) => {
          if (!newsItem.confirmed && userRole === roles.unauthorized) return null
          return (
            <li key={newsItem.id}>
              <NewsItem
                id={newsItem.id}
                title={newsItem.title}
                text={newsItem.text}
                date={newsItem.date}
                confirmed={newsItem.confirmed}
              />
            </li>
          )
        })}
      </ul>
    </div>
  )
}
