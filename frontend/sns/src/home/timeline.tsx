import React from 'react';
import {AtpSessionData, BskyAgent} from '@atproto/api';
import { useState, useEffect } from 'react';
import './timeline.css';

interface TimeLineProps {
    // タイムラインの内容
    tweets: TweetsInfo[];
    // 取得したツイートの数
    tweets_num: number;
}

interface TweetsInfo {
    // ツイートの情報
    tweet: string;
    user: string;
}

interface TimeLineInfo {
    // タイムラインの情報
    session: AtpSessionData;
    load_num: number;
}

function Timeline(props: {session: AtpSessionData}){
    const [load_num, setLoadNum] = useState<number>(10);
    // タイムラインの内容を取得する
    const timeline: TimeLineProps = getTimeline({
        session: props.session,
        load_num : load_num,
    });


    // load_numが変更されたら、タイムラインの内容を更新する
    useEffect(() => {
        // 1回の取得件数
        const GET_ADIIIONAL_TWEETS = 20;
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

    // 1回の取得件数???
    const LIMIT_NUM = 50;

    // セッションを再開する
    const agent = new BskyAgent({
        service: "https://api.bsky.app",
    });
    agent.resumeSession(props.session);

    // タイムラインを取得する

    return;
}

function TimelineForward(props: {load_num: number, setLoadNum: (num: number) => void}) : JSX.Element {
    //出来るかな～　不明　おらわくわくしてきたぞ！！！！
    return (
        <div>
        </div>
    )
}

function TimelineBackward(props: {load_num: number, setLoadNum: (num: number) => void}) : JSX.Element {
    //出来るかどうか不明
    return (
        <div>
        </div>
    )
}

export default Timeline;