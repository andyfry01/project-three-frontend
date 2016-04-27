import React from 'react';

const TitleComponent = React.createClass({
  render: function(){
    let logo = 'http://s1.postimg.org/6eh9efe0v/vybez.png';

    let logoStyle = {
      backgroundImage: 'url(' + logo + ')',
      backgroundSize: 'cover',
      borderRadius: '50%',
      width: '120px',
      height: '120px',
    }

    return (
      <div className='landingFlex'>
        <h1 style={logoStyle}></h1>
      </div>
    );
  }
});

export default TitleComponent;
