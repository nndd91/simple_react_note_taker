import React, { Component } from 'react'
import '../../assets/App.css'
import SideBar from './sidebar'
import Editor from './editor'
import MarkDown from './markdown'
class NoteTaker extends Component {
  constructor (props) {
    super(props)
    this.state = {
      noteList: [],
      activeNoteIndex: '',
      activeEditor: true
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

  handleKeyPress (event) {
    if (event.ctrlKey && event.keyCode === 77) {
      this.setState({
        activeEditor: !this.state.activeEditor
      })
    }
  }

  render () {
    return (
      <div
        className='App'
        onKeyDown={(e) => this.handleKeyPress(e)}
        tabIndex='0'
      >
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
                <div className='row'>
                  { this.state.activeEditor
                  ? <Editor
                    activeNote={this.state.noteList[this.state.activeNoteIndex]}
                    handleTitleChange={(e) => this.handleTitleChange(e)}
                    handleContentChange={(e) => this.handleContentChange(e)}
                  />
                  : <MarkDown
                    activeNote={this.state.noteList[this.state.activeNoteIndex]}
                  />
                }
                </div>
              </div>
            </div>

            <div className='row'>
              <div className='col-xs-3'>
                <button
                  className='btn btn-primary'
                  onClick={() => this.addNewNote()}
                  style={{width: '100%', bottom: '0'}}
                  >
                  New Note
                </button>
              </div>
              <div className='col-xs-9'>
                <ol className='breadcrumb'>
                  <li><a onClick={() => this.setState({activeEditor: true})}>Editor</a></li>
                  <li><a onClick={() => this.setState({activeEditor: false})}>Markdown</a></li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default NoteTaker
