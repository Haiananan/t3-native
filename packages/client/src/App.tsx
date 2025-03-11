import { IonApp, IonRouterOutlet } from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
import React from 'react'
import { Route } from 'react-router-dom'

import { About } from './pages/About'
import { Home } from './pages/Home'
import TRPCProvider from './providers/trpc'

const App: React.FC = () => {
  return (
    <IonApp>
      <TRPCProvider>
        <IonReactRouter>
          <IonRouterOutlet >
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
          </IonRouterOutlet>
        </IonReactRouter>
      </TRPCProvider>
    </IonApp>
  )
}

export default App
