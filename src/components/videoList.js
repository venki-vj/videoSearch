import React from 'react';
import VideoItems from './videoItems';



const VideoList =({videos,onVideoSelect})=>{
   const RenderedList= videos.map((video)=>{
        return  <VideoItems 
        key={video.id.videoId}
        onVideoSelect={onVideoSelect} video={video} />
    })

    //props videos
    return (<div className='ui relaxed divided list'>
        {RenderedList}
    </div>)
}
export default VideoList;