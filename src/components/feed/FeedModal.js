import React, { useEffect } from 'react';

import useFetch from '../../hooks/useFetch';
import { PHOTO_GET } from '../../api';
import Error from '../helper/Error';
import Loading from '../helper/Loading';

import styles from './FeedModal.module.css';
import PhotoContent from '../photo/PhotoContent';

const FeedModal = ({ photo, setModalPhoto }) => {
  const { data, error, loading, request } = useFetch();

  useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id);
    request(url, options);
  }, [photo, request]);

  function handleOutsideClick(event) {
    if (event.target === event.currentTarget) {
      setModalPhoto(null);
    }
  }

  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
    </div>
  );
};

export default FeedModal;
