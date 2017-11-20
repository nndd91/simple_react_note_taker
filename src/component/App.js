import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import '../assets/App.css'

// Components
import NoteTaker from './note_taker'
import Welcome from './welcome'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: ''
    }
  }

  render () {
    return (
      <div className='container-fluid' style={{backgroundColor: '#2c3e4f', minHeight: '100vh', minWidth: '100vh'}}>
        <link
          href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css'
          rel='stylesheet'
        />
        <Switch>
          <Route
            path='/notetaker'
            render={
              props => (
                <NoteTaker
                  {...props}
                  name={this.state.name}
                />
              )
            } />
          <Route
            exact
            path='/'
            render={
              props => (
                <Welcome
                  {...props}
                  name={this.state.name}
                  updateName={(v) => this.updateName(v)}
                />
              )
            } />
        </Switch>
      </div>
    )
  }

  updateName (value) {
    console.log(value)
    this.setState({
      name: value
    })
  }
}

export default App
