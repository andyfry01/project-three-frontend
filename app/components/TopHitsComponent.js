import React from 'react';
import {Link} from 'react-router';
import SongComponent from './SongComponent'
let    styles = require('../css/styles.css');

const TopHitsComponent = React.createClass({

  render: function(){
    console.log('spotify', this.props.play)
    console.log('lastfm:', this.props.songs.track)
    let song = this.props.songs.track.map(function(obj){
      return (
        <div key={obj['@attr'].rank}>
          <SongComponent
            name={obj.name}
            artist={obj.artist.name}
            rank={obj['@attr'].rank}
            country={obj['@attr'].country}
            album_image={obj.image[3]['#text']}
            song_url={obj.url}
            songs={obj.lastFM}
            btnText='Save'
          />
        </div>
      );
    });

    return (
      <div className='flexResults'>
        {song}
      </div>
    );
  }
});

export default TopHitsComponent;
