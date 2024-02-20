import React from 'react';
import {BskyAgent, AtpSessionData} from '@atproto/api';
import Timeline from './timeline';

function HOME(props :{session: AtpSessionData | undefined}) {
  if (props.session === undefined) {
    return (
      <div>
      </div>
    );
  }

  return (
    <div>
      <Timeline session={props.session}/>
    </div>
  );
}

export default HOME;