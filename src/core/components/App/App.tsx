import React from 'react';
import { connect } from 'react-redux';
import { createUserWithEmailAC, signInWithEmailAC } from '../../reducers/usersReducer';
import classes from './App.module.css';

const App: React.FunctionComponent = (props:any) => {
  const data = {
    email: 'medved3993@gmail.com',
    password: '123456'
  }
  return(
    <div className={classes.wrapper}>
      <button onClick={() => props.createUser(data)}>Create Login</button>
      <button onClick={() => props.signIn(data)}>Sign In</button>
    </div>
  )
}

const mapDispatchToProps = (dispatch: any) => ({
  createUser: (payload: object) => dispatch(createUserWithEmailAC(payload)),
  signIn: (payload: object) => dispatch(signInWithEmailAC(payload))
})

export default connect(null, mapDispatchToProps)(App)