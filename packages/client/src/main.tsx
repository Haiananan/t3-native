import { setupIonicReact } from '@ionic/react'
import '@ionic/react/css/core.css'
// optional
import '@ionic/react/css/normalize.css'
import '@ionic/react/css/structure.css'
import '@ionic/react/css/typography.css'
import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
import './index.css'

setupIonicReact({})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
