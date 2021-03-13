import axios from "axios";

//Teachers
export const allTeachers = () => {
  return axios.get(`/api/teachers`);
};

export const addTeachers = (obj) => {
  return axios.post(`/api/teachers/add`, obj);
};

export const deleteTeachers = (id) => {
  return axios.delete(`/api/teachers/${id}`);
};

export const updateTeachers = (id, obj) => {
  return axios.put(`/api/teachers/${id}`, obj);
};
//Contact Info
export const allcontactinfo = () => {
  return axios.get(`/api/contactinfo`);
};

export const addcontactinfo = (obj) => {
  return axios.post(`/api/contactinfo/add`, obj);
};

export const updatecontactinfo = (id, obj) => {
  return axios.put(`/api/contactinfo/${id}`, obj);
};

//Feedbacks
export const allFeedback = () => {
  return axios.get(`/api/feedback`);
};

export const addFeedback = (obj) => {
  return axios.post(`/api/feedback/add`, obj);
};

export const deleteFeedback = (id) => {
  return axios.delete(`/api/feedback/${id}`);
};
export const updateFeedback = (id, obj) => {
  return axios.put(`/api/feedback/${id}`, obj);
};

// Posts
export const allPosts = () => {
  return axios.get(`/api/post`);
};

export const addPost = (obj) => {
  return axios.post(`/api/post/add`, obj);
};

export const deletePost = (id) => {
  return axios.delete(`/api/post/${id}`);
};

export const updatePost = (id, obj) => {
  return axios.put(`/api/post/${id}`, obj);
};
// Post Categories
export const allCategories = () => {
  return axios.get(`/api/Catagory`);
};

export const addCategory = (obj) => {
  return axios.post(`/api/Catagory/add`, obj);
};

export const deleteCategory = (id) => {
  return axios.delete(`/api/Catagory/${id}`);
};

export const updateCategory = (id, obj) => {
  return axios.put(`/api/Catagory/${id}`, obj);
};
export const getPostPagention = (obj, title) => {
  return axios.post(`/api/post/paginated`, obj, { params: { title } });
};
export const getRecentPosts = () => {
  return axios.get(`/api/post/recentPosts`);
};
