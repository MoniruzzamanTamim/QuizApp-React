import React from 'react'
import Video from './Video'
import { Link } from 'react-router-dom'
import ReadDataForVideos from '../DataBase/ReadDataForVideos'
import BasicLoader from '../Loader/BasicLoader'


function Videos() {

  const {loading,error,videos,hasMore} =ReadDataForVideos(1)
  
  
  return (
    <div className='videos'>
          { videos.length > 0 && videos.map((video)=>(
            <Video title={video.title} id={video.youtubeID} key={video.youtubeID} noq={video.noq} />
          ))}
           
           {!loading && videos.length === 0 && <h3>Data Not Found</h3> }
           {error &&  <h3>Error Detected</h3>}
           {loading && <BasicLoader/> }

        </div>
  )
}

export default Videos