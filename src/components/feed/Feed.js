import React from 'react';
import FeedModal from './FeedModal';
import FeedPhotos from './FeedPhotos';
import { useState } from 'react';

const Feed = () => {
  const [modalPhoto, setModalPhoto] = useState();
  return (
    <div>
      {modalPhoto && (
        <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />
      )}
      <FeedPhotos setModalPhoto={setModalPhoto} />
    </div>
  );
};

export default Feed;
