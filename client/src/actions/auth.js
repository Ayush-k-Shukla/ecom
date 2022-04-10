import * as api from '../api/index';

export const signIn = (formData, navigate) => async (dispatch) => {
  try {
    console.log(formData);
    const { data } = await api.signIn(formData);
    dispatch({ type: 'AUTH', data });
    navigate('/');
  } catch (e) {
    console.log(e);
  }
};

export const signUp = (formData, navigate) => async (dispatch) => {
  try {
    console.log(formData);
    const { data } = await api.signUp(formData);
    console.log(data);
    dispatch({ type: 'AUTH', data });
    navigate('/');
  } catch (e) {
    console.log(e);
  }
};
