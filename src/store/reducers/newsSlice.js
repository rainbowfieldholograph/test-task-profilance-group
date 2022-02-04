import { createSlice } from '@reduxjs/toolkit'
import { mockNewsData } from '../../helpers/mockNewsData'

const newsSlice = createSlice({
  name: 'news',
  initialState: {
    news: [...mockNewsData],
  },
  reducers: {
    addNews(state, action) {
      state.news.push({
        id: new Date().toISOString(),
        title: action.payload.title,
        text: action.payload.text,
        date: new Date().toString(),
        confirmed: false,
      })
    },
    removeNews(state, action) {
      state.news = state.news.filter((newsItem) => newsItem.id !== action.payload.id)
    },
    confirmNews(state, action) {
      const findedNews = state.news.find((newsItem) => newsItem.id === action.payload.id)
      findedNews.confirmed = true
    },
  },
})

export const { addNews, removeNews, confirmNews } = newsSlice.actions

export default newsSlice.reducer
