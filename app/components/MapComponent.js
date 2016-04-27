import React from 'react';

const MapComponent = React.createClass({

  countryName: function(e){
    this.props.countryInput(e);
  },

  render: function(){

    let divStyle = {
      padding: '20px 20px 50px',
      width: '90%',
      margin: 'auto',
      display: 'flex',
    };

    return (
      <div style={divStyle}>

        <input placeholder='enter a country' onChange={this.countryName}/>
        <button onClick={this.props.onSubmit}>Go!</button>
        <br/>
        <br/>
      </div>
    );
  }
});

export default MapComponent;
