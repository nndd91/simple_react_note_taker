import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
class Welcome extends Component {
  render () {
    return (
      <div className='container'>
        <div className='row' style={{display: 'flex', alignItems: 'center', height: '100vh', width: '100vh', justifyContent: 'center'}}>
          <div className='panel' style={{textAlign: 'center', padding: '30px', backgroundColor: '#eeeeee'}}>
            <div className='panel-body'>
              <div className='row'>
                <h1 style={{color: '#a3382c'}}>
                  React Note Taking App
                </h1>
              </div>
              <div className='row'>
                <h2>
                  { this.props.name === ''
                    ? 'Welcome! What is your name?'
                    : `Welcome ${this.props.name}!`
                  }
                </h2>
                <input
                  value={this.props.name}
                  onChange={e => this.props.updateName(e.target.value)}
                  className='name-input'
                  autoFocus
                />
              </div>
              <div className='row' style={{paddingTop: '10px'}}>
                { this.props.name === ''
                    ? ''
                    : <NavLink to='/notetaker' className='btn btn-default'>Proceed</NavLink>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Welcome
