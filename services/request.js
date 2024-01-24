import axios from "axios";

export const get = async (URL) => {
  try {
    const response = await axios.get(URL);
    const responseData = response.data;
    return responseData;
  } catch (error) {
    const responseData = error.response.data;
    return responseData;
  }
};

export const post = async (URL, data) => {
  try {
    const response = await axios.post(URL, data);
    const responseData = response.data;
    return responseData;
  } catch (error) {
    const responseData = error.response.data;
    return responseData;
  }
};

export const remove = async (URL) => {
  try {
    const response = await axios.delete(URL);
    return response.data;
  } catch (error) {
    const responseData = error.response.data;
    return responseData;
  }
};

export const patch = async (URL, data) => {
  try {
    const response = await axios.patch(URL, data);
    return response.data;
  } catch (error) {
    const responseData = error.response.data;
    return responseData;
  }
};