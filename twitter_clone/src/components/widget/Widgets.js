import Search from '@mui/icons-material/Search'
import React from 'react'
import { TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed } from 'react-twitter-embed';
import "./Widgets.css"

function Widgets() {
    return (
        <div className='widgets'>
            <div className='widgets__input'>
                <Search className='widgets__searchIcon' />
                <input placeholder='キーワード検索' type='text' />
            </div>

            <div className='widgets__widgetContainer'>
                <h2>いまどうしてる？</h2>

                {/* ライブラリを追加する */}
                <TwitterTweetEmbed tweetId='1524204040002756608' />

                <TwitterTimelineEmbed
                    sourceType='profile'
                    screenName='_hosimi_'
                    options={{ height: 400 }}
                />

                <TwitterShareButton
                    url='https://twitter.com/_hosimi_'
                    options={{ text: "#React.js勉強中", via: "_hosimi_" }}
                />
            </div>
        </div>
    )
}

export default Widgets
