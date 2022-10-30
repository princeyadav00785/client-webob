import { TuneOutlined } from '@material-ui/icons'
import React from 'react'
import './SearchPage.css'
import ChannelRow from './ChannelRow'
import VideoRow from './VideoRow'

function SearchPage() {
    return (
        <div className='searchPage'>
            <div className='searchPage_filter'>
                <TuneOutlined />
                <h2>
                    FILTER
                </h2>
            </div>
            <hr />
            <ChannelRow
                image=""
                channel=""
                verified
                subs=""
                noOfVideos=""
                description=""
            />
            <hr />
            <VideoRow
                views=""
                subs=""
                description=""
                timestamp=""
                channel=""
                title=""
                image=""
            />
        </div>
    )
}

export default SearchPage