
import ReactDOM from 'react-dom/client'
import './index.scss'
import App from './Components/App'
import Header from './Components/Header/Header'
import { Provider } from 'react-redux'
import store from './Components/Redux/store/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Header />
    <App />
  </Provider>

)
