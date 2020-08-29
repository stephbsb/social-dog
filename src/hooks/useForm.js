import { useState } from 'react';

const types = {
  email: {
    // eslint-disable-next-line no-useless-escape
    regex: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
    message: 'Invalid Email.',
  },
  password: {
    // eslint-disable-next-line no-useless-escape
    regex: /.{8,}/,
    message: 'Password must be at least 8 characters.',
  },
};

const useForm = (type) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState(null);

  function validate(value) {
    if (type === false) return true;
    if (value.length === 0) {
      setError('Required');
      return false;
    } else if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].message);
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function onChange({ target }) {
    setValue(target.value);
    validate(target.value);
  }

  return {
    value,
    onChange,
    error,

    validate: () => validate(value),
    onBlur: () => validate(value),
  };
};

export default useForm;
