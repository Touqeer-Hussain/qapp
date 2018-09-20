import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import Container from './container/Container'
import Login from './screens/Login/Login'
import Signup from './screens/Signup/Signup'





class App extends Component {
constructor(){
  super();
  
  this.state = {
    signup: null,
    
  }
}  

  
  
  
  render() {
      return(
        <Container>
          {!localStorage.getItem('login') && <Login main={this}/>}
          {localStorage.getItem('login') == 'temp' && <Signup main={this}/>}
        </Container>
      );
  }
}

export default App;
