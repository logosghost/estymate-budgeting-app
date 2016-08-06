import React from 'react';
import { findDOMNode } from 'react-dom';
import { Link } from 'react-router';
import  store  from '../store';
import { browserHistory } from 'react-router';
import { Form, FormGroup, FormControl, ControlLabel, Panel, Button, PageHeader } from 'react-bootstrap';


const Login = React.createClass({

  componentWillMount() {
    if (this.props.organization.user) {
      var joinedName = this.props.organization.orgName.split(" ").join("");
      browserHistory.push(`/dashboard/${joinedName}`);
    }
  },

  handleSubmit(event) {
    event.preventDefault();
    let username = findDOMNode(this.refs.usernameInput).value,
    password = findDOMNode(this.refs.passwordInput).value
    this.props.postLogin(username, password);
  },

  render() {
    return (
     <div>
       <PageHeader id="loginHeader"><small>Login</small></PageHeader>
       <Button>
         <Link to={`/register`}>
          Create Organization
         </Link>
       </Button>
         <Panel id="loginPanel">
           <Form inline className="testFormCenter" onSubmit={this.handleSubmit}>
             <div>
               <ControlLabel>Username</ControlLabel>
                <br></br>
               <FormControl type="text" placeholder="Username" ref="usernameInput" onChange={this.props.resetLoginMessage} autoCorrect="off" autoCapitalize="off" spellCheck="false" />
             </div>
             <div>
               <ControlLabel htmlFor="password">Password</ControlLabel>
                <br></br>
               <FormControl type="password" ref="passwordInput" onChange={this.props.resetLoginMessage} placeholder="••••••••••"/>
             </div>
             <div>
               <Button type="submit">Login</Button>
               <p id="loginMessage">{this.props.messages.login}</p>
             </div>
          </Form>
        </Panel>
      </div>
    );
  }
});

export default Login;
