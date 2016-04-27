import React from 'react';
import {Link} from 'react-router';
import TitleComponent from '../components/TitleComponent';
import LoginComponent from '../components/LoginComponent';
import ajaxHelpers from '../utils/ajaxHelpers';
let    styles = require('../css/landingStyles.css');

const LandingPage = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function() {
    return {
      user: '',
      password: '',
      playlist: [],
      loggedIn: true
    }
  },

  handleOnChangeUser: function(e) {
    this.setState({
      user: e.target.value
    })
    console.log("target.value for user is:", this.state.user);
  },

  handleOnChangePassword: function(e) {
    this.setState({
      password: e.target.value
    })
    console.log("target.value for password is:", e.target.value);
  },

  handleFindUser: function(e){
    this.setState({
      user: this.state.user,
      password: this.state.password
    });
    let user = {
      user: this.state.user,
      password: this.state.password,
      playlist: [],
      loggedIn: true
    };
    console.log('finding user');
    console.log('the user looks like this', user);
     ajaxHelpers.findUser(user)
  },

  handleSubmitUser: function(e) {
    this.setState({
      user: this.state.user,
      password: this.state.password
    });
    console.log("this.state.user is:", this.state.user);
    let user = {
      user: this.state.user,
      password: this.state.password,
      playlist: [],
      loggedIn: true
    };
    console.log('the user looks like this', user);
     ajaxHelpers.addUser(user)
  },

  render: function() {

    let loginBoxStyle = {
      backgroundColor: 'rgba(0,0,0,.2)',
      border: '1px solid rgba(255,255,255,.3)',
      minWidth: '40%',
      padding: '20px',
      margin: 'auto',
      borderRadius: '5px',
      textAlign: 'center',
    };

    return (
      <div className='loginBoxPosition'>
        <div className='landingFlex'>
          <div style={loginBoxStyle}>
            <TitleComponent/>
            <LoginComponent
              onChangeUser={this.handleOnChangeUser}
              onChangePassword={this.handleOnChangePassword}
              addUser={this.handleSubmitUser}
              findUser={this.handleFindUser}
              />
          </div>
        </div>
      </div>
    );
  }
});

export default LandingPage;
