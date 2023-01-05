import '../styles/styles.scss'
import TestJsFeature from './modules/TestJsFeature'

// React Related Code Goes Here
import React from 'react'
import ReactDOM from 'react-dom/client'

function MyAmazingComponent() {
  return (
    <div>
      <h1>This is My Amazing React Component</h1>
      <p>React is great!</p>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<MyAmazingComponent />)

// React code end here

let testJsFeature = new TestJsFeature()

if (module.hot) {
  module.hot.accept()
}
