import React from 'react';
import HeaderComponent from '../components/HeaderComponent';
import MapComponent from '../components/MapComponent';
import TopHitsComponent from '../components/TopHitsComponent';
import ajaxHelpers from '../utils/ajaxHelpers';


const SignedInPage = React.createClass({

  componentDidMount: function() {
    console.log("hi signedInPage has loaded");
  },

  getInitialState: function(){
    return {
      ajaxReturn: [],
      countryName: '',
    }
  },

  countryInput: function(e){
    this.setState({
      countryName: e.target.value
    });
  },

  findCountrySongsAjaxCall: function(){
    let country = this.state.countryName;
    ajaxHelpers.findCountrySongs(country)
    .then(function(response){
      this.setState({
        ajaxReturn: response.data.tracks
      });
    }.bind(this));
  },

  getCountrySongs: function(){
    if (this.state.ajaxReturn.track){
      return (
        <div>
          <TopHitsComponent
            songs={this.state.ajaxReturn}
          />
        </div>
      );
    }
  },

  render: function() {
    let divStyle = {
      position: 'relative',
      top: '120px',
    }

    return (
      <div>
        <HeaderComponent buttonText={"View Playlist"} link={"PlaylistPage"}/>

        <div style={divStyle}>
          <MapComponent countryInput={this.countryInput} onSubmit={this.findCountrySongsAjaxCall} />
          {this.getCountrySongs()}
        </div>

      </div>
    );
  }
});

export default SignedInPage;
