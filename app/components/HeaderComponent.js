import React from 'react';
import TitleComponent from './TitleComponent';
import ButtonComponent from '../components/ButtonComponent';
import {Link} from 'react-router';

const HeaderComponent = React.createClass({

  render: function() {

    let headerStyle = {
      main: {
        backgroundColor: 'rgba(0,0,0,.9)',
        color: '#fff',
        lineHeight: '50px',
        padding: '20px',
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: '30px',
        position: 'absolute',
        overflowY: 'scroll',
        top: '0',
        width: '100%',
        zIndex: '1',
      },
      btn: {
        fontSize: '15px',
        color: 'rgba(255,255,255,.8)',
        borderRadius: '2px',
        margin: '0 5px',
        padding: '5px 10px',
        position: 'relative',
        top: '-4px'
      },
      flex: {
        display: 'flex',
      }
    };

    return (
      <div style={headerStyle.main}>
        <span>
            vybez
        </span>

        <div style={headerStyle.flex}>

          <Link to="LandingPage">
            <button style={headerStyle.btn}> Log Out </button>
          </Link>

          <ButtonComponent
            buttonText={this.props.buttonText}
            link={this.props.link}
            style={headerStyle.btn}
          />

        </div>
      </div>
    );
  }
});

export default HeaderComponent;
