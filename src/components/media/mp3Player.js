import React, { Component } from "react";
import ReactPlayer from "react-player";
import Moment from "moment";
import Slider from "react-rangeslider";

import asdf from "./asdf";
class MP3Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false,
      totalTime: this.secondsToTimeFormat(0),
      loadedTime: this.secondsToTimeFormat(0),
      playedTime: this.secondsToTimeFormat(0),
      volumeProgress: 0.5,
      loadedProgress: 0,
      playedProgress: 0,
      isMuted: false,
      volumeProgressCss: {},
      audioProgressCss: {},
      volumeButtonPath: "M0 7.667v8h5.333L12 22.333V1L5.333 7.667M17.333 11.373C17.333 9.013 16 6.987 14 6v10.707c2-.947 3.333-2.987 3.333-5.334z"
    };
  }
  toggleIsPlaying = () => {
    this.setState({
      isPlaying: !this.state.isPlaying
    });
  };
  updateProgress = event => {
    this.setState({
      loadedTime: this.secondsToTimeFormat(event.loadedSeconds),
      playedTime: this.secondsToTimeFormat(event.playedSeconds),
      loadedProgress: event.loaded,
      playedProgress: event.played
    });
  };

  updateDuration = event => {
    this.setState({
      totalTime: this.secondsToTimeFormat(event),
      totalTimeRaw: event
    });
  };
  setProgress = event => {
    this.setState(
      {
        playedProgress: event.target.value,
        playedTime: this.secondsToTimeFormat(
          event.target.value * this.state.totalTimeRaw
        )
      },
      () => {
        this.updateProgressCss();
      }
    );
    this.player.seekTo(event.target.value * this.state.totalTimeRaw);
  };
  updateProgressCss = () => {
    this.setState({
      audioProgressCss: {
        backgroundImage: `-webkit-gradient(linear,left top,right top,color-stop(${
          this.state.playedProgress
        }, #6F9990),color-stop(${this.state.playedProgress},#C5C5C5))`
      }
    });
  };
  muteVolume = () => {
    this.setState({
      isMuted: !this.state.isMuted
    },
    () => {
      this.updateVolumeCss();
    })
  }
  updateVolume = event => {
    this.setState(
      {
        volumeProgress: parseFloat(event.target.value),
        isMuted: false
      },
      () => {
        this.updateVolumeCss();
      }
    );
  };
  updateVolumeCss = () => {
    let volumeButtonPath = "";
    if(this.state.isMuted || this.state.volumeProgress == 0.0){
      volumeButtonPath = "M0 7.667v8h5.333L12 22.333V1L5.333 7.667";
    }else if (this.state.volumeProgress > 0.5) {
      volumeButtonPath = "M14.667 0v2.747c3.853 1.146 6.666 4.72 6.666 8.946 0 4.227-2.813 7.787-6.666 8.934v2.76C20 22.173 24 17.4 24 11.693 24 5.987 20 1.213 14.667 0zM18 11.693c0-2.36-1.333-4.386-3.333-5.373v10.707c2-.947 3.333-2.987 3.333-5.334zm-18-4v8h5.333L12 22.36V1.027L5.333 7.693H0z";
    }else if (this.state.volumeProgress <= 0.5 && this.state.volumeProgress > 0.0) {
      volumeButtonPath = "M0 7.667v8h5.333L12 22.333V1L5.333 7.667M17.333 11.373C17.333 9.013 16 6.987 14 6v10.707c2-.947 3.333-2.987 3.333-5.334z";
    }
    this.setState({
      volumeProgressCss: {
        backgroundImage: `-webkit-gradient(linear,left top,right top,color-stop(${
          this.state.volumeProgress
        }, #6F9990),color-stop(${this.state.volumeProgress},#C5C5C5))`        
      },volumeButtonPath: volumeButtonPath
    });    
  };

  secondsToTimeFormat = secs => {
    const moment = Moment(secs, "X");
    return moment.format("mm:ss");
  };
  ref = player => {
    this.player = player;
  };
  render() {
    return (
      <div>
        <div className="audio green-audio-player">
          <div className="play-pause-btn" onClick={this.toggleIsPlaying}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="24"
              viewBox="0 0 18 24"
            >
              <path
                fill="#566574"
                fillRule="evenodd"
                d={
                  this.state.isPlaying
                    ? "M0 0h6v24H0zM12 0h6v24h-6z"
                    : "M18 12L0 24V0"
                }
                className="play-pause-icon"
                id="playPause"
              />
            </svg>
          </div>

          <div className="controls">
              <span className="current-time">{this.state.playedTime}</span>
            
              <input
                style={this.state.audioProgressCss}
                data-direction="horizontal"
                step=".001"
                min="0"
                max="1"
                value={this.state.playedProgress}
                onChange={this.setProgress}
                type="range"
              />
              <span className="total-time">{this.state.totalTime}</span>
            
          </div>

          <div className="volume">
            <div className="volume-btn"
            onClick={this.muteVolume}
              >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                
              >
                <path
                  fill="#3A4C56"
                  fill-rule="evenodd"
                  d={this.state.volumeButtonPath}
                  id="speaker"
                />
              </svg>
            </div>
            <div className="volume-slider-wrapper">
              <input
                className="volume-slider"
                data-direction="vertical"
                step=".1"
                min="0"
                max="1"
                value={this.state.volumeProgress}
                style={this.state.volumeProgressCss}
                onChange={this.updateVolume}
                type="range"
              />
            </div>
          </div>
        </div>

        <ReactPlayer
          className="player"
          url={this.props.url}
          playing={this.state.isPlaying}
          onProgress={this.updateProgress}
          muted={this.state.isMuted}
          onDuration={this.updateDuration}
          volume={this.state.volumeProgress}
          ref={this.ref}
        />
      </div>
    );
  }
}

export default MP3Player;

////<input className="slider" data-direction="horizontal" step=".001" min="0" max="1" value={this.state.playedProgress} onChange={this.setProgress} type="range"/>
