import React, { Component } from 'react'
import marked from 'marked'

class MarkDown extends Component {
  render () {
    if (this.props.activeNote === undefined) {
      return (
        <div>
          You need to create or select a note first!
        </div>
      )
    } else {
      return (
        <div>
          <div
            dangerouslySetInnerHTML={{__html: marked(this.props.activeNote.content)}}
            className='mark-down-view'
          />
        </div>
      )
    }
  }
}

export default MarkDown
