import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css'
import App from './component/App'
import registerServiceWorker from './registerServiceWorker'

const RootComponent = () => (
  <Router>
    <App />
  </Router>
)

ReactDOM.render(<RootComponent />, document.getElementById('root'))
registerServiceWorker()
