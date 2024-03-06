import React from 'react';
import {BskyAgent, AtpSessionData} from '@atproto/api';
import {Timeline, TimeLineInfo} from './timeline';
import "./home.css";

function HOME(props :TimeLineInfo) {
  if (props.session === undefined) {
    return (
      <div>
      </div>
    );
  }

  return (
    <div>
      <Timeline props={props}/>
    </div>
  );
}

export default HOME;