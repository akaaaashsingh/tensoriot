import axios from "../utils/Api";

const { REACT_APP_API_URL } = process.env;

export const getLaunches = async () => {
  try {
    const res = await axios({
      method: "get",
      url: `${REACT_APP_API_URL}`,
    });
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};
