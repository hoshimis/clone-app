import React, { useEffect, useState } from 'react'
import "./Timeline.css"
import TweetBox from './TweetBox'
import Post from './Post'
import db from '../../firebase'
import { collection, getDocs, onSnapshot, orderBy, query, QuerySnapshot } from "firebase/firestore"
import FlipMove from "react-flip-move"

function Timeline() {

    const [posts, setPosts] = useState([])


    useEffect(() => {
        const postData = collection(db, "posts")
        const q = query(postData, orderBy("timestamp", "desc"))
        // getDocs(q).then((QuerySnapshot => {
        //     setPosts(QuerySnapshot.docs.map((doc) => doc.data()))
        // }))

        // リアルタイムでデータを取得
        onSnapshot(q, (QuerySnapshot) => {
            setPosts(QuerySnapshot.docs.map((doc) => doc.data()))
        })

    }, [])

    return (
        <div className='timeline'>
            {/* Header */}
            <div className='timeline__header'>
                <h2>ホーム</h2>
            </div>

            {/* TweetBox */}
            <TweetBox />

            {/* Post */}
            <FlipMove>
                {posts.map((post) => (
                    <Post
                        key={post.txt}
                        displayName={post.displayName}
                        username={post.username}
                        verified={post.verified}
                        text={post.text}
                        avatar={posts.avatar}
                        image={post.image}
                    />

                ))}

            </FlipMove>
        </div>
    )
}

export default Timeline
