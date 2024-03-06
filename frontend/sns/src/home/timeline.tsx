import React from 'react';
import {AtpSessionData, BskyAgent} from '@atproto/api';
import { useState, useEffect } from 'react';
import './timeline.css';
import InfiniteScroll from "react-infinite-scroller";

export interface TimeLineProps {
    // タイムラインの内容
    tweets: TweetsInfo[];
    // 取得したツイートの数
    tweets_num: number;
}

export interface TweetsInfo {
    // ツイートの情報
    tweet: string;
    user: string;
}

export interface TimeLineInfo {
    // タイムラインの情報
    session: AtpSessionData;
    load_num: number;
}

export function Timeline(props: TimeLineInfo): JSX.Element{
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
            {/* タイムラインの内容 */}
        </div>
    )
}

function getTimeline(props: TimeLineInfo): TimeLineProps {

    // 1回の取得件数???
    const LIMIT_NUM = 50;

    // セッションを再開する
    const agent = new BskyAgent({
        service: "https://api.bsky.app",
    });
    agent.resumeSession(props.session);

    // タイムラインを取得する 以下の変数は削除してください
    const tmp : TimeLineProps = {tweets:[], tweets_num: 5}; 
    return tmp;
}

// 下方向の無限スクロールを実装するコンポーネント
export function Scroll(props: TimeLineInfo): JSX.Element {
    const [list, setList] = useState<JSX.Element[]>([]);

    // 項目を読み込むときのコールバック
    const loadMore = () => {
        // ここでタイムラインのデータを非同期で取得する処理を実装
        // Timelineを取得し、pageに格納
        const page = Timeline(props)
        // 取得したデータをリストに追加
        setList([...list, page]);
    };

    // 下方向の無限スクロールの実装
    return (
        <InfiniteScroll
            // 初期のページは0
            pageStart={0}
            // スクロールすると呼ばれる関数
            loadMore={loadMore}
            // まだ読み込むアイテムがあるかどうか
            hasMore={true}
            // ローディング中に表示するコンポーネント
            loader={<div className="loader" key={0}>Loading ...</div>}    
        >   
            {/* リストの中身を表示*/}   
            {list.map(
                (value) => (
                    <p>{value}</p>
                )
            )}
        </InfiniteScroll>
    )
}


export default Timeline;