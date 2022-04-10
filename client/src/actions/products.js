import * as api from '../api/index.js';

//action creaters
export const getProduct = (page) => async (dispatch) => {
  try {
    const data = await api.fetchPosts();
    console.log(data);
    dispatch({ type: 'FETCH_ALL', payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createProduct = (post, navigate) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
    dispatch({ type: 'CREATE', data });
  } catch (e) {
    console.log(e);
  }
};
