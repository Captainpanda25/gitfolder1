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
  var resp=" ";

}

    componentDidMount() {
  
  const rootref = firebase.database().ref().child('mark').child('mark1');
  const Idref=rootref.child('Id');
  const engref=rootref.child('english');
      Idref.on('value',snap => {
    this.setState({Id: snap.val()});
  });
  
        engref.on('value',snap => {
    this.setState({english: snap.val()});
  });
  }
 
  handleNewUserMessage = (response) => {

    console.log(`New message incoming! ${response}`);
    // Now send the message throught the backend API

    this.resp=response.toLowerCase();

    if(this.resp=="hey")
    {
     addResponseMessage("Hi"); 
   }
    else if(this.resp=="mark1"||this.resp=="mark2")
    {

     addResponseMessage("Details are as follows:")
     addResponseMessage("English: "+this.state.english)
     addResponseMessage("Id: "+this.state.Id)

     }                                                                                                  //COME BACK
    else{
      addResponseMessage("Sorry!")     
    }
  }


  render() {
    return (
      <div className="RSP"> 
              <header className="App-header" align="center">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title" align="center">Welcome to the ChatBot</h1>
        </header>
        <p className="App-intro">
        </p>
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

 

/*          <a>NAME: {this.state.Name}</a><div></div>
    <a>MARKS: {this.state.marks}</a><div></div>
    <a>Phone No: {this.state.phone}</a><div></div>
    <a>REGISTER ID: {this.state.regid}</a><div></div>
    <a>SEMESTER: {this.state.semester}</a>      */
export default App;
