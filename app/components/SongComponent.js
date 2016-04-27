import React from 'react';
import ajaxHelpers from '../utils/ajaxHelpers';
import ReactAudioPlayer from 'react-audio-player';

const SongComponent = React.createClass({

  getInitialState: function(){
    return {
      btnText: this.props.btnText,
      mongoID: '',
      playUrl: '',
      btnBgColor: 'rgba(142, 38, 113,.9)',
      playingDiv: '',
      removeSong: false,
      display: 'block',
    }
  },

  playSong: function(){
    ajaxHelpers.playSong(this.props.name)
    .then(function(response){
      this.setState({
        playUrl: response.data.tracks.items[0].preview_url,
        playingDiv: '0 0 25px #6E41E1',
      })
    }.bind(this));
  },

  pauseSong: function(){
    this.setState({
      playUrl: '',
      playingDiv: '',
    })
  },

  handleClick: function(){

    if (this.state.btnText === 'Remove'){
      this.setState({
        btnText: 'Removed!',
        btnBgColor: '#d620b1',
        removeSong: true,
        display: 'none',
      });
      let mongoID = this.props.id;
      this.delSong(mongoID);
    };

    if (this.state.btnText === 'Save'){
      this.setState({
        btnText: 'Saved!',
        btnBgColor: '#b71998',
      });
      this.addSong();
    }
  },

  delSong: function(mongoID){
    console.log("trying to delete song");
    ajaxHelpers.deleteSong(mongoID)
  },

  addSong: function(){

    let song = {
      name: this.props.name,
      artist: this.props.artist,
      country: this.props.country,
      rank: this.props.rank,
      album_image: this.props.album_image,
      song_url: this.props.song_url
    }

    ajaxHelpers.addSongToPlaylist(song)
    .then(function(response){
      console.log('logging response after adding song', response.data.ops[0]['_id']);
      this.setState({
        mongoID: response.data.ops[0]['_id']
      })
      console.log("Mongo ID for song:", this.state.mongoID);
    }.bind(this))
  },

  getSongs: function(){

    let mainStyle = {
      showDiv: {
        display: this.state.display,
      },
      formatDiv: {
        backgroundColor: 'rgba(255,255,255,.1)',
        color: 'rgba(255,255,255,.9)',
        textShadow: '0 0 5px #000',
        borderRadius: '5px',
        margin: '20px',
        width: '370px',
        height: '370px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'stretch',
        backgroundImage: 'url(' + this.props.album_image + ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        fontWeight: 'bolder',
        boxShadow: this.state.playingDiv,
      },
      formatBtn: {
        backgroundColor: this.state.btnBgColor,
        border: '1px solid rgba(142, 38, 113,1)',
        color: 'rgba(255, 255, 255, 1)',
        fontSize: '17px'
      },
      flex: {
        display: 'flex',
      },
      track: {
        fontSize: '30px',
        textTransform: 'uppercase',
      },
      artist: {
        fontSize: '20px',
      },
      center: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        position: 'relative',
        top: '100px',
      },
      hide: {
        visibility: 'hidden',
      }
    };

    return (
      <div style={mainStyle.showDiv}>
        <div
          id='divSong'
          style={mainStyle.formatDiv}
          onMouseEnter={this.playSong}
          onMouseLeave={this.pauseSong}
          className='songInfo'>

          <div style={mainStyle.center}>
            <span style={mainStyle.artist}>{this.props.artist}</span>
            <span style={mainStyle.track}> {this.props.name}</span>
          </div>

          <div style={mainStyle.flex}>
            <button
              style={mainStyle.formatBtn}
              onClick={this.handleClick}
              className="addSongBtn"
              > {this.state.btnText}
            </button>

            <div style={mainStyle.hide}>
              <ReactAudioPlayer
                src={this.state.playUrl}
                autoPlay='true'
                preload='none'
              />
            </div>

          </div>
        </div>
      </div>
    )
  },

  render: function() {
    return (
      <div>
        {this.getSongs()}
      </div>
    );
  }
});

export default SongComponent;
