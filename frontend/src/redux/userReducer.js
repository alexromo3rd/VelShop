import axios from 'axios';

const initialState = {
  loading: false,
  user: {},
};

const CREATE_USER = 'CREATE_USER';
const SET_USER = 'SET_USER';
const UPDATE_USER = 'UPDATE_USER';
const CLEAR_USER = 'CLEAR_USER';

export function createUser(userObj) {
  return {
    type: SET_USER,
    payload: axios.post('/api/register', userObj),
  };
}

export function setUser(userObj) {
  return {
    type: SET_USER,
    payload: axios.post('/api/login', userObj),
  };
}

export function updateUser(userObj) {
  const { user_id, email, password } = userObj;
  console.log(userObj);

  return {
    type: UPDATE_USER,
    payload: axios.put(`/api/update/${user_id}`, { email, password }),
  };
}

export function clearUser() {
  return {
    type: CLEAR_USER,
    payload: {},
  };
}

export default function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case CREATE_USER + '_PENDING':
      return { ...state, loading: true };
    case CREATE_USER + '_FULFILLED':
      return { ...state, user: payload.data, loading: false };
    case CREATE_USER + '_REJECTED':
      return { ...state, loading: false };
    case SET_USER + '_PENDING':
      return { ...state, loading: true };
    case SET_USER + '_FULFILLED':
      return { ...state, user: payload.data, loading: false };
    case SET_USER + '_REJECTED':
      return { ...state, loading: false };
    case UPDATE_USER + '_PENDING':
      return { ...state, loading: true };
    case UPDATE_USER + '_FULFILLED':
      return { ...state, user: payload.data, loading: false };
    case UPDATE_USER + '_REJECTED':
      return { ...state, loading: false };
    case CLEAR_USER:
      return { ...state, user: payload };
    default:
      return state;
  }
}
