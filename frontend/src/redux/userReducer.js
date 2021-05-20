const initialState = {
  user: {},
};

const SET_USER = 'SET_USER';
const UPDATE_USER = 'UPDATE_USER';

export function setUser(userObj) {
  console.log(userObj);
  return {
    type: SET_USER,
    payload: userObj,
  };
}

export function updateUser(userObj) {
  return {
    type: UPDATE_USER,
    payload: userObj,
  };
}

export default function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_USER:
      return { ...state, user: payload };
    case UPDATE_USER:
      return { ...state, user: payload };
    default:
      return state;
  }
}
