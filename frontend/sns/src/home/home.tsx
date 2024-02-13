import React from 'react';
import {BskyAgent, AtpSessionData} from '@atproto/api';

function HOME(props: {session: AtpSessionData | undefined}) {
  if (props.session === undefined) {
    return (
      <div>
      </div>
    );
  }
  
  const agent = new BskyAgent({
    service: "https://api.bsky.app",
  });
  agent.resumeSession(props.session);

  return (
    <div>
      <p>ようこそ</p>
    </div>
  );
}

export default HOME;