export const setToken = (token: string) => {
  const date = new Date();
  date.setTime(date.getTime() + 12 * 60 * 60 * 1000);

  document.cookie = 'token' + '=' + token + '; expires=' + date.toUTCString();
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

export const removeCookie = (name: string) => {
  document.cookie = `${name}=; expires=${new Date(Date.now() - 1).toUTCString()}; path=/;`;
};
