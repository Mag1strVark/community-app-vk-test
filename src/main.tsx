import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
export const htmlBodyElement = document.getElementsByTagName('body')[0]
ReactDOM.createRoot(document.getElementById('root')!).render(<App />)
