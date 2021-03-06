import React from 'react';
import PlaylistComponent from '../components/PlaylistComponent'
import HeaderComponent from '../components/HeaderComponent';
import ajaxHelpers from '../utils/ajaxHelpers';
import {Link} from 'react-router';

const PlaylistPage = React.createClass({

  getInitialState: function(){
    return {
      ajaxReturn: [],
      showPlaylist: false
    }
  },

  componentDidMount: function() {
    console.log("hi playlistPage has loaded");

    ajaxHelpers.findCurrentPlaylist()
    .then(function(response){
      this.setState({
        ajaxReturn: response
      });
      this.setState({
        showPlaylist: true
      })
    }.bind(this));
  },


  render: function() {

    let divStyle = {
      divPos: {
        position: 'relative',
        top: '110px'
      },
      h1Style: {
        color: 'rgba(168, 168, 168,1)',
        margin: '0 20px',
        fontSize: '20px',
      },
    }


    return (
      <div>
        <HeaderComponent buttonText={"Back to Search"} link={"signedInPage"} />

        <div style={divStyle.divPos}>
          <h1 style={divStyle.h1Style}> Playlist</h1>
            <div>
              { this.state.showPlaylist ? <PlaylistComponent
                                          savedTxt={this.props.savedTxt}
                                          playlist={this.state.ajaxReturn}
                                          />
                                        : null }
            </div>
        </div>
      </div>
    );
  }
});

export default PlaylistPage;
