import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MyAll from './MyAll.jsx'
import MyDelete from './MyDelete.jsx'
import MyGet from './MyGet.jsx'
import MyPost from './MyPost.jsx'
import MyUpdate from './MyUpdate.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyDelete />
    <MyAll/>
    <MyGet/>
    <MyPost/>
    <MyUpdate/>
  </StrictMode>,
)
