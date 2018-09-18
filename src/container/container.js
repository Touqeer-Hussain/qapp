import React, { Component } from 'react';
import {
    Container,
    Image,
    Menu,
    Button,
    Icon,
  } from 'semantic-ui-react'
import logo from './logo.png'
import swal from 'sweetalert';
import 'semantic-ui-css/semantic.min.css';


class Conatiner extends Component{
constructor(props){
  super(props);
}  


    render(){
        return (

            <div>
              <Menu fixed='top' inverted>
                <Container>
                  <Menu.Item as='a' header>
                    <Image size='mini' src={logo} style={{ marginRight: '1.5em' }} />
                    Quiz App
                  </Menu.Item>
                  <Menu.Item as='a'>
                  {
                    localStorage.getItem('logged') &&

                    <Button animated color='teal'  onClick={() => {
                        this.props.main.setState({quiz: true})
                        localStorage.setItem('quiz', 'true');
                        localStorage.setItem('cate', '');
                        localStorage.setItem('test', '');
                        localStorage.setItem('result', '');
                        localStorage.setItem('done', '');
                        
                    }}>
                        <Button.Content visible>Home</Button.Content>
                        <Button.Content hidden>
                        <Icon name='arrow right' />
                        </Button.Content>
                    </Button>
                  }

                  </Menu.Item>
                  <Menu.Item as='a'>
                  {
                    localStorage.getItem('logged') &&

                    <Button animated color='grey'  onClick={() => {
                        this.props.main.setState({created: false})
                        localStorage.setItem('logged', '');
                        localStorage.setItem('quiz', '');
                        localStorage.setItem('cate', '');
                        localStorage.setItem('test', '');
                    }}>
                        <Button.Content visible>Sign Out</Button.Content>
                        <Button.Content hidden>
                        <Icon name='arrow right' />
                        </Button.Content>
                    </Button>
                  }

                  </Menu.Item>
          
                </Container>
              </Menu>
          
              <Container text style={{ marginTop: '7em' }}>
                {this.props.children}
              </Container>
          
              
            </div>
          
        );
    }
}

export default Conatiner;