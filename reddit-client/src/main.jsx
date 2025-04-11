import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import {Provider} from 'react-redux';
import App from './app/App.jsx';
import store from './assets/store.jsx';
import { fetchArticles } from './features/article/articleSlice.jsx';

store.dispatch(fetchArticles());

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store = {store}>
      <App />
    </Provider>
  </StrictMode>,
)
