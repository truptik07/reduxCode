import React from 'react'
import Count from './Component/Count'
import { Store } from './Component/Store'
import { Provider } from 'react-redux'

const App = () => {
  return (
    <Provider store={Store}>
      <div>
        <Count></Count>
      </div>
    </Provider>
    
  )
}

export default App