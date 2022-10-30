import React from 'react'
import "./Recommendation.css"
import VideoCard from './VideoCard'

function Recommendation() {
  return (
    <div className='recommendedVideos'>
   <h2>Recommended</h2>
   <div className='recommendedVideos_videos'>
     <VideoCard
     title =""
     views =""
     timestamp=""
     channelImage=""
     channel=""
     image =""
     />
     <VideoCard/>
     <VideoCard/>
     <VideoCard/>
   </div>
    </div>
  )
}

export default Recommendation