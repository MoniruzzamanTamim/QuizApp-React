import React, { useMemo } from 'react'

import successImage from '../assets/images/3.jpg'
import useFetch from '../API/PixelsApi'
import BasicLoader from '../Loader/BasicLoader'

function Summary({score,noq}) {
  const getKeyword = useMemo(() => {
    if ((score / (noq * 5)) * 100 < 50) {
      return "sad";
    } else if ((score / (noq * 5)) * 100 < 75) {
      return "happy";
    } else if ((score / (noq * 5)) * 100 < 100) {
      return "success";
    } else {
      return "celebration";
    }
  }, [score, noq]);

  const { loading, error, result } = useFetch(
    `https://api.pexels.com/v1/search?query=${getKeyword}&per_page=1`,
    "GET",
    {
      Authorization: import.meta.env.VITE_PEXELS_API_KEY,
    }
  );

  const image = result ? result?.photos[0].src.medium : successImage;

  return (
    <div className="summary">
      <div className="point">
        <p className="score">
          Your score is <br />
          {score} out of {noq * 5}
        </p>
      </div>

      {loading && <div className="badge"><BasicLoader/></div>}

      {error && <div className="badge">An error occured!</div>}

      {!loading && !error && (
        <div className='badge'>
          <img src={image} alt="Success" />
        </div>
      )}
    </div>
  );
}

export default Summary