const API_URL = 'https://dogsapi.origamid.dev/json';

export function USER_POST({ username, password, email }) {
  return {
    url: API_URL + '/api/user',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password, email }),
    },
  };
}

export function TOKEN_POST({ username, password }) {
  return {
    url: API_URL + '/jwt-auth/v1/token',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    },
  };
}

export function USER_GET(token) {
  return {
    url: API_URL + '/api/user',
    options: {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  };
}

export function TOKEN_VALIDATE_POST(token) {
  return {
    url: API_URL + '/jwt-auth/v1/token/validate',
    options: {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    },
  };
}

export const PHOTO_POST = (token, formData) => {
  return {
    url: API_URL + '/api/photo',
    options: {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token,
      },
      body: formData,
    },
  };
};

/* 
// query: ?_total=1&_page=1&_user=6
export const PHOTO_GET = {
  endpoint: {
    photos: '/api/photo',
    photos_query: '/api/photo/?_total=9&_page=1&_user=0',
    photo: '/api/photo/:id',
  },
  method: 'GET',
};

export const PHOTO_DELETE = {
  endpoint: '/api/photo/:id',
  method: 'DELETE',
  headers: {
    Authorization: 'Bearer ' + token,
  },
};

export const COMMENT_POST = {
  endpoint: '/api/comment/:id',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + token,
  },
  body: {
    comment: '',
  },
};

export const COMMENT_GET = {
  endpoint: '/api/comment/:id',
  method: 'GET',
};

export const STATS_GET = {
  endpoint: '/api/stats',
  method: 'GET',
  headers: {
    Authorization: 'Bearer TOKEN_AQUI',
  },
};

export const PASSWORD_LOST_POST = {
  endpoint: '/api/password/lost',
  method: 'POST',
  body: {
    login: '',
    url: '',
  },
};

export const PASSWORD_RESET_POST = {
  endpoint: '/api/password/reset',
  method: 'POST',
  body: {
    login: '',
    password: '',
    key: '',
  },
};
 */
