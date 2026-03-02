import React, { useState } from 'react'
import Video from './Video'
import { Link } from 'react-router-dom'
import ReadDataForVideos from '../DataBase/ReadDataForVideos'
import BasicLoader from '../Loader/BasicLoader'
import InfiniteScroll from 'react-infinite-scroll-component';

function Videos() {
  const [item, setItem] = useState(1);
  const { loading, error, videos, hasMore } = ReadDataForVideos(item);

  return (
    <InfiniteScroll
      dataLength={videos.length}
      next={() => setItem(item+8)}
      hasMore={hasMore}
      loader={<BasicLoader />}
    >
      <div className='videos'>
        {videos.map((video, index) => (
          <Link to={`/quiz/${video.youtubeID}`} key={`${video.youtubeID}-${index}`}>
            <Video title={video.title} id={video.youtubeID} noq={video.noq} />
         </Link>
))}
        {!loading && videos.length === 0 && <h3>Data Not Found</h3>}
        {error && <h3>Error Detected</h3>}
      </div>
    </InfiniteScroll>
  );
}


export default Videos