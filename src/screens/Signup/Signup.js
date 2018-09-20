import React, { Component } from 'react';
import { Icon, Form, Input, Button, Divider, Segment } from 'semantic-ui-react';
import firebase from '../../Fire'
import swal from 'sweetalert';
import 'semantic-ui-css/semantic.min.css';



class Signup extends Component{
  constructor(props){
    super(props);
    this.state = {
      name: '',
      email: '',
      newpass: '',
      confirmpass: ''
    }

  }


  handleEmail(e){
    this.setState({
      email: e.target.value,
    });
  }
  handleName(e){
    this.setState({
      name: e.target.value,
    });
  }

  handlenPass(e){
    this.setState({
      newpass: e.target.value,
    })
  }

  handlecPass(e){
    this.setState({
      confirmpass: e.target.value,
    })
  }

  async submitForm(e){

    e.preventDefault();
      const {name, email, newpass, confirmpass} = this.state
    
    if (newpass == confirmpass) {

        firebase.auth().createUserWithEmailAndPassword(email, confirmpass).then(function () {
          console.log("xxx1")
          firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
        .then(function () {
          console.log("xxx1")
            return firebase.auth().signInWithEmailAndPassword(email, confirmpass).then(function () {
              firebase.auth().onAuthStateChanged(async function (user) {
                    if (user) {
                        // User is signed in.
                        await firebase.auth().currentUser.updateProfile({
                            displayName: name,
                        });
                        const displayName = user.displayName;
                        const femail = user.email;
                        const uId = user.uid;

                        await firebase.database().ref('users/').push().set({
                            name: displayName,
                            email: femail,
                            uid: uId,
                        });
                        localStorage.setItem('uid', uId);
                        localStorage.setItem('owner', displayName);
                        
                        console.log("xxx")

                        
                        

                    } else {
                        

                    }
                })
                return false;
            })
        }).catch(function (error) {

            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage)
            
        });
        }).catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            
            //swal
        });
    } else {
        
        //swal
        
    }



  }

    render(){
        return (
      <div className="form" style={{width: '600px', margin: '20px auto'}}>
      <Segment padded>
      <h3>Please Sign in to continue!</h3>
          <Form onSubmit={this.submitForm.bind(this)} id="loginform">
    
          <Form.Field
              id='form-input-control-name'
              control={Input}
              label='Full Name'
              placeholder='xyz'
              type="text"
              onChange={this.handleName.bind(this)}
              required
            />
            <Form.Field
              id='form-input-control-email'
              control={Input}
              label='Email'
              placeholder='Email'
              type="email"
              onChange={this.handleEmail.bind(this)}
              required
            />
            <Form.Field
              id='form-input-control-npassword'
              control={Input}
              label='New Password'
              placeholder=''
              type="password"
              onChange={(this.handlenPass.bind(this))}
              required
            />
            <Form.Field
              id='form-input-control-cpassword'
              control={Input}
              label='Confirm Password'
              placeholder=''
              type="password"
              onChange={(this.handlecPass.bind(this))}
              required
            />
          <Form.Group>



    <Button secondary animated fluid
    >
    <Button.Content visible>Sign Up</Button.Content>
            <Button.Content hidden>
            <Icon name='user right' />
            </Button.Content>
    </Button>


    <Button primary animated fluid 
        onClick={(e) => {
            e.preventDefault()
            localStorage.setItem('login','')
            this.props.main.setState({signup: null })}
        }
    >
    <Button.Content visible>Sign in</Button.Content>
            <Button.Content hidden>
            <Icon name='arrow right' />
            </Button.Content>
    </Button>
    
    
          </Form.Group>
        </Form>
        </Segment>
        </div>
        );
    }
}

export default Signup;