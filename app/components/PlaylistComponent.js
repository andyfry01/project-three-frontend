import React from 'react';
import SongComponent from './SongComponent';

const PlaylistComponent = React.createClass({

  render: function(){

    let divStyle = {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
    }

    let playlist = this.props.playlist.data.map(function(obj){
      return (
        <div key={obj._id}>
          <SongComponent
            id={obj['_id']}
            name={obj.name}
            artist={obj.artist}
            rank={obj.rank}
            album_image={obj.albumImage}
            song_url={obj.songURL}
            btnText='Remove'
          />

        </div>
      );
    });

    return (
      <div style={divStyle}>
        {playlist}
      </div>
    );
  }
});

export default PlaylistComponent;
