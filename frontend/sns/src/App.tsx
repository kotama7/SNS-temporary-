import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import LoginForm, {AtpSessionProps} from './login/loginform';
import HOME from './home/home';
import { AtpSessionData } from '@atproto/api'


function App() {
  const [session, setSession] = useState<AtpSessionData | undefined>(undefined);
  const session_params: AtpSessionProps = {
    session: session,
    setSession: setSession
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <LoginForm {...session_params}/>
        <HOME session={session}/>
      </header>
    </div>
  );
}

export default App;
