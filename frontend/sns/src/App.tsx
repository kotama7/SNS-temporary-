import React, {useState} from 'react';
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
      <LoginForm {...session_params} />
      <HOME session={session}/>
    </div>
  );
}

export default App;
