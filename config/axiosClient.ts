import axios from "axios";

const client = axios.create({
  baseURL: `${process.env.SERVER_URL}/api`,
});

export const axiosClient = () => {
  let headers = {
    "Content-type": "application/json",
  };

  const get = async (url: string, data?: any) => {
    const res = await client.get(url, { headers });
    return res.data;
  };

  // const post = () => {
  //   return client.post(url, data, {headers});
  // }

  // const put = () => {
  //   return client.put(url, data, {headers});
  // }

  // const del = () => {
  //   return client.delete(url, {headers});
  // }

  return {
    get,
  };
};
