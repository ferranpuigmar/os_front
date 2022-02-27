import { axiosClient } from "../config/axiosClient";

const getPostsService = async () => {
  return await axiosClient().get("/posts");
};

export default getPostsService;
