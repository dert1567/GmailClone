import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import {useSelector} from 'react-redux'


import './App.css';
import Emaillist from './Emaillist';
import { selectSendMessageIsOpen } from './features/mailSlice';
import Header from './Header';
import Mail from './Mail';
import SendMail from './SendMail';
import Sidebar from './Sidebar';

function App() {

const sendMessageIsOpen = useSelector(selectSendMessageIsOpen)

  return (
    <Router>
      <div className="app">

        <Header />

        <div className="app__body">
          <Sidebar />
          <Switch>
            <Route path="/mail">
              <Mail />
            </Route>

            <Route path="/">
              <Emaillist />
            </Route>



          </Switch>

        </div>
        
        {sendMessageIsOpen && <SendMail />}
      </div>
    </Router>
  );
}

export default App;
