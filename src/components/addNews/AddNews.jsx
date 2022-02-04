import { useDispatch } from 'react-redux'
import styles from './AddNews.module.scss'
import { addNews } from '../../store/reducers/newsSlice'
import { useState } from 'react'

export const AddNews = ({ closeModal }) => {
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')

  const dispatch = useDispatch()

  const onSubmit = (event) => {
    event.preventDefault()
    dispatch(addNews({ title, text }))
    closeModal()
  }

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <p>Добавить новость</p>
      <label htmlFor="title">Название:</label>
      <input
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        id="title"
        type="text"
        required
      />

      <label htmlFor="text">Текст:</label>
      <textarea
        value={text}
        onChange={(event) => setText(event.target.value)}
        name="text"
        id="text"
        required
      />

      <div className="center-text">
        <button type="submit">Добавить</button>
      </div>
    </form>
  )
}
