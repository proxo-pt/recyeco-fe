export const setToken = (token: string | null) => {
  document.cookie = 'token' + '=' + token;
};

export const getCookie = (name: string) => {
  if (typeof document !== 'undefined') {
    const value = '; ' + document.cookie;
    const parts = value.split('; ' + name + '=');
    if (parts.length === 2) {
      return parts.pop()?.split(';').shift();
    }
  }
  return null;
};

export const getToken = () => {
  const token = getCookie('token');
  return token;
};

export const removeCookie = (name: string) => {
  document.cookie = `${name}=; expires=${new Date(Date.now() - 1).toUTCString()}; path=/;`;
};

export const setProfile = (profileData: object) => {
  document.cookie = 'profileData' + '=' + JSON.stringify(profileData);
};
