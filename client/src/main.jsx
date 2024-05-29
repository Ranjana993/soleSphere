import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from '../redux/store.jsx'
import { BrowserRouter } from "react-router-dom"
import { Toaster } from 'react-hot-toast';
// import './styles/fonts.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
      <Toaster />
    </Provider>
  </BrowserRouter>

)
