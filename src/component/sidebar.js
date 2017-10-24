import React, { Component } from 'react'

class SideBar extends Component {
  renderNotes (notes) {
    if (notes.length === 0) {
      return (
        <div>
          <br />No Notes Yet...
          <br />Click on add note to create a new one!
        </div>
      )
    } else {
      return notes.map((note, index) => {
        const { title, content } = note
        return (
          <li
            className='panel'
            onClick={() => this.props.editNote(index)}
            style={
              index === this.props.activeNoteIndex
              ? {textAlign: 'left', marginBottom: '0', backgroundColor: 'rgb(207, 206, 204)'}
              : {textAlign: 'left', marginBottom: '0'}
            }
            key={index}>
            <div className='panel-body'>
              <b>{title}</b>
              <br /><small>{content.length > 50 ? `${content.slice(0, 50)}...` : content}</small>
            </div>
          </li>
        )
      })
    }
  }

  render () {
    return (
      <div>
        <ul style={{listStyleType: 'none', height: '480px', paddingLeft: '0px', overflowY: 'scroll'}}>
          {this.renderNotes(this.props.noteList)}
        </ul>
        <button
          className='btn btn-primary'
          onClick={() => this.props.addNewNote()}
          style={{width: '100%', bottom: '0'}}
          >
          New Note
        </button>
      </div>
    )
  }
}

export default SideBar
