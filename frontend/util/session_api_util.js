
export const signup = artist => (
  $.ajax({
    url: 'api/artists',
    method: 'POST',
    data: { artist }
  })
);

export const login = artist => (
  $.ajax({
    url: 'api/session',
    method: 'POST',
    data: { artist }
  })
);

export const logout = () => (
  $.ajax({
    url: 'api/session',
    method: 'DELETE'
  })
);
