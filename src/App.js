import React, { Component } from 'react';
import { render } from "react-dom";
//import { View } from "react-nlp";
import logo from './logo.svg';
import './App.css';
import 'react-chat-widget/lib/styles.css';
import * as firebase from 'firebase';
import { Widget, addResponseMessage, addLinkSnippet, addUserMessage } from 'react-chat-widget';
 
 
class App extends React.Component {
constructor(){
  super();
  this.state={};

}

  componentDidMount(){
    var both="stud2";
  const rootref = firebase.database().ref().child(both);
  const nameref = rootref.child('Name');
  const marref=rootref.child('marks');
  const phoref=rootref.child('phone');
  const regref=rootref.child('regid');
  const semref=rootref.child('semester')
  nameref.on('value',snap => {
    this.setState({
      Name: snap.val()
    });
  });
    marref.on('value',snap => {
    this.setState({
      marks: snap.val()
    });
  });
     phoref.on('value',snap => {
    this.setState({
      phone: snap.val()
    });
  });
      regref.on('value',snap => {
    this.setState({
      regid: snap.val()
    });
  });
       semref.on('value',snap => {
    this.setState({
      semester: snap.val()
    });
  });
  }
  render() {
    return (
      <div>  
	  <CBW/>
	  <MSG/>
	  <RSP/>
	  <WBPG/>
    <a>NAME: {this.state.Name}</a><div></div>
    <a>MARKS: {this.state.marks}</a><div></div>
    <a>Phone No: {this.state.phone}</a><div></div>
    <a>REGISTER ID: {this.state.regid}</a><div></div>
    <a>SEMESTER: {this.state.semester}</a>
      </div>
    );
  }
}

class CBW extends React.Component {
  render() {
    return (
      <div className="CBW">
        <Widget />
      </div>
    );
  }
}

class MSG extends React.Component {
  handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
    // Now send the message throught the backend API
  }

  render() {
    return (
      <div className="MSG">
        <Widget
          handleNewUserMessage={this.handleNewUserMessage}
        />
      </div>
    );
  }
}

class RSP extends React.Component {
  componentDidMount() {
    addResponseMessage("How can I help you? Would you like to know your MARKS or EXAM DATES?");

  }
 
  handleNewUserMessage = (response) => {
    console.log(`New message incoming! ${response}`);
    // Now send the message throught the backend API
    addResponseMessage(response);                                      //COME BACK
    
  }

  render() {
    return (
      <div className="RSP">       
        <Widget 
              handleNewUserMessage={this.handleNewUserMessage}
		      profileAvatar={logo}
          title="TextBot"
          subtitle="Summer Internship Project"
        />
      </div>
      );
  } 

}

 
class WBPG extends React.Component {
  render() {
    return (
      <div className="WBPG">
        <header className="App-header" align="center">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title" align="center">Welcome to the <b>ChatBot</b></h1>
        </header>
        <p className="App-intro">
        </p>
      </div>
    );
  }
}

export default App;
