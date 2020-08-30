import React from 'react';
import Input from '../../components/form/Input';
import Button from '../../components/form/Button';
import useForm from '../../hooks/useForm';
import useFetch from '../../hooks/useFetch';
import Error from '../helper/Error';
import styles from './UserPhotoPost.module.css';
import { useState } from 'react';
import { PHOTO_POST } from '../../api';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const UserPhotoPost = () => {
  const navigate = useNavigate();
  const nome = useForm();
  const peso = useForm('number');
  const idade = useForm('number');
  const [img, setImg] = useState({});
  const { data, error, loading, request } = useFetch();

  useEffect(() => {
    if (data) {
      navigate('/conta');
    }
  }, [data, navigate]);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();

    formData.append('img', img.raw);
    formData.append('nome', nome.value);
    formData.append('idade', idade.value);
    formData.append('peso', peso.value);

    const token = window.localStorage.getItem('token');
    const { url, options } = PHOTO_POST(formData, token);

    request(url, options);
  }

  function handleImgChange({ target }) {
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    });
  }

  return (
    <section className={`${styles.photoPost} animeLeft`}>
      <form onSubmit={handleSubmit}>
        <Input label='Nome' type='text' name='nome' {...nome} />
        <Input label='Peso' type='number' name='peso' {...peso} />
        <Input label='Idade' type='number' name='idade' {...idade} />
        <input
          className={styles.file}
          type='file'
          name='img'
          id='img'
          onChange={handleImgChange}
        />
        {loading ? <Button disabled>Loading...</Button> : <Button>Send</Button>}
        <Error error={error} />
      </form>
      <div>
        {img.preview && (
          <div
            className={styles.preview}
            style={{ backgroundImage: `url('${img.preview}')` }}
          ></div>
        )}
      </div>
    </section>
  );
};

export default UserPhotoPost;
