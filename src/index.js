import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from 'firebase';
import registerServiceWorker from './registerServiceWorker';
  
  var config = {
    apiKey: "AIzaSyDeIPES9HyCnF9xpMW1y9AP3glPAcD_kEs",
    authDomain: "visrya-d12cc.firebaseapp.com",
    databaseURL: "https://visrya-d12cc.firebaseio.com",
    projectId: "visrya-d12cc",
    storageBucket: "visrya-d12cc.appspot.com",
    messagingSenderId: "62968014134"
  };
firebase.initializeApp(config);
ReactDOM.render(
<div>
<App />
</div>, document.getElementById('root')

);
registerServiceWorker();
