import {Component} from 'react'

import ReactPlayer from 'react-player'

import './index.css'

class VideoPlayer extends Component {
  state = {
    isPlaying: false,
  }

  onClickBtn = () => {
    this.setState(prevState => ({isPlaying: !prevState.isPlaying}))
  }

  render() {
    const {isPlaying} = this.state
    const btnText = isPlaying ? 'Pause' : 'Play'
    return (
      <div className="video-container">
        <h1 className="heading">Video Player</h1>
        <div className="responsive-container">
          <ReactPlayer
            controls
            playing={isPlaying}
            url="https://www.youtube.com/watch?v=qvi5sCZR36U"
          />
        </div>
        <button type="button" className="button" onClick={this.onClickBtn}>
          {btnText}
        </button>
      </div>
    )
  }
}

export default VideoPlayer
