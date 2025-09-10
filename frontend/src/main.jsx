import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { DataProvider } from './Context/DataContext.jsx'
import { Provider } from 'react-redux';
import { store } from './Redux/store.js';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <DataProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </DataProvider>
  </BrowserRouter>
)
