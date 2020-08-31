import React from 'react';
import { Link } from 'react-router-dom';

import styles from './PhotoContent.module.css';

import PhotoComments from './PhotoComments';

const PhotoContent = ({ data }) => {
  const { photo, comments } = data;
  return (
    <div className={styles.photo}>
      <img className={styles.img} src={photo.src} alt={photo.title} />
      <div className={styles.details}>
        <div>
          <p className={styles.author}>
            <Link to={`/profile/${photo.author}`}>@{photo.author}</Link>
            <span className={styles.views}>{photo.acessos}</span>
          </p>

          <h1 className='title'>
            <Link to={`/photo/${photo.id}`}>{photo.title}</Link>
          </h1>
          <ul className={styles.attributes}>
            <li>Weight: {photo.peso} kg</li>
            <li>Age: {photo.idade} </li>
          </ul>
        </div>
      </div>
      <PhotoComments id={photo.id} comments={comments} />
    </div>
  );
};

export default PhotoContent;
