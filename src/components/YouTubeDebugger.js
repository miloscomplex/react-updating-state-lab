// Code YouTubeDebugger Component Here
// Code DigitalClicker Component Here
import React from 'react'

class YouTubeDebugger extends React.Component {
  constructor() {
    super()

    this.state = {
       errors: [],
       user: null,
       settings: {
         bitrate: 8,
         video: {
           resolution: '1080p'
         }
       }
    }
  }


  changeBitrate = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    })
  }

  changeResolution = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          ...this.state.video,
          resolution: '720p'
        }
      }
    })
  }

  render () {
     return (
       <p>
         <button className='bitrate' onClick={this.changeBitrate}>bitrate</button>
         <button className='resolution' onClick={this.changeResolution}>resolution</button>
       </p>
    )
  }

}

export default YouTubeDebugger
