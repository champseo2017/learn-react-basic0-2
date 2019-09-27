export const loadUsers = () => {
  return dispatch => {
    return dispatch(fetchUsers());
  };
};

const fetchUsers = () => {
  return {
    type: "LOAD_USERS",
    payload: fetch("https://jsonplaceholder.typicode.com/users").then(result =>
      result.json()
    )
  };
};

export const loadAlbums = userID => {
  return dispatch => {
    return dispatch(fetchAlbums(userID));
  };
};

const fetchAlbums = userID => {
  return {
    type: "LOAD_ALBUMS",
    payload: fetch(
      `https://jsonplaceholder.typicode.com/albums?userId=${userID}`
    ).then(result => result.json())
  };
};

export const loadPhotos = albumID => {
  return dispatch => {
    return dispatch(fetchPhotos(albumID));
  };
};

const fetchPhotos = albumID => {
  return {
    type: "LOAD_PHOTOS",
    payload: fetch(
      `https://jsonplaceholder.typicode.com/photos?albumId=${albumID}`
    ).then(result => result.json())
  };
};
