import React, { Component } from 'react';
import { Icon, Form, Input, Button, Divider, Segment } from 'semantic-ui-react';
import swal from 'sweetalert';
import 'semantic-ui-css/semantic.min.css';


class Login extends Component{
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
    }
  }


  handleUser(e){
    this.setState({
      username: e.target.value,
    });
  }

  handlePass(e){
    this.setState({
      password: e.target.value,
    })
  }

  submitForm(e){
    e.preventDefault();

    if(!this.state.username || !this.state.password){
      swal('', 'Please Provide Credentials!', 'warning');
      this.setState({
        username: '',
        password: ''
      })
      document.getElementById('loginform').reset();
      
    }else{
         if(this.state.username !== 'admin@domain.com' || this.state.password !== 'admin'){
              swal('', 'Wrong Credentials!', 'error');
              this.setState({
                username: '',
                password: ''
              })
              document.getElementById('loginform').reset();
          }else{
            
              this.props.user.setState({currentUser:{uname:'Admin'}})
          }
    }
    
  }

    render(){
        return (
      <div className="form" style={{width: '600px', margin: '20px auto'}}>
      <Segment padded>
      <h3>Please Sign in to continue!</h3>
          <Form onSubmit={this.submitForm.bind(this)} id="loginform">
    
            <Form.Field
              id='form-input-control-email'
              control={Input}
              label='Email'
              placeholder='abc@example.com'
              type="email"
              required
              onChange={this.handleUser.bind(this)
            }
            />
            <Form.Field
              id='form-input-control-password'
              control={Input}
              label='Password'
              placeholder=''
              type="password"
              required
              onChange={(this.handlePass.bind(this))}
            />
          <Form.Group>
          
    <Button primary animated fluid>
    <Button.Content visible>Sign in</Button.Content>
            <Button.Content hidden>
            <Icon name='arrow right' />
            </Button.Content>
    </Button>
    
    <Button secondary animated fluid
        onClick={(e) => {
            e.preventDefault()
            localStorage.setItem('login','temp')
            this.props.main.setState({signup: true })}
        }
    >
    <Button.Content visible>Sign Up</Button.Content>
            <Button.Content hidden>
            <Icon name='user right' />
            </Button.Content>
    </Button>
    
          </Form.Group>
        </Form>
        </Segment>
        </div>
        );
    }
}

export default Login;