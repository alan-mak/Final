import React from 'react';
import Background from '../Background';

import Login from './log-in';
import SignUp from './sign-up';

import './styles.scss';

export class LogSign extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: true,
    };
  }

  changeState() {
    const { isLogin } = this.state;
    if (isLogin) {
      this.side.classList.remove('right');
      this.side.classList.add('left');
    } else {
      this.side.classList.remove('left');
      this.side.classList.add('right');
    }
    this.setState(prevState => ({ isLogin: !prevState.isLogin }));
  }

  render() {
    const { isLogin } = this.state;
    const current = isLogin ? 'Sign Up Here' : 'Log In Here';
    const currentActive = isLogin ? 'login' : 'signUp';
    const body = (
      <div className='login'>
        <div className='container' ref={ref => (this.container = ref)}>
          {isLogin && <Login 
          loginUser={this.props.loginUser}
          baseRef={ref => (this.current = ref)} />}
          {!isLogin && (
            <SignUp
              createUser={this.props.createUser}
              baseRef={ref => (this.current = ref)}
              loginUser={this.props.loginUser}
            />
          )}
        </div>
        <Side
          current={current}
          currentActive={currentActive}
          baseRef={ref => (this.side = ref)}
          onClick={this.changeState.bind(this)}
        />
      </div>
    );
    return <Background body={body} />;
  }
}

const Side = props => {
  return (
    // This initializes the two wings
    <div
      className='right-side right'
      ref={props.baseRef}
      onClick={props.onClick}
    >
      <div className='inner-container'>
        <div className='option'>{props.current}</div>
      </div>
    </div>
  );
};
