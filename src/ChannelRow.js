import React from 'react'
import './Channel.css'
import {Avatar} from '@material-ui/core';
import VerifiedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';
function ChannelRow({ image,
    channel,
    verified,
    subs,
    noOfVideos,
    description }) {

    return (
        <div className='channelRow'>
            <Avatar classname='channelRow_logo' alt={channel} src={image} />
            <div className='channelRow_text'>
                <h4>
                    {channel}{verified && <VerifiedIcon />}
                </h4>
                <p>{subs} subscribers * {noOfVideos}videos</p>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default ChannelRow