import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './views/App';

import './../src/styles/styles.scss';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from './context/AuthContext/AuthProvider';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
            <BrowserRouter>
            <AuthProvider>     
                <App/>
            </AuthProvider>
            </BrowserRouter>
    </React.StrictMode>,
)
