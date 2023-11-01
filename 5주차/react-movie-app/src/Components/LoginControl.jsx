import React, { Component } from 'react'

class LoginControl extends Component {
  constructor(props) {
    super(props);
    this.state={
      isLoggedIn: false,
    };
  }
  
  handleLoginClick = () => {
    this.setState(() => ({
      isLoggedIn: true,
    }));
  }

  handleLogoutClick = () => {
    this.setState(() => ({
      isLoggedIn: false,
    }))
  }

  render() {
    return (
      <div className='login'>
        <button className='login-control' onClick={this.state.isLoggedIn ? this.handleLogoutClick : this.handleLoginClick}>
          {this.state.isLoggedIn ? '로그아웃' : '로그인'}
        </button>
        <p className='login-text'>{this.state.isLoggedIn ? '환영합니다!' : '로그인 해주세요!'}</p>
      </div>
    )
  } 
}


export default LoginControl;