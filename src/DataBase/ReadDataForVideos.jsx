import React,{useState,useEffect} from 'react'

import {get,getDatabase,limitToFirst,orderByKey,query,ref, startAfter } from "firebase/database";


function useReadDataForVideos(item) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [videos, setVideos] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    async function fetchVideos() {
      const db = getDatabase();  //Connect Database
      const VideosRef = ref(db, "videos");   //Connect Database Table or Node
      const VideoQuery = query( VideosRef,orderByKey(),startAfter("" + item),limitToFirst(8)); //Database or Node Data Query 


      // Try & catch for Error Handling 
    try {
      setError(false); //Disable Old Error
      setLoading(true); //Loading Set, bcz Database Sync slowly 
      const snapshot = await get(VideoQuery); // Finally Collect Data From Database 
      setLoading(false); // If Data Collect stop Loading 
      // If Collected Data Exits its Store Local State for Use Website 
      if (snapshot.exists()) { 
        setVideos((prevVideos) => {
          return [...prevVideos, ...Object.values(snapshot.val())];
        });
      } else {
        setHasMore(false);
      }
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError(true);
    }
  }

  setTimeout(() => {
     fetchVideos();  
  }, 500);

  // fetchVideos();   // শুধু এখানে call হবে

}, [item]);  // page change হলে run হবে

 return {loading,error,videos,hasMore}
}
export default useReadDataForVideos