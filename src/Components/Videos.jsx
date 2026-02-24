import React, { useState } from 'react'
import Video from './Video'
import { Link } from 'react-router-dom'
import ReadDataForVideos from '../DataBase/ReadDataForVideos'
import BasicLoader from '../Loader/BasicLoader'
import InfiniteScroll from 'react-infinite-scroll-component';

function Videos() {
 const [page, setPage] = useState(1)
  const {loading,error,videos,hasMore} =ReadDataForVideos(page)
 
  
  
  return (

 <>
  {videos.length > 0 &&  <InfiniteScroll
  dataLength={videos.length} //This is important field to render the next data
  next={() => setPage(page+8)}
  hasMore={hasMore}
  loader={ <BasicLoader/> }>

     <div className='videos'>
          { videos.length > 0 && videos.map((video)=>(
            <Video title={video.title} id={video.youtubeID} key={video.youtubeID} noq={video.noq} />
          ))}
           
           {!loading && videos.length === 0 && <h3>Data Not Found</h3> }
           {error &&  <h3>Error Detected</h3>}
           {/* {loading && <BasicLoader/> } */}

        </div>
  </InfiniteScroll>}
    
   
 
 </>
  )
}

export default Videos