import App from './App.jsx'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router';
import { Provider } from 'react-redux';
import { store } from './rtk/store.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import  AppThemeProvider  from './context/ThemeContext';


createRoot(document.getElementById("root")).render(

  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <AppThemeProvider>
          <App />
        </AppThemeProvider>
      </Provider>
    </BrowserRouter>
  </StrictMode>
)