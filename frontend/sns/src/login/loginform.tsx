import React, {useState, useEffect}  from 'react';
import { BskyAgent, AtpSessionEvent, AtpSessionData, AtpServiceClient } from '@atproto/api'


export type AtpSessionProps = {
  session: AtpSessionData | undefined;
  setSession: React.Dispatch<React.SetStateAction<AtpSessionData | undefined>>;
};

function LoginForm(session_params: AtpSessionProps) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if (session_params.session !== undefined) {
    return (
      <div>
      </div>
    );
  }

  return (
    <div>
      <input 
        className='email'
        type="email"
        placeholder="メールアドレスを入れてください"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className='password'
        type="password"
        placeholder="パスワードを入力してください"
        value={password}
        onChange={(e) => setPassword(e.target.value)}          
      />
      <button
        className='login'
        onClick={() => LoginButton(email, password, session_params.setSession)}
      >
        ログイン
      </button>
    </div>
  );
}

async function LoginButton(email: string, password: string, setSession: React.Dispatch<React.SetStateAction<AtpSessionData | undefined>>) {

  const service = "https://api.bsky.app";

  const agent = new BskyAgent({ 
    service: service,
  });

  agent.login(
    {
      identifier: email,
      password: password
    }
  ).then((session) => {
    setSession(agent.session);
  }).catch((error) => {
    console.log(error);
  })
  
}

export default LoginForm;
