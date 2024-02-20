import React from 'react';
import {AtpSessionData, BskyAgent} from '@atproto/api';
import { Agent } from 'http';
import { useState, useEffect } from 'react';

interface TimeLineProps {
    // タイムラインの内容
}

interface TimeLineInfo {
    // タイムラインの情報
    session: AtpSessionData;
    load_num: number;
}

function Timeline(props: {session: AtpSessionData}){
    const [load_num, setLoadNum] = useState<number>(10);
    const timeline: TimeLineProps = getTimeline({
        session: props.session,
        load_num : load_num,
    });


    // load_numが変更されたら、タイムラインの内容を更新する
    useEffect(() => {
        // タイムラインの内容を更新する
    }, [load_num]);

    return (
        <div>
            <TimelineForward load_num={load_num} setLoadNum={setLoadNum}/>
            {/* タイムラインの内容 */}
            <TimelineBackward load_num={load_num} setLoadNum={setLoadNum}/>
        </div>
    )
}

function getTimeline(props: TimeLineInfo){

    // セッションを再開する
    const agent = new BskyAgent({
        service: "https://api.bsky.app",
    });
    agent.resumeSession(props.session);

    // タイムラインを取得する

    return;
}

function TimelineForward(props: {load_num: number, setLoadNum: (num: number) => void}) : JSX.Element {
    return (
    )
}

function TimelineBackward(props: {load_num: number, setLoadNum: (num: number) => void}) : JSX.Element {
    return (
    )
}

export default Timeline;