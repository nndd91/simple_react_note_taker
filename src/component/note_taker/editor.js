import React from 'react'

const Editor = (props) => {
  if (!props.activeNote) {
    return (
      <div>
        Please Select A Note..
      </div>
    )
  } else {
    return (
      <div className='form-group'>
        <input
          value={props.activeNote.title}
          style={{width: '100%'}}
          placeholder='Title...'
          className='form-control'
          onChange={(e) => props.handleTitleChange(e)}
        />
        <textarea
          autoFocus
          value={props.activeNote.content}
          style={{'height': '480px', 'width': '100%'}}
          placeholder='Content...'
          className='form-control'
          onChange={(e) => props.handleContentChange(e)}
        />
      </div>
    )
  }
}

export default Editor
