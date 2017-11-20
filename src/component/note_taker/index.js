import React, { Component } from 'react'
import '../../assets/App.css'
import SideBar from './sidebar'
import Editor from './editor'

class NoteTaker extends Component {
  constructor (props) {
    super(props)
    this.state = {
      noteList: [],
      activeNoteIndex: ''
    }
  }

  componentDidMount () {
    console.log(this.props)
    if (this.props.name === '') {
      this.props.history.push('/')
    }
  }

  addNewNote () {
    let newList = this.state.noteList
    newList.push({title: `Note ${newList.length + 1}`, content: ''})
    this.setState({
      noteList: newList,
      activeNoteIndex: newList.length - 1
    }, () => console.log(this.state))
  }

  editNote (noteIndex) {
    this.setState({
      activeNoteIndex: noteIndex
    })
  }

  handleTitleChange (e) {
    const { activeNoteIndex, noteList } = this.state
    let note = { ...noteList[activeNoteIndex], title: e.target.value }
    noteList[activeNoteIndex] = note
    this.setState({
      noteList: noteList
    })
  }

  handleContentChange (e) {
    const { activeNoteIndex, noteList } = this.state
    let note = { ...noteList[activeNoteIndex], content: e.target.value }
    noteList[activeNoteIndex] = note
    this.setState({
      noteList: noteList
    })
  }

  render () {
    return (
      <div className='App'>
        <div style={{display: 'flex', alignItems: 'center', height: '100vh', minWidth: '100vh', justifyContent: 'center'}}>
          <div className='container' style={{backgroundColor: '#eeeeee', borderRadius: '5px', padding: '20px'}}>
            <div className='row'>
              <h1 style={{color: '#a3382c', padding: '10px'}}>{this.props.name}'s Note Taker</h1>
            </div>
            <div className='row'>
              <div className='col-xs-3'>
                <SideBar
                  noteList={this.state.noteList}
                  activeNoteIndex={this.state.activeNoteIndex}
                  addNewNote={() => this.addNewNote()}
                  editNote={(e) => this.editNote(e)}
                />
              </div>
              <div className='col-xs-9'>
                <Editor
                  activeNote={this.state.noteList[this.state.activeNoteIndex]}
                  handleTitleChange={(e) => this.handleTitleChange(e)}
                  handleContentChange={(e) => this.handleContentChange(e)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default NoteTaker
