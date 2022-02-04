import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/home/Home'
import { News } from './pages/news/News'
import { NotFoundPage } from './pages/notFoundPage/NotFoundPage'
import { Layout } from './components/layout/Layout'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App
